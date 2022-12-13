# Poisson Distribution

## Definition

Let $$X \sim Poisson(\lambda)$$. Its probability mass function is:

$$\mathbb{P}[X = k] = \frac{e^{-\lambda} \lambda^k}{k!}$$



## Properties

- Mean: $$\mathbb{E}[X] = \lambda$$
- Variance: $$\mathbb{V}[X] = \lambda$$
- $$\mathbb{P}[|X-\lambda| \geq c] \leq 2 \exp(-c^2/(2(c+\lambda)))$$

### Sum of Independent Poissons is Poisson

### Binomial Approximation of Poisson

Suppose have a Binomial random variable $$X \sim Bin(N, p)$$. We know that
the expected value of $$X$$ is $$Np$$; for reasons that will soon become apparent,
let's call this variable $$\lambda := Np$$. If we reparameterize the Binomial distribution
as $$Bin(N, \frac{\lambda}{N})$$ and take the limit as $$N\rightarrow \infty$$, this Binomial
variable will become $$Poisson(\lambda)$$. Intuitively, this says that if we have an infinite number of trials,
where each trial is infinitely unlikely to succeed, the number of success trials will be Poisson.

**Proposition**: Let $$X \sim Bin(N, p)$$. Define $$\lambda := Np$$ and reparameterize as
$$X \sim Bin(N, \frac{\lambda}{N})$$. As $$N \rightarrow \infty, X \rightarrow Poisson(\lambda)$$

Proof:

$$
\begin{align*}
P(X=k) &:= \begin{pmatrix} N \\k \end{pmatrix} p^{k} (1-p)^{N-k}\\
&= \frac{N!}{(N-k)! k!} \Big(\frac{\lambda}{N} \Big)^{k} \Big(1 - \frac{\lambda}{N} \Big)^{N-k}\\
&= \frac{O(N^k)}{k!} \frac{\lambda^k}{O(N^k)} \Big(1 - \frac{\lambda}{N} \Big)^{N-k}
\end{align*}
$$

We need to recall two facts:
1. The limit of a product is equal to the product of the limits
2. One way to define the exponential function $$e^{x}$$ is as $$\lim_{N \rightarrow \infty} (1 + \frac{x}{N})^N$$

Taking the limit as $$N\rightarrow \infity$$, we have

$$
\begin{align*}
P(X=k) &=^{N \rightarrow \infty} \frac{1}{k!} \lambda^k e^{-\lambda}\\
&=_D Poisson(\lambda)
\end{align*}
$$

### Binomial Definition of Poisson Distribution

An alternative way to define the Poisson distribution is as:

$$\lim_{n \rightarrow \infty} Bin(\frac{\lambda}{n}, n)$$

Why is $${n \choose k} (\lambda/n)^{k} ( 1 - \lambda/n)^{n-k}$$ the same as $$e^{-\lambda}\lambda^k/k!$$?

Reorganizing the first term, per Stirling, $$\{n \choose k} \approx (en/k)^k$$, and
$$(1-\lambda_n)^{n-k} a\approx e^{-\lambda / n}$$. Then $$(e/k)^k \lambda^k e^{-\lambda(1-k/n)}$$
can be rewritten as $$(1/k!)\lambda^k e^{-\lambda}$$, giving us the PMF for the Poisson.

### LeCam's Theorem

LeCam's Theorem states that the sum of independent but not-necessarily-identically distributed
Bernoulli random variables