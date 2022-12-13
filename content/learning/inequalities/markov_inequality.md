# Markov's Inequality

Suppose $$X$$ is a real-valued random variable with non-negative support. $$\forall \alpha > 0$$:

$$\mathbb{P}[X \geq \alpha] \leq \mathbb{E}[X]/\alpha$$

Equivalently:

$$\mathbb{P}[X \geq c\mathbb{E}[X]] \leq \frac{1}{c}$$

Intuitively, Markov's inequality says that the probability a non-negative random variable exceeds
more than $$c$$ times its mean is inversely proportional to $$c$$.

## Comparison with other inequalities

### Markov's vs Chebyshev's

Let $$X$$ be a random variable such that $$\mathbb{P}[X=k] = \frac{c}{k^3}$$ for $$k = 1, 2, 3,...$$.
Markov tells us that $$\mathbb{P}[X \geq t] \leq \frac{c \pi^2}{6t}$$. Chebyshev tells us that 
$$\mathbb{P}[X \geq t] \leq \frac{\mathbb{V}[X]}{t^2} = \infty$$ because $$\mathbb{V}[X] = \infty$$.
Cehbyshev's doesn't work because variance is infinite, but Markov is relable! 