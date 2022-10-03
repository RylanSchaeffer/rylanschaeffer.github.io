# Notions of Convergence

## Convergence in Probability

A sequence of random variables $$(X_n)_{n \in \mathbb{N}}$$ __converges in probability__ if $$\forall \epsilon > 0$$

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

## Convergence Almost Surely


A sequence of random variables $(X_n)_{n \in \mathbb{N}}$$ __converges
  almost surely__ if $$\forall \epsilon > 0$$

$$ P(\lim_{n \rightarrow \infty} \lvert X_n - X\lvert < \epsilon) = 1 $$

Convergence almost surely implies convergence in probability.


