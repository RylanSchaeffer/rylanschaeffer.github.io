# Moore-Penrose Psuedoinverse

Let $$A \in \mathbb{K}^{m \times n}$$, where $$\mathbb{K}$$ is $$\mathbb{R}$$ or $$\mathbb{C}$$.
The Moore-Penrose psuedoinverse of $A$ is the unique $n \times m$ matrix $A^+$ such that:



If $$A$$ is full rank $$R=\min(m, n)$$, then:

1. If $$A$$ has linearly independent columns == $$A^* A$$ is invertible, then

$$A^+ = (A^* A)^{-1} A^* \in \mathbb{K}^{n \times m}$$

is a _left_ inverse of $$A$$ i.e. $$A^+ A = I_{n \times n}$$

2. If $$A$$ has linearly independent rows == $$A A^*$$ is invertible, then

$$A^+ = A^* (A A^*)^{-1} \in \mathbb{K}^{n \times m}$$

is a _right_ inverse of $$A$$ i.e. $$A A^+ = I_{m \times m}$$