# Eigenvectors and Eigenvalues

For a given square matrix $$A$$, the vector $$x$$ is an eigenvector of $$A$$ with corresponding
eigenvalue $$\lambda \in \mathbb{R}$$ if

$$A x = \lambda x$$.

Geometrically, this means that the linear transformation $$A$$ applied to $$x$$ doesn't change
the direction of $$x$$ i.e. $$A$$ either stretches, compresses or reflects $$x$$ in the opposite
direction.

Properties:

1. If $$M$$ is an invertible linear map, the eigenvalues of $$A$$ are the same eigenvalues of $$M^{-1} A
   M$$. To see why, suppose $$y$$ is an eigenvector of $$M^{-1} A M$$ with eigenvalue $$\mu$$:

$$M^{-1} A M y = \mu y \rightarrow A M y = \mu M y \rightarrow My$$

The implication is that a change of variables from $$y$$ to $$M y$$ doesn't affect the eigenvalues
of $$A$$ but changes the eigenvectors from $$y$$ to $$My$$ (so long as M is invertible).

### Eigenvalues of Special Matrices

- If square $$A$$ is real and symmetric, then its eigenvalues are real. To see why, consider
  an eigenvalue-eigenvector pair $$(\lambda, v)$$:

$$v^T A \overline{v} = v^T \overline{A v} = \overline{\lambda} v^T \overline{v}$$

and we also have

$$v^T A \overline{v} = v^T A^T \overline{v} = \lambda v^T \overline{v}$$

Consequently, $$\lambda = \overline{\lambda}$$ and thus $$\lambda$$ must be real.
