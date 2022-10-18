# Lambda Calculus

## History

Developed by Alonzo Church to establish the existence of an undecidable problem.

##  Overview

Like the [SKI calculus](ski_calculus.md), the $\lambda$-calculus focuses on functions, but unlike
the [SKI calculus](ski_calculus.md), the $\lambda$-calculus$ has a notion of a variable.
The $\lambda$-calculus is a context-free grammar where each expression can be reduced ("converted" into
one of three possibilities:

1. Variable, written $x$
2. Abstraction (i.e., function definition), written $\lambda x.e$, and interpreted as $x$
  is the input variable and $e$ is the body of the function
3. Application (i.e., function call), written $e_1 e_2$

Note that $\lambda x.e$ can be both a function definition, a function argument or even
the result of a function.

## Syntax

The $\lambda$-calculus associates to the left, and the body of a $\lambda$-abstraction
extends as far right as possible. Thus,

$$\lambda x.x \lambda y.y = \lambda x.(x \lambda y.y)$$

### Beta Reduction

In a function call e.g., $(\lambda x.e_1) e_2$, the formal parameter $x$ is replaced
with the provided value e.g., $e_1[x := e_2]$.
