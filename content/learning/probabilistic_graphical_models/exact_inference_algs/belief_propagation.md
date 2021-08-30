# Belief Propagation (Sum-Product Algorithm)



## Discrete



## Gaussian BP

Again, suppose our goal is to efficiently compute marginal distributions. In the [Elimination Algorithm](elimination_algorithm.md),
we saw we could do so efficiently for one variable, and in Belief Propagation applied to discrete distributions,
we saw we could do so efficiently for all variables. Here, we'll see that if the joint distribution is Gaussian,
then we can also efficiently compute marginal distributions.

Consider a 2D Gaussian undirected graphical model. We can write the joint distribution in information form:

$$
\begin{align}
p(x_1, x_2) &\propto \exp(-\frac{1}{2} x^T J x + h^T x)\\
&= \underbrace{\exp(-\frac{1}{2} x_1^T J_{11} x_1 + h_1^T x_1)}_{\phi_1(x_1)} 
\underbrace{\exp(-\frac{1}{2} x_2^T J_{22} x_2 + h_2^T x_2)}_{\phi_2(x_2)}
\underbrace{\exp(-x_1^T J_{12} x_2)}_{\psi_{1,2}(x_1, x_2)}
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

The messages are themselves Gaussian, with $$m_{2 \rightarrow 1} \propto \mathcal{N}^{-1}(h_{2 \rightarrow 1}, 
J_{2 \rightarrow 1})$$, where $$h_{2 \rightarrow 1} = -J_{12} J_{22}^{-1} h_2$$ and $$J_{2 \rightarrow 1} = 
-J_{12} J_{22}^{-1} J_{21}$$, and the marginals are themselves Gaussian:

$$
\begin{align}
p(x_1) &\propto \phi_1(x_1) m_{2 \rightarrow 1}(x_1)\\
&= \mathcal{N}^{-1}(h_1 + h_{2 \rightarrow 1}, J_{11} + J_{2 \rightarrow 1})
\end{align}
$$

Letting $$N(i)$$ denote the neighbors of vertex $$i$$, we can expand the same logic to the N-dimensional
case to determine the marginal distributions and the messages:

$$p(x_i) = \mathcal{N}^{-1}(h_j + \sum_{j \in N(i)} h_{j \rightarrow i}, J_{ii} + \sum_{j \in N(i)} J_{j \rightarrow i})$$

$$m_{j \rightarrow i}(x_i) = \mathcal{N}^{-1}(h_{j \rightarrow i}, J_{j \rightarrow i})$$

where

$$
\begin{align}
h_{j \rightarrow i} &= -J_{ij} \Big( J_{jj} + \sum_{k \in N(j) \setminus \{i\}} J_{k \rightarrow j} \Big)^{-1} (h_j + \sum_{k \in N(j) \setminus \{i\}} h_{k \rightarrow j}) \\
J_{j \rightarrow i} &= -J_{ij} \Big( J_{jj} + \sum_{k \in N(j) \setminus \{i\}} J_{k \rightarrow j} \Big)^{-1} J_{ji}
\end{align}
$$

Gaussian Belief Propagation has time complexity $$\mathcal{O}(Nd^3)$$, where $$N$$ is the number of vertices and 
$$d$$ is the dimension of each vertex. The cubic dependence on d arises from inverting the covariance matrices.
This can compare favorably to Gaussian elimination, which naively has time complexity $$\mathcal{O}((Nd)^3)$$.