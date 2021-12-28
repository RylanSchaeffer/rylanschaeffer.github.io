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

$$D_{t}^{\prime} \sim DP(q \mu_{t-1})$$

where

$$(q\mu)(A) = \int_A q(\theta) \mu(\theta)$$

3. Transition (move):

4. Superposition (birth):