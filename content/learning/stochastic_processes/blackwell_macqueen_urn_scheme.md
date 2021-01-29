# Blackwell MacQueen Urn Scheme

__Parent__: [Stochastic Processes](../stochastic_processes.md)


The Blackwell-MacQueen (BM) Urn scheme describes the posterior predictive distribution of samples
from a random distribution sampled from a [Dirichlet Process](dirichlet_process.md). Alternatively, 
the BM Urn scheme is an infinite-color generalization of the [Polya Urn Scheme](polya_urn_scheme.md).
This stochastic process is intuitively described as an urn filled with balls
that are of possibly infinitely many colors. A ball is sampled,
its color recorded, and the ball plus another ball with the sampled ball's color is
placed back in the urn. A sample from this stochastic process is the
sequence of colors of balls.


## Definition

Suppose we have the following generative model:

$$
\begin{align*}
G &\sim DP(\alpha, G_0)\\
\theta_1, ..., \theta_N &\sim_{i.i.d.} G
\end{align*}
$$

and we want to know the posterior predictive distribution

$$P(\theta_{N+1} | \theta_1, ..., \theta_N)$$

This posterior predictive distribution is described by the Blackwell-MacQueen urn scheme, which
marginalizes out the random distribution $$G$$:

$$
\begin{align*}
p(\theta_{N+1} \in A | \theta_1, ..., \theta_N) &= \int p(\theta_{N+1} \in A | G) p(G | \theta_1, ..., \theta_N) dG\\
&= \int G(A) p(G | \theta_1, ..., \theta_N) dG\\
&= \mathbb{E}[G(A) | \theta_1, ..., \theta_N]\\
&= \frac{\alpha}{\alpha + N} G_0(A) + \frac{N}{\alpha + N} \frac{1}{N} \sum_{n=1}^N \delta_{\theta_n}(A)\\
&= \frac{1}{\alpha + n} \Big( \alpha G_0(A) + \sum_{n=1}^N \delta_{\theta_n}(A) \Big)
\end{align*}
$$

where the expected value of $$G(A)|\theta_1, ..., \theta_N$$ is given by the expected value of the
Dirichlet distribution. Thus,

$$\theta_{N+1} | \theta_1, ..., \theta_N = \frac{1}{\alpha + n} \Big( \alpha G_0(A) + \sum_{n=1}^N \delta_{\theta_n} \Big)$$

This distribution is a weighted average of the DP's base distribution and the empirical distribution of the
samples from the random distribution $$G$$.


## Defining Dirichlet Process using BM Urn Scheme

One way to define a Dirichlet Process is by using the BM Urn Scheme together with de Finetti's Theorem.
First, note that we can write the joint distribution of the observables as the product of the conditionals:

$$p(\theta_N, ..., \theta_1) = \prod_{n=1} p(\theta_n | \theta_{\leq n-1})$$

Let $$\sigma$$ be a permutation on $$[N] := {1, ..., N}$$. Under the BM Urn Scheme, for any $$\sigma$$,

$$p(\theta_N, ..., \theta_1) = p(\theta_{\sigma(N)}, ..., \theta_{\sigma(1)})$$

We say that the random sequence $$\theta_1, ..., \theta_N$$ is __infinitely exchangeable__. Thus, by de 
Finetti's Theorem, there exists some latent variable $$G$$ such that the element of the random sequence
are distributed i.i.d. conditioned on the random variable:

$$p(\theta_N, ..., \theta_1) = \int \Big(\prod_{n=1}^N p(\theta_n | G) p(G) dP(G) \Big)$$

This latent variable, $$G$$, has some distribution. We define its distribution to be the Dirichlet Process.
