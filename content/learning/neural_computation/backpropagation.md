# Backpropagation


Backpropagation ("backprop" for short)
  TODO

## Backprop as Chain Derivative

  TODO


## Backprop as Constrained Optimization

Backprop is most commonly derived using chain derivatives.
However, backprop can also be derived as the solution to a constrained optimization
problem, as shown by [LeCun 1988](../papers/leCun_1988_Theoretical_Framework_For_Backprop.pdf).
The idea is to see backprop as an algorithm for selecting a set of vectors
$\{x_i\}_{i=1}^{L+1}$, one per layer of the network, that minimize a loss function
subject to a set of consistency equations:

$$ x^l = f(W^l x^{l-1} + b^l)$$

or equivalently, written in index form:

$$ x_i^l = f \Big( \sum_{j=1}^{N^{l-1}} W_{ij}^l x_j^{l-1} + b_i^l \Big)$$

