# Dot and Inner Products

An inner product is a function that generalizes the dot product. Consequently, we'll 
start by defining a dot product and then move onto the inner product.

## Dot Product


## Inner Product

An __inner product__ is a function $$f: V \times V \rightarrow \mathbb{F}$$ (where
$$\mathbb{F}$$ is either the real numbers or the complex numbers) satisfying three properties.
Here, $$x, y, z \in X$$ and $$a, b \in \mathbb{C}$$.

1. Hermitian Symmetric: $$\langle x, y \rangle = \bar{\langle y, x \rangle}$$

2. Conjugate Bilinear: $$\langle a x + by, z \rangle = a \langle x , z \rangle + b\langle y, z \rangle$$

3. Positive definite: $$\langle x, x \rangle \geq 0$$ and $$\langle x, x \rangle = 0 \Leftrightarrow x = 0$$

An __inner product space__ is a vector space $$V$$ equipped with an __inner product__ 
on that linear space.