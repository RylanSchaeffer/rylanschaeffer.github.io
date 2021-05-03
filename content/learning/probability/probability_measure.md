# Probability Measures

__Parent__: [Probability](../probability.md)

A __measure__ is a function from a [sigma-algebra](sigma_algebra.md) to the reals $$\mu: F 
\rightarrow \mathbb{R}$$, satisfying two properties:

1. $$\forall A \in F, \mu(A) \geq \mu(\varnothing) = 0$$

2. Countable additivity: the measure of the union of any countable disjoint subsets
is equal to the sum of the measure of each subset i.e. $$\mu(\bigcup_i A_i) = \sum_i \mu(A_i)$$

A measure is on $$F$$ is called a __probability measure on $$F$$__ if the measure of
the sample space is unity i.e. $$\mu(\Sigma) = 1$$.

## Immediate Consequences

- Monotonicity: $$A \subset B \Rightarrow \mu(A) \leq \mu(B)$$
- Subadditivity: $$A \subset \Bigcup_{m=1}^{\infty} A_m \Rightarrow \mu(A) \leq 
  \sum_{m=1}^{\infty} \mu(A_m)$$
- Continuity from below: measures of sets $$A_i$$ in increasing sequence converge to the measure
of limit $$\Bigcup_i A_i$$
- Continuity from above: measures of sets $$A_i$$ in decreasing sequence converge to the measure
of intersection $$\Bigcap A_i$$