# Linear Algebra

## Inner Product Spaces

An __inner product space__ is a vector space $$V$$ equipped with an __inner product__,
a function $$\langle \cdot, \cdot \rangle: V \times V \rightarrow F$$, where 
$$F$$ is either the real numbers or the complex numbers, satisfying three properties:

1. Hermitian Symmetric: $$\langle x, y \rangle = \bar{\langle y, x \rangle}$$
2. Conjugate Bilinear: $$\langle a x + by, z \rangle = a \langle x , z \rangle
+ b\langle y, z \rangle$$ and $$\langle x, a y + b z \rangle = \bar{a} \langle
 x, y \rangle + \bar{b} \langle x, z \rangle$$



3. Positive definite: $$\langle x, x \rangle \geq 0$$ and $$\langle x, x \rangle 
= 0 \Leftrightarrow x = 0$$



