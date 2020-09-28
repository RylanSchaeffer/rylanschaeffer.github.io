# Probability

## Probability Spaces
-----

A __probability space__ is a 3-tuple consisting of a set $$X$$, a $$\sigma$$-algebra
and a probability measure $$P$$. A collection $$C$$ of subsets of set $$X$$ is
called a __$$\sigma$$-algebra__ on $$X$$ if

1. X belongs to C i.e $$X \in C$$
2. C is closed under complementation. That is, if $$c \in C$$, then $$\overline{c}
:= X \ c \in C$$
3. C is closed under countable unions. That is, if $$c_1, c_2, ... \in C$$, then 
$$\cup_{i=1}^{\infty} c_i \in C$$

Relatedly, a function $$P: C \rightarrow [0, 1]$$ is a probability measure on $$C$$ if

1. $$P$$ is normalized i.e. $$P(X) = 1$$
2. $$P$$ is $$\sigma$$-additive i.e. P(\cup_{i=1}^{\infty} c_i) = 
\sum_{i=1}^{\infty} P(c_i)$$ 

## Random Variables
-----

At the heart of probability is the notion of a _random variable_. Intuitively, a random variable
is a variable whose value depends on the outcome of some random process (e.g. a coin flip). 

### Independence

Two random variables are __independent__ if their joint probability is equal to the product
of the marginal probabilities:

$$P(A, B) = P(A) P(B)$$

If $$A, B$$ are independent, then so are the following:

$$
\begin{align*}
P(A, B^c) &= P(A) - P(A, B)\\
&= P(A) - P(A) P(B)\\
&= P(A)(1 - P(B))\\
&= P(A) P(B^c)\\
P(A^c, B) &= P(B) - P(A, B)\\
&= P(B)(1 - P(A))\\
&= P(B)P(A^c)\\
P(A^c, B^c) &= P(A^c) - P(A^c, B^c)\\
&= P(A^c) - P(A^c)P(B)\\
&= P(A^c)(1 - P(B))\\
&= P(A^c)P(B^c)
\end{align*}
$$


### Probability Integral Transform

__Theorem__: For any random variable $$X$$, its CDF $$F_X(x)$$
is distributed uniformly over $$(0,1)$$. That is, if we define $$Y = F_X(x)$$,
then $$Y \sim \mathcal{U}(0,1)$$.

<details>
<summary>Proof:</summary>

$$
\begin{align*}
P(Y \leq y) &= P(F_X(x) \leq y)\\
&= P(x \leq F_X^{-1}(y))\\
&= F_X(F_X^{-1}(y))\\
&= y
\end{align*}

Since only $$\mathcal{U}(0,1)$$ has a CDF $$F_Y(y) = P(Y \leq 
y) = y$$, we conclude that $$Y$$ is distributed uniformly.

</details>


## Probability Distributions

### Cauchy Distribution

- Density: $$ p(x \lvert x_0, \gamma) = \frac{1}{\pi} \frac{1}{1 + (\frac{x - x_0}{\gamma})^2}$$

The density is properly normalized:

$$\int_{\mathbb{R}} p(x \lvert x_0, \gamma) dx = \frac{1}{\pi} \tan^{-1} (\frac{x - x_0}{\gamma})
\big\lvert_{-\infty}^{\infty} = \frac{1}{\pi}(\pi / 2 + \pi/2) = 1$$

- Mean: Undefined

To see why, consider $$\frac{1}{\pi} \int_{\mathbb{R}} \frac{x}{1+x^2} dx = \frac{2}{\pi}
\int_0^{\infty} \frac{x}{1+x^2} dx = \frac{1}{\pi} \lim_{x \rightarrow \infty} \log(1 + x^2)$$

- Variance: Undefined


## Inequalities

### Chebychev's Inequality

Let $$X$$ be a random variable and let $$g(x)>0$$. Then $$\forall r > 0$$,

$$P(g(x) \geq r) \leq \frac{\mathbb{E}_x[g(x)]}{r}$$

<details>
<summary>Proof</summary>
$$
\begin{align*}
\mathbb{E}_x[g(x)] &= \int_x g(x) p(x) dx\\
&\geq \int_{x: g(x) \geq r} g(x) p(x) dx\\
&\geq r \int_{x: g(x) \geq r} p(x) dx\\
&= r P(g(x) \geq r)
\end{align*}
$$

</details>

## Notions of Convergence

- Convergence in Probability: A sequence of random variables $$(X_i)_{i \in \mathbb{N}}$$ __converges
in probability__ if $$\forall \epsilon > 0$$

$$\lim_{n \rightarrow \infty} P(\lvert X_n - X\lvert < \epsilon) = 1 $$

The __Weak Law of Large Numbers__ states that if the set of random variables $$\{X_i\}_{i=1}^N$$ are 
i.i.d. with $$\mathbb{E}_X[X_i] = \mu < \infty$$ and $$\mathbb{V}_X[X_i] = \sigma^2 < \infty$$,
then the sample mean $$\frac{1}{N} \sum_{i=1}^N X_i$$ converges in probability to the expected value.

<details>

<summary>Proof:</summary>

Use [Chebyshev's Inequality](#chebychevs-inequality):

$$
\begin{align*}
P(\lvert\bar{X}_n - \mu\lvert \geq \epsilon )
&= P(\lvert\bar{X}_n - \mu\lvert^2 \geq \epsilon^2 )\\
&\leq \frac{\mathbb{E}_x[(\bar{X}_n - \mu)^2]}{\epsilon^2}\\
&= \mathbb{V}_x[\bar{X}] / \epsilon^2\\
&= \sigma^2 / n \epsilon^2
\end{align*}
$$ 

Then, taking the limit as $$n \rightarrow \infty$$:

$$ \lim{n \rightarrow \infty} P(\lvert\bar{X}_n - \mu\lvert < \epsilon) < 
1 - \lim_{n \rightarrow \infty} \frac{\sigma^2}{n \epsilon^2} = 1$$ 

</details>


- Convergence Almost Surely:  A sequence of random variables $(X_i)_{i \in \mathbb{N}}$$ __converges
almost surely__ if $$\forall \epsilon > 0$$
                             
$$ P(\lim_{n \rightarrow \infty} \lvert X_n - X\lvert < \epsilon) = 1 $$

Convergence almost surely implies convergence in probability.

## Probability Distributions
-----

## Parametric Probability Distributions
-----

Parameters are frequently classified into one of several possible types: 

- location parameter: shifts the distribution e.g. Gaussian mean
- scale (inverse rate): stretches/squeezes the distribution e.g. Laplace diversity
- shape: changes the shape e.g. Beta $$\alpha, \beta$$

### Beta Distribution

The Beta distribution is a two-parameter continuous distribution over the interval $$[0, 1]$$.
Its density is  

$$p(x; \alpha, \beta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) \Gamma(\beta)} x^{\alpha-1} (1-x)^{\beta-1}$$



### Dirichlet Distribution

### Normal (Gaussian) Distribution

Classic Form: $$p(x\lvert \mu, \Sigma) = \frac{1}{\sqrt{2 \pi \det{\Sigma}}} \exp \Big(
-\frac{1}{2}(x- \mu)^T \Sigma^{-1} (x - \mu) \Big)$$

Information Form: Define $$J = \Sigma^{-1}$$ and $$h = J \mu$$. Then

$$p(x\lvert \mu, \Sigma) \propto \exp \Big(-\frac{1}{2} x^T J x + x^T h \Big)$$

Linear Form: $$x \sim \mathcal{N}(\mu, Sigma)$$ if $$\exists A \in \mathbb{R}^{N \times N}$$
and $$b \in \mathbb{R}^N$$ such that $$x = Au + b$$ where $$u \sim \mathcal{N}(0, I)$$.
Specifically, $$\mu = b$$ and $$\Sigma = A A^T$$.

#### Properties

Let $$(X, Y) \sim \mathcal{N}(\begin{bmatrix} \mu_x \\ \mu_y \end{bmatrix}, \begin{bmatrix}
 \Sigma_{xx} & \Sigma_{xy} \\ \Sigma_{xy} & \Sigma_{yy}\end{bmatrix})$$, or equivalently,
 $$(X, Y) \sim \mathcal{N}^{-1}(\begin{bmatrix} h_x \\ h_y \end{bmatrix}, \begin{bmatrix}
  J_{xx} & J_{xy} \\ J_{xy} & J_{yy}\end{bmatrix})$$. Then

