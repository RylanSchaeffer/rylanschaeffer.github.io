# Shallow Linear Networks

Perhaps the simplest model we might consider is a single layer linear neural network:

$$
\begin{align*}
\hat{y} = w \cdot x = w^T x
\end{align*}
$$

where $$y \in \mathbb{R}$$ and $$w, x \in \mathbb{R}^{D}$$. A slightly more general setting
replaces the 

## Mean-Squared Error Learning Dynamics

This single-layer linear network has been extensively studied as a supervised learning
problem under mean-squared error (MSE). We assume the network will be given a supervised
dataset $$\{(x_n, y_n) \}_{n=1}^N$$ and will then optimize the parameters
$$w$$ by performing gradient descent on the empiric MSE: 

$$ L^{train}(w) := \frac{1}{N} \sum_{n=1}^N (y_n - w^T x_n)^2$$

Our goal here is to characterize the learning dynamics of this shallow linear neural network. 

### Overparameterized Regime

The overparameterized regime is defined as the setting in which the number of data $$N$$ is
less than the number of parameters $$D$$ (or more specifically, less than the dimension
of the span of the $$\psi_n$$). In this regime, gradient descent on the empiric MSE 
finds the solution to an alternative optimization problem:

$$\arg \min_w \lvert w \lvert_2^2 + \sum_n \lambda_n (y_n - w \cdot \psi_n) $$

where $$\lambda_n$$ are Lagrange multipliers enforcing that the model's predictions
exactly match the target values. This alternative optimization problem
arises because there are fewer points than parameters, meaning there are infinitely 
many solutions, and e the claim here is that gradient descent finds the solution that 
not just passes through all the points, but also achieves the smallest L2 norm. We 
first want to show why gradient descent optimizes this, then show what solution $$w$$ converges to.

To find the solution $$w$$ converges to, we take the gradient with respect to $$w$$, set equal to 0
and solve.

$$
\begin{align*}
0 = \nabla_w L &= \nabla_w \lvert w \lvert_2^2 +  \nabla_w \sum_n \lambda_n (y_n - w \cdot \psi_n)\\
w &= \sum_{n} \lambda_n \psi_n\\
\nabla_{\lambda_i} L &= \nabla_{\lambda_i}\lvert w \lvert_2^2 + \nabla_{\lambda_i} \sum_n \lambda_n (y_n - w \cdot \psi_n)\\
y_i &= w \cdot \psi_i\\
y &= K \lambda \\
\lambda &= K^{-1} y\\
w &= \psi K^{-1} y
\end{align*}
$$


### Underparameterized Regime


### Regularized Regime


# Old Stuff

$$
\begin{align*}
L^{tr}(w) := \frac{1}{N} \sum_{n=1}^N (y_n - w^T x_n)^2 = \sum_{n=1}^N Tr(y_n - w^T x_n)^2\\\\
\nabla_w L(w) = 0 &= \nabla_w \frac{1}{N} \sum_{n=1}^N (y_n^2 - 2 w^T x_n y_n + w^T x_n x_n^T w)\\
0 &= -\sum_{n=1}^N y_n x_n + \sum_{n=1}^N x_n x_n^T w^*\\
\sum_{n=1}^N x_n x_n^T w^* &= \sum_{n=1}^N y_n x_n
\end{align*}
$$

One important observation in that $$\sum_{n=1}^N x_n x_n^T$$ is the empiric input-input
second moment matrix and $\sum_{n=1}^N  y_n x_n$ is the empiric output-input second moment matrix
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


