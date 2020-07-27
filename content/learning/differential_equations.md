# Calculus

## Ordinary Differential Equations

An ordinary differential equation is an equation that relates a function e.g. $y(x)$
to its derivative e.g. $\frac{dy(x)}{dx}, \frac{d^2y(x)}{dx^2}$. Two example might be:

$$\frac{dy(x)}{dx} = x , \quad \frac{d^2 y(x)}{d^2 x} = x + \sin(x)$$

Each differential equation can be viewed as an operator that maps elements of a set
to elements of the same set. Using the above example, suppose that $y(x)$ and $\frac{dy(x)}{dx}$
are both elements of the set of continuous, differentiable functions over the interval
$[a, b]$, which we'll write as $C^1(a, b)$. Then we can define an operator $l: C^1(a, b)
\rightarrow C^1(a, b)$:

$$l(y(x)) = \frac{dy(x)}{dx} - x$$

We say that the operator is <b>linear</b> if it satisfies two properties: element addition
and scalar multiplication. Element addition means that $\forall y_1, y_2 \in C^1(a, b)$,

$$l(y_1(x) + y_2(x)) = l(y_1) + l(y_2)$$

Scalar multiplication means that $\forall \lambda \in \mathbb{R}, \forall y \in C^1(a, b)$,

$$ l(\lambda y(x)) = \lambda l(y(x)) $$

For brevity, we'll often omit the argument to the function and just write $$y$$.
<a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
  3Blue1Brown</a> has an amazing series on what linear operators mean geometrically, so for
that insight, I highly recommend watching his material.
