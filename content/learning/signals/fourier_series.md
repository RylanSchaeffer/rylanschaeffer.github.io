# Fourier Series

A period function $f(x)$ with period $T$ i.e. $f(x+T) = f(x)$ can be represented
as a weighted sum of infinitely many sinusoids, called a Fourier series. There are 
two common ways of writing this series, the first with real coefficients:

$$f(x) = \sum_{n=0}^{\infty} a_n \cos(nx) + b_n \sin(nx)$$

and the second with complex coefficients:

$$f(x) = \sum_{-\infty}^{\infty} c_n e^{inx} $$


## Hilbert Space Interpretation

For me, Fourier series clicked when they were explained as a orthogonal basis for a
particular function space $L^2([-\pi, \pi])$ i.e. the space of square-integrable functions
on $[-\pi, \pi]$. To see this, let's consider the inner product between $e^{inx}$ and $e^{ikx}$
with $n, k \in \mathbf{Z}$:

$$\langle e^{inx}, e^{ikx} \rangle = \int_{-\pi}^{\pi}e^{inx} \overbar{e^{ikx}} dx = \int_{-\pi}^{\pi}e^{inx} e^{-ikx} dx$$

If $n=k$, the inner product evaluates to

$$\langle e^{inx}, e^{ikx} \rangle = \int_{-\pi}^{\pi} dx = \pi - (-\pi) = 2 \pi$$

If $n \neq k$, the inner product evaluates to

$$\langle e^{inx}, e^{ikx} \rangle = \int_{-\pi}^{\pi} e^{i(n-k)x} dx = 0$$

where the last equality follows from the fact that $n-k$ is some integer and the integral
with an integer prefactor in the exponential evaluates to 0 i.e. $\forall m \neq 0 \in \mathbb{Z}$:

\begin{align*}
\int_{-\pi}^{\pi} e^{i m x} dx &= \int_{-\pi}^{\pi} \cos(m x) + i \sin(m x) dx\\
&= \sin(m x)/m \lvert_{x=-\pi}^{\pi} - i \cos(m x)/m  \lvert_{x=-\pi}^{\pi}\\
&= \sin(\pi m)/m - \sin(-\pi m)/m - i \cos(m \pi)/m + i \cos(- m \pi)/m \\
&= \sin(\pi m)/m - \sin(\pi m) / m - 0 + 0\\
&= 0
\end{align*}

where we used the property that $\cos(m \pi) = 0$
