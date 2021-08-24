<h3 id="pca_networks">PCA Networks</h3>
<div>
<p>


  Previously, we considered the linear neuron learning via supervised labels $y$. Here,
  we'll instead consider a linear neuron receiving data $x \in \mathbb{R}^d$ and learning
  a linear readout that produces a low dimension representation $y \in \mathbb{R}^k$, where
  $k < d$:

  $$y = w^T x $$

  Rather than defining an objective function and then showing the emergent update
  rule, we'll instead consider an update rule inspired by Hebbian learning principles: if
  the model's output is correlated with a feature in the input space, the corresponding
  weight should be strengthened. This learning rule will be shown to a common linear
  unsupervised learning technique, principal component analysis on the data. The Hebbian
  update rule is:

  $$w_{t+1} = w_{t} + \eta y_t x_t $$
</p>

<p>
  However, this naive Hebbian learning rule is unstable! We can see this by considering
  the continuous time differential equation and showing that the magnitude of $w$ diverges.

  $$w_{t+1} - w_t = \eta y_t x_t \approx \frac{\Delta w}{\Delta t} = \frac{\eta}{\Delta t} y_t x_t
  \approx \tau \frac{dw}{dt} = y(t) x(t) $$

  But if we replace $y_t = w_t^T x_t$, we see the the change in $w$ scales proportional
  to the norm of $x(t)$:

  $$
  \begin{align*}
  \tau \frac{dw}{dt} &= y(t) x(t) \\
  &= w(t)^T x(t) x(t)\\
  &= x(t) w(t)^T x(t) \\
  \tau \frac{d}{dt} ||w_t||_2^2 &= w(t)^T x(t) w(t)^T x(t)\\
  &= ||w(t) x(t)||_2^2
  \end{align*}
  $$

  This implies that $w(t)$ will diverge to infinity since the change is always positive,
  regardless of inputs. We can also show the direction that $w$ diverges in by
  projecting the weight vector onto the data covariance matrix $C = x(t) x(t)^T$:

  $$
  \begin{align*}
  \tau \frac{dw}{dt} &= x(t) x(t)^T w(t)\\
  &= C w(t)\\
  &= C \sum_i w_i(t) \vec{\lambda}_i\\
  \tau \frac{dw_i}{dt} &= \lambda_i w_i(t)
  \end{align*}
  $$

  Solving the dynamics yields
</p>

<p>
  To fix this, we propose a slight modification of the Hebbian learning rule called
  Oja's rule:


</p>
</div>
