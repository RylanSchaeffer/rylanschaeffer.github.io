# Poisson Point Process

Picture a sample space $$\Omega$$ (e.g. $$\mathbb{R}$$), with some intensity function
$$f: \Omega \rightarrow \mathbb{R}_{\geq 0}$$. For a given interval $$A \subset \Omega$$,
the random number of points that fall into the interval A is distributed Poisson with parameter
equal to the integral of the intensity over the region:

$$N_A \sim Poisson(\int_{a \in A} f(a) da ) $$

with the additional property that if two regions $$A, B$$ are disjoint, then $$N_A$$ and
$$N_B$$ are disjoint. This integral $$\int_A f(a) da$$ can be viewed 
as a measure, which presents an equivalent view, that $$N(\cdot) \sim 
Poisson(F(\cdot))$$ is a random measure.

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
