# Chebyshev Inequality

Let $$X$$ be a real valued random variable. $$\forall \alpha > 0$$,

$$ \mathbb{P}[(X - \mathbb{E}[X])^2 \geq \alpha] \leq \frac{\mathbb{V}[X]}{\alpha}$$

Alternatively, $$\forall c > 0$$

$$ \mathbb{P}[(X - \mathbb{E}[X])^2 \geq c\mathbb{V}[X]] \leq \frac{1}{c}$$

Proof: Apply Markov's inequality to the standard deviation $$|X - \mathbb{E}[X]|$$:

$$\mathbb{P}[X - \mathbb{E}[X]  \geq \alpha] \leq \mathbb{P}[(X - \mathbb{E}[X])^2 \geq \alpha^2] \leq \frac{\mathbb{E}[|X - \mathbb{E}[X]|]}{\alpha}$$

## Comparison with other inequalities

Chebyshev's is great when you have a sum of pairwise independent things because then
$$\mathbb{V}[\sum_n X_n] = \sum_n \mathbb{V}[X_n]$$

## Examples

## Pairwise Independent Hashing

Let $$p$$ be prime and consider a hash family $$H = \{ h_{ab} : a \in \mathbb{Z}_p^k, b \in \mathbb{Z}_p \}$$
where $$h_{ab}: \mathbb{Z}_p^k \rightarrow \mathbb{Z}_p$$ given by $$h_{a, b} = a \cdot x + b \mod p$$.
Fix $$x_1, ..., x_N \in \mathbb{Z}_p^k$$ and pick $$y \in \mathbb{Z}_p$$. What is the probability,
over $$h \in H$$ drawn uniformly at random, that $$h(x_i) = y$$ for more than $$(1/p + \epsilon)N$$ values
of $$i$$? In other words, assuming we choose elements from the hash family uniformly at random, what's the probability
that multiple elements map to the same value $$y$$?

Define $$X_i = \mathbb{I}\{h(x_i) = y\}$$ and $$X = \sum X_i$$. Note that $$\mathbb{E}[X] = \frac{N}{P}$$.
Then:

$$\mathbb{P}[X \geq (1/p + \epsilon)N] \leq \frac{\mathbb{V}[X]}{\epsilon^2 n^2} = \frac{\sum (1/p)(1 - 1/p)}{\epsilon^2 n^2} $$