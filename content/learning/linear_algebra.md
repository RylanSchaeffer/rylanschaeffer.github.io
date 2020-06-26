# Linear Algebra

## Inner Product Spaces

An __inner product space__ is a vector space $$V$$ equipped with an __inner product__,
a function $$\langle \cdot, \cdot \rangle: V \times V \rightarrow \mathbb{F}$$ (where
$$\mathbb{F}$$ is either the real numbers or the complex numbers) satisfying three properties:

1. Hermitian Symmetric: $$\langle x, y \rangle = \bar{\langle y, x \rangle}$$

2. Conjugate Bilinear: $$\langle a x + by, z \rangle = a \langle x , z \rangle + b\langle y, z \rangle$$

and

$$\langle x, a y + b z \rangle = \bar{a} \langle x, y \rangle + \bar{b} \langle x, z \rangle$$

3. Positive definite: $$\langle x, x \rangle \geq 0$$ and $$\langle x, x \rangle = 0 \Leftrightarrow x = 0$$

## Hilbert Spaces

Inner product spaces containing limits of Cauchy Sequences

Infinite sequences: the space $$l_2$$ (square summable sequences) coimprises all
sequences $$a = (a_i)_{i \in \mathbb{N}}$$ for which

$$ ||a||_{l_2}^2 = \sum_{i=1}^{\infty}a_i^2 < \infty$$


## Unitary (Orthogonal) Matrices

A square matrix is __unitary__ if its transpose is its inverse i.e. $$U^{-1} = 
U^T$$. One key utility of unitary matrices is that they leave the dot product
invariant i.e.

$$\langle U x, U y \rangle = \langle U{-1} U x, y \rangle = \langle U^T U x, y
\ranngle = \langle x, y \rangle$$