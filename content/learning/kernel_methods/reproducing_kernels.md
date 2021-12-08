# Reproducing Kernels

[Aronszajn's theorem](kernels.md) tells us that there is an equivalence between kernel functions
and feature maps + inner products. However, it says nothing about the uniqueness
or importance of any particular Hilbert space or kernel. However, there is one kernel that is more
important than all others: the reproducing kernel (RK).

## Definitions

When thinking about the reproducing kernel (RK), we think of a Hilbert space of functions from $$X$$ to $$\mathbb{R}$$;
that is, each $$x \in X$$ will be represented by $$\phi(x) := K_x \in H$$.

__Definition 1__: Let $$X$$ be a set and $$H \subset \mathbb{R}^X $$ be a Hilbert space of functions
with inner product $$\langle \rangle_H$$. The function $$K: X \times X \rightarrow \mathbb{R}$$ is called
the reproducing kernel of $$H$$ if

1. $$H$$ contains all functions of the form: $$\forall x \in X, K_x: x' \rightarrow K(x, x')$$
2. $$\forall x \in X and f \in H$$, the reproducing property holds: $$f(x) = \langle f, K_x \rangle_H

If a RK exists, we say that H is its corresponding RKHS.

__Definition 2__: The HIlbert space $$H \subset \mathbb{R}^X$$ is a RKHS if and only if $$\forall x \in X$$,
the linear mapping $$F: H \rightarrow \mathbb{R}$$ is continuous. That is, if we fix some $$k$$ and we move
in the Hilbert space, we'll be able to find a $$f$$ such that $$f \rightarrow f(x)$$.

__Definition 3__: let $$X$$ be a non-empty set and $$H$$ a Hilbert space of functions $$f: X \rightarrow
\mathbb{R}$$. H is called a RKHS if there exists a function $$k: X \times X \rightarrow \mathbb{R}$$
(i.e. a kernel) with the following properties:

1. $$k$$ is reproducing i.e. $$\forall f(\cdot) \in H, \langle f(\cdot), k(\cdot, x) \rangle = f(x)$$.
   Importantly, $$\langle k(x_i, \cdot), k(x_j, \cdot) \rangle = k(x_i, x_j)$$.

2. $$k$$ spans $$H$$ i.e. $$H = \overbar{\text{span} \{k(x, \cdot) | x \in X \}}$$, where the overline
   denotes completion of the space i.e. adding all limits of all Cauchy sequences.

__Corollary__: if $$(f_n)_n$$ converges to $$f \in H$$, then $$(f_n(x))_n$$ converges to $$f(x)$$. In english,
convergence in the RKHS implies pointwise converges of the function.

## Properties

- If $$H$$ is a RKHS, it has a unique RK.

Proof: Suppose for purposes of contradiction, the RKHS $$H$$ has two RKs $$K, K'$$. Then $$\forall x \in X$$

$$
\begin{align*}
||K_x - K_x'||_H^2 &= \langle K_x - K_x', K_x - K_x' \rangle\\
&= K_x(x) - K_x(x) - K_x^'(x) + K_x^'(x)$$
&= 0
\end{align*}
$$

- A function $$K$$ can be the RK of at most 1 RKHS