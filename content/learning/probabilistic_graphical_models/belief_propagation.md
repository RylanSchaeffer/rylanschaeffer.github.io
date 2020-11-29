# Belief Propagation (Sum-Product Algorithm)



## Discrete



## Gaussian BP

Again, suppose our goal is to efficiently compute marginal distributions. In the [Elimination Algorithm](elimination_algorithm.md),
we saw we could do so efficiently for one variable, and in Belief Propagation applied to discrete distributions,
we saw we could do so efficiently for all variables. Here, we'll see that if the joint distribution is Gaussian,
then we can also efficiently compute marginal distributions.

Consider a 2D Gaussian distribution. We can write the joint distribution in information form:

$$
\begin{align}
p(x_1, x_2) &\propto \exp(-\frac{1}{2} x^T J x + h^T x)\\
= \underbrace{\exp(-\frac{1}{2} x_1^T J_{11} x_1 + h_1^T x_1)}_{\phi_1(x_1)} \exp(-\frac{1}{2} x_2^T J_{22} x_2 + h_2^T x_2) \exp(-x_1^T J_{12} x_2)
\end{align}
$$

The first term can be seen as the node potential for $$x_1$$, the second term as the node potential for $$x_2$$ and
the third term as the edge potential $$\psi_{1,2}$$. We can compute the marginal for $$x_1$$
since we know how to marginalize Gaussians.

$$
\begin{align}
p(x_1) &= \int \phi_1(x_1) \phi_2(x_2) \psi_{1,2}(x_1, x_2) dx_2\\
&= \phi_1(x_1) \int \phi_2(x_2) \psi_{1,2}(x_1, x_2) dx_2\\
&= \phi_1(x_1) \underbrace{\int \exp(-\frac{1}{2} x^T \begin{bmatrix} 0 & J_{12}\\ J_{21} & J_{22} \end{bmatrix} x + 
\begin{bmatrix}0 \\ h_2 \end{bmatrix}^T x) dx_2}_{m_{2 \rightarrow 1}(x_1)}\\
\end{align}
$$