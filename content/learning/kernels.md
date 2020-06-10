# Kernels

## PSD Kernels and Matrices

- __kernel__: a function $$k : X \times X \rightarrow K$$, where $$k = 
\mathbb{C}$$ or $$K = \mathbb{R}$$

- __Gram Matrix__: an $$N \times N$$ matrix for a set of $$N$$ patterns 
$$\{x_i\}_{i=1}^N$$ defined by $$K_{ij} = k(x_i, x_j)$$.

- __Positive Semi-Definite Matrix__: A matrix $$M$$ is PSD if
$$\forall c_i \in \mathbb{C}, \, \sum_{ij} c_i \bar{c}_j M_{ij} \geq 0$$; more compactly, $$\forall c, c^T M \bar{c} \geq 0$$.


- __Positive Semi-Definite Kernel__: a kernel such that the corresponding Gram
matrix is PSD. Also known as a reproducing kernel and a Mercer kernel.
 
### Properties of PSD Kernels and Matrices

- A symmetric matrix is PSD if and only if its eigenvalues are non-negative.
<details>
<summary>Proof:</summary>
Let $$P = P^T$$ be a PSD symmetric matrix. By definition of PSD, $\forall c \, c^T P \bar{c} \geq 0$$.
Choose $$c = v_i$$ to be the $ith$ eigenvector of $$P$$. Then $$v_i^T P \bar{v_i} = v_i^T P^T \bar{v_i}
 = \lambda_i v_i^T \bar{v_i} = \lambda_i ||v_i||_2^2 \geq 0 \Rightarrow \lambda_i \geq 0$$.
</details>

The other direction is the same proof in reverse. Assume that all eigenvalues of
$$P$$ are non-negative. Then $$\lambda_i ||v_i||_2^2 \geq 0 \Rightarrow \lambda_i v_i^T \bar{v_i} \geq 0


 

- 



 
