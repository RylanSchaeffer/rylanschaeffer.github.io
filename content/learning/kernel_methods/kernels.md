# Kernels

## Kernel Functions


__Definition 1__: Let $$X$$ be a non-empty set. A function $$k: \mathcal{X} \times 
\mathcal{X} \rightarrow \mathbb{R}$$ is a **kernel function** if there exists an
$$\mathbb{R}$$-Hibert space $$H$$ and a so-called feature map $$\Phi: X
\rightarrow H$$ such that $$\forall x, x' \in X$$,

$$ k(x, x') = \langle \Phi(x), \Phi(x') \rangle $$

__Definition 2__: A p.d. kernel on set $$X$$ is a function $$K: X \times X \rightarrow \mathbb{R}$$
that is (1) symmetric and (b) satisfies for all $$(x_1, ..., x_N)$$ and $$(a_1, ..., a_n) \in \mathbb{R}^N$$:

$$\sum_{ij} a_i a_j K(x_i, x_j) \geq 0 $$

Equivalently, for all $$(x_1, ..., x_N)$$, the matrix $$[K]_{ij} := K(x_i, x_j)$$ is positive semi-definite. 

__Lemma__: Let $$X$$ be any set and $$\phi: X \rightarrow \mathbb{R}^D$$. Then the function 
$$K(x_1, x_2) := \langle \phi(x_1), \phi(x_2) \rangle$$ is a kernel function. In simple terms,
a feature map and an inner product in a Hilbert space give rise to a kernel function.

Proof: Symmetry is obvious. Consider $$\sum_{ij} a_i a_j K(x_i, x_j) = \sum_{ij} a_i a_j \langle 
\phi(x_i), \phi(x_j) \rangle = \langle \sum_i a_i \phi(x_i), \sum_j a_j \phi(x_j) \rangle = 
\lvert \lvert \sum_i a_i \phi(x_i) \lvert \lvert_2^2 \geq 0$$

__Theorem__ (Aronszajn 1950): Informally, the opposite direction is also true: a kernel function
implies the existence of a feature map and inner product in some Hilbert space. Formally, $$K$$ is
a PSD kernel on $$X$$ if and only if there exists a Hilbert sapce $$H$$ and mapping $$\phi: X \rightarrow H$$
such that $$K(x_1, x_2) = \langle \phi(x_1), \phi(x_2) \rangle$$

Proof (Finite Dimensions): Let $$K$$ be a PSD kernel on $$X$$. Our goal is to show that there exists
features in some Hilbert space and an inner product. Because $$K$$ is a PSD kernel, we know that for any
$$x_1, ..., X_N$$, the $$N \times N$$ matrix is positive semi-definite. Take its eigendecomposition
$$K = \sum_n \lambda_n v_n v_n^T$$ and consider its $$i, j$$th element: $$[K]_{ij} = \sum_n \lambda_n [v_n]_i [v_n]_j$$.
Define $$\phi(x_i) = \begin{bmatrix} \sqrt{\lambda_1} v_{1,i} \\ \vdots \\\sqrt{\lambda_1} v_{N,i} \end{bmatrix}$$.
Then $$[K]_{ij} = \langle \phi(x_i), \phi(x_j) \rangle$$ by construction.

### Example Kernels

- Exponential: $$k(x, x') = \exp(\langle x, x' \rangle)$$

- Gaussian:  $$k(x,x') = \exp(-\gamma^{-2} \langle x - x', x - x' \rangle)$$


### Properties

1. Addition: The sum of two kernels is a kernel. The difference of two kernels is not
   necessarily a kernel (as the difference may violate that inner products remain
   non-negative).

2. Positive Scalar Multiplication: A kernel multiplied by a positive scalar is a kernel.

3. Mapping Between Spaces: If $$X, \tilde{X}$$ are sets, $$k$$ is a kernel on $$\tilde{X}$$
   and $$A: X \rightarrow \tilde{X}$$ is a map, then $$k(A(x), A(x'))$$ is a kernel on $$X$$.

4. Multiplication: If $$k_1$$ on $$X_1$$ and $$k_2$$ on $$X_2$$ are kernels, then $$k_1 \times k_2$$
   is a kernel on $$X_1 \times X_2$$. If $$X_1=X_2=X$$, then $$k = k_1 \times k_2$$ is a kernel
   on $$X$$.

5. Polynomials: Let $$\Phi(x), \Phi(x') \in \mathbb{R}^d$$ for $$d \geq 1$$ and let $$m \geq 1$$
   be an integer and $$c \geq 0$$. Then $$k(\Phi(x), \Phi(x')) = (\langle \Phi(x),
   \Phi(x') \rangle + c)^m$$ is a valid kernel.

6. Taylor Series: Combining polynomials with positive scalar multiplication shows that Taylor
   series expansions with positive coefficients are valid kernels.

7. Positive Definiteness: see [below](#positive-definiteness)


### Determining Validity of Kernels

Suppose we're given a function with two arguments $$k(x, x')$$. How can we determine whether
the function is a valid kernel? We might consider two options.

- Check the __positive definiteness__ of the kernel.

- Find a feature map $$\Phi$$ satisfying the requirement that $$k(x,x') =
  \langle \Phi(x),\Phi(x') \rangle$$.

We'll consider each in turn.
