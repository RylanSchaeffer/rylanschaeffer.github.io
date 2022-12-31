# Type Systems

Most programming languages are split between either typed or untyped languages (untyped approximately
means dynamically typed). In order to discuss this distinction, what is meant by type?

The consensus is that a type is a set of values. For example, `int` is the set of all integers.
`bool` is the set of `{true, false}`. `List[int]` is the set of all lists containing integers.
`int->int` is the set of functions mapping from integers to integers.

## Type Inference

One reason people are interested in type systems is to be able to definitively show that, under the assumption
that certain expressions have certain types, a new expression has a known type. Specifically, in type systems,
we prove that a given expression has a particular type. Type inference has a particular syntax that is 
precise and well-established, but takes a little time to get used to.

### Symbols & Syntax for Type Inference

$$\land$$ means "and". $$X \Rightarrow Y$$ means "if X-then Y". $$X:T$$ means "expression x has type T".
Thus, $$e_1: Int \land e_2: Int \Rightarrow e_1+e_2: Int$$ means "If e_1 and e_2 are both integers, then
their sum is also an integer."  The turnstile symbol $$\vdash$$ is used to indicate "It is provable that...".

The common syntax is to place hypotheses above a broad horizontal line and its conclusions below the line,
 typically after the turnstile symbol. For instance:

$$\infer{\vdash A}{ B}$$

Means 

## Rules of Inference