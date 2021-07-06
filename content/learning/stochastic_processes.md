# Stochastic Processes

Stochastic processes are a set of random variables indexed by some index set (e.g. time or integers). For instance,
a sequence of stock prices $$\{ X_t \}_{0 \leq t \leq T }$$ is a stochastic process where the
index set is time $$t \in [0, T]$$. The utility of defining distributions over stochastic
processes is that it makes the model significantly more powerful; for instance, if the variables
of the process are parameters for observations, then the model can have access to an
unbounded number of parameters to use as appropriate. One interpretation is therefore that
Bayesian Nonparametrics are distributions over function spaces, where the function maps the
index set to the set of random variables.

- Markov Process
- Markov Decision Process
- [Markov Renewal Process](stochastic_processes/markov_renewal_process.md)
- [Semi-Markov Process](stochastic_processes/semi_markov_process.md)
