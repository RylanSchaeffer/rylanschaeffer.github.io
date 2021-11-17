# Kernel Methods

At a high level, kernel methods are a machine learning approach that works by
first transforming any data (images, songs, etc.) into (possibly infinite dimensional) feature spaces
and then comparing the similarity of features through an inner product. Consequently,
kernel methods are typically applicable when data is rotationally invariant.

## Background

- [Introduction](kernel_methods/introduction.md)
- [Inner product spaces](/content/learning/linear_algebra.html#inner-product-spaces)
- [Hilbert spaces](/content/learning/linear_algebra.html#hilbert-spaces).

## Kernels

Simply, a kernel is a dot product between features of objects. Formally,
let $$X$$ be a non-empty set. A function $$k: X \times X \rightarrow \mathbb{R}$$ is 
a kernel if there exists an $$\mathbb{R}$$-Hibert space $$H$$ and a so-called feature map $$\Phi: X
\rightarrow H$$ such that $$\forall x, x' \in X$$,

$$ k(x, x') = \langle \Phi(x), \Phi(x') \rangle $$

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

### Example Kernels

- Exponential: $$k(x, x') = \exp(\langle x, x' \rangle)$$

- Gaussian:  $$k(x,x') = \exp(-\gamma^{-2} \langle x - x', x - x' \rangle)$$

### Determining Validity of Kernels

Suppose we're given a function with two arguments $$k(x, x')$$. How can we determine whether
the function is a valid kernel? We might consider two options.

- Check the __positive definiteness__ of the kernel.

- Find a feature map $$\Phi$$ satisfying the requirement that $$k(x,x') = 
\langle \Phi(x),\Phi(x') \rangle$$.

We'll consider each in turn.

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

## Reproducing Kernel Hilbert Spaces

We finally reach the definition of a Reproducing Kernel Hilbert Space (RKHS). 

Formally, let $$X$$ be a non-empty set and $$H$$ a Hilbert space of functions $$f: X \rightarrow
\mathbb{R}$$. H is called a RKHS if there exists a function $$k: X \times X \rightarrow \mathbb{R}$$
(i.e. a kernel) with the following properties:
 
1. $$k$$ is reproducing i.e. $$\forall f(\cdot) \in H, \langle f(\cdot), k(\cdot, x) \rangle = f(x)$$.
Importantly, $$\langle k(x_i, \cdot), k(x_j, \cdot) \rangle = k(x_i, x_j)$$.

2. $$k$$ spans $$H$$ i.e. $$H = \overbar{\text{span} \{k(x, \cdot) | x \in X \}}$$, where the overline
denotes completion of the space i.e. adding all limits of all Cauchy sequences.

### Properties

- An RKHS has only one kernel $$k$$.

<details>
<summary>Proof</summary>
Proof by contradiction: Assume there exist two kernels $$k, k'$$ spanning $$H$$. Using the
reproducing property:

$$ \langle k(x_i, \cdot), k'(x_j, \cdot) \rangle = k(x_i, x_j) = k(x_j,x_i) = k'(x_i, x_j) = k'(x_j, x_i)$$
</details>

- By the Riesz Representation Theorem, $$\forall x' \in X, \exists \text{ a unique function of } x$$
such that $$f(x') = \langle f(\cdot), k(\cdot, x')\rangle $$ 