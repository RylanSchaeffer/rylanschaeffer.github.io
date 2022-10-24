# Metric Embeddings

Oftentimes, we have some set with some notion of distances between elements i.e. a [metric space](../functional_analysis/metric_space.md),
and we want to embed that metric space inside another, either for easier analyses or visualization.
For example, we may want to convert a [graph metric space](../functional_analysis/metric_space.md#graph-metric-spaces)
into an [$$\ell_p$$ metric space](../functional_analysis/lp_spaces.md).

## Isometric Embeddings

Given 2 metric spaces $$(X, d_X), (Y, d_Y)$$, a function $$f: X \rightarrow Y$$
is an isometric embedding iff $$\forall x, x' \in X$$:

$$d_Y(f(x), f(x')) = d_X(x, x')$$

## Bourgain's Embedding

Given any finite metric space $$(X, d)$$ with $$|X| = n$$, there exists an embedding of 
$$(X, d)$$ into $$(\mathbb{R}^k, d_1)$$ where $$k = O(\log^2 n)$$ (also works for $$\ell_p$$)
with distortion $$O(\log n)$$.

### Algorithm for Bourgain's Embedding

1. For $$i = 1, ..., \log n$$:
   2. For $$j = 1, ..., c \log n$$:
      3. Choose $$S_{i, j} \subseteq X$$ at random such that every $$x \in XX$$ is contained in 
         $$S_{i,j}$$ with probability $$2^{i}$$

Define $$f(x) = [d(x, S_{11}), d(x, S_{12}),..., d(x, S_{\log n, c\log n}),]$$ where
$$d(x, S) = \min_{s \in S} d(x, s)$$

### Intuition for Bourgain's Embedding


