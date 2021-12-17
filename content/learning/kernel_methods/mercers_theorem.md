# Mercer's Theorem

## Background

Recall that for a positive semi-definite (PSD) matrix $$K \in \mathbb{R}^{D \times D}$$, the spectral theorem tells us that the matrix can
be written as 

$$K = \sum_{d=1}^D \lambda_d \psi_d \psi_d^T$$

where the eigenvalue-eigenvector pairs $$(\lambda_d, \psi_d)$$ are obtained by solving
the characteristic equation:

$$ K \psi = \lambda \psi$$

Mercer's Theorem is a generalization to function spaces.

## Mercer's Condition

__Mercer's condition__ is the function-space equivalent of a PSD matrix. Specifically,
let $$k: X \times X \rightarrow \mathbb{R}$$ be a [kernel function](kernels.md#kernel-functions). The kernel
function is said to meet Mercer's condition if for all square-integrable functions i.e. $$\forall f \in L^2(X) := \{ f: \int f(i)^2 di < \infty \}$$,
the following quantity remains non-negative:

$$ \int_i \int_j f(i) k(i, j) f(j) di dj \geq 0 $$

The equivalent statement in the finite-dimensional case is that $$\forall x \in \mathbb{R}^D$$,

$$ x^T K x < \infty$$

In the integral, I use the arguments $$i, j$$, to remind us that these are "indices" 
but for infinite dimensional functions.

## Definition

Let $$X \subseteq \mathbb{R}^D$$ be a compact
set and let $$k: X \times X \rightarrow \mathbb{R}$$ be a continuous PSD [kernel function](kernels.md#kernel-functions)
that meets Mercer's condition. Then there exists a sequence $$(\lambda_r)_{r \geq 1}$$ and functions
$$\psi_r(\cdot) \in L^2(X)$$ such that

$$k(x_1, x_2) = \sum_{r=1}^{\infty} \lambda_r \psi_r(x_1) \psi_r(x_2)$$

Additionally, the functions are orthonormal i.e.

$$\langle \psi_a, \psi_b \rangle_{L^2(X)} = \int \psi_a(i) \psi_b(i) = \delta_{ab}$$

This is a generalization of the finite dimensional statement that

$$x^T K y = x^T \Psi^T \Lambda \Psi y = \sum_{r=1}^D \lambda_r (\phi_r^T x) (\phi_r^T y)$$

## Obtaining Kernel Eigenfunctions

To obtain the eigenfunctions of the kernel $$k$$, one must first define the [Hilbert-Schmidt integral
operator](../functional_analysis/hilbert_schmidt_kernel_and_int_op.md):

$$T_k(f)(x) := \int k(x, y) f(y) dy$$

where $$T_k: L^2(X) \rightarrow L^2(X)$$ is a linear operator, and then solve the integral equation

$$T_k(f)(x) = \lambda f(x)  $$


## Feature Map

One can use Mercer's Theorem to define a feature map using the kernel's eigenfunctions. Specifically,
let $$l^2(\mathbb{N}) := \{ (a_r)_r : \sum_r a_r^2 < \infty \}$$ be the set of sequences that
are square summable. Define the feature map $$\phi: X \rightarrow l^2(\mathbb{N})$$ as:

$$\phi(x) = (\sqrt{\lambda_r} \psi_r(x))_{r \geq 1}$$

In other words, each $$x \in X$$ becomes a sequence $$\phi(x) \in l^2(\mathbb{N})$$. If we take
the inner product in this feature space, we recover the kernel:

$$\langle \phi(x_1), \phi(x_2) \rangle_{l^2(\mathbb{N})} = \sum_r \sqrt{\lambda_r} \psi_r(x_1) \sqrt{\lambda_r}\psi_r(x_2) = k(x_1, x_2)$$
