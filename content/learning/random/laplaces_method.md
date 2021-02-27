# Laplace's Method

Laplace's Method is a technique for approximating integrals of the form

$$\int_a^b \exp (N f(x)) dx$$

where $$f(x)$$ is a twice-differentiable function and $$N$$ is large. An extension
of the method to the complex plane is called the saddle point approximation or
the method of steepest descent.

Suppose $$x^*$$ is a global maximizer of $$f(x)$$. If we Taylor Series expand about
$$x^*$$, we get:

$$f(x) = f(x^*) + (x - x^*) \partial_x f(x) \lvert_{x^*} + \frac{1}{2}(x - x^*)^2 \partial_x^2 f(x)\lvert_{x^*} + HOT$$

Because $$x^*$$ is a global maximizer of $$f(x)$$, we know that

1. $$\partial_x f(x)\lvert_{x^*} = 0$$, by virtue of being a fixed point

2. $$\partial_x^2 f(x) \lvert_{x^*} < 0$$, by virtual of being a maximum

Plugging in the Taylor Series approximation, we have

$$
\begin{align*}
\int_a^b \exp (N f(x)) dx &\approx \int_{-\infty}^{\infty} \exp (N f(x)) dx\\
&\approx \int_{-\infty}^{\infty} \exp (N f(x^*) + (x - x^*) \partial_x f(x) \lvert_{x^*} + \frac{1}{2}(x - x^*)^2 \partial_x^2 f(x)\lvert_{x^*}) dx\\
&=\exp(N f(x^*)) \int_{-\infty}^{\infty} \exp (-\frac{1}{2}(x - x^*)^2 |\partial_x^2 f(x)\lvert_{x^*}|) dx\\
&=\exp(N f(x^*)) \sqrt \Big( \frac{2 \pi}{N|\partial_x^2 f(x)\lvert_{x^*}} \Big)
\end{align*}
$$

where the last step follows from the Gaussian integral.