# Infinite Hidden Markov Model (iHMM)

The infinite HMM (iHMM), also known as the Hierarchical Dirichlet Process-Hidden
Markov Model (HDP-HMM) is a modification of the classic [HMM](hidden_markov_model.md)
that allows for an unbounded number of latent states and emission symbols by 
leveraging non-parametric Bayesian priors over the transition and emission matrices.
Despite the explicit invocation of [Dirichlet Processes](../../bayesian_nonparametrics/dirichlet_process.md),
I think a more-accurate name would be the Hierarchical CRP-HMM or Hierarchical

## Definition