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

__Corollary__: if $$(f_n)_n$$ converges to $$f \in H$$, then $$(f_n(x))_n$$ converges to $$f(x)$$. In english,
convergence in the RKHS implies pointwise converges of the function.

## Properties