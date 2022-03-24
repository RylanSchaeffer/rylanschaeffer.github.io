# Log Derivative Trick

A very simple property from calculus appears frequently in machine
learning, statistics, reinforcement learning and other fields. It is the statement
that for any function $$f(x)$$, the following equality holds:

$$\nabla_x f(x) = f(x) \nabla_x \log f(x) $$

## Derivation

The chain rule tells us that for any function $$f(x)$$:

$$\nabla_x \log f(x) = \frac{1}{f(x)} \nabla_x f(x)$$

Rearranging, we obtain the desired equality:

$$f(x) \nabla_x \log f(x) = \nabla_x f(x)$$

## Applications

### Policy Gradient Theorem

In [reinforcement learning](../reinforcement_learning.md), policy-based RL relies on the
[policy-gradient theorem](../reinforcement_learning/policy_based/policy_gradient_theorem.md),
which uses the log derivative trick.
