# Kernels

## Basic Definitions

A __kernel__ as a function $$k : X \times X \rightarrow K$$, where $$k = 
\mathbb{C}$$ or $$K = \mathbb{R}$$. For a set of patterns $$\{x_i\}_{i=1}^N$$, the
__Gram Matrix__ is a $$N \time N$$ matrix such that

$$K_{ij} = k(x_i, x_j)$$

We say that the Gram Matrix (or any matrix) is __positive semi-definite__ (PSD) if
$$\forall c_i \in \mathbb{C}, \, \sum_{ij} c_i \bar{c}_j K_{ij} \geq 0$$. In more
compact notation, $$c^T K \bar{c} \geq 0$$.


 
