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

