# Score Function

The score function is the gradient of the log likelihood with respect to the parameters.

$$\nabla_{\theta} \log p(x | \theta)$$

## Properties

## Applications

### Reinforcement Learning

In policy-based RL, we [need to compute the score](../reinforcement_learning/policy_based/policy_gradient_theorem.md)
to update the policy's parameters. For instance, suppose the policy is a Categorical defined as:

$$p(a | s, \theta) := \exp(\phi(s, a)^T \theta) / \sum_{a'} \exp(\phi(s, a')^T \theta)$$

Then the score is:

$$
\begin{align}
\nabla_{\theta} \log p(a | s, \theta) &= \phi(s, a) - \nabla_{\theta} \log \sum_{a'} \exp(\phi(s, a')^T \theta)\\
&=\phi(s, a) - \Big( \sum_{a'} \exp(\phi(s, a')^T \theta) \Big)^{-1} \sum_{a} \exp(\phi(s, a')^T \theta) \phi(s, a)\\
&= \phi(s, a) - \sum_{a'} p(a | s, \theta)\phi(s, a)
\end{align}
$$

For a second example, suppose the policy is a Gaussian with mean $$\mu(s) = \phi(s)^T \theta$$ and with fixed variance:

$$p(a | s, \theta) \propto \exp(-\frac{1}{2\sigma^2} (a - \mu(s))^T (a - \mu(s))) $$

Then the score is:

$$
\begin{align}
\nabla_{\theta} \log p(a | s, \theta) &= \frac{a - \mu(s)}{\sigma^2} \phi(s)
\end{align}
$$
