# Hoeffding's Inequality

Let $$X_1, ..., X_N$$ be independent with $$X_i \in [a_i, b_i]$$. Define $$X = \sum_i X_i$$.
Then, $$\forall \delta > 0$$:

$$\mathbb{P}[|X - \mathbb{E}[X] \geq \delta] \leq 2 \exp \Big( - \frac{2 \delta^2}{\sum_i (a_i - b_i)^2} \Big)$$