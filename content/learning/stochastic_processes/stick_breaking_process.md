# Stick Breaking Process

__Parent__: [Stochastic Processes](../stochastic_processes.md)

Given a base distribution $$G$$ and two shape parameters $$a, b > 0$$, a 
sample path (a draw) from $$SBP(G, a, b)$$ is a distribution defined as an infinite mixture
of Dirac measures with mass $$\rho_k$$ located at $$x_k$$:

$$G \sim SBP(G, a, b) \rightarrow G(x) = sum_{k=1}^{\infty} \rho_k \delta_{x_k}$$

In plain English, the righthand distribution should be read as "the probability of observing x is equal
to $$\rho_k$$ if $$x=x_k$$ and zero otherwise." The infinite sequence of locations
$$(x_1, x_2, ...)$$ is constructed by sampling its elements from
the base distribution i.e. $$x_k \sim G$$, and the probability masses $$\rho_k$$ are
constructed by drawing an infinite sequence $$(v_1, v_2, ...)$$ from a $$Beta(a, b)$$ distribution
and then converting the Beta samples into a sequence of probability masses $$(\rho_1, \rho_2, ...)$$
that sums to 1 almost surely:

$$
\rho_k = \begin{cases}
v_1 & k = 1\\
v_k \prod_{j < k} (1 - v_j) & k > 1
\end{cases}
$$


If $$v_k \sim Beta(1, \alpha)$$, then the resulting SBP is exactly equivalent
to a [Dirichlet process](dirichlet_process.md) and the sequence of probability
masses $$(\rho_1, \rho_2, ...)$$ follows a Griffiths, Engel, McCloskey (GEM) distribution:

$$(\rho_1, \rho_2, ...) \sim GEM(\alpha) $$

## Relation to Chinese Restaurant Process

The SBP is closely related to the [CRP](chinese_restaurant_process.md). The difference is that 
the CRP integrates out the base measure $$G$$, meaning that the CRP cares only for how many
elements have the same value, regardless of what that value (i.e. the location) is. 