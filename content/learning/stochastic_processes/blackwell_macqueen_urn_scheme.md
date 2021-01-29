# Blackwell MacQueen Urn Scheme

The Blackwell-MacQueen Urn scheme describes the posterior predictive distribution of samples
from a random distribution sampled from a [Dirichlet Process](dirichlet_process.md). Alternatively, 
the Blackwell-MacQueen Urn scheme is an infinite-color generalization of the [Polya Urn Scheme](polya_urn_scheme.md).


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
Dirichlet distribution.

The Blackwell-MacQueen Urn Scheme is an infinite-color generalization of the Polya urn scheme,
which in contrast has only two

