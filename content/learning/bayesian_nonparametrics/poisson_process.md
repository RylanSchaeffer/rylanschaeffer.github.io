# Poisson Point Process

## Definitions

### Counting Definition

A stochastic process $${N_t : t \geq 0}$$ is said to be a Poisson point process
if the process has three properties:

1. $$N_0 = 0$$
2. the process has __independent increments__, meaning $$\forall m \in \mathbb{N}$$ and
any choice $$t_0, t_1, ..., t_m$$ with $$t_0 < t_1 < ... < t_m$$, the following random variables
   are independent:
   
$$N_{t_1} - N_{t_0}, N_{t_2} - N_{t_1}, ..., N_{t_m} - N_{t_{m-1}}$$

3. The number of points in any interval of length $$t$$ is distributed Poisson with rate $$\lambda t$$.

### Interarrival Definition

TODO

### Point Process Definition

An alternative, equivalent definition is that the number of points on the real line in the interval
$$(a, b]$$ is distributed Poisson with rate $$(b-a) \lambda$$ i.e.

$$P(N(a, b] = n) = \frac{(\lambda(b-a))^n e^{-\lambda(b-a)}}{n!} $$
