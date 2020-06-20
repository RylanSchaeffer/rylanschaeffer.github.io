# Kernel Methods

At a high level, kernel methods in machine learning approach learning by 
considering a dataset $$\{x\}$$ not in the original space (e.g. words, images,
sounds), but in a (possibly infinite) feature space where two datums's features
are related by their inner product. This means kernel methods are generally
applicable when the data is rotationally invariant.


## Background

Two important prerequisites to kernels are
[inner product spaces](/content/learning/linear_algebra.md#inner-product-spaces) and
[Hilbert spaces](/content/learning/linear_algebra.md#hilbert-spaces).

## Kernels

Simply, a kernel is a dot product between features of objects. More formally,
let $$X$$ be a non-empty set. A function $$k: X \times X \rightarrow \mathbb{R}$$ is 
a kernel if there exists an $$\mathbb{R}$$-Hibert space $$H$$ and a map $$\Phi: X
\rightarrow H$$ such that $$\forall x, x' \in X$$,

$$ k(x, x') = \langle \Phi(x), \Phi(x') \rangle $$

 

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
<summary>(Proof)</summary>
Let $$P = P^T$$ be a PSD symmetric matrix. By definition of PSD, $$\forall c \, c^T P \bar{c} \geq 0$$.
Choose $$c = v_i$$ to be the $$ith$$ eigenvector of $$P$$. Then $$v_i^T P \bar{v_i} = v_i^T P^T \bar{v_i}
 = \lambda_i v_i^T \bar{v_i} = \lambda_i ||v_i||_2^2 \geq 0 \Rightarrow \lambda_i \geq 0$$.

In the other direction, assume that all eigenvalues of $$P$$ are non-negative. Then
$$\lambda_i ||v_i||_2^2 \geq 0 \Rightarrow \lambda_i v_i^T \bar{v_i} \geq 0
\Rightarrow v_i^T P \bar{v_i} \geq 0$$. But trickily, we need to show that this holds for
all vectors $$c$$, not just the eigenvectors. 

</details>

- If k is PSD kernel



 
