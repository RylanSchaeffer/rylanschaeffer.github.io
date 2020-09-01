# Reinforcement Learning

## Value-Based RL
-----

### Rescorla-Wagner Learning Rule

The Rescorla-Wagner Learning Rule (1972) was a seminal model of associative learning
that preceded reinforcement learning. Associative learning is the problem of learning
how different stimuli are associated with rewards or punishments $$r_n$$, where $$n$$ indexes
the trial number. The model considers the agent receiving a one-hot encoded stimulus vector
$$s_n$$, where each element indicates the presence or absence of a stimulus and $$n$$ is the
trial number, and the agent then uses a linear readout $$w_n$$ of the stimuli to predict 
the expected reward or punishment $$v_n$$:

$$ v_n = w_n^T s_n $$


Over the course of the $N$ trials, the linear readout $w_n$ is updated using the prediction
error, $r_n - v_n$ (occasionally denoted by $\delta_n$):

$$ w_{n+1} \leftarrow w_n + \eta (r_n - v_n) s_n $$

This learning rule is equivalent to online gradient descent under a mean-squared error loss
between the actual reward and the expected reward:

$$
\begin{align*}
L(w) &= \langle (r - v)^2 \rangle_{s} \\
\nabla_w L(w) &= \langle  0 - 2 r s + 2 s s^T w \rangle_{s}\\
&= 2 \langle (r - w^T s) s \rangle_{s}\\
&\propto \langle (r - v) s \rangle_{s}
\end{align*}
$$

## Policy-Based RL

### Policy Gradient Theorem

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

## Actor-Critic RL
-----

### Constant Baseline

Unbiased:

$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau) - b]
&= \nabla_{\theta}  \mathbb{E}_{p(\tau)} [R(\tau)] - \nabla_{\theta} \mathbb{E}_{p(\tau)} [b]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b \nabla_{\theta} \mathbb{E}_{p(\tau)} [1]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b (0)\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)]
\end{align}
$$


### State-Dependent Baseline: $$b(s_t)$$

Unbiased:

$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau) - b]
&= \nabla_{\theta}  \mathbb{E}_{p(\tau)} [R(\tau)] - \nabla_{\theta} \mathbb{E}_{p(\tau)} [b]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b \nabla_{\theta} \mathbb{E}_{p(\tau)} [1]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b (0)\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)]
\end{align}
$$



## Distributional RL


