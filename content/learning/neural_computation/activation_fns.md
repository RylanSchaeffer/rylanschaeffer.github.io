# Activation Functions

## Logistic Sigmoid

The logistic sigmoid function $$\sigma(x) = \frac{1}{1+e^{-x}} = \frac{e^x}{e^x + 1}$$.

## Hyperbolic Tangent

The hyperbolic tangent function $$\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
= \frac{e^{2x} - 1}{e^{2x} + 1}$$.


## Relationship between Logistic Sigmoid and Hyperbolic Tangent

The logistic sigmoid and the hyperbolic tangent functions can be
expressed as transformation of each other. Specifically,

$$
\begin{align*}
\tanh(x) &\defeq \frac{e^{2x} - 1}{e^{2x} + 1}
= \frac{2e^{2x}}{e^{2x} + 1} - \frac{e^{2x} + 1}{e^{2x} + 1}
= 2 \frac{e^{2x}}{e^{2x}} \frac{1}{1 + e^{-2x}} - 1
= 2 \sigma(2x) - 1
\end{align*}
$$

And therefore equivalently:

$$
\begin{align*}
\sigma(x) = \frac{\tanh(x/2) + 1}{2}
\end{align*}
$$

The consequence of this relationship is that the choice of activation
function between the two doesn't much matter since each is capable of
representing the one. That is, if a single scalar output from
a single layer of a network using $\sigma()$ is
$y(x, w) = w_0 + \sum w_i \sigma(x)$, then we can construct an equivalent
network using $\tanh$ by defining $y(x, w') = w_0' + \sum w_i' \tanh(x/2)$
where $w_0' = w_0 + \sum w_i / 2$ and $w_i' = w_i / 2$ for $i \neq 0$. Then
$y(x, w) = y(x, w')$.
