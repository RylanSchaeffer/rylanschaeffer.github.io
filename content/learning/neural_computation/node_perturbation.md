# Node Perturbation

Node Pertubation is an algorithm for learning with a global error signal introduced by
[Williams 1992](../papers/Williams_1992_Simple_Statistical_Gradient_Following_Algorithms.pdf)
that improves on [Weight Pertubation](weight_perturbation.md) by identifying that the gradient 
of the global error can be estimated by adding noise into the bias alone. Consider adding noise $\gamma_i^l$:

$$\tilde{x}_i^l = f \Big(\sum_j W_{ij}^l \tilde{x}_j^{l-1} + (b_i^l + \gamma_i^l) \Big) $$

We can use the same Weight Perturbation approach to estimate $\frac{\partial E}{\partial b_a^c}$,
but how can we estimate $\frac{\partial E}{\partial W_{ab}^c}$?

Define the unperturbed, pre-activation value:

$$\nu_i^l = \sum_j W_{ij}^l x_j^{l-1} + (b_i^l + \gamma_i^l)$$

Per the chain rule,

$$\frac{\partial E}{\partial W_{ab}^c} =
\frac{\partial E}{\partial \nu_a^c} \frac{\partial \nu_a^c}{\partial W_{ab}^c}
= \frac{\partial E}{\partial \nu_a^c} x_b^c$$

We can estimate $\frac{\partial E}{\partial \nu_a^c}$ using a similar trick as WP.
To first order, the difference between the perturbed and unperturbed error is

$$\tilde{E}_{tr} - E_{tr} \approx \sum_{l, i} \frac{\partial E}{\partial \nu_i^l} \gamma_i^l$$

Multiply both sides by $\gamma_a^c$ and take the expectation with respect to $\gamma_a^c$:

$$\langle (\tilde{E}_{tr} - E_{tr}) \gamma_a^c \rangle_{\gamma_a^c} =  \frac{\partial E}{\partial \nu_a^c} \sigma^2$$

Thus,

$$
\begin{align*}
\frac{\partial E}{\partial W_{ab}^c}
&= \frac{\partial E}{\partial \nu_a^c} x_b^c\\
&= \frac{1}{\sigma^2}\langle (\tilde{E}_{tr} - E_{tr}) \gamma_a^c \rangle_{\gamma_a^c} x_b^c
\end{align*}
$$


Since $tilde{x} \approx x$ to first order in $\gamma$, NP approximates gradient descent
using the following update equations:

$$
\begin{align*}
\Delta W_{ij}^l &= - \eta \tilde{E}_{tr} \gamma_i^l x_j^l \\
\Delta b_i^l &= - \eta \tilde{E}_{tr} \gamma_i^l
\end{align*}
$$
