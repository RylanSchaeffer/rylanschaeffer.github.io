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

- Identity $$I$$ is defined as $$\lambda x.x$$
- Constant $$K$$ is defined as $$\lambda z . \lambda y . z$$
- $$(\lambda x.x) e$$ is reduced to $$e$$
- $$(\lambda x.y) e$$ is reduced to $$y$$
- $$(e_1 e_2)[x := e_3]$$ is reduced to $$(e_1[x := e_3])(e_2[x := e_3])$$
- $$(\lambda x . e1)[x := e]$$ is reduced to $$(\lambda x . e1)$$. This is because $$(\lambda x. e1)$$
  is a function and the variable $$x$$ does not appear in the expression
- $$(\lambda y . e1)[x := e] = \lambda y . e1[x := e]$$ if $$x \neq y$$ and $$y \not \in FV(e)$$ 
  (see below Free Variables)

This last rule is intended to ensure that symbols refer to the proper variables. For instance, in
$$(\lambda y . x) [x = y] $$, the $$y$$ variable that we are substituting is different than the $$y$$
formal parameter of the function. We do not want the substitution to return $$\lambda y . y$$.

## Free Variables

A variable is free if it isn't governed by a $$\lambda$$ i.e. there is no enclosing $$\lambda$$
that defines the variables i.e. the free variables of an expression are the variables not
bound in an abstraction (recalling that abstraction means function definition). Concretely

- $$FV(x) = \{ x \}$$ i.e. the free variables in the expression consisting of a single variable $$x$$
  is exactly that variable
- $$FV(e_1 e_2) = FV(e_1) \cup FV(e_2)$$
- $$FV(\lambda x. e) = FV(e) - \{ x \}$$ i.e. by using $$x$$ as the formal parameter, that symbol $$x$$
  is no longer free

To avoid collisions, we can always rename bound variables i.e. $$\lambda x.x$$ is the same as 
$$lambda y.y$$. Renaming bound variables is called _alpha conversion_

## How to create common programming constructs

### Booleans

How can we implement booleans? We need an encoding of True and False. Similar to our approach
in the [SKI calculus](ski_calculus.md), let's define True as taking the first of two arguments
and False as taking the second of two arguments.

$$True := \lambda x.\lambda y.x$$
$$False := \lambda x.\lambda y. y$$

### Abstraction Algorithm

In the [SKI calculus](ski_calculus.md#abstraction-algorithm), we saw how the abstraction
algorithm works. The $$\lambda$$ calculus has a similar way to abstract. Suppose we want:
$$ True x y $$ to evaluate to $$x$$. To abstract the left hand side (LHS), move the variables
from the LHS to the RHS and wrap with $$\lambda$$:

$$True := \lambda x. \lambda y. x$$

Similarily for False:

$$False := \lambda x. \lambda y. y$$

### Pairs

We want $$pair x y z$$ to become $$z x y $$. Abstracting pair yields:

$$pair := \lambda x . \lambda y . \lambda z . z x y$$

### Integers

$$n$$ applies its first argument $$n$$ times to its second argument, meaning $$n f x$$ should
be equal to $$f^n(x)$$. Abstracting:

$$0 f x$$ should be reduced to $$x$$, and thus $$0 = \lambda f . \lambda x . x$$

Succ (short for successor) should behave as $$succ n f x$$ is $$f ( n f x)$$; applying
the abstraction algorithm yields $$succ := \lambda n . \lambda f . \lambda x . f (n f x).

### Factorial

