# Weight Perturbation

Weight Perturbation is an algorithm for learning with a global error signal
introduced by [Jabri & Flower 1992](../papers/Jabri_Flower_1992_Weight_Perturbation.pdf)
that uses additive noise to estimate the gradient of the error signal with respect to each parameter.
Consider training a feedforward network $y(\cdot)$ using mean squared error on training data
$$\{(x_i, y_i)\}_{i=1}^N$$:

$$ E_{tr} = \frac{1}{2} || y_i - y(x_i) ||_2^2 $$

$$x_i^l = f \Big(\sum_j W_{ij}^l x_j^{l-1} + b_i^l \Big) $$

Through a relatively simple algorithm, we can estimate $\frac{\partial E_{tr}}{\partial W_{ij}^l}$
and $\frac{\partial E_{tr}}{\partial b_{i}^l}$ simply by adding a small amount of
independent noise to each parameter. To understand why this works, consider adding
noise $\Omega_{ij}^l, \gamma_i^l \sim N(0, \sigma^2)$ to each parameter $W_{ij}^l, b_i^l$.
The network's activity and outputs will consequently be slightly pertubed:

$$ \tilde{E}_{tr} = \frac{1}{2} || y_i - \tilde{y}(x_i) ||_2^2$$

$$\tilde{x}_i^l = f \Big(\sum_j (W_{ij}^l + \Omega_{ij}^l) \tilde{x}_j^{l-1} + (b_i^l + \gamma_i^l) \Big) $$

If the variance of the additive noise $\sigma^2$ is small, we can use a linear
approximation of the training error $E_{tr}$ to quantify how the additive noise will affect the
training error.

$$\tilde{E}_{tr} \approx E_{tr} + \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\Omega_{ij}^l + \sum_{l, ij} \frac{\partial E}{\partial b_i^l} \gamma_i^l$$

Rearranging slightly, we can write that the difference between the pertubed and
unperturbed training error is:

$$\tilde{E}_{tr} - E_{tr} \approx \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\Omega_{ij}^l + \sum_{l, ij} \frac{\partial E}{\partial b_i^l} \gamma_i^l$$

Since each noise term was sampled independently from a distribution with mean 0,
we see that if we multiply both sides by a noise term $\Omega_{ab}^c$ and take the expectation with
respect to that noise term, the independence and zero mean will annihilate all
terms except the one containing the gradient with respect to the corresponding
parameter $W_{ab}^c$:

$$\begin{align*}
\tilde{E}_{tr} - E_{tr}
&\approx \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\Omega_{ij}^l + \sum_{l, ij} \frac{\partial E}{\partial b_i^l} \gamma_i^l\\
(\tilde{E}_{tr} - E_{tr}) \Omega_{ab}^c
&\approx \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\Omega_{ij}^l \Omega_{ab}^c  + \sum_{l, ij} \frac{\partial E}{\partial b_i^l} \gamma_i^l
\Omega_{ab}^c\\
\langle (\tilde{E}_{tr} - E_{tr}) \Omega_{ab}^c \rangle_{\Omega_{ab}^c}
&\approx \langle \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\Omega_{ij}^l \Omega_{ab}^c  + \sum_{l, ij} \frac{\partial E}{\partial b_i^l} \gamma_i^l
\Omega_{ab}^c \rangle_{\Omega_{ab}^c}\\
&\approx \sum_{l, i, j} \frac{\partial E}{\partial W_{ij}^l}
\langle \Omega_{ij}^l \Omega_{ab}^c \rangle_{\Omega_{ab}^c}  + \sum_{l, ij}
\frac{\partial E}{\partial b_i^l} \gamma_i^l \langle \Omega_{ab}^c \rangle_{\Omega_{ab}^c}\\
&\approx \frac{\partial E}{\partial W_{ab}^c} \sigma^2\\
\frac{1}{\sigma^2} \langle (\tilde{E}_{tr} - E_{tr}) \Omega_{ab}^c \rangle_{\Omega_{ab}^c}
&\approx  \frac{\partial E}{\partial W_{ab}^c}
\end{align*}$$


<p>
We can further simplify by noting that since $E_{tr}$ is independent of $\Omega_{ab}^c$,

$$ \langle E_{tr} \Omega_{ab}^c \rangle_{\Omega_{ab}^c} =
E_{tr} \langle \Omega_{ab}^c \rangle_{\Omega_{ab}^c} = 0$$

and therefore

$$\frac{1}{\sigma^2} \langle (\tilde{E}_{tr} - E_{tr}) \Omega_{ab}^c \rangle_{\Omega_{ab}^c}
= \frac{1}{\sigma^2} \langle \tilde{E}_{tr} \Omega_{ab}^c \rangle_{\Omega_{ab}^c}
\approx \frac{\partial E}{\partial W_{ab}^c}$$

This same argument applies for $\gamma_a^c$ as well, yielding:

$$ \frac{1}{\sigma^2} \langle \tilde{E}_{tr} \gamma_{a}^c \rangle_{\gamma_{a}^c}
\approx \frac{\partial E}{\partial b_{a}^c}$$
</p>

What we've shown is that the covariance between the perturbation of the weight
and the pertubed error will (in expectation) point in the direction of the
gradient. No chain derivatives necessary! Then, Weight Perturbation approximates
gradient descent using the following update equations:

$$
\begin{align*}
\Delta W_{ij}^l &= - \eta \tilde{E}_{tr} \Omega_{ij}^l \\
\Delta b_i^l &= - \eta \tilde{E}_{tr} \gamma_i^l
\end{align*}
$$

## Problems with Weight Pertubation

Despite obtaining an unbiased estimate of the gradient of the loss, Weight
Pertubation is impractical because (like all methods using Monte Carlo estimators),
its suffers from extremely high variance.
