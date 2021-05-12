# Introduction to Actor Critics

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