# Better Policy Gradient Estimators

In policy-based RL, the [policy gradient theorem](policy_gradient_theorem.md) is
the mathematical result that allows for directly learning a policy. However, in most cases,
the distribution over trajectories is unknown, and so we must use a Monte Carlo estimator
of the gradient. Consequently, many techniques have emerged for creating better 
gradient estimators.

## Temporal Structure

## Variance Reduction

One well-known family of approaches for improving an estimator is [reducing the variance of the
estimator](../../statistics/variance_reduction.md). There are a couple of techniques to accomplish
this.

### Baselines

One technique 