# Chebyshev Inequality

Let $$X$$ be a real valued random variable. $$\forall \alpha > 0$$,

$$ \mathbb{P}[(X - \mathbb{E}[X])^2 \geq \alpha] \leq \frac{\mathbb{V}[X]}{\alpha}$$

Alternatively, $$\forall c > 0$$

$$ \mathbb{P}[(X - \mathbb{E}[X])^2 \geq c\mathbb{V}[X]] \leq \frac{1}{c}$$

Proof: Apply Markov's inequality to the standard deviation $$|X - \mathbb{E}[X]|$$:

$$\mathbb{P}[X - \mathbb{E}[X]  \geq \alpha] \leq \mathbb{P}[(X - \mathbb{E}[X])^2 \geq \alpha^2] \leq \frac{\mathbb{E}[|X - \mathbb{E}[X]|]}{\alpha}$$

