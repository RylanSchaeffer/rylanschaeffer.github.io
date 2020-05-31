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

Let $$x \sim p(x)$$ be data, $$\theta$$ be the estimand and $$\hat{\theta}(\dot)$$
be an estimator based on $$x$$. We define the following properties for the 
estimator:

* __Bias__:

$$B(\hat{\theta}) = \mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta$$

* __Variance__:

$$\mathbb{V}_{p(x)} = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \mathbb{E}_{p(x)}[\hat{\theta}(x)])^2]$$

* __Mean Squared Error__:

$$MSE(\hat{\theta}) = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \theta)^2 ] $$

One commonly referenced topic in introductory statistics courses is the so-called
__bias-variance tradeoff__. This tradeoff refers to a compromise that an
estimator needs to make when minimizing its mean squared error from the
estimand. Specifically, we can decompose the MSE into the sum of the variance
and the bias squared:

\begin{align}
MSE(\hat{\theta}) &= \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \theta)^2 ]\\
&= \mathbb{E}_{p(x)}[(\hat{\theta}(x) + \mathbb{E}_{p(x)}[\hat{\theta}(x)] 
- \mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta)^2 ]\\
&= \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \mathbb{E}_{p(x)}[\hat{\theta}(x)])^2]
 + 2  + (\mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta)^2\\
 &= \mathbb{V}_{p(x)} + B(\hat{\theta})^2
\end{align}