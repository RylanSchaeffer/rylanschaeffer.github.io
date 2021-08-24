<h3 id="deep_linear_nn">Deep Linear Neural Networks</h3>
<div>
<p>
A deep linear neural network is a multi-layered neural network with the non-linear
"activations" removed. That is, it is a composition of linear
transformations (typically matrices). For instance,
$\hat{y} = W_{32} W_{21} x$ is a two-layer linear network. Despite
lacking the ability to learn non-linear functions, this class of
network is attractive because it can be tractably analyzed and
because its behaves similarly to its non-linear cousins under mild
conditions.
</p>

<p>
One question we might immediately ask is <b>for a two-layer linear neural network trained
under mean squared
error (MSE) on dataset $\{(x_i, y_i)\}_1^N$, what are the coupled differential
equations that describe the network's learning dynamics?</b>
Let $x \in \mathbb{R}^i$ be the input, $y \in \mathbb{R}^o$ be the
output, and $L = \frac{1}{N} \sum_{i=1}^N (y - W_{32} W_{21} x)^T (y - W_{32} W_{21} x)$
be the objective function. Define the input-input correlation matrix
$\Sigma_{11} = \frac{1}{N}\sum_{i=1}^N x x^T$ and the input-output
correlation matrix $\Sigma_{31} = \frac{1}{N}\sum_{i=1}^N y x^T$. We first
derive $-\frac{\partial L}{\partial W_{32}}$:
</p>

<p>
$$
\begin{align*}
-\frac{\partial L}{\partial W_{32}} &= -\frac{1}{\partial W_{32}} \frac{1}{N} \sum_{i=1}^N (y - W_{32} W_{21} x)^T (y - W_{32} W_{21} x) \nonumber \\
&= -\frac{1}{\partial W_{32}} \frac{1}{N} \sum_{i=1}^N tr(y^T y - 2 y^T W_{32} W_{21} x + x^T W_{21}^T W_{32}^T W_{32} W_{21} x) \nonumber \\
&= \frac{1}{N} \sum_{i=1}^N 2 \frac{1}{\partial W_{32}} tr(y^T W_{32} W_{21} x) - \frac{1}{\partial W_{32}}tr(x^T W_{21}^T W_{32}^T W_{32} W_{21} x) \nonumber \\
&= \frac{1}{N} \sum_{i=1}^N 2 y x^T W_{21}^T - 2 W_{32} W_{21} x x^T W_{21}^T \nonumber \\
&= 2 \Sigma_{31} W_{21}^T - 2 W_{32} W_{21} \Sigma_{11} W_{21}^T \nonumber \\
-\frac{\partial L}{\partial W_{32}} &= 2 (\Sigma_{31} - W_{32} W_{21} \Sigma_{11}) W_{21}^T
\end{align*}
$$
</p>

<p>
We similarly derive $-\frac{\partial L}{\partial W_{21}}$:
$$
\begin{align*}
-\frac{\partial L}{\partial W_{21}} = 2 \Sigma_{32}^T (\Sigma_{31} - W_{32} W_{21} \Sigma_{11})
\end{align*}
$$
</p>

<p>
Together, these coupled nonlinear differential equations define the
learning dynamics of a linear neural network. One key aspect is that
the learning dynamics are non-linear, meaning that deep linear networks
are more sophisticated than shallow (i.e. single-layer) networks. These
non-linear learning dynamics arise from the choice of error function:
MSE produces a loss function that is quartic with respect to the weights,
resulting in a gradient that is cubic with respect to the weights.
</p>
</div>
</div>