# Dirichlet Process
__Parent__: [Stochastic Processes](../stochastic_processes.md)

There are many ways to describe a Dirichlet Process (DP). Some of these include:

- an infinite dimensional generalization of the Dirichlet distribution, akin to 
 how the [Gaussian process](gaussian_processes.md) is an infinite dimensional
  generalization of the multivariate Gaussian distribution
  
- A distribution over discrete probability distributions

- A distribution whose marginals follow Dirichlet distributions

## Definition

In all the below definitions,  let $$\alpha > 0$$ be the concentration parameter and
$$G_0$$ some probability distribution. We want to understand what people mean by

$$G \sim DP(\alpha, G_0)$$

### Definition via Dirac Measures

When we say that $$G \sim DP(\alpha, G_0)$$, we mean that $$G$$ is a random probability measure
that can be expressed in a certain way



is a Dirichlet Process if:

$$ G = \sum_{k=1}^{\infty} \beta_k \delta_{\phi_k} $$

### Definition via Dirichlet Marginals

Briefly, we have to cover measure theory. A __measure__ is a function that assigns
a non-negative number to set. One additional requirement is that in
order to be a measure, the function must be __countably additive__,
meaning that the measure of a subset is equal to the sum of the measure of
smaller, disjoint subsets of that subset. A __finite measurable partition__ of a set
is a carving of the set into a finite set of subsets such that the subsets are disjoint
and that their union is the original space.

Let $$\Omega$$ be a (discrete or continuous) sample space i.e. set of possible
outcomes, and let $$G_0$$ be a distribution over the sample space. Let $$\alpha >0$$
be a real, positive parameter. We say a random distribution $$G$$
is distributed according to a Dirichlet Process i.e. $$G \sim DP(G_0, \alpha)$$ if 
for all finite measurable partitions of the sample space $$(A_1, A_2, ..., A_k)$$, the $$k$$-dim
vector $$(A_1, A_2, ..., A_K)$$ follows a Dirichlet distribution with concentration
parameters $$(\alpha G_0, ..., \alpha G_0(A_K))$$:

$$(G(A_1), ..., G(A_K)) \sim Dirichlet(\alpha G_0(A_1), ..., \alpha G_0(A_K))$$

Explained another way, if we carve up the sample space into a finite number of disjoint
subsets, measure each of the $$K$$ finite subsets, and scale the measure by a 
postive parameter $$\alpha$$, then the scaled measures could be used for a Dirichlet
distribution. Now, if a distribution $$G$$ is described by a Dirichlet distribute whose
concentration parameters are these scaled measures for all possible finite measurable
partitions, then $$G \sim DP(\alpha, G_0)$$.


### Definition via Normalized Gamma Processes

TODO


### Definition via De Finetti's Theorem

The DP can also be defined using the
[Blackwell-MacQueen urn scheme](blackwell_macqueen_urn_scheme.md#defining-dirichlet-process-using-bm-urn-scheme)

## Properties

- Each sample path (draw) from a Dirichlet Process is a discrete distribution

- The mean $$\mathbb{E}[G(A_k)] = \mathbb{E}[G_0(A_k)]$$. Proof:

$$
\begin{align*}
\mathbb{E}[G(A_k)] &= \frac{\alpha G_0(A_k)}{\sum_i \alpha G_0(A_i)}\\
&= \frac{G_0(A_k)}{\sum_i G_0(A_i)}\\
&= \mathbb{E}[G_0(A_k)]
\end{align*}
$$

- The variance $$\mathbb{V}[G(A_k)] = G_0(A_k)(1 - G_0(A_k))/(1 + \alpha)$$. Proof:

- Posterior inference: Let $$G \sim DP(\alpha, G_0)$$. Since $$G$$ is a (random) distribution,
we can sample from it. Let $$\theta_1, ..., \theta_N \sim_{i.i.d} G$$, where $$N$$ is the 
  total number of samples. Then the posterior of $$G$$ is given by:
  
$$G | \theta_1, ..., \theta_N \sim DP \Big(\alpha + N, \frac{\alpha}{\alpha + N} G_0 +
\frac{N}{\alpha + N} \frac{1}{N}\sum_{n=1}^N \delta_{\theta_n} \Big)$$

where $$\delta_{\theta_n}$$ is a Dirac measure located at $$\theta_n$$. Intuitively, the posterior's
concentration parameter is the sum of the pseudo-observations $$\alpha$$ and the real observations
$$N$$, and the base distribution becomes a weighted average
of the prior distribution $$G_0$$ and the empirical distribution $$\frac{1}{N} \sum_{n=1}^N \delta_{\theta_n}$$.

## Relation to Other Stochastic Processes

### Blackwell-MacQueen Urn Scheme

The [Blackwell-MacQueen Urn scheme](blackwell_macqueen_urn_scheme.md) describes the
posterior predictive distribution of samples from a distribution sampled from a DP.
Specifically, suppose we have the following generative model:

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

### Chinese Restaurant Process

The Dirichlet process is intimately connected with several other stochastic processes,
including the [stick breaking process](stick_breaking_process.md) and the
[Chinese restaurant process](chinese_restaurant_process.md).


### Stick Breaking Construction




### GEM Distribution

The GEM distribution describes the ordered weights of the Dirichlet process.
More specifically, given $$G \sim DP(\alpha, G_0)$$, we can write

$$G := \sum_{k=1}^{\infty} \beta_k \delta_{\phi_k}$$

The sequence of decreasing $$(\beta_k)_k $$ obeys a $$GEM(\alpha)$$ distribution.



