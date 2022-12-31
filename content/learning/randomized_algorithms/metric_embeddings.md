# Metric Embeddings

Oftentimes, we have some set with some notion of distances between elements i.e. a [metric space](../functional_analysis/metric_space.md),
and we want to embed that metric space inside another, either for easier analyses or visualization.
For example, we may want to convert a [graph metric space](../functional_analysis/metric_space.md#graph-metric-spaces)
into an [$$\ell_p$$ metric space](../functional_analysis/lp_spaces.md).

## Isometric Embeddings

Given 2 metric spaces $$(X, d_X), (Y, d_Y)$$, a function $$f: X \rightarrow Y$$
is an isometric embedding iff $$\forall x, x' \in X$$:

$$d_Y(f(x), f(x')) = d_X(x, x')$$

Any finite metric space can always bee isometrically embedded into $$\ell_{\infty}$$.
The embedding is as follows: Given $$(X, d)$$, with $$|X| = n$$, define $$f: X \rightarrow \mathbb{R}^n$$
by

$$f(x_i) := [d(x_1, x_i), d(x_2, x_i), ..., d(x_n, x_i)$$

This is called a Frechet embedding, and has the property that $$d(x_, x_j) = d_{\infty}(f(x_i), f(x_j))$$.
However, an isometric embedding to a target metric space doesn't always exist. For instance, a square graph (4 vertices) with edge
weights 1 cannot be embedded into $$\ell_2$$. This raises the prospect of ""low distortion" embeddings.

## Low Distortion Embeddings

Given 2 metric spaces $$(X, d_X), (Y, d_Y)$$, a function $$f: X \rightarrow Y$$
is an embedding of $$X into $$Y $$ with distortion $$\alpha$$ and scaling $$\beta$$ 
if $$\forall x, x' \in X$$:

$$\beta d_X(x, x') \leq d_Y(f(x), f(x')) \leq \alpha \beta d_X(x, x')$$

## Bourgain's Embedding

Given any finite metric space $$(X, d)$$ with $$|X| = n$$, there exists an embedding of 
$$(X, d)$$ into $$(\mathbb{R}^k, d_1)$$ where $$k = O(\log^2 n)$$ (also works for $$\ell_p$$)
with distortion $$O(\log n)$$.

### Algorithm for Bourgain's Embedding

1. For $$i = 1, ..., \log n$$:
   2. For $$j = 1, ..., c \log n$$:
      3. Choose $$S_{i, j} \subseteq X$$ at random such that every $$x \in XX$$ is contained in 
         $$S_{i,j}$$ with probability $$2^{i}$$

Define $$f(x) = [d(x, S_{11}), d(x, S_{12}),..., d(x, S_{\log n, c\log n}),]$$ where
$$d(x, S) = \min_{s \in S} d(x, s)$$

### Intuition for Bourgain's Embedding

In order to show that an embedding is low-distortion, we need to show both that distances don't expand
or contract by too much. Let's first consider expansion. Consider $$f(x) := d_S(x, S)$$ i.e.
the distance from $$x$$ to the point in set $$S$$ nearest $$x$$. This distance has the property of being non-expanding:

$$\forall x, y \in X, ||f_S(x) - f_S(y)|| \leq d(x, y)$$

Thus, Bourgain's Embedding is non-expanding. Next, we argue that Bourgain's Embedding isn't too "shrinking" i.e. that
$$|f_S(x) - f_S(y)| \geq \Delta$$. The argument is going to consist of two parts: First, we're going to assume a particular picture, and argue
that under this particular picture, the embedding isn't too shrinking. Second, we're going to argue that
this particular picture is highly likely.

First, picture a ball around $$x$$ and another ball around $$y$$ with slightly different radii. Call the balls
$$B_x := \{z \in X: d(z, x) \leq \delta \}$$ and $$B_y := \{z \in X: d(z, x) \leq \delta + \Delta\}$$.
Imagine that the set $$S$$ intersects with $$B_x$$ but not with $$B_y$$. In this picture, we know that $$d(x, S) \leq \delta$$,
since $$S$$ intersects $$B_x$$, and we know that $$d(y, S) > \delta + \Delta$$, since $$B_y$$ does not intersect
$$S$$. Consequently:

$$d(y, S)- d(x, S)\geq \delta + \Delta - \delta = \Delta$$

This means that the original distances don't shrink by more than $$\Delta$$. By constructing Bourgain's Embedding 
in the above manner, this picture will turn out to be likely with high probability. The inner loop
over $$j$$ tries to find this good picture, while the outer loop tries to find the right density for $$S$$, 
which depends on $$d(x,y)$$ in the data.

### Formal Proof for Bourgain's Embedding

**Bourgain's Theorem**: Let $$k = c \log^2 n$$ be the number of sets $$S_{ij}$$. Let $$f$$ be Bourgain's embedding.
There exists a constant $$b$$ such that $$\forall x, y \in X$$:

$$\frac{k}{b \log n} d(x, y) \leq |f(x), f(y)|_1 \leq k d(x, y)$$

Proof: Starting with the upper bound, it's enough to show that for every $$S \subset X$$:

$$ |d(x, S) - d(y, S)| \leq d(x, y)$$

If that were true, then:

$$||f(x) - f(y) ||_1 = \sum_{ij} |d(x, S_{ij}) - d(y, S_{ij}) | \leq k d(x, y) $$

The proof is via the triangle inequality. Because the metric $$d$$ must obey the triangle inequality,
the distance from $$x$$ to the nearest element of $$S$$ must be less than the distance from
$$x$$ to $$y$$, then from $$y$$ to the point in $$S$$ nearest to $$x$$. Turning next to the
lower bound, we want to show:

$$\frac{k}{b \log n} d(x, y) \leq ||f(x) - f(y)||_1$$

Recall, in our good situation, $$|d(x, S) - d(y, S)| \geq \Delta$$. We now choose a bunch of 
different $$\delta$$ and show that the good situation occurs with decent probability. Fix $$x, y \in X$$.
Choose $$0 < \delta_1 < \delta_2 < ... $$ such that $$\delta_i$$ is the smallest value such that
$$B(x; \delta_i) := \{ z \in X : d(x, z) \leq \delta \}$$ and $$B(y; \delta_i)$$ both have $$2^i$$ points in them.
We keep choosing $$\delta_i$$ until $$\delta_i < d(x, y) / 3$$. Let $$\delta_{i+1} = d(x, y) / 3$$.
There are two subclaims: $$|d(x, S) - d(y, S)| \geq \delta_{i+1} - \delta_i$$, and that this is decently likely
to produce the nice picture above.

Why is the nice situation decently likely? By definition of $$\delta_{i+1}$$, either $$<2^{i+1}$$ points are
in $$B(x, \delta_{i+1})$$ or the same for $$B(y, \delta_{i+1})$$. WLOG, assume this occurs for $$y$$.
By definition of $$\delta_i$$, $$\geq 2^{i}$$ points live in $$B(x, \delta_i)$$. Since $$\mathbb{P}[x \in S_{ij}] = 2^{-i} \forall x \in X$$
the good situation can be decomposed into the product of the probability that $$B(x, \delta_i)$$ 
intersects with $$S$$ and the probability that $$B(y, \delta_i)$$ does not intersect with $$S$$:

$$\mathbb{P}[\text{good picture}] = \mathbb{P}[B(x) \cap S] \mathbb{P}[B(y) \not \cap S] \geq (1 - (1 - 2^{-i}))^{2_i} (1 - 2^{-i})^{2i+1} \geq 2^{-5}$$

Fix $$i$$. The probability that at least $$2^{-6}$$ of the $$S_{ij}$$ have the "nice" situation is

$$1 - \mathbb{P}[\sum_j^{c \log n} \mathbb{I}[nice] \leq \frac{1}{2} \frac{c \log n}{2^5}] \geq 1 - \exp(-\frac{c log n}{8 2^5}) \geq 1 - n^{-3}$$

if we choose $$c \geq 3 * 2^8$$. Putting it together, we showed that when our nice situation 
occurs, $$|d(x, S) - d(y, S)| \geq \delta_{i+1} - \delta_i$$, and that for each $$i$$, 
the probability that at least $$d \log n / 2^6$$ of the $$S_{ij}$$ have this nice situation
is at least $$1 - n^{-3}$$. Then, by a union bound over all $$n^2$$ pairs $$(x, y)$$ and $$\leq \log n$$
choices of $$i$$, with high probability, $$\forall i, x, y$$, $$\geq c \log n / 2^6 $$ of the $$S_{ij}$$
have $$|d(x, S) - d(y, S)| \geq \delta_{i+1} - \delta_i$$, meaning:

$$
\begin{align*}
||f(x) - f(y) ||_1 \geq \sum_{ij} |d(x, S_{ij}) - d(y, S_{ij})| \geq \sum_{ij} (\frac{c \log n}{2^6}) (\delta_{i+1} - \delta_i)\\
&= \frac{c \log n}{2^6} \delta_{t+1}\\
&= \frac{c \log n}{3 2^6} d(x, y)\\
\end{align*}
$$

Recalling that $$k = c \log^2 n$$, we have

$$||f(x) - f(y) ||_1 \geq \frac{k}{3 2^t \log n} d(x, y)$$


## Johnson-Lindenstrauss Lemma

Bourgain's Embedding says we can embed _any_ metric space into $$\ell_1$$ with distortion $$O(\log n)$$.
One naturally asks next whether a better embedding is possible. In general, the answer is no, but
for more structured metric spaces, the answer is yes. The Johnson-Lindenstrauss (JL) Lemma tells us that if we have $$n$$
points that live in an $$\ell_2$$ space of dimension $$d$$, then we can embed those points into dimension
$$O(\frac{\log n}{\epsilon^2})$$ with distortion $$1 + \epsilon$$. Formally:

**Theorem:** Given $$\epsilon \in (0, 1)$$ and a set $$X \subset \mathbb{R}^d $$ with $$|X| = n$$, there exist a linear
map $$f: \mathbb{R}^d \rightarrow \mathbb{R}^m$$ where $$m = O(\frac{\log n}{\epsilon^2})$$ that embeds
$$(X, d_2)$$ into $$(\mathbb{R}^m, d_2)$$ with distortion $$\leq 1 + \epsilon$$.

Recall, distortion means that if the distance between any two points in the original space is $$\delta$$, 
then in the new space, the distance is $$(1 \pm \epsilon)\delta$$.

Proof: Let $$A \in \mathbb{R}^{m \times d}$$ be a matrix with entries chosen i.i.i. $$\mathcal{N}(0, 1/m)$$.
Define $$f(x)= Ax$$. WLOG, because an isotropic Gaussian is rotationally symmetric, for any two $$x, y$$,
 we can think of $$x - y = ||x - y||_2 e_1$$, where $$e_1$$ is the first canonical basis vector. Our goal 
is to show $$||A (x - y)||_2 = (1 \pm \epsilon) ||x - y|| \Leftrightarrow ||A e_1|| = (1 \pm \epsilon)$$.

Now, we just need to consider the first column of $$A$$ in our rotated system. We can use a Chernoff-style claim:
If $$Z_1, ..., Z_m \sim N(0, 1)$$, then $$\mathbb{P}[\sum Z_i^2 > (1+\epislon)m] \leq \exp(- m \epsilon^2 / 8)$$.
Thus, for any pair $$x, y$$, the probability $$A(x -y)$$ is distorted by $$\epsilon$$ decays exponentially
in $$\epsilon$$. By a union bound, we have:

$$ \mathbb{P}[\exists x, y \in X s.t. ||A (x-y)||_2 \geq (1+\epsilon) ||x - y||_2] \leq n^2 \exp(-m\epsilon^2/8)$$

Choose $$m = O(\log(n)/\epsilon^2)$$ and we're good. A similar argument holds for the lower bound $$1-\epsilon$$.