# SKI Calculus

The SKI Calculus is a combinator [calculus](calculus.md). A combinator
is a function with no free variables. A free variable is a variable that 
is not bound; for instance, in the [Lambda Calculus](lambda_calculus.md), in a function like
$$\lambda x . x y$$, $$x$$ is bound by the function whereas $$y$$ is free, meaning
it must come from elsewhere (this "elsewhere" is called the environment).

## Definition

The SKI Calculus is a variable-free Turing-complete programming language
using only functions. The SKI Calculus is comprised of exactly three functions:

1. Identity: $$I x \rightarrow x$$. Notationally, $$I$$ is the function, $$x$$ on the left
  side is the argument, $$x$$ on the right side is the result, and the arrow
  indicates a step of computation.
2. Constant: $$K x y \rightarrow y$$. This means that, given two inputs $$x$$ and $$y$$,
  the constant function always returns the first argument.
3. Generalized function application: $$S x y z \rightarrow (x z) (y z)$$. Here, the right
  side should be parsed as "Pass z to x, pass z to y, then pass the second result to the first result".
  Recall that everything in the SKI calculus is a function without types, so we can
  always pass anything to anything.

In the SKI Calculus, programs (expressions) are _trees_, not strings. In the absence
of parentheses, association is to the left, e.g.,

$$ S x y z = (((S x) y) z)$$

### Rewrite Rules

The 3 rules of the SKI calculus are an example of a _rewrite system_, in which
a (sub)expression that matches the left side of a rule can be replaced by the
right side. The symbol $$\rightarrow$$ stands for a single rewrite whereas
$$\rightarrow^*$$ stands for the reflexive, transitive closure of $$\rightarrow$$
(i.e. zero or more rewrites).

### Unevaluated Expressions

A function only "executes" when it has enough arguments. For instance, $$K$$ is 
a well formed program, as is $$K x$$, but once another argument is provided, 
$$K x y$$ becomes $$x$$. Until enough arguments are supplied, the function is
called a "partially applied" function.

### Generalized Function Application

For a general purpose language, one needs (a) a way to program function calls
(often called function _applications_) and a way to reuse values (i.e. make copies).
$$S$$ provides both. Specifically, $$S x y z$$ duplicates $$z$$, passes $$z$$ 
to both $$x, y$$, then calls the function $$(x z)$$ with the argument $$(y z)$$:

$$S x y z \rightarrow (x z) (y z)$$

## Abstraction Algorithm