# Bernstein's Inequality

Let $$X_1, ..., X_N$$ be independent and mean zero, with $$|X_i| < \mu$$. Define $$X = \sum_i X_i$$.
Then, $$\forall \delta > 0$$:

$$\mathbb{P}[X \geq \delta] \leq 2 \exp \Big( - \frac{2 \delta^2}{\sum_i \mathbb{E}[X_i^2] - \mu \delta / 3} \Big)$$