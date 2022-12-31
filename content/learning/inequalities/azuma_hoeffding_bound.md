# Azuma-Hoeffding Bound

This bound is useful for sums of random variables that form a Martingale.

Let $$\{Z_t \}$$ be a martingale w.r.t. $$\{X_t \}$$ and suppose there exist constants $$c_1, ..., c_n$$
such that $$\forall i \in [1, n], |Z_i - Z_{i-1}| \leq c_i$$. Then $$\forall \lambda > 0$$,

$$\mathbb{P}[|Z_n - Z_{0} \geq \lambda] \leq 2 \exp \Big(-\frac{\lambda^2}{2 \sum_i c_i} \Big)$$

## Proof

$$\mathbb{E}[e^{t(Z_n - Z_0)}] = \mathbb{E}[e^{t(Z_n - Z_{n-1} + Z_{n-1} - Z_0)}]$$

**Lemma:** Let $$Y \in [-c, c]$$ such that $$\mathbb{E}[Y]=0$$. Then $$\forall t, \mathbb{E}[e^{tY}] \leq e^{t^2 c^2/2}$$

Proof: $$\mathbb{E}[e^{tY}] \leq \mathbb{E}[\frac{1 - y}{2} e^{-t} + \frac{1 + y}{2} e^{-t}]$$ by convexity of $$e^{tY}$$.
Then Taylor series expand exponentials, apply linearity of expectation and show that upper bounded by $$e^{t^2/2}$$.

Using the above lemma:

$$\mathbb{E}[e^{t(Z_n - Z_0)}] \leq \exp(t^2 c_n^2 /2) \mathbb{E}[e^{t(Z_{n-1}- Z_0)}]$$

Repeating $$n$$ times:

$$\mathbb{E}[e^{t(Z_n - Z_0)}] \leq \mathbb{E}[\exp(t^2(\sum_n c_n^2)/2)]$$

## Properties

- Let $$Y \in [-c, c]$$ such that $$\mathbb{E}[Y]=0$$. Then $$\forall t, \mathbb{E}[e^{tY}] \leq e^{t^2 c^2/2}$$

Proof: $$\mathbb{E}[e^{tY}] \leq \mathbb{E}[\frac{1 - y}{2} e^{-t} + \frac{1 + y}{2} e^{-t}]$$ by convexity of $$e^{tY}$$.
Then Taylor series expand exponentials, apply linearity of expectation and show that upper bounded by $$e^{t^2/2}$$.

## Comparison with other inequalities

### Azuma-Hoeffding vs Chernoff

Say $$X_1, ..., X_n$$ are 0/1 fair coin flips. Note that $$\lvert Z_i - Z_{i-1} \lvert$$ = 1/2. Thus, per Azuma-Hoeffding:

$$\mathbb{P}[|\sum X_i - \mathbb{\sum X_i}| \geq \lambda] \leq 2 \exp \Big( - \frac{\lambda^2}{2 \sum_i c_i^2} \Big)$$

This is exactly what we should expect from Chernoff.