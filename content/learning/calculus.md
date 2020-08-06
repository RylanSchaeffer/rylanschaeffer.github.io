# Calculus

## Leibniz Integral Rule

When can we swap the order of integration and differentiation? Suppose we have

$$ \partial_{y} \int_{a(y)}^{b(y)} f(x, y) dx$$

Using the Fundamental Theorem of Calculus, we can answer this question. First, replace
the integral with the integrated function:

$$
\begin{align*}
\partial_{y} \int_{a(y)}^{b(y)} f(x, y) dx
&=\partial_{y} [F(b(y), y) - F(a(y), y)]\\
&= f(b(y), y) \partial_y b(y) + f(b(y), y) - f(a(y), y) \partial_y a(y) + f(a(y), y)\\
&= f(b(y), y) \partial_y b(y) - f(a(y), y) \partial_y a(y) + \int_{a(y)}^{b(y)} \partial_y f(x, y) dx\\
\end{align*}
$$

This is also commonly called differentiating under the integral sign.