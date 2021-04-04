# Discrete Time Signals


## Common Representations

1. Difference equation e.g. $$y[n] = x[n] - x[n-1]$$. These are declarative, in that they 
   describe the rules the system obeys
2. Block diagram. These are imperative, in that they tell you how to implement the system
3. Operator algebra e.g. $$Y = (1 - R)X$$, where $$R$$ is the right shift operator

## Operator Algebra

A term like $$x[n]$$ describes a sample of a signal, specifically a sampling at the
$$n$$th index. Operators manipuilate entire signals rather than samples. Specifically, 
signals are primitives and operators are the tools for manipulation.

- Example: $$Y = RX \Leftrightarrow y[n] = x[n-1]$$
- Example: $$Y = (1 -R)X \Leftrightarrow y[n] = x[n] - x[n-1]$$

Operators are useful because they can be manipulated as polynomials. For instance,
$$Y = (1 - R)^2 X = (1 - 2R + R^2)X$$. This algebra gives rise to equivalence 
classes for systems. For instance, the three following systems would be implemented
differently, but the input-output signal-to-signal map is the same: 

$$ Y = (1 + 4R + 4 R^2) X \Leftrightarrow Y = (2R + 1)^2 X \Leftrightarrow Y = X + 4 R X + 4 R^2 X $$

## Recipes vs Constraints

Some systems are better described as recipes (i.e. instructions for transforming signals)
while others are better described as constraints (i.e. requirements that must be met). For
instance, $$Y = (1 - R)X$$ is a recipe ("To construct Y, subtract a right-shifted version of input 
from the input") whereas $$(1- R)Y = X$$ is a constraint ("Y minus its right-shifted version must
equal the input").