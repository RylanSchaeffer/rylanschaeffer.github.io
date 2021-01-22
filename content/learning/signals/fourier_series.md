# Fourier Series

A period function $f(x)$ with period $T$ i.e. $f(x+T) = f(x)$ can be represented
as a weighted sum of infinitely many sinusoids, called a Fourier series. There are 
two common ways of writing this series, the first with real coefficients:

$$f(x) = \sum_{n=0}^{\infty} a_n \cos(nx) + b_n \sin(nx)$$

and the second with complex coefficients:

$$f(x) = \sum_{-\infty}^{\infty} c_n e^{inx} $$


## Hilbert Space Interpretation

For me, Fourier series clicked when they were explained as an orthogonal basis for
the space of square-integrable functions on $[-\pi, \pi]$, denotes $L^2([-\pi, \pi])$.
To see this, let's consider the inner product between $e^{inx}$ and $e^{ikx}$ with
$n, k \in \mathbf{Z}$:

$$\langle e^{inx}, e^{ikx} \rangle = \int_{-\pi}^{\pi}e^{inx} \overline{e^{ikx}} dx = \int_{-\pi}^{\pi}e^{inx} e^{-ikx} dx$$

If $$n=k$$, the inner product evaluates straightforwardly to

$$\langle e^{inx}, e^{ikx} \rangle = \int_{-\pi}^{\pi} dx = \pi - (-\pi) = 2 \pi$$

If $$n \neq k$$, the inner product requires a bit more work:

$$
\begin{align*}
\langle e^{inx}, e^{ikx} \rangle &= \int_{-\pi}^{\pi} e^{i(n-k)x} dx\\
&= \frac{1}{i(n-k)} e^{i(n-k)x} \Big\lvert_{x=-\pi}^{x=\pi}\\
&= \frac{1}{i(n-k)} (e^{i(n-k)\pi} - e^{-i(n-k)\pi})\\
&= \frac{2 \sin((n-k)\pi)}{m}\\
&= 0
\end{align*}
$$

where we used three properties: (1) $$\cos(x) = \cos(-x)$$, (2) $$\sin(-x) = -\sin(x)$$, 
and (3) for any integer $$m \neq 0, \sin(m \pi) = 0$$.


## Fourier Series for Key Functions

### Delta Function

$$\delta(x)$$ is an even function i.e. $$\delta(x) = \delta(-x)$$, so we expect that all the
sin terms (the asymmetric terms) will vanish. Let's practice using the complex exponential
representation of the Fourier series. Define

$$\delta(x) = \sum_{n=-\infty}^{\infty} c_n e^{i n x}$$

The complex coefficient for the $$k$$th term, $$c_k$$, is found by solving:

$$
\begin{align*}
\langle \delta(x), e^{ikx} \rangle &= \langle \sum_{n=-\infty}^{\infty} c_n e^{i n x},  e^{i k x} \rangle\\
\int_{-\pi}^{\pi} \delta(x) e^{-ikx} dx &=  \sum_{n=-\infty}^{\infty} c_n \langle e^{i n x}, e^{i k x} \rangle\\
e^{-ik(0)} &= 2 \pi c_k\\
\frac{1}{2\pi} &= c_k
\end{align*}
$$

This tells us a remarkable fact: the series never decays! Every term has the same coefficient.
This tells us that the delta function has all frequencies represented with equal strength.