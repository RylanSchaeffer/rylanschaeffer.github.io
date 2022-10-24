# Metric Space

A metric space is a pair $$(X, d)$$ where $$X$$ is a set and $$d: X \times X \rightarrow \mathbb{R}$$
satisfying:

1. Positivity: $$\forall x \in X, d(x, x) = 0$$
2. Symmetry: $$\forall x, y \in X, x \neq y, d(x, y) = d(y, x) > 0$$
3. Triangle Inequality: $$\forall x, y, z \in X, d(x, y) \leq d(x, z) + d(z, y)$$

## Examples

### $$\ell_p$$ Spaces

See [$$\ell_p$$ spaces](lp_spaces.md)

### Graph Metric Spaces

Let $$G=(V, E)$$ be a graph with $$n$$ vertices and positive edge weights. $$(V, d_G)$$
is a metric space where 

$$D_g(x, y) = \text{sum of edge weights along the shortest path}$$


