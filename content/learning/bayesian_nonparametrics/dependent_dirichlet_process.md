# Dependent Dirichlet Process

The Dependent Dirichlet Process (DDP) is a modified version of the [Dirichlet Process (DP)](dirichlet_process.md)
that essentially defined a Markov chain of DPs. The idea is that the paired traits and probabilities of the DP 
can change over time: they can be born, move or die.

## Definition

Let $$D \sim DP(\mu)$$ where $$\mu: \Omega \rightarrow \mathbb{R}_+$$ is the base measure and 
$$\alpha_{\mu} = \int_{\Omega} d\mu$$ is the concentration parameter. We can think of $$D$$ as an infinite
sum of traits and probabilities:

$$ D = \{(\theta_k, \pi_k) \}_{k=1}^{k=\infty} \subset \Omega \times \mathbb{R}$$

The DDP is a Markov chain of DPs $$(D_1, D_2, ...)$$ where transitions are governed by 3 stochastic operations:

1. Subsampling (death): Define $$q: \Omega \rightarrow [0, 1]$$

2. Transition (move):

3. Superposition (birth):