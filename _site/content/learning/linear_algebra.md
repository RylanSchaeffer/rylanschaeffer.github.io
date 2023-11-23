# Linear Algebra

- [Linear Space](linear_algebra/linear_space.md)
- [Inner Products](linear_algebra/inner_product.md)
- [Norms](linear_algebra/norm.md)
- [Eigenvectors and Eigenvalues](linear_algebra/eigen.md)


## Unitary (Orthogonal) Matrices

A square matrix is __unitary__ if its transpose is its inverse i.e. $$U^{-1} = 
U^T$$. One key utility of unitary matrices is that they leave the dot product
invariant i.e.

$$\langle U x, U y \rangle = \langle U{-1} U x, y \rangle = \langle U^T U x, y
\rangle = \langle x, y \rangle$$