# Probability

## Parametric Distributions

Many common distributions depend on specific parameters. Parameters are frequently
classified into one of several possible types:

- location parameter: shifts the distribution e.g. Gaussian mean
- scale (inverse rate): stretches/squeezes the distribution e.g. Laplace diversity
- shape: changes the shape e.g. Beta $$\alpha, \beta$$

Some common discrete, continuous and special parametric distributions are:

### Discrete Distributions
- Bernoulli
- Beta-Bernoulli  
- [Binomial](probability/binomial_distribution.md)
- [Logarithmic](probability/logarithmic_distribution.md)
- [Poisson](probability/poisson_distribution.md)

### Continuous Distributions
- [Beta](probability/beta_distribution.md)
- [Cauchy](probability/cauchy_distribution.md)
- Continuous Bernoulli
- [Exponential](probability/exponential_distribution.md)  
- [Kumaraswamy](probability/kumaraswamy_distribution.md)
- Gamma
- [Normal/Gaussian](probability/normal_distribution.md)

### Classes of Distribution
- Elliptical Distributions
- [Exponential Family Distributions](probability/exponential_family_distributions.md)
- Levy-Stable Distributions
- Location-Scale Distributions

## Probability Theory
- [Probability Space](probability/probability_space.md)
- [Probability Measure](probability/probability_measure.md)
- [$$\sigma$$-Algebra](probability/sigma_algebra.md)
- [Random Variables](probability/random_variables.md)

## Distances and Divergences

Probability distances and divergences have [commonly encountered properties](probability/distance_divergence_properties.md). 
Some common probability distances and divergences are

- [Cramer Distance](probability/cramer_distance.md)
- Jensen-Shannon Divergence  
- [Kullback-Leibler Divergence](probability/kullback_leibler_divergence.md)
- Total Variation Distance
- [Wasserstein Distance](probability/wasserstein_distance.md)



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

