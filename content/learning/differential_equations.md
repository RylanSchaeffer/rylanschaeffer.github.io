# Ordinary Differential Equations

An ordinary differential equation (ODE) is an equation that relates a function
to its derivative. Two example might be:

$$\frac{dy(x)}{dx} = x , \quad \frac{d^2 y(x)}{dx^2} = x + \sin(x)$$

Each differential equation can be viewed as an operator that maps elements of a set
to elements of the same set. Using the above examples, $$y(x)$$ and $$\frac{dy(x)}{dx}$$
are both elements of the set of continuous, differentiable functions over the interval
$$[a, b]$$, denoted $$C^1(a, b)$$.

## Linear ODEs

We say that an operator $$l$$ is __linear__ if it satisfies two properties. Supposing
that $$y_1(x), y_2(x) \in C^1(a, b)$$ and $$\lambda \in \mathbb{R}$$, the properties are

1. Element addition: $$l(y_1(x) + y_2(x)) = l(y_1) + l(y_2)$$

2. Scalar multiplication: $$ l(\lambda y(x)) = \lambda l(y(x)) $$

<a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
  3Blue1Brown</a> has an amazing series on what linear operators mean geometrically, so for
that insight, I highly recommend watching his material.

An operator is a _differential operator_ if it takes some derivative of its argument.
Note that a derivative $$d_x = \frac{d}{dx}$$ is a linear operator:

$$d_x (\lambda_1 y_1(x) + \lambda_2 y_2(x)) = \lambda_1 d_x y_1(x) + \lambda_2 d_x y_2(x)$$  

For brevity, we'll often omit the argument to the function and just write $$y$$. A complete
solution to any linear equation $$l(y(x)) = h(x)$$ has two parts: the null solution $$y_n$$, which solves
the _homogeneous_ equation $$l(y_n) = 0$$, and the particular solution $$y_p$$, which solves the
_inhomogeneous_ equation $$l(y_p) = h(x)$$. The sum of the two solutions provides the complete
solution due to linearity:

$$l(y_p + y_n) = l(y_p) + l(y_n) = h(x) + 0 = h(x) $$

## Linear, First Order ODEs

A generic linear, first-order ODE can be written as:

$$ l(y(x)) = a(x) y'(x) + b(x) y(x) = h(x)$$

### Intuition

For linear, first-order ODEs, exponentials are key. Why? Because all null solutions
aim to solve the homogeneous equation:

$$l(y) = a(x) d_x y(x) + b(x) y(x) = 0$$

If $$a(x) = a$$ and $$b(x) = b$$ are constants, we immediately see that we are trying to find a function
that is proportional to its own derivative - the exponential function!

$$ d_x y(x) = - \frac{b}{a} y(x) \rightarrow y(x) = y(x_0) e^{- b  (x - x_0) / a}$$

If that isn't persuasive, we can be a bit more rigorous, dividing by $$y$$ and integrating
both sides:

$$
\begin{align*}
d_x y + \frac{b}{a} y(x) &= 0\\
\int \frac{d_x y}{y} dy + \frac{b}{a} \int 1 dy &=\\
\log y(x) - \log y(x_0) + a(x - x_0) &= \\
y(x) &= y(x_0) e^{-a (x - x_0)}  
\end{align*}
$$

For concreteness, suppose $$x$$ is time and $$y(x)$$ is your bank balance. Over time, 
interest will accrue, depositing more in your account as a function of the amount you 
put in initially $$y(x_0)$$ and the elapsed time $$x - x_0$$. Now, suppose we deposit
an additional dollar at a particular time $$x_1$$. That added dollar will also continue
growing exponentially, but the elapsed time since its deposit will be $$x - x_1$$, not
 $$x - x_0$$. Thus, exponentials remain key for the inhomogenous equation.

### Null (Homogeneous) Solution

As we saw above, if $$l(y) = a d_x y(x) + b y(x) = 0$$, the solution is straightforward:

$$y(x) = y(x_0) e^{-b x / a}$$

We now consider non-constant coefficients $$a(x), b(x)$$. As long as $$a(x) \neq 0$$, we 
can rewrite as

$$l(y) = d_x y + \frac{b(x)}{a(x)} y = 0  

Suppose $$l(y) = d_x y(x) + a(x) y(x) = 0$$. 

### Particular (Inhomogeneous) Solution



### Key Inhomogeneous Solutions


It has the complete solution:

$$ y(x) = \exp \{(\int_{u=x_0}^{u=x} \frac{b(u)}{a(u)}) du \}[y(x_0) 
+ \exp \{(\int_{u=x_0}^{u=x} \frac{b(u)}{a(u)}) du]$$

where $$f(x) = \exp \Big(\int_{u=x_0}^{u=x} \frac{b(u)}{a(u)}) du \Big)$$


 

### Dimension of Linear, 1st-Order Kernel

We start by trying to find the null solution, which corresponds to identifying what the kernel of the operator is.
Recall that for any operator $$l$$ from one set to another, the kernel of the operator is the set
of inputs that map to 0 i.e. $$\ker(l) = \{v \in V : l(v) = 0 \}$$. One property worth
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

This tells us that any solution $$y$$ can be written as
a particular solution $$y_p$$ plus some constant $$c$$ times the homogeneous 
aka null solution $$y_n$$.

$$
\begin{align*}
l(y - y_p) = l(y) - l(y_p) = h(x) - h(x) = 0\\
y - y_p \in \ker(l)\\
y - y_p = c y_n\\
y = y_p + c y_n
\end{align*}
$$

### Solving Linear, 1st-Order: Integrating factor

What about the inhomogeneous case i.e. when $$l(y) \neq 0$$? If $$a(x) \neq 0$$, one way
we can find the solution $$y(x)$$ is by using a function $$f(x)$$ called an integrating
factor. To see where the idea arises, divide both sides by $$a(x)$$.

$$y' + \frac{b}{a} y = \frac{h}{a}$$

If there existed a function $f(x)$ such that $$\frac{1}{f}(fy)' = y' + \frac{b}{a} y$$,
such a function would tremendously simplify the differential equation:

$$
\begin{align*}
y' + \frac{b}{a} y &= \frac{h}{a}\\
\frac{1}{f}(fy)' &= \\
f y - f(x_0)y(x_0) &= \int_{t=x_0}^t \frac{h(t) f(t)}{a(t)} \, dt\\
y(x)  &= \frac{f(x_0)}{f(x)} y(x_0) + \frac{1}{f(x)} \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt\\
\end{align*}
$$

The insight is to express the inconvenient $$y' + \frac{b}{a} y$$ as a
derivative $$(fy)'$$ that is more easily integrated. The question is now how to find $$f(x)$$.
We start by setting $$\frac{1}{f}(fy)' = y' + \frac{b}{a} y$$ and then solve for $$f(x)$$:

$$
\begin{align*}
\frac{1}{f}(fy)' &= y' + \frac{b}{a} y\\
\frac{1}{f}(f' y + y f') &= y' + \frac{b}{a} y\\
\frac{f'}{f} &= \frac{b}{a}\\
\log f(x) - \log f(x_0) &= \int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt\\
f(x) &= f(x_0) \exp \Big(\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big)
\end{align*}
$$

When we plug $$f(x)$$ back into our equation for $$y(x)$$, we see that the initial
condition $$f(x_0)$$ doesn't matter because it cancels out:

$$
\begin{align*}
y  &= \frac{f(x_0)}{f(x)} y(x_0) + \frac{1}{f(x)} \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt\\
&= \exp \Big(-\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big) y(x_0) + \frac{1}{f(x_0)} \exp
  \Big(-\int_{t=x_0}^x \frac{b(t)}{a(t)} \, dt \Big) \int_{t=x_0}^x \frac{h(t) f(t)}{a(t)} \, dt
\end{align*}
$$

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

The question now is whether we can find two functions, $$c_1, c_2$$, that satisfy
both equations:

$$
\begin{align*}
c_1' f_1 + c_2' f_2 &= 0\\
c_1' f_1' + c_2' f_2' &= \frac{h(x)}{a(x)}
\end{align*}
$$

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
$$W(x) \defeq f_1(x) f_2'(x) - f_1'(x) f_2(x)$$. We then solve our the varying
coefficients:

$$c_1(x) = -\int_{t=x_0}^{t=x} \frac{f_2(t) h(t)}{a(t) W(t)} dt

\quad \text{ and } \quad

c_2(x) = \int_{t=x_0}^{t=x} \frac{f_1(t) h(t)}{a(t) W(t)} dt$$

Thus our final solution to the inhomogeneous equation is:

$$y_p = c_1 f_1 + c_2 f_2 = -f_1(x) \int_{t=x_0}^{t=x} \frac{f_2(t) h(t)}{a(t) W(t)} dt
+ f_2(x) \int_{t=x_0}^{t=x} \frac{f_1(t) h(t)}{a(t) W(t)} dt$$
