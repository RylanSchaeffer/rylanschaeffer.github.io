# Dependent Dirichlet Process

The Dependent Dirichlet Process (DDP) is a modified version of the [Dirichlet Process](dirichlet_process.md)
that essentially defines a Markov chain of DPs. The idea is that the paired traits and probabilities of the DP 
can change over time: they can be born, move or die.

## Definition

Let $$D \sim DP(\mu)$$ where $$\mu: \Omega \rightarrow \mathbb{R}_{+}$$ is the base measure and 
$$\alpha_{\mu} = \int_{\Omega} d\mu$$ is the concentration parameter. We can think of $$D$$ as an infinite
sum of traits and probabilities:

$$ D = \sum_{k=1}^{\infty} \theta_k \pi_k \subset \Omega \times \mathbb{R}$$

The DDP is a Markov chain of DPs $$(D_1, D_2, ...)$$ where transitions are governed by 3 stochastic operations:

1. Subsampling (death): Define $$q: \Omega \rightarrow [0, 1]$$. Then, for each $$(\theta, \pi) \in D_{t-1}$$, sample
 $$b_{\theta} \sim Bernoulli(q(\theta))$$; in English, for each trait, flip a coin with probability
  $$q(\theta_k)$$. Keep only the traits which come up 1 (heads) and renormalize the random probability measure: 

$$D_{t}^{subsample} \sim DP(q \mu_{t-1})$$

where

$$(q\mu)(A) = \int_A q(\theta) \mu(\theta)$$

2. Transition (move): Define distribution $$T: \Omega \times \Omega \rightarrow \mathbb{R}_+$$. For 
 each $$(\theta, \pi)$$ in  $$D_{t}^{subsample}$$, sample $$\theta^{\prime} \sim T(\theta^{\prime} \lvert
  \theta)$$ and set 

$$D_{t}^{transition} \sim DP(T q \mu_{t-1}) $$

where

$$(t \mu)( A ) = \int_A \int_{\Omega} T(\theta^{\prime} \lvert \theta) \mu(d\theta)$$

Intuitively, this just says that the locations of the DPs transition according to $$T$$.

3. Superposition (birth): Sample $$F \sim DP(\nu)$$ and sample $$(c_D, c_F) \sim
  Dir(T q \mu_{t-1}(\Omega), v(Omega))$$. Then set $$D_t$$ as the union of $$(\theta, c_D \pi)$$
 for all $$D_t^{transition}$$ and $$(\theta, c_F \pi)$$ for all $$(\theta, \pi) \in F$$. More succinctly,

$$D_t \sim DP(T q \mu_{t-1} + \nu)$$


After these three steps have been taken, we have the next DP in the Markov chain of DPs
defined as the Dependent Dirichlet Process.

### Low Variance Asymptotics


