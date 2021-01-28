# Dirichlet Process

There are many ways to describe a Dirichlet Process (DP). Some of these include:

- an infinite dimensional generalization of the Dirichlet distribution, akin to 
 how the [Gaussian process](gaussian_processes.md) is an infinite dimensional
  generalization of the multivariate Gaussian distribution
  
- A distribution over discrete probability distributions

- A distribution whose marginal distributions are distributed as Dirichlets

## Definition


Briefly, we have to cover measure theory. A __measure__ is a function that assigns
a non-negative number to subset of a set. One additional requirement is that in
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

## Properties

- Each sample path (draw) from a Dirichlet Process is a discrete distribution

- $$\mathbb{E}[G(A_k)] = \mathbb{E}[G_0(A_k)]$$. Proof:

$$
\begin{align*}
\mathbb{E}[G(A_k)] &= \frac{\alpha G_0(A_k)}{\sum_i \alpha G_0(A_i)}\\
&= \frac{G_0(A_k)}{\sum_i G_0(A_i)}\\
&= \mathbb{E}[G_0(A_k)]
\end{align*}
$$

- $$\mathbb{V}[G(A_k)] = G_0(A_k)(1 - G_0(A_k))/(1 + \alpha)$$

- Posterior inference: Let $$G \sim DP(\alpha, G_0)$$. Since $$G$$ is a (random) distribution,
we can sample from it. Let $$\theta_1, ..., \theta_N \sim_{i.i.d} G$$, where $$N$ is the 
  total number of samples. Then the posterior of $$G$$ is given by
  
$$G | \theta_1, ..., \theta_N \sim DP \Big(\alpha + N, \frac{\alpha}{\alpha + N} G_0 +
\frac{N}{\alpha + N} \frac{1}{N}\sum_{n=1}^N \delta_{\theta_n} \Big)$$

where $$\delta_{\theta_n}$$ is a Dirac measure located at $$\theta_n$$. Intuitively, the posterior's
concentration parameter is the sum of the pseudo-observations $$\alpha$$ and the real observations
$$N$, and the base distribution becomes a weighted average
of the prior distribution $$G_0$$ and the empirical distribution $$\frac{1}{N}\sum_{n=1}^N \delta_{\theta_n}$$.

## Relation to Other Processes

### Blackwell-MacQueen Urn Scheme

### Chinese Restaurant Process

### Stick Breaking Process

### GEM Distribution



The Dirichlet process is intimately connected with several other stochastic processes,
including the [stick breaking process](stick_breaking_process.md) and the
[Chinese restaurant process](chinese_restaurant_process.md).



