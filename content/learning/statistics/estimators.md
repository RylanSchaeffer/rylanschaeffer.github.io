# Estimators

An estimator is a rule for calculating some estimate of a desired quantity
using data. The rule is the __estimator__, the thing to be estimated is the
__estimand__ and the result of applying the rule to data is the __estimate__.

## Properties

Let data $$x \sim p(x)$$, $$\theta$$ be the estimand and $$\hat{\theta}(\dot)$$
be an estimator based on $$x$$. We define the following properties for the
estimator:

### Bias

$$B(\hat{\theta}) = \mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta$$

### Variance

$$\mathbb{V}_{p(x)} = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \mathbb{E}_{p(x)}[\hat{\theta}(x)])^2]$$

### Mean Squared Error

$$MSE(\hat{\theta}(x)) = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \theta)^2 ] $$

## Bias-Variance Tradeoff

One commonly referenced topic in introductory ML courses is a so-called
"bias-variance" tradeoff, which is the fact that the MSE is exactly
the sum of the variance plus the bias squared; consequently, for a given MSE, 
attempting to minimize the variance of an estimator necessary introduces bias and vice
versa. To show why this is, we drop $$x$$ and $$p(x)$$ for brevity:

$$\begin{align}
MSE(\hat{\theta}) &= \mathbb{E}_{p(x)}[(\hat{\theta} - \theta)^2 ]\\
&= \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}]
- \mathbb{E}[\hat{\theta}] - \theta)^2 ]\\
  &= \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}] )^2]
+ 2 \mathbb{E}[(\hat{\theta} + \mathbb{E}[\hat{\theta}] )(\mathbb{E}[\hat{\theta}] - \theta)]
- \mathbb{E}[\hat{\theta}] - \theta)^2 ]\\
  &= \mathbb{V}_{p(x)} + B(\hat{\theta})^2
  \end{align}$$

## Estimator Desiderata

### Consistent

An estimator is consistent if

$$ $$

### Unbiased

An estimator is said to be unbiased if the bias $$B(\hat{\theta}) = 0$$. An unbiased estimator means that
  on average, the estimate $$\hat{\theta}(x)$$ equals the estimand $$\theta$$.

### Efficient

A sequence of


### Minimal Variance