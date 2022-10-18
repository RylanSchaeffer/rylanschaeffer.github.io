# Lambda Calculus

## History

Developed by Alonzo Church to establish the existence of an undecidable problem.

##  Overview

Like the [SKI calculus](ski_calculus.md), the $\lambda$-calculus focuses on functions, but unlike
the [SKI calculus](ski_calculus.md), the $\lambda$-calculus$ has a notion of a variable.
The $\lambda$-calculus is a context-free grammar where each expression can be reduced ("converted" into
one of three possibilities:

1. Variable, written $$x$$
2. Abstraction (i.e., function definition), written $$\lambda x.e$$, and interpreted as $$x$$
  is the input variable and $$e$$ is the body of the function
3. Application (i.e., function call), written $$e_1 e_2$$

Note that $\lambda x.e$ can be both a function definition, a function argument or even
the result of a function. In shorthand, we write:

$$e \rightarrow x \lvert \lambda x . e \lvert e e$$


## Syntax

The $$\lambda$$-calculus associates to the left, and the body of a $$\lambda$$-abstraction
extends as far right as possible. Thus,

$$\lambda x.x \lambda y.y = \lambda x.(x \lambda y.y)$$

## Computation (Beta Reduction)

In a function call e.g., $$(\lambda x.e_1) e_2$$, the formal parameter $$x$$ is replaced
with the provided value e.g., $$e_1[x := e_2]$$. This is called a _beta reduction_. The
substitution (reduction) rules are as follows:

- $$(\lambda x.x) e$$ is reduced to $$e$$
- $$(\lambda x.y) e$$ is reduced to $$y$$
- $$(e_1 e_2)[x := e_3]$$ is reduced to $$(e_1[x := e_3])(e_2[x := e_3])$$
- $$(\lambda y . e1)[x := e] = \lambda y . e1[x := e]$$ if $$x \neq y$$ and $$y$$ does not appear free in $$e$$

## Examples

1. Identity $I$ is defined as $\lambda x.x$
2. Constant $K$ is defined as $\lambda z . \lambda y . z$
