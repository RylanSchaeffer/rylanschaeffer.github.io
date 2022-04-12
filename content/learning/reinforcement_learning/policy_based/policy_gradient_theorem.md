# Policy Gradient Theorem

The Policy Gradient (PG) Theorem is the mathematical machinery of policy-based and 
[actor-critic](../actor_critic/introduction.md) 
[reinforcement learning](../../reinforcement_learning.md) agents. It provides a mechanism 
for an agent to directly optimize its policy without learning a state-action value function.

## Derivation

Define an agent's trajectory as the sequence of states,
actions and rewards the agent experiences:

$$\tau := (s_1, a_1, r_1, s_2, a_2, r_2, ...)$$

We assume that the agent's policy $$p_{\theta}(a|s)$$ depends on parameters $$\theta$$.
The metric by which we judge the success of the agent is the expected return it obtains,
averaging over all possible trajectories:

$$
\begin{align}
\mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] = \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau
\end{align}
$$

The agent's goal is to maximize its expected return. To do this, it can compute the
gradient of its expected return to then perform gradient ascent.

$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] &= \nabla_{\theta} \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) \nabla_{\theta} p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) p_{\theta}(\tau) \nabla_{\theta} \log p_{\theta}(\tau) d\tau \nonumber \\
&= \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau) \nabla_{\theta} \log p_{\theta}(\tau)]
\end{align}
$$

The probability of a trajectory $$\tau$$ does depend on the environment's transition
and reward functions, but critically, the gradient of the log probability does not:

$$
\begin{align}
p_{\theta}(\tau) &= p(s_1) p_{\theta}(a_1|s_1) p(r_1, s_2|s_1, a_1) p_{\theta}(a_2|s_2)...\\
&= p(s_1) \prod_t p(r_{t}, s_{t+1}|s_t, a_t) p_{\theta}(a_t|s_t)\\
\nabla_{\theta} \log p_{\theta}(\tau) &= \nabla_{\theta} \log p(s_1) \prod_t p(r_{t}, s_{t+1}|s_t, a_t) p_{\theta}(a_t|s_t)\\
&=  \sum_t \nabla_{\theta} \log p_{\theta}(a_t | s_t)
\end{align}
$$

This means that the agent does not need to know the transition function or 
reward function in order to improve its policy - this is an amazing result. Plugging back in,
we obtain the so-called policy gradient theorem:

$$
\begin{equation}
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)]
= \mathbb{E}_{\tau \sim p_{\theta}} \Bigg[ R(\tau) \nabla_{\theta}  \sum_t \nabla_{\theta} \log p_{\theta}(a_t | s_t) \Bigg]
\end{equation}
$$

In practice, because the distribution over trajectories is almost never known, we approximate the
right-hand side expectation with a Monte Carlo estimate:

$$\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] \approx \frac{1}{N}\sum_{n} R(\tau^{(n)}) \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) $$

## Vanilla Policy Gradient Algorithm

- For $$g = 1, 2, 3..., G$$ gradient steps:
  - For $$n = 1, 2, 3, ..., N$$ episodes per gradient step:
    - Have the agent complete a trajectory $$\tau^{(n)} = (s_1^{(n)}, a_1^{(n)}, r_1^{(n)}, s_2^{(n)}, a_2^{(n)}, ...)$$
    - Compute the return $$R(\tau)^{(n)} := \sum_{t} r_t^{(n)}$$
  - Estimate the policy gradient:

    $$\frac{1}{N}\sum_{n} R(\tau^{(n)}) \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) $$

  - Take a gradient step 

## Improved Policy Gradient Algorithms

See [Improved policy gradient estimators](improved_policy_gradient_estimators.md).

## Related

- [Log derivative trick](../../random/log_derivative_trick.md)