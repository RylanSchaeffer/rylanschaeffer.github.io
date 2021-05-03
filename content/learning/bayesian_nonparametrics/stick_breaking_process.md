# Stick Breaking Process

__Parent__: [Stochastic Processes](../stochastic_processes.md)

## Definition

The Stick-Breaking Process (SBP) is a stochastic process where each sample path is an infinite sequence of
random variables $$\pi_1, \pi_2...$$ such that each variable $$pi_i \in (0, 1)$$ and sum of the sequence
$$\sum_{k=1}^{\infty} \pi_1$$ equals 1 with probability 1. The way the variables is generated is by sampling
an i.i.d. sequence of $$v_k \sim Beta(\alpha, \beta)$$ and then defining

$$ \pi_K = v_K \prod_{k = 1}^K (1 - v_k)$$

This is the source of the name "stick breaking": a stick with mass 1 is sequentially broken into smaller and
smaller pieces.


## Relation to Other Stochastic Processes

### Griffiths-Engen-McCloskey (GEM) Distribution

If the stick-breaking weights $$v_k ~ Beta(\alpha, \beta)$$ with $$\alpha = 1$$, then the 
the infinite random vector $$\pi = (\pi_1, \pi_2, ...)$$ is said to be distributed according
to the so_called Griffiths-Engen-McCloskey distribution $$GEM(\beta)$$.

### Dirichlet Process

The SBP is intimately related to the [Dirichlet process](dirichlet_process.md). Let $$G \sim DP(\alpha, G_0)$$
be a random distribution. The distribution is defined as:

$$G = \sum_{k=1}^K \pi_k \delta_{\theta_{k}}$$

where $$\pi_1, \pi_2, ...$$ is an infinite sequence of probability masses summing to 1 and
$$\theta_1, \theta_2, ...$$ is an infinite sequence of elements sampled from the base distribution
$$G_0$$. From this perspective, one can see that an easy way to sample a random distribution from a DP
is through the three-step __stick-breaking construction__:

1. Sample $$\pi_1, \pi_2, ... \sim_{i.i.d.} SBP(1, \alpha)$$
2. Sample $$\theta_1, \theta_2, ...$$ from the base distribution $$G_0$$
3. Create an infinite mixture distribution $$G := \sum_{k=1}^{\infty} \pi_k \delta_{\theta_{k}}

This constructed $$G$$ is distributed according to $$DP(\alpha, G_0)$$, hence the name stick-breaking
construction.

### Chinese Restaurant Process

The SBP is closely related to the [CRP](chinese_restaurant_process.md). The difference is that 
the CRP integrates out the base measure $$G$$, meaning that the CRP cares only for how many
elements have the same value, regardless of what that value (i.e. the location) is. 