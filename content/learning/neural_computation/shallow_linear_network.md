# Scalar Linear Neuron

One of the simplest models of a neuron we might consider is a single "neuron" outputting
a weighted combination of input features:

$$
\begin{align*}
y = w^T x
\end{align*}
$$

where $y \in \mathbb{R}$ and $w, x \in \mathbb{R}^d$.  This model, as a supervised learning
problem under the Mean-Squared Error loss function, has been extensively studied. In such a setting, the
neuron's goal is to learn a mapping $x \rightarrow y$ from a dataset of N x-y pairs,
$\{(x_n, y_n) \}_{n=1}^N$, by minimizing the training MSE $L^{tr}(w) \defeq \frac{1}{N} \sum_{n=1}^N
(y_n - w^T x_n)^2$. Does this model have a unique fixed point $w^*$ that minimizes the
loss? We take the gradient and set equal to zero.

$$
\begin{align*}
L^{tr}(w) &\defeq \frac{1}{N} \sum_{n=1}^N (y_n - w^T x_n)^2 = \sum_{n=1}^N Tr(y_n - w^T x_n)^2\\\\
\nabla_w L(w) = 0 &= \nabla_w \frac{1}{N} \sum_{n=1}^N (y_n^2 - 2 w^T x_n y_n + w^T x_n x_n^T w)\\
0 &= -\sum_{n=1}^N y_n x_n + \sum_{n=1}^N x_n x_n^T w^*\\
\sum_{n=1}^N x_n x_n^T w^* &= \sum_{n=1}^N y_n x_n
\end{align*}
$$

One important observation in that $\sum_{n=1}^N x_n x_n^T$ is the empiric input-input
covariance matrix and $\sum_{n=1}^N  y_n x_n$ is the empiric output-input covariance
"matrix" (although here the covariance is a vector since $y$ is a scalar), and the
optimal weight vector $w^*$ relates these two covariance matrices. Another important
observation is that $C \defeq \sum_{n=1}^N x_n x_n^T$ is the sum of $N$ rank-$D$
matrices, meaning that $\rank(C) \leq min(N, D)$. The third important observation is that the
Hessian $H_{ij} \defeq \frac{\partial L^{tr}(w)}{\partial w_i \partial w_j}= C_{ij}$.
More on this in a bit.

The first question to ask is what behavior we should expect from such a model?
Two regimes emerge, one where $N < D$ and the other where $N \geq D$. In the first regime,
where the number of observations $N$ is less than the dimensionality of the data $D$, $C$
is a $D \times D$ matrix of at most rank $N$, meaning that $C$ is not invertible and
therefore infinitely many solution exist. The easiest way to see this
is to note that we have $N$ equations and $D$ unknowns, meaning we have fewer equations
than unknowns. Consequently, in this regime, the training error $L^{tr}(w)$ is guaranteed to be 0.
For those unconvinced, we can prove this claim via construction:

The second observation is that $w$ is a minimum because the Hessian of the loss function
$H_{ij} = \frac{\partial L(w)}{\partial w_i \partial w_j} = \sum_{n=1}^N x_n x_n^T$.
Because <a href="linear_algebra.html#covariance_pos_semidefinite">covariance matrices are always
positive-semidefinite</a>, the input-input covariance eigenvalues are $\geq 0$
