# Ordinary Differential Equations

An ordinary differential equation (ODE) is an equation that relates a function e.g. $y(x)$
to its derivative. Two example might be:

$$\frac{dy(x)}{dx} = x , \quad \frac{d^2 y(x)}{d^2 x} = x + \sin(x)$$

Each differential equation can be viewed as an operator that maps elements of a set
to elements of the same set. Using the above example, suppose that $$y(x)$$ and $$\frac{dy(x)}{dx}$$
are both elements of the set of continuous, differentiable functions over the interval
$$[a, b]$$, denoted $$C^1(a, b)$$. Then we can define an operator $$l: C^1(a, b)
\rightarrow C^1(a, b)$$:

$$l(y(x)) = \frac{dy(x)}{dx} - x$$

## Linear ODEs

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
the homogeneous equation $$l(y_n) = 0$$, and the particular solution $$y_p$$, which solves the
inhomogeneous equation $$l(y_p) = h(x)$$. The sum of the two solutions provides the complete
solution due to linearity:

$$l(y_p + y_n) = l(y_p) + l(y_n) = h(x) + 0 = h(x) $$

## Linear, First Order ODEs

A generic linear, first-order ODE can be written as:

$$ a(x) y'(x) + b(x) y(x) = h(x)$$

To be clear, the linear operator here is $$l(y) = a(x) y'(x) + b(x) y(x)$$.

### Dimension of Linear, 1st-Order Kernel

We start by trying to find the null solution, which corresponds to identifying what the kernel of the operator is.
Recall that for any operator $$l$$ from one set to another, the kernel of the operator is the set
of inputs that map to 0 i.e. $$\ker(l) \defeq \{v \in V : l(v) = 0 \}$$. One property worth
noting is that for a first-order linear operator $$l: V \rightarrow V$$
with $$l(y) = a(x) y'(x) + b(x) y(x)$$, the kernel of $$l$$ is one dimensional. To see this, we
see that the solution $y_n$ to the homogeneous equation is:

$$
\begin{align*}
l(y) &= 0 \Leftrightarrow  ay_n' + by_n = 0\\
\frac{y_n'}{y_n} &= \frac{b}{a}\\
y_n &= c \exp \Big(- \int_{x_0}^x \frac{b(t)}{a(t)} dt \Big)\\
\ker(l) &= \text{span}(
\exp \Big(- \int_{x_0}^x \frac{b(t)}{a(t)} dt \Big))
\end{align*}
$$

This tells us a useful property about the linear operator. Suppose we have one solution $$y_p$$ to
the <b>inhomogeneous</b> equation $l(y) = h(x)$. Then any other solution can be written as
the particular solution plus some constant times the homogeneous aka null solution, $y = y_p + c y_n$.

$$l(y - y_p) = l(y) - l(y_p) = h(x) - h(x) = 0 \Leftrightarrow y - y_p \in \ker(l) \Leftrightarrow
y - y_p = c y_n \Leftrightarrow y = y_p + c y_n$$

**Example**:

### Solving Linear, 1st-Order: Integrating factor

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

When we plug $f(x)$ back into our equation for $y(x)$, we see that the initial
condition $f(x_0)$ doesn't matter because it cancels out:

\begin{align*}
y  &= \frac{f(x_0)}{f(x)} y(x_0) + \frac{1}{f(x)} \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt\\
&= \exp \Big(-\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big) y(x_0) + \frac{1}{f(x_0)} \exp
  \Big(-\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big) \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt
\end{align*}

### Solving Linear, 1st-Order: Variation of Parameters

### Solving Linear, 1st-Order: Power Series Expansion

Another way to solve the differential equation is to Taylor Series expand both sides of the
system and match coefficients.

## Linear, 2nd-Order ODEs

### Solving Linear, 2nd-Order: Variation of Parameters

For the linear, first-order ODE, <a href="#linear_first_order_variation_of_parameters">we could
solve the equation by first finding
the null/homogeneous solution and then finding the particular/inhomogeneous
solution by treating the constant as a variable</a>. This approach will also work
for a linear, second-order ODE. Suppose we know

$$l(y) = a(x) y''(x) + b(x) y'(x) + c(x)y = h(x) \quad \text{ and } \quad \ker(l) = \{f_1(x), f_2(x) \}$$

The null/homogeneous solution (with constants $c_1, c_2 \in \mathbb{R}$) is

$$y_n(x) = c_1 f_1(x) + c_2 f_2(x) $$

We suppose that the particular/inhomogeneous solution might have the same form
but with variable coefficients:

$$ y_p(x) = c_1(x) f_1(x) + c_2(x) f_2(x) $$

Dropping $x$ for brevity and differentiating, we see that:

$$ y_p' = c_1' f_1 + c_1 f_1' + c_2' f_2 + c_2 f_2'$$

and that

$$ y_p'' = c_1 '' f_1 + 2 c_1' f_1' + c_1 f_1'' + 2 c_2' f_2 ' + c_2'' f_2 + c_2 f_2''$$

Plugging into the inhomogeneous equation, we see a mess of terms that we can
simplify a bit, taking advantage of the fact that some terms live in the kernel
of $l$:

\begin{align*}
h(x) &= l(y_p) = a y_p'' + b y_p' + c y\\
&= a (c_1 '' f_1 + 2 c_1' f_1' + c_1 f_1'' + 2 c_2' f_2 ' + c_2'' f_2 + c_2 f_2'') +
b (c_1' f_1 + c_1 f_1' + c_2' f_2 + c_2 f_2') + c(c_1(x) f_1(x) + c_2(x) f_2(x))\\
&= a (c_1'' f_1 + 2 c_1' f_1' + 2 c_2' f_2' + c_2'' f_2) +
b (c_1' f_1 + c_2' f_2) +
c_1 (a f_1'' + b f_1' + c f_1) + c_2 (a f_2'' + b f_2' + c f_2)\\
&= a (c_1'' f_1 + 2 c_1' f_1' + 2 c_2' f_2' + c_2'' f_2) +
b (c_1' f_1 + c_2' f_2) +
c_1 l(f_1) + c_2 l(f_2)\\
&= a (c_1'' f_1 + 2 c_1' f_1' + 2 c_2' f_2' + c_2'' f_2) +
b (c_1' f_1 + c_2' f_2) +
0 + 0\\
\end{align*}


Suppose someone gives you a hint and suggests that $c_1' f_1 + c_2' f_2 = 0$,
which also implies that its derivative $c_1'' f_1 + c_1' f_1' +
c_2'' f_2 + c_2' f_2' = 0$. This simplifies our equation tremendously:

$$h = a (c_1' f_1' + c_2' f_2') $$

The question now is whether we can find two functions, $c_1, c_2$, that satisfy
both equations:

\begin{align*}
c_1' f_1 + c_2' f_2 &= 0\\
c_1' f_1' + c_2' f_2' &= \frac{h(x)}{a(x)}
\end{align*}

We have two equations and two unknowns, meaning we can find a solution!

$$\begin{bmatrix} f_1(x) & f_2(x) \\ f_1'(x) & f_2'(x) \end{bmatrix}
\begin{bmatrix} c_1'(x) \\ c_2'(x) \end{bmatrix} =
\begin{bmatrix}0 \\ \frac{h(x)}{a(x)} \end{bmatrix} $$

We invert the matrix:

$$
\begin{bmatrix} c_1'(x) \\ c_2'(x) \end{bmatrix} =
\frac{1}{f_1 f_2' - f_1' f_2}
\begin{bmatrix} f_2'(x) & -f_2(x) \\ -f_1'(x) & f_1(x) \end{bmatrix}
\begin{bmatrix}0 \\ \frac{h(x)}{a(x)} \end{bmatrix}$$

A commonly used term for the prefactor is the <b>Wronskian</b>, which we denote
$W(x) \defeq f_1(x) f_2'(x) - f_1'(x) f_2(x)$. We then solve our the varying
coefficients:

$$c_1(x) = -\int_{t=x_0}^{t=x} \frac{f_2(t) h(t)}{a(t) W(t)} dt

\quad \text{ and } \quad

c_2(x) = \int_{t=x_0}^{t=x} \frac{f_1(t) h(t)}{a(t) W(t)} dt$$

Thus our final solution to the inhomogeneous equation is:

$$y_p = c_1 f_1 + c_2 f_2 = -f_1(x) \int_{t=x_0}^{t=x} \frac{f_2(t) h(t)}{a(t) W(t)} dt
+ f_2(x) \int_{t=x_0}^{t=x} \frac{f_1(t) h(t)}{a(t) W(t)} dt$$
