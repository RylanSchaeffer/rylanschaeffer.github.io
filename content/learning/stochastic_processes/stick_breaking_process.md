# Stick Breaking Process


## Succinct Explanation

Given a base distribution $$G$$ and two shape parameters $$\alpha, \beta > 0$$, draw 
an infinite sequence $$(x_1, x_2, ...)$$ from the base distribution i.e. $$x_k \sim G$$ and
then draw an infinite sequence $$(v_1, v_2, ...)$$ from a $$Beta(a, b)$$ distribution.
Convert the Beta samples into a sequence of probability masses $$(\rho_1, \rho_2, ...)$$
that sums to 1 almost surely:

$$
\rho_k = \begin{cases}
v_1 & k = 1\\
v_k \prod_{j < k} (1 - v_j) & k > 1
\end{cases}
$$

A sample path (draw) from $$SBP(G, a, b)$$ is a mixture of an infinite Dirac measures with
mass $$\rho_k$$ located at $$x_k$$:

$$G \sim SBP(G, a, b) \rightarrow G(x) = sum_{k=1}^{\infty} \rho_k \delta_{x_k}$$


## Verbose Explanation

A stick breaking process (SBP) is a stochastic process with a funny name that originates
in a metaphor of sequentially breaking a stick into an infinite sequence of smaller
and smaller fractions. A SBP requires three inputs: a __base distribution__ $$G_0$$
and two shape parameters $$\alpha, \beta > 0$$. A sample path (informally, a draw or 
a realization) from $$SBP(G_0, \alpha, \beta)$$ is a distribution $$G(\cdot)$$ that is a mixture
of an infinite number of Dirac distributions, where the locations of each Dirac distribution
is sampled from the base distribution and where the probability mass placed at each
Dirac distribution depends on the shape parameters. Imagine starting with a stick of length
(secretly: probability mass) 1 and splitting it into two pieces based on a sampled variable
$$v_1 \sim Beta(\alpha, \beta)$$. One piece will have length (mass) $$v_k$$ and the remaining
piece will have length (mass) $$1 - v_k$$. Take the remaining piece, draw another sample
from the Beta $$v_2 \sim Beta(\alpha, \beta)$$, and break the remaining piece into two pieces,
one with length $$(1-v_1)v_2$$ and the other with length $$(1-v_1)(1-v_2)$$. This process
constructively yields an infinite sequence of probabilities $$(\rho_1, \rho_2, ...)$$ where

$$\rho_k = \begin{cases}
v_1 & k = 1\\
v_k \prod_{j < k} (1 - v_j) & k > 1
\end{cases}
$$


such that $$\rho_k \in (0, 1)$$ and $$\sum_{k=1}^{\infty} \rho_k = 1$$ almost surely (i.e. 
the set of possible exceptions may be non-empty but has probability 0). 

If we call the infinite sequence of samples from the base distribution $$(x_1, x_2, ...)$$,
a sample path $$G \sim SBP(G_0, \alpha)$$ is a distribution $$G(\cdot)$$ given by a mixture of Dirac distributions:

$$G(x) = sum_{k=1}^{\infty} \rho_k \delta_{x_k}$$

In plain English, this should be read as "the probability of observing x is equal
to $$\rho_k$$ if $$x=x_k$$ and zero otherwise"

If $$v_k \sim Beta(1, \alpha)$$, then the resulting SBP is exactly equivalent
to a [Dirichlet process](dirichlet_process.md) and the sequence of probability
masses $$(\rho_1, \rho_2, ...)$$ follows a Griffiths, Engel, McCloskey (GEM) distribution:

$$(\rho_1, \rho_2, ...) \sim GEM(\alpha) $$