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
$$K x y$$ rewrites to $$x$$. Until enough arguments are supplied, the function is
called a "partially applied" function.

### Generalized Function Application

For a general purpose language, one needs (a) a way to program function calls
(often called function _applications_) and a way to reuse values (i.e. make copies).
$$S$$ provides both. Specifically, $$S x y z$$ duplicates $$z$$, passes $$z$$ 
to both $$x, y$$, then calls the function $$(x z)$$ with the argument $$(y z)$$:

$$S x y z \rightarrow (x z) (y z)$$


## Programming

The SKI calculus is Turing-complete. In order to demonstrate this, we'll show how to implement
recursion, conditionals and data structures.

### Recursion

Define $$x = S (K f) (S I I )$$ where $$f$$ is an arbitrary function.

Then $$S I I x \rightarrow^* x x$$.

Proof: $$S I I x \rightarrow (I x ) (I x) \rightarrow S (K f) (S I I) x \rightarrow (K f x)( S I I x)$$

Thus $$S I I x$$ can rewrite to any number of $$(K f x)$$ preappending $$S I I x$$.

### Conditionals

We need some encoding (as combinators) to represent true or false. We'll encode True as a combinator
that takes two arguments and returns the first such that $$T x y \rightarrow x$$. Thus, True can be
defined as $$K$$. We can encode false in a similar manner. Specifically we want $$F x y \rightarrow y$$,
meaning we can define $$F$$ as $$S K$$.

### Logical Operators

We can define Boolean operators using a similar approach: specifically, using our previous definitions of true and false,
we can define the "or" operator as a function that takes two booleans $$B_1$$ and $$B_2$$ and is defined as: $$AND B_1 B_2 := B_1 True B_2$$.
Thus, if $$B_1$$ is true, by definition of how we encoded true and false, the first argument (True) will be chosen (since
if $$B_1$$ is true, then $$B_1 \lor B_2$$ should be true), and if $$B_1$$ is false, then the $$B_1 \lor B_2$$ will be true
iff $$B_2$$ is true.

To define "and", we can use $$OR B_1 B_2 := B_1 B_2 False$$. Thus, if $$B_1$$ is False, the second argument will be selected (False),
which is appropriate, but if $$B_1$$ is true, then we just return $$B_2$$. Thus, we have an encoding of $$AND$$ and $$OR$$.

To define "not", we can ues $$NOT B := B F T$$. Thus, if $$B$$ is true, we return false, and if $$B$$ is false, we return true. 

### Natural Numbers

In the SKI calculus, how can we define natural numbers? We will need an encoding scheme similar to conditionals
and logical operators. Specifically, we will say that an integer $$N$$ means that we should apply the first argument
to the second argument for a total of N times. By that, we want that mathematically:

- $$0 f x = x$$
- $$n f x = f(f(f(...f(x))))$$

We can achieve this by defining $$0 := S K$$ and defining a successor function $$succ n f x = f (n f x)$$, meaning
we can define $$succ := S (S (K S ) K )$$.

### Data Structures: Pairs

We can define $$pair x y first \rightarrow x$$ and $$pair x y second \rightarrow y$$.

## Abstraction Algorithm
 