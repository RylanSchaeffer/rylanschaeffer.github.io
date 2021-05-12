# Policy Gradient Theorem

Define an agent's trajectory $\tau$ as the sequence of states,
actions and rewards it experiences: $s_1, a_1, r_1, s_2, ...$. Assuming
the agent's policy $p_{\theta}(a|s)$ depends on parameters $\theta$, we
can define the agent's expected return as the probability of a
trajectory, which depends on the agent's policy, times the return of
each trajectory, which depends only on the agent's policy through the
trajectory:

$$
\begin{align}
\mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] = \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau
\end{align}
$$

An agent that seeks to maximize its return can follow the gradient of
its expected return with respect to its policy's parameters:


$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] &= \nabla_{\theta} \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) \nabla_{\theta} p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) p_{\theta}(\tau) \nabla_{\theta} \log p_{\theta}(\tau) d\tau \nonumber \\
&= \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau) \nabla_{\theta} \log p_{\theta}(\tau)]
\end{align}
$$