- Closed under marginalization

$$X \sim \mathcal{N}(\mu_x, \Sigma_{xx})$$

- Closed under conditioning

$$Y \lvert X \sim \mathcal{N}(h_y - J_{yx} x , J_{yy})$$

Proof: 

$$
\begin{align*}
p(y\lvert x) &\propto \exp \Big(-\frac{1}{2} \begin{bmatrix} x \\ y \end{bmatrix}^T J 
\begin{bmatrix} x \\ y \end{bmatrix} + \begin{bmatrix} x \\ y \end{bmatrix}^T \begin{bmatrix} h_x \\ h_y \end{bmatrix} \Big)\\
&\propto \exp \Big(-\frac{1}{2} y^T J_{yy} y + (h_y - J_{yx} x)^T y \Big)
\end{align*}
$$

Note that covariance/precision doesn't depend on the conditioned variable. Also the mean is determined
by an affine transformation of conditioned variance.

- Suppose $$x_i, x_j$$ are jointly Gaussian. $$x_i \perp x_j \Leftrightarrow \Sigma_{i,j}$$.

- Suppose $$x_i, x_j, x_k$$ are jointly Gaussian. In general, $$x_i \perp x_j, x_j \perp x_k$$
does not imply $$x_i \perp x_k$$, but this does hold for Gaussians. 

- $$\forall i \neq j \neq k, \quad x_i \perp x_j \lvert x_k \Leftrightarrow J_{ij} = 0$$

## Exponential Family Distributions
-----

Many parametric distributions can be written in a similar form. This family of distributions
is called the exponential family and has the form

$$p(x; \theta) = \frac{1}{Z(\theta)} h(x) \exp (\eta(\theta)^T T(x))$$

where $$\eta(\theta)$$ are the natural parameters, $$T(x)$$ are the sufficient statistics
and $$Z(\theta)$$ is a normalization constant.




## Divergence Measures
-----

### Kullback-Leibler Divergence

$$KL(p, q) = \int dx p(x) \log \frac{p(x)}{q(x)} = - \int dx p(x) \log \frac{q(x)}{p(x)}$$ 

## Distance Measures
-----

### Wasserstein Distance

The Wasserstein distance is a way of quantifying the distance between probability distributions
on a metric space. Suppose $$P(x), Q(x)$$ are two cumulative distributions functions of the 
real random variable $$X$$. The Wasserstein metric is defined as 

$$W_p(P,Q) = \Big(\int_0^1 du \lvertP^{-1}(u) - Q^{-1}(u)\lvert^p \Big)^{1/p}$$

Visually

### Cramer Distance

Like the Wasserstein distance, the Cramer distance is a way of quantifying the distance 
between probability distributions on a metric space. If $$P(x), Q(x)$$ are two cumulative
distributions of the real random variable $$X$$, then the Cramer distance is defined as

$$C_p(P, Q) = \Big(\int_{-\infty}^{\infty} \lvertP(x) - Q(x)\lvert^p \Big)^{1/p} $$

When $$p=1$$, the Wasserstein distance and the Cramer distance agree. Visually, if we picture
$$X$$ on the abscissa and the CDF on the ordinate, then the Wasserstein distance is the sum
over horizontal slices, sweeping vertically, whereas the Cramer distance is the sum over 
vertical slices, sweeping horizontally.

## Properties for Distances / Divergences

[Bellemare et al 2017](https://arxiv.org/abs/1705.10743) introduce several properties of 
distances that might be desirable.

- Scale Sensitive: A distance $$d(\cdot, \cdot)$$ is scale sensitive if $$\exists \beta >0$$
such that $$\forall X, Y, c>0$$

$$d(cX, cY) \leq \lvertc\lvert^{\beta} d(X, Y)$$

Intuitively, this just means that scaling the arguments by $$c$$ scales the distance by $$c$$,
possibly to some power.

- Sum Invariant: A distance $$d(\cdot, \cdot)$$ is sum invariant if for $$A$$ independent of
$$X, Y$$, we have

$$d(X+A, Y+A) \leq d(X, Y)$$

Intuitively, this means a constant shift of both $$X, Y$$ doesn't change the distance between
them.