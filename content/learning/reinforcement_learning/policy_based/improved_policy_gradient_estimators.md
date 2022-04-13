# Improved Policy Gradient Estimators

In policy-based RL, the [policy gradient theorem](policy_gradient_theorem.md) is
provides a Monte Carlo gradient estimator that can be used for directly learning a policy.
The policy gradient theorem states that under a policy with parameters $$\theta$$, the
gradient of the expected return $$R(\tau)$$ (where $$\tau := s_1, a_1, r_1, s_2, ...$$ is a trjaectory)
with respect to $$\theta$$ is:

$$
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)]
= \mathbb{E}_{\tau \sim p_{\theta}} \Bigg[ R(\tau) \nabla_{\theta}  \sum_t \nabla_{\theta} \log p_{\theta}(a_t | s_t) \Bigg]
$$

In practice, because the distribution over trajectories is almost never known, we approximate the
right-hand side expectation with a Monte Carlo estimate:

$$\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] \approx \frac{1}{N}\sum_{n} R(\tau^{(n)}) \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) $$

As with an estimator, we want to minimize its variance if possible. Consequently, many techniques
have emerged for creating better gradient estimators.

## Temporal Structure

The return $$R(\tau)$$ is defined as the (optionally discounted) sum of future rewards:

$$R(\tau) := \sum_{t=1}^{T} r_t$$

Plugging this into the estimate of the policy gradient yields:

$$ \frac{1}{N}\sum_{n} \Big(\sum_{t'=1}^{t'=T} r_{t'}^{(n)} \Big) \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) $$

If we consider the causal structure of the agent interacting with its environment, actions cannot
affect rewards from previous timesteps. We can leverage this knowledge to rearrange and drop certain
terms:

$$ \begin{equation}
\frac{1}{N}\sum_{n} \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) \Big(\sum_{t'=t}^{t'=T} r_{t'}^{(n)} \Big)
\end{equation}$$

This policy gradient estimator will have lower variance because fewer 
random variables are included in its sum.

## Control Variates (a.k.a.) Baselines

One well-known family of approaches for improving an estimator is [control variates](../../statistics/variance_reduction.md#control-variates),
more commonly known as _baselines_ in RL. The idea is that by subtracting a particular function from
the return (or return to go), we can further reduce the variance in the policy gradient estimator.
Let $$b: \mathcal{S} \rightarrow \mathbb{R}$$ be a function called the _baseline_, and suppose we subtract
that baseline at each time step:

$$ \begin{equation}
\frac{1}{N}\sum_{n} \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) \Big(-b(s_t^{(n)}) + \sum_{t'=t}^{t'=T} r_{t'}^{(n)} \Big)
\end{equation}$$

To understand why we do this, I claim two facts:

1. Subtracting the baseline introduces no bias i.e. the expectation with and without the baseline is equal
2. Subtracting the baseline reduces the variance in the policy gradient estimator


Claim 1: Subtracting the baseline introduces no bias. To show this, we could show that the expectation of the estimate
with and without the baseline is equal, but it's easier (and equivalent) to show the expectation of the baseline
is 0:

$$
\begin{align*}
\frac{1}{N}\sum_{n} \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) \Big(b(s_t^{(n)}) \Big)
\end{align*}
$$





