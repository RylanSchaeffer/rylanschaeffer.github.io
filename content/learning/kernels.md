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

One immediate complication is that there is an infinite number of maps $$\Phi$$ 
for a single kernel.

### Properties

1. Addition: The sum of two kernels is a kernel. The difference of two kernels is not
necessarily a kernel (as the difference may violate that inner products remain
non-negative.)

2. Positive Scalar Multiplication: A kernel multiplied by a positive scalar is a kernel.  

3. Mapping Between Spaces: If $$X, \Tilde{X}$$ are sets, $$k$$ is a kernel on $$\Tilde{X}$$k
and $$A: X \rightarrow \Tilde{X}$$ is a map, then $$k(A(x), A(x'))$$ is a kernel on $$X$$.

4. Multiplication: If $$k_1$$ on $$X_1$$ and $$k_2$$ on $$X_2$$ are kernels, then $$k_1 \times k_2$$
is a kernel on $$X_1 \times X_2$$. If $$X_1=X_2=X$$, then $$k = k_1 \times k_2$$ is a kernel
on $$X$$.

5. Polynomials: Let $$\Phi(x), \Phi(x') \in \mathbb{R}^d$$ for $$d \geq 1$$ and let $$m \geq 1$$
be an integer and $$c \geq 0$$. Then $$k(\Phi(x), \Phi(x')) = (\langle \Phi(x), 
\Phi(x') \rangle + c)^m$$ is a valid kernel.

6. Taylor Series: Combining polynomials with positive scalar multiplication shows that Taylor
series expansions with positive coefficients are valid kernels.

7. Positive Definiteness: see [below](#positive-definiteness)

### Common Kernels

- Exponential kernel: $$k(x, x') = \exp(\langle x, x' \rangle)$$

- Gaussian kernel:  $$k(x,x') = \exp(-\gamma^{-2} \langle x - x', x - x' \rangle)

- 

### Determining Validity of Kernels

Suppose we're given a function with two arguments $$k(x, x')$$. How can we determine whether
the function is a valid kernel? We could

- Find a feature map $$\Phi$$. This

- Check the __positive definiteness__ of the kernel. 

## Positive Definiteness

A symmetric function $$k: X \times X \rightarrow \mathbb{R}$$ is __positive definite__
if $$\forall n \geq 1, \, \forall (a_1, ..., a_n) \in \mathbb{R}^N,\, \forall (x_1,...,x_N)
\in X^n$$

$$\sum_{i=1}^N \sum_{j=1}^N a_i a_j k(x_1, k_j) \geq 0$$ 

The terminology here can vary by field. Some say that the function is __strictly positive
definite__ if equality holds only when all the $$a_i$$ are zero for mutually distinct $$x_i$$.
Other fields will call the above definition __positive semi-definite__ and then label
strictly positive definite as positive definite.

__Theorem__: Let $$X$$ be a non-empty set, $$H$$ be a Hilbert space and $$\Phi: X \rightarrow H$$.
Then $$k(x,x') = \langle \Phi(x),\Phi(x')\rangle_H$$ is positive definite.

<details>
<summary>Proof</summary>
$$\sum_i \sum_j a_i a_j k(x_i, x_j)
= \sum_i \sum_j \langle a_i \Phi(x_i), a_j \Phi(x_j) \rangle_H\\
= ||\sum_i a_i \Phi(x_i) ||_H^2
\geq 0$$
</details>


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

