# Variance Reduction

In statistical estimation, we frequently want to minimize the variance of an
estimator without introducing bias. Why? One answer is that because it lowers
the overall mean-squared error (see [bias-variance tradeoff](estimators.md#bias-variance-tradeoff)).
Another answer is that minimizing variance means there's less uncertainty in the estimate. 
There are several techniques to take an estimator and construct a new estimator 
with variance at least as low (if not lower) than the original estimator
without introducing bias.

## Control Variates

The high-level idea behind a control variate is that we can reduce the variance of
an estimator by predicting what the estimate will be and subtracting that prediction.
The variance will then be between the estimand and our prediction,


Suppose we want to estimate 
the expected value of some scalar function $f(x)$ under the distribution $$x \sim p(x)$$:

$$\mathbb{E}_x[f(x)]$$

using a Monte Carlo estimator using data $$\{x_n\}_{n=1}^N$$:

$$\frac{1}{N} \sum_{n=1}^N f(x_n)$$

The variance of this estimator is given by

$$\mathbb{V}\Big[\frac{1}{N} \sum_{n=1}^N f(x_n)\Big] = \frac{1}{N^2} \sum_{n=1}^N \mathbb{V}[f(x_n)] = \frac{1}{N}\mathbb{V}[f(x)]$$

Our goal is to define a new estimator with provably lower variance. To do this, we introduce
a new scalar function $$h(x)$$ called the __control variate__, and a scalar variable $$\beta$$.
Using both, we define a surrogate function:

$$\tilde{f}(x) = f(x) - \beta (h(x) - \mathbb{E}_x[h(x)])$$

The $$-\mathbb{E}_x[h(x)]$$ term ensures that the control variate
doesn't introduce any bias, regardless of our choices for $$\beta$$ and $$h(x)$$. We can check
that by taking the expectation of the surrogate function. 

$$
\begin{align*}
\mathbb{E}_x[\tilde{f}(x)]
&= \mathbb{E}_x \Big[f(x) - \beta (h(x) - \mathbb{E}_x[h(x)]) \Big]\\
&= \mathbb{E}_x [f(x)] - \beta (\mathbb{E}_x[h(x)] - \mathbb{E}_x[h(x)])\\
&= \mathbb{E}_x[f(x)]
\end{align*}
$$

An estimator that uses the control variate is called the __control variate estimator__.
Assuming the original estimator is unbiased, the control variate estimator will also be unbiased.
The advantage of the surrogate function is that if we correctly choose $$h(x)$$
and $$\beta$$, the variance of the control variate estimator will be lower than the variance 
for the original estimator. Dropping $$x$$ for brevity, we see that

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


Then, minimizing with respect to $$\beta$$ by differentiating and setting equal to 0,
we find that the value $$\beta*$$ that minimizes the variance of the control variance estimator is

$$
0 = -2 \, \mathbb{Cov}[f, h] + 2 \beta^* \mathbb{V}[h] \Rightarrow \beta^* = \frac{\mathbb{Cov}[f, h]}{\mathbb{V}[h]}
\beta^* = \mathbb{Corr}[f, h] \sqrt{\frac{\mathbb{V}[f]}{\mathbb{V}[h]}}
$$

Using our newfound value of $$\beta^*$$, we can compare the variance of the surrogate
function $$\tilde{f}(x)$$ to the variance of the original function $$f(x)$$:

$$
\begin{align*}
\mathbb{V}[\tilde{f}(x)]
&= \mathbb{V}[f] - 2 \beta^* \mathbb{Cov} [f, h] + \beta^{*2} \mathbb{V}[h]\\
&= \mathbb{V}[f] - 2 \frac{\mathbb{Cov}[f, h]}{\mathbb{V}[h]} \mathbb{Cov} [f, h] + \frac{\mathbb{Cov}[f, h]^2}{\mathbb{V}[h]^2} \mathbb{V}[h]\\
&= \mathbb{V}[f] - \frac{\mathbb{Cov}[f, h]^2}{\mathbb{V}[h]}
\end{align*}
$$

Since the variance of any variable is non-negative, $$\mathbb{V}[h]$$
will be positive, meaning as long as $$h(x)$$ has positive covariance with $$f(x)$$, then the
variance of our control variate estimator will be less than the variance of the original
estimator. If we know $$f(x)$$ exactly, then we would expect the control variate estimator
to have zero variance, and indeed, we see that setting $$h(x) = f(x)$$ delivers 0 variance.

### Control Variate Examples 

One application of control variate estimators is with the 
[policy gradient theorem](../reinforcement_learning/policy_based/policy_gradient_theorem.md),
which is a Monte Carlo estimator of the gradient. To reduce the variance of this estimator,
the agent can learn a so-called "baseline" (typically, the advantage function). This
is used in algorthms like [A3C](../reinforcement_learning/actor_critic/).

### Antithetic Variates

TODO (https://en.wikipedia.org/wiki/Antithetic_variates)


### Rao-Blackwellization 