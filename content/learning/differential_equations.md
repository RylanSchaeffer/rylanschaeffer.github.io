# Calculus

## Ordinary Differential Equations

An ordinary differential equation (ODE) is an equation that relates a function e.g. $y(x)$
to its derivative e.g. $\frac{dy(x)}{dx}, \frac{d^2y(x)}{dx^2}$. Two example might be:

$$\frac{dy(x)}{dx} = x , \quad \frac{d^2 y(x)}{d^2 x} = x + \sin(x)$$

Each differential equation can be viewed as an operator that maps elements of a set
to elements of the same set. Using the above example, suppose that $$y(x)$$ and $$\frac{dy(x)}{dx}$$
are both elements of the set of continuous, differentiable functions over the interval
$$[a, b]$$, denoted $$C^1(a, b)$$. Then we can define an operator $$l: C^1(a, b)
\rightarrow C^1(a, b)$$:

$$l(y(x)) = \frac{dy(x)}{dx} - x$$

### Linear ODEs

We say that the operator is <b>linear</b> if it satisfies two properties: element addition
and scalar multiplication. Element addition means that $$\forall y_1, y_2 \in C^1(a, b)$$,

$$l(y_1(x) + y_2(x)) = l(y_1) + l(y_2)$$

Scalar multiplication means that $$\forall \lambda \in \mathbb{R}, \forall y \in C^1(a, b)$$,

$$ l(\lambda y(x)) = \lambda l(y(x)) $$

For brevity, we'll often omit the argument to the function and just write $$y$$.
<a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
  3Blue1Brown</a> has an amazing series on what linear operators mean geometrically, so for
that insight, I highly recommend watching his material.

An important point is that a complete solution
to any linear equation $$l(y) = h(x)$$ has two parts: the null solution $$y_n$$, which solves
the homogeneous equation $$l(y) = 0$$, and the particular solution $$y_p$$, which solves the
inhomogeneous equation $$l(y) = h(x)$$. The sum of the two solutions provides the complete
solution due to linearity:

$$l(y_p + y_n) = l(y_p) + l(y_n) = h(x) + 0 = h(x) $$

### Linear, First Order ODEs

A generic linear, first-order ODE can be written as:

$$ a(x) y'(x) + b(x) y(x) = h(x)$$

To be clear, the linear operator here is $$l(y) = a(x) y'(x) + b(x) y(x)$$. We start by trying
to find the null solution. This corresponds to identifying what the kernel of the operator is.
Recall that for any operator $l$ from one set to another, the kernel of the operator is the set
of inputs that map to 0 i.e. $$\ker(l) \defeq \{v \in V : l(v) = 0 \}$$. One property worth
noting is that for a first-order linear operator $$l: V \rightarrow V$$
with $$l(y) = a(x) y'(x) + b(x) y(x)$$, the kernel of $$l$$ is one dimensional. To see this, we
see that the solution $y_n$ to the <b>homogeneous</b> equation is:

$$l(y) = 0 \Leftrightarrow  ay_n' + by_n = 0 \Leftrightarrow \frac{y_n'}{y_n} = \frac{b}{a} \Leftrightarrow
y_n = c \exp \Big(- \int_{x_0}^x \frac{b(t)}{a(t)} dt \Big) \Leftrightarrow \ker(l) = \text{span}(
\exp \Big(- \int_{x_0}^x \frac{b(t)}{a(t)} dt \Big))$$

This tells us a useful property about the linear operator. Suppose we have one solution $$y_p$$ to
the <b>inhomogeneous</b> equation $l(y) = h(x)$. Then any other solution can be written as
the particular solution plus some constant times the homogeneous aka null solution, $y = y_p + c y_n$.

$$l(y - y_p) = l(y) - l(y_p) = h(x) - h(x) = 0 \Leftrightarrow y - y_p \in \ker(l) \Leftrightarrow
y - y_p = c y_n \Leftrightarrow y = y_p + c y_n$$

#### Solving with an integrating factor

What about the inhomogeneous case i.e. when $h(x) \neq 0$? If $a(x) \neq 0$, one way
we can find the solution $y(x)$ is is by using a function $f(x)$ called an integrating
factor. To see where the idea arises, let's divide both sides by $a(x)$. For brevity, I
drop $x$.

$$y' + \frac{b}{a} y = \frac{h}{a}$$

Suppose there exists a function $f(x)$ such that $\frac{1}{f}(fy)' = y' + \frac{b}{a} y$.
If we could find such a function, we could use it to solve the differential
equation:

\begin{align*}
y' + \frac{b}{a} y &= \frac{h}{a}\\
\frac{1}{f}(fy)' &= \\
f y - f(x_0)y(x_0) &= \int_{t=x_0}^t \frac{h(t) f(t)}{a(t)} \, dt\\
y(x)  &= \frac{f(x_0)}{f(x)} y(x_0) + \frac{1}{f(x)} \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt\\
\end{align*}

The key insight was to express the inconvenient $y' + \frac{b}{a} y$ as a
derivative $(fy)'$ that we could easily integrate. The question is now how to find $f(x)$.
We start by setting $\frac{1}{f}(fy)' = y' + \frac{b}{a} y$ and then solve for $f(x)$:

\begin{align*}
\frac{1}{f}(fy)' &= y' + \frac{b}{a} y\\
\frac{1}{f}(f' y + y f') &= y' + \frac{b}{a} y\\
\frac{f'}{f} &= \frac{b}{a}\\
\log f(x) - \log f(x_0) &= \int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt\\
f(x) &= f(x_0) \exp \Big(\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big)
\end{align*}
