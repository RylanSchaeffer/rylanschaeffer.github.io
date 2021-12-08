# Kernels

## Kernel Functions


__Definition 1__: Let $$X$$ be a non-empty set. A function $$k: \mathcal{X} \times 
\mathcal{X} \rightarrow \mathbb{R}$$ is a kernel function if there exists an
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

Proof: Symmetry is obvious. Consider

$$
\begin{align*}
\sum_{ij} a_i a_j K(x_i, x_j) &= \sum_{ij} a_i a_j \langle 
\phi(x_i), \phi(x_j) \rangle\\
&= \langle \sum_i a_i \phi(x_i), \sum_j a_j \phi(x_j) \rangle \\
&= \lvert \lvert \sum_i a_i \phi(x_i) \lvert \lvert_2^2 \\
&\geq 0
\end{align*}
$$

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


## Positive Definiteness



## Positive Definiteness

One option to check whether a symmetric function $$k(x,x')$$ is a kernel is to
check whether the function is positive definite.
A symmetric function $$k: X \times X \rightarrow \mathbb{R}$$ is __positive definite__
if $$\forall n \geq 1, \, \forall (a_1, ..., a_n) \in \mathbb{R}^N,\, \forall (x_1,...,x_N)
\in X^n$$

$$\sum_{i=1}^N \sum_{j=1}^N a_i a_j k(x_i, x_j) \geq 0$$

__Note__: The terminology here can vary. Some say that the function is __strictly positive
definite__ if equality holds only when all the $$a_i$$ are zero for mutually distinct $$x_i$$,
whereas others call the above definition __positive semi-definite__ and then label
strictly positive definite as positive definite. I use the first terminology because
it agrees with Arthur Gretton's usage, whose videos I watched to learn this subject.
The relevance of positive definiteness is that if
a function is a kernel, then it must be positive definite:

__Theorem__: Let $$X$$ be a non-empty set, $$H$$ be a Hilbert space and $$\Phi: X \rightarrow H$$.
Then $$k(x,x') = \langle \Phi(x),\Phi(x')\rangle_H$$ is positive definite.

<details>
<summary>Proof</summary>
\begin{align*}
\sum_i \sum_j a_i a_j k(x_i, x_j)
&= \sum_i \sum_j \langle a_i \Phi(x_i), a_j \Phi(x_j) \rangle_H\\
&= \langle \sum_i a_i \Phi(x_i), \sum_j a_j \Phi(x_j) \rangle_H\\
&= ||\sum_i a_i \Phi(x_i) ||_H^2\\
&\geq 0
\end{align*}
</details>

TODO: Show proof that converse is true i.e. that in positive definite $$k(x,x')$$ is inner product in a
unique $$\mathcal{H}$$.

### Properties of Positive Definite Kernels

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

### Kernels are inner products in some feature space

Positive definite (PD) kernels are also called __reproducing kernels__ and we're about to
understand why. The key idea is that any PD kernel can be viewed as a dot product in some
space.

Suppose we're given a kernel $$k(\cdot, cdot)$$. How can we see that this kernel defines a
dot product in some space? We need three ingredients: a vector/function space, a function
$$\langle \cdot, \cdot \rangle : X \times X \rightarrow \mathbb{R}$$ and a proof
that this function is indeed an inner product.

First, we'll define the vector/function space, which is also commonly called the __feature
space__. We define a function $$\Phi: X \rightarrow \mathbb{R}^{X}$$, where $$\mathbb{R}^{X}$$
denotes a function mapping $$X \rightarrow R$$. This means that for any $$x \in X$$, we can
define a vector/function $$\Phi(x) = k(\cdot, x)$$. I despise this notation, called the canonical
feature map, because the notation obscures that __$$\Phi(x)$$ is a function with an unfilled
argument__. If we're given a set of $$\{x_i\}_{i}$$, we can then define a function space as
the span of the corresponding feature maps:

$$ \text{span}\{ \Phi(x_i) \} = \text{span} \{ k(\cdot, x_i) \}$$

Second, we need to define an inner product. Let $$f(\cdot) = \sum_i \alpha_i \Phi(x_i)$$
and let $$g(\cdot) = \sum_i \beta_i \Phi(x_i)$$ be two functions in our function space.
We define the inner product as:

$$\langle f, g \rangle = \sum_i \sum_j \alpha_i \overbar{\beta_j} k(x_i, x_j)$$

Third, we show that this inner product is indeed an inner product. This requires meeting
[three properties](linear_algebra.md#inner-product-spaces): Hermitian symmetry, conjugate
bilinearity and non-negativity, with equality to zero implying the arguments are the same.
The above definition is clearly Hermitian symmetric and conjugate bilinear, and we know
that non-negativity is met because the kernel is positive definite.

The opposite direction also holds. Suppose $$\Phi: X \rightarrow \mathbb{R}$$ is given.
If we define a kernel as $$k(x_i, x_j) = \langle \Phi(x_i), \Phi(x_j) \rangle$$, then the
kernel is positive definite:

$$\sum_i \sum_j c_i c_j k(x_i, x_j) = \langle \sum_i c_i \Phi(x_i), \sum_j c_j \Phi(x_j) \rangle
= || \sum_i c_i \Phi(x_i)||^2 \geq 0 $$

To summarize, $\forall x_i, x_j \in X$$:

$$k(x_i, x_j) = \langle \Phi(x_i), \Phi(x_j) \rangle = \langle k(\cdot, x_i), k(\cdot, x_j) \rangle $$

