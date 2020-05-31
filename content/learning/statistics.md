# Statistics

## Estimators

An estimator is a rule for calculating some estimate on a desired quantity
using data. The rule is the __estimator__, the quantity of interest is the
__estimand__ and the result of applying the rule to data is the __estimate__.

### Esimator Properties

Let $x \sim p(x)$ be data, $\theta$ be the estimand and $\hat{\theta}(\dot)$
be an estimator based on $x$. We define the following properties for the 
estimator:

* __Bias__:

$$\mathbb{B}(\hat{\theta}) = \mathbb{E}_{p(x)}[\hat{\theta}(x)] - \theta$$

* __Variance__:

$$\mathbb{V}_{p(x)} = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \mathbb{E}_{p(x)}[\hat{\theta}(x)])^2]$$

* __Mean Squared Error__:

$$MSE(\hat{\theta}) = \mathbb{E}_{p(x)}[(\hat{\theta}(x) - \theta)^2 ] $$

