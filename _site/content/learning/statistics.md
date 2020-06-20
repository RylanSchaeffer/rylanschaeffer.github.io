# Statistics

__Notation__: I was schooled using the statistician notation 
$$\mathbb{E}_{p(x)}[f(x)]$$ to denote the expected value of $$f(x)$$ with 
respect to the density $$p(x)$$. More recently, I've picked up the physicist
notation $$\langle f(x) \rangle_x$$. I may move interchangably between the two.

## Estimators

An estimator is a rule for calculating some estimate on a desired quantity
using data. The rule is the __estimator__, the quantity of interest is the
__estimand__ and the result of applying the rule to data is the __estimate__.

### Esimator Properties

Let data $$x \sim p(x)$$, $$\theta$$ be the estimand and $$\hat{\theta}(\dot)$$
be an estimator based on $$x$$. We define the following properties for the 
estimator:

* __Bias__:

$$B(\hat{\theta}) = \mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta$$

* __Variance__:

$$\mathbb{V}_{p(x)} = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \mathbb{E}_{p(x)}[\hat{\theta}(x)])^2]$$

* __Mean Squared Error__:

$$MSE(\hat{\theta}(x)) = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \theta)^2 ] $$

One commonly referenced topic in introductory statistics courses is a tradeoff
any estimator must consider to minimizing its mean squared error from the
estimand, the so-called __bias-variance tradeoff__. Specifically, the MSE is
the sum of the variance plus the bias squared. Dropping $$x$$ and $$p(x)$$ 
for brevity:

$$\begin{align}
MSE(\hat{\theta}) &= \mathbb{E}_{p(x)}[(\hat{\theta} - \theta)^2 ]\\
&= \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}] 
- \mathbb{E}[\hat{\theta}] - \theta)^2 ]\\
&= \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}] )^2]
+ 2 \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}] )(\mathbb{E}[\hat{\theta}] - \theta)]
- \mathbb{E}[\hat{\theta}] - \theta)^2 ]\\
 &= \mathbb{V}_{p(x)} + B(\hat{\theta})^2
\end{align}$$

### Estimator Desiderata

* Consistent: A sequence of esimators is consistent if 

$$ $$

* Unbiased: The estimator's bias $$B(\hat{\theta}) = 0$$. An unbiased estimator means that 
on average, the estimator $$\hat{\theta}(x)$$ equals the estimand $$\theta$$.

* Efficient: 

A sequence of 

## Variance Reduction

In statistical estimation, we frequently want to minimize the variance of an 
estimator without introducing bias. Techniques exist to take an estimator and
construct a new estimator with variance at least as low (if not lower) than
the original estimator.

### Control Variates

The high-level idea behind a control variate is that we can reduce the variance of
an estimator $\hat{\theta}(\cdot)$ by predicting 


<p>
  Using a control variate is one technique for reducing the variance of an estimator.
  Suppose we want to estimate
  the expected value of some scalar function $f(x)$ under the distribution $x \sim p(x)$:

  $$\mathbb{E}_x[f(x)]$$

  We can reduce the variance of an estimator by
  introducing a new function, $h(x)$, called the control variate, and a
  scalar variable $\beta$. Using both, we define a surrogate function:

  $$\tilde{f}(x) = f(x) - \beta (h(x) - \mathbb{E}_x[h(x)])$$

  An estimator that estimates the expected value of this surrogate function is called
  the control variate estimator.
  If this looks like constrained optimization using Lagrange multipliers, that's
  because this is exactly what a control variate does. First, let's demonstrate that
  regardless of $\beta$ and $h(x)$, the new surrogate function $\tilde{f}(x)$ has the
  same expectation as the original function $f(x)$. This is because we subtracted the expected
  value of the control variate $h(x)$.

  $$
  \begin{align*}
  \mathbb{E}_x[\tilde{f}(x)]
  &= \mathbb{E}_x \Big[f(x) - \beta (h(x) - \mathbb{E}_x[h(x)]) \Big]\\
  &= \mathbb{E}_x [f(x)] - \beta (\mathbb{E}_x[h(x)] - \mathbb{E}_x[h(x)])\\
  &= \mathbb{E}_x[f(x)]
  \end{align*}
  $$

  The advantage of the surrogate function is that if we correctly choose $h(x)$
  and $\beta$, the variance of the surrogate
  function will be lower than the variance for the original
  function $f(x)$. Dropping $x$ for brevity, we see that

  $$
  \begin{align*}
  \mathbb{V}[\tilde{f}(x)]
  &= \mathbb{V} \Big[f - \beta (h - \mathbb{E}_x[h]) \Big]\\
  &= \mathbb{E} [(f - \beta(h - \mathbb{E}[h]))^2] - \mathbb{E}[f - \beta(h - \mathbb{E}[h])]^2\\
  &= \mathbb{E} [f^2 - 2 \beta f (h - \mathbb{E}[h]) + \beta^2 (h - \mathbb{E}[h])^2] - \mathbb{E}[f]^2\\
  &= \mathbb{E} [f^2] - \mathbb{E} [f]^2 - 2 \beta \mathbb{E} [f (h - \mathbb{E}[h])] + \beta^2 \mathbb{V}[h]\\
  &= \mathbb{V}[f] - 2 \beta \mathbb{E} [f (h - \mathbb{E}[h])] + \beta^2 \mathbb{V}[h]\\
  &= \mathbb{V}[f] - 2 \beta \mathbb{Cov} [f, h] + \beta^2 \mathbb{V}[h]
  \end{align*}
  $$

  where the last line follows because

  $$\mathbb{E} [\mathbb{E}[f] (h - \mathbb{E}[h])] =
  \mathbb{E}[f] (\mathbb{E}[h] - \mathbb{E}[h]) = 0$$

  and thus

  $$\mathbb{E} [f (h - \mathbb{E}[h])] = \mathbb{E} [(f - \mathbb{E}[f]) (h - \mathbb{E}[h])] = \mathbb{Cov} [f, h]$$.
</p>

<p>

  Then, minimizing with respect to $\beta$ by differentiating and setting equal to 0,
  we find that the optimal value $\beta*$ is

  $$
  0 = -2 \, \mathbb{Cov}[f, h] + 2 \beta^* \mathbb{V}[h] \Rightarrow \beta^* = \frac{\mathbb{Cov}[f, h]}{\mathbb{V}[h]}
  = \mathbb{Corr}[f, h] \sqrt{\frac{\mathbb{V}[f]}{\mathbb{V}[h]}}
  $$

  Using our newfound value of $\beta^*$, we can compare the variance of the surrogate
  function $\tilde{f}(x)$ to the variance of the original function $f(x)$:

  $$
  \begin{align*}
  \mathbb{V}[\tilde{f}(x)]
  &= \mathbb{V}[f] - 2 \beta^* \mathbb{Cov} [f, h] + \beta^{*2} \mathbb{V}[h]\\
  &= \mathbb{V}[f] - 2 \frac{\mathbb{Cov}[f, h]}{\mathbb{V}[h]} \mathbb{Cov} [f, h] + \frac{\mathbb{Cov}[f, h]^2}{\mathbb{V}[h]^2} \mathbb{V}[h]\\
  &= \mathbb{V}[f] - \frac{\mathbb{Cov}[f, h]^2}{\mathbb{V}[h]}
  \end{align*}
  $$

  This shows something super important! Since the variance of any variable is positive, $\mathbb{V}[h]$
  will be positive, meaning as long as $h(x)$ has positive covariance with $f(x)$, then the
  variance of our control variate estimator will be less than the variance of the original
  estimator. If we know $f(x)$ exactly, then we would expect the control variate estimator
  to have zero variance, and indeed, we see that setting $h(x) = f(x)$ delivers 0 variance.
</p>

<p>
  One common application of control variate estimators is in
  <a href="reinforcement_learning.html#policy_based_rl">policy-based reinforcement learning</a>.
  Both REINFORCE and the <a href="reinforcement_learning.html#policy_gradient_derivation">policy gradient theorem</a>
  can be viewed as using control variate estimators for the agent's return.
</p>

### Antithetic Variates

TODO (https://en.wikipedia.org/wiki/Antithetic_variates)


### Rao-Blackwellization 