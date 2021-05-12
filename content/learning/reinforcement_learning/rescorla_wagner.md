# Rescorla-Wagner Learning Rule

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