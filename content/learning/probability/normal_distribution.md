# Normal (Gaussian) Distribution

## Definition

Classic Form: $$p(x\lvert \mu, \Sigma) = \frac{1}{\sqrt{2 \pi \det{\Sigma}}} \exp \Big(
-\frac{1}{2}(x- \mu)^T \Sigma^{-1} (x - \mu) \Big)$$

Information Form: Define $$J = \Sigma^{-1}$$ and $$h = J \mu$$. Then

$$p(x\lvert \mu, \Sigma) \propto \exp \Big(-\frac{1}{2} x^T J x + x^T h \Big)$$

Linear Form: $$x \sim \mathcal{N}(\mu, Sigma)$$ if $$\exists A \in \mathbb{R}^{N \times N}$$
and $$b \in \mathbb{R}^N$$ such that $$x = Au + b$$ where $$u \sim \mathcal{N}(0, I)$$.
Specifically, $$\mu = b$$ and $$\Sigma = A A^T$$.

## Properties

Let $$(X, Y) \sim \mathcal{N}(\begin{bmatrix} \mu_x \\ \mu_y \end{bmatrix}, \begin{bmatrix}
\Sigma_{xx} & \Sigma_{xy} \\ \Sigma_{xy} & \Sigma_{yy}\end{bmatrix})$$, or equivalently,
$$(X, Y) \sim \mathcal{N}^{-1}(\begin{bmatrix} h_x \\ h_y \end{bmatrix}, \begin{bmatrix}
J_{xx} & J_{xy} \\ J_{xy} & J_{yy}\end{bmatrix})$$. Then

- Closed under marginalization

$$X \sim \mathcal{N}(\mu_x, \Sigma_{xx})$$

- Closed under conditioning

$$Y \lvert X \sim \mathcal{N}(h_y - J_{yx} x , J_{yy})$$

Proof:

$$
\begin{align*}
p(y\lvert x) &\propto \exp \Big(-\frac{1}{2} \begin{bmatrix} x \\ y \end{bmatrix}^T J
\begin{bmatrix} x \\ y \end{bmatrix} + \begin{bmatrix} x \\ y \end{bmatrix}^T \begin{bmatrix} h_x \\ h_y \end{bmatrix} \Big)\\
&\propto \exp \Big(-\frac{1}{2} y^T J_{yy} y + (h_y - J_{yx} x)^T y \Big)
\end{align*}
$$

Note that covariance/precision doesn't depend on the conditioned variable. Also the mean is determined
by an affine transformation of conditioned variance.

- Suppose $$x_i, x_j$$ are jointly Gaussian. $$x_i \perp x_j \Leftrightarrow \Sigma_{i,j}$$.

- Suppose $$x_i, x_j, x_k$$ are jointly Gaussian. In general, $$x_i \perp x_j, x_j \perp x_k$$
  does not imply $$x_i \perp x_k$$, but this does hold for Gaussians.

- $$\forall i \neq j \neq k, \quad x_i \perp x_j \lvert x_k \Leftrightarrow J_{ij} = 0$$