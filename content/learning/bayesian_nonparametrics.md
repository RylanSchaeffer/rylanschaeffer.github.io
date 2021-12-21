# Bayesian Nonparametrics

Bayesian Nonparametrics (BNPs) are probabilistic models that define infinite dimensional distributions
using [stochastic processes](stochastic_processes.md). Stochastic processes are 
a set of random variables indexed by some index set (e.g. time or integers). For instance,
a sequence of stock prices $$\{ X_t \}_{0 \leq t \leq T }$$ is a stochastic process where the
index set is time $$t \in [0, T]$$. The utility of defining distributions over stochastic
processes is that it makes the model significantly more powerful; for instance, if the variables
of the process are parameters for observations, then the model can have access to an
unbounded number of parameters to use as appropriate. One interpretation is therefore that
Bayesian Nonparametrics are distributions over function spaces, where the function maps the
index set to the set of random variables.

Broadly, there are three approaches to using BNPs:

1. [Exponential Family Conjugacy](probability/exponential_family_distributions.md),
   which converts the integral into vector addition
2. Size-based representations, which offers exact inference via
   [slice sampling](bayesian_methods/slice_sampling.md)
3. Marginalization, which integrates out the traits to create marginal processes
   e.g. [Chinese Restaurant Process](bayesian_nonparametrics/chinese_restaurant_process.md), 
   [Indian Buffet Process](bayesian_nonparametrics/indian_buffet_process.md)

## Contents

- [Bernoulli Process](bayesian_nonparametrics/bernoulli_process.md)
- [Beta Process](bayesian_nonparametrics/beta_process.md)
- [Chinese Restaurant Process](bayesian_nonparametrics/chinese_restaurant_process.md)
- [Completely Random Measures](bayesian_nonparametrics/completely_random_measures.md)
- [Dependent Dirichlet Process](bayesian_nonparametrics/dirichlet_process.md)
- [Dirichlet Process](bayesian_nonparametrics/dirichlet_process.md)
- [Distance Dependent Chinese Restaurant Process](bayesian_nonparametrics/distance_dependent_chinese_restaurant_process.md)
- [Distance Dependent Indian Buffet Process](bayesian_nonparametrics/distance_dependent_indian_buffet_process.md)
- [Gamma Process](bayesian_nonparametrics/gamma_process.md)
- [Gaussian Process](bayesian_nonparametrics/gaussian_processes.md)
- [Indian Buffet Process](bayesian_nonparametrics/indian_buffet_process.md)  
- [Infinite Hidden Markov Model](bayesian_nonparametrics/infinite_hidden_markov_model.md)
- [Levy Process](bayesian_nonparametrics/levy_process.md)  
- [MacQueen Urn Scheme](bayesian_nonparametrics/blackwell_macqueen_urn_scheme.md)
- [Poisson Point Process](bayesian_nonparametrics/poisson_process.md)  
- [Polya Urn Scheme](bayesian_nonparametrics/polya_urn_scheme.md)
- [Stick Breaking Process](bayesian_nonparametrics/stick_breaking_process.md)
