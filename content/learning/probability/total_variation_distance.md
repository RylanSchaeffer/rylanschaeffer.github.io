# Total Variation Distance

The total variation (TV) distance is a way of quantifying the distance between probability distributions.
Suppose $$p(x), q(x)$$ are two probability mass functions with support on set $$X$$. Then
the total variation distance is:

$$TV(p, q) \equiv ||p - q|| := \frac{1}{2} \sum_{x \in X} |p(x) - q(x)| = max_{A \subseteq X} p(A) - q(A) $$

## Properties

- Let $$J$$ be a joint distribution over $$X, Y$$, where $$p$$ is the marginal distribution over
  $$X$$ and $$q$$ is the marginal distribution over $$Y$$. Then

$$||p - q|| \leq \mathbb{P}[X \neq Y] $$

Furthermore, $$\exists J^*$$ such that this is an equality.

**Proof**: Let $$A$$ be the subset of 