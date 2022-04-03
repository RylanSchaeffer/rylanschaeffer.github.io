# Hilbert Space

A Hilbert space $$\mathcal{H}$$ is an [inner product space](../linear_algebra/inner_product.md) that is
**separable** and -**complete**. Separable means and complete means that the limits of
all Cauchy Sequences are also in $$\mathcal{H}$$ e.g. $$\mathbb{R}$$ is ok, but $$\mathbb{Q}$$ is not.

## Example Hilbert Spaces

- The finite-dimensional reals $$\mathbb{R}^D$$ with inner product $$\langle u, v \rangle := \sum_{d=1}^D u_d v_d^*$$

- $$\ell^2 := \{ u \in \mathbb{R}^{\mathbb{N}} : \sum_n u_n^2 < \infty$$ with inner product
  $$\langle u, v \rangle := \sum_{n} u_n v_n^*$$

- $$L^2([0, T]) := \{ f: X \rightarrow \mathbb{C} : \int_0^T |f(x)|^2 dx < \infty$$ with inner product
  $$\langle u, v \rangle := \int u(x) v(x)^* dx$$

  
## Properties

- $$L^2$$ is the only Hilbert space of the $$L^p$$ spaces.

- Any Hilbert space possess an orthonormal basis $$\{ \phi_n \}_{n \geq 1}$$ which
  satisfies $$\langle \phi_n, \phi_m \rangle = \delta_{n, m}$$, where $$\delta_{n, m}$$ 
  is the Kronecker delta.

- A consequence of Hilbert spaces possessing orthonormal bases is that any function in a space
  can be expressed as a linear combination of that space's basis.

- All elements of a Hilbert space can create linear functionals in that space. Specifically, if $$f \in \mathcal{H}$$,
  then we can define a functional $$F: \mathcal{H} \rightarrow \mathbb{C}$$ as 
  $$F_f(g) := \langle f, g \rangle$$

- Relatedly, for any **continuous** linear functional $$F: \mathcal{H} \rightarrow \mathbb{C}$$, 
  there exists an element $$f$$ in the Hilbert space such that the functional is given by the inner product:
    $$F(g) = \langle f , g \rangle$$

Continuity is necessary! Otherwise, this doesn't work. For example, suppose we want to find $$f$$
to construct the functional $$ F_f(g) := g(x)$$. We know that we must be able to write this functional
as an inner product $$ \int g(t) f(t)^* dt$$, but the only function that can result in $$g(x) = \int g(t) f(t)^* dt$$
is the Dirac delta function $$\delta(x)$$, but it doesn't belong to the Hilbert space!

## Bases of Hilbert Spaces

One common orthonormal basis for the Hilbert spaces $$L^2([0, T])$$ is the Fourier basis, defined as:

$$ \phi_n(t) := \frac{1}{\sqrt{T}} e^{i \frac{2 \pi n}{T} t}$$

This basis is orthonormal because

$$
\begin{align*}
\langle \phi_n, \phi_m \rangle_{\mathcal{H}}
&= \frac{1}{T} \int_{0}^T e^{i \frac{2 \pi n}{T} t} e^{-i \frac{2 \pi m}{T} t} dt\\
&=\frac{1}{i 2 \pi (n-m)} e^{i \frac{2 \pi (n - m)}{T} t} \lvert_{0}^T\\
&= \begin{cases}1 & n = m \\ 0 & n \neq m \end{cases}
\end{align*}
$$

