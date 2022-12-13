# Markov's Inequality

Suppose $$X$$ is a real-valued random variable with non-negative support. $$\forall \alpha > 0$$:

$$\mathbb{P}[X \geq \alpha] \leq \mathbb{E}[X]/\alpha$$

Equivalently:

$$\mathbb{P}[X \geq c\mathbb{E}[X]] \leq \frac{1}{c}$$

Intuitively, Markov's inequality says that the probability a non-negative random variable exceeds
more than $$c$$ times its mean is inversely proportional to $$c$$.