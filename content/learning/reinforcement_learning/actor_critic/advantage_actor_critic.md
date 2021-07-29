# Advantage Actor-Critic

Advantage Actor-Critic (A2C) and its predecessor Asynchronous Advantage Actor-Critic (A3C)
are [actor-critic](introduction.md) agents.

The advantage is a [control variate](../../statistics/variance_reduction.md#control-variate-examples)
for the policy gradient, which is calculated using a Monte Carlo estimate.
