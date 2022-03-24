# Policy Gradient Theorem

Define an agent's trajectory $$\tau := s_1, a_1, r_1, s_2, ...$$ as the sequence of states,
actions and rewards the agent experiences. Assumings that
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

The probability of a trajectory $$\tau$$ does depend on the environment's transition
and reward functions, but the gradient of the log probability does not:

$$
\begin{align}
p_{\theta}(\tau) &= p(s_1) p_{\theta}(a_1|s_1) p(r_1, s_2|s_1, a_1) p_{\theta}(a_2|s_2)...\\
&= p(s_1) \prod_t p(r_{t}, s_{t+1}|s_t, a_t) p_{\theta}(a_t|s_t)\\
\nabla_{\theta} \log p_{\theta}(\tau) &= \nabla_{\theta} \log p(s_1) \prod_t p(r_{t}, s_{t+1}|s_t, a_t) p_{\theta}(a_t|s_t)\\
&=  \sum_t \nabla_{\theta} \log p_{\theta}(a_t | s_t)
\end{align}
$$

Plugging back in, we reach the policy gradient theorem:

$$
\begin{equation}
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)]
= \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau) \nabla_{\theta}  \sum_t \nabla_{\theta} \log p_{\theta}(a_t | s_t)]
\end{equation}
$$

We can approximate the right-hand side expectation with a Monte Carlo estimate:

$$\frac{1}{N}\sum_{n} R(\tau^{(n)}) \sum_t \nabla_{\theta} \log p_{\theta}(a_t^{(n)}| s_t^{(n)}) $$