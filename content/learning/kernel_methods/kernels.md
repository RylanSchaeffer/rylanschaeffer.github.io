# Kernels

## Kernel Functions

Intuitively, a kernel function is a function that takes two elements from some space
$$x, x' \in \mathcal{X}$$, constructs feature vectors or feature functions for each
$$\phi(x), \phi(x')$$ and then computes an inner products of those features.


More formally, let $$X$$ be a non-empty set. A function $$k: \mathcal{X} \times 
\mathcal{X} \rightarrow \mathbb{R}$$ is
a **kernel function** if there exists an $$\mathbb{R}$$-Hibert space $$H$$ and a so-called feature map $$\Phi: X
\rightarrow H$$ such that $$\forall x, x' \in X$$,

$$ k(x, x') = \langle \Phi(x), \Phi(x') \rangle $$

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
