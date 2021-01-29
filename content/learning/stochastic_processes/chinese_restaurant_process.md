# Chinese Restaurant Process

__Parent__: [Stochastic Processes](../stochastic_processes.md)

The Chinese Restaurant Process (CRP) is a stochastic process for expressing distributions
over partitions of $$[N] := \{1, ..., N\}$$. Consequently, the CRP is frequently used in problems involving
clustering. The CRP is also known as Ewens sampling formula.

## Definition

## Definition as Distribution Over Partitions

The name arises from imagining a queue of possibly infinitely many customers at a Chinese restaurant,
with infinitely many tables, each table with an infinite capacity. Fix a concentration parameter $$\alpha > 0$$.
The first customer $$z_1$$ sits at a table, which we label table 1. For
each subsequent customer $$z_t$$, let $$K_{t-1}$$ denote the number of tables occupied by the
preceding $$t-1$$ customers and let $$n_{t-1}^{(k)}$$ denote the number of people at the $$k$$th table
after the $$t-1$$ customer was seated. Then the $$t$$th customer either sits at a new table with probability:

$$P(z_t = K_{t-1} + 1) = \frac{\alpha}{t - 1 + \alpha}$$

or sits at table $k$ with probability:

$$P(z_t = k) = \frac{n_{t-1}^{(k)}}{t - 1 + \alpha}$$

The concentration parameter $$\alpha$$ expresses how likely new customers
are to choose a new table. Note that $$CRP(\alpha)$$ defines
a probability distribution over partitions of $$t$$ customers.

An equivalent representation (that can then be generalized to yield the 
[distance dependence CRP](distance_dependent_chinese_restaurant_process.md))
assigns customers to one another instead of assigning customers to tables.

$$p(z_i = j) \propto \begin{cases} 1 & j < i\\ \alpha & i = j \end{cases} $$

Customers that have been assigned can then be grouped into tables. For instance,
if $$z_2$$ sits with $$z_1$$ and $$z_3$$ sits with $$z_2$$, then all three
are at the same table.

## Definition as Marginalizing Out DP Base Measure

Suppose we have the following generative model:

$$
\begin{align*}
G &\sim DP(\alpha, G_0)\\
\theta_1, ..., \theta_M &\sim_{i.i.d.} G
\end{align*}
$$

As explained in the [Blackwell-MacQueen Urn Scheme](blackwell_macqueen_urn_scheme.md), the
posterior predictive of $$\theta_{M+1}$$ can be written as:

$$\theta_{M+1} | \theta_1, ..., \theta_M \sim \frac{1}{\alpha + M}(\alpha G_0 + \sum_{m=1}^M \delta_{\theta_m})$$

However, some of those $$\theta_1, ..., \theta_M$$ may take the same value, meaning we can rewrite the
sum of the Dirac measures as the sum of the unique values $$\theta_1^*, ..., \theta_K^*$$ along
with the counts of each value appearing $$N_k$$: 

$$\theta_{M+1} | \theta_1, ..., \theta_M \sim \frac{1}{\alpha + M}(\alpha G_0 + \sum_{k=1}^K N_k \delta_{\theta_k^*})$$

This is an equivalent definition of $$CRP(\alpha)$$.

## Properties

- The probability of a random partition of $$N$$ customers $$\Pi_N$$ equalling a particular parition $$\pi_N$$
  with $$K$$ blocks and $$N_k$$ elements in the $$k$$th block is given by

$$P(\Pi_N = \pi_N) = \frac{\alpha^{K-1} \prod_{k=1}^K (N_k - 1)!}{(\alpha + 1)_{N-1 \uparrow 1}} $$

where the denominator is the so-called rising factorial, defined as $$x_{M \uparrow a} := \prod_{m=1}^{M-1}(x + ma)$$.

- The expected number of tables $$K$$ grows logarithmically with the number of customers $$N$$. Specifically,

$$\mathbb{E}[K | N] = \sum_{n=1}^N \frac{\alpha}{\alpha + n - 1} = \alpha (\digamma(\alpha + N) - \digamma(\alpha))
\approx \alpha \log(1 + \frac{N}{\alpha})$$

where $$\digamma(\cdot)$$ is the Digamma function. Similarly, the variance around the expected number of tables
grows logarithmically:

$$\mathbb{V}[K | N] \approx \alpha \log (1 + \frac{N}{\alpha})$$

- The probability of seating arrangement is invariant under permutations. To see why, note
   that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha}$$

- A seating arrangement of $$N$$ customers defines a partition over $$[N] := \{1, ..., N\}$$. The number
 of partitions for $$N$$ customers is given by the [Bell numbers](https://en.wikipedia.org/wiki/Bell_number)
  
## Relation to Other Stochastic Processes

### Blackwell-MacQueen Urn Scheme

As far as I can tell, the [Blackwell-MacQueen Urn scheme](blackwell_macqueen_urn_scheme.md) is identical
to the CRP. One small difference in usage is that CRP discussions tend to focus more on partitions,
whereas BM Urn Schemes tend to focus on the specific realization of each random variable in the sequence.

### Dirichlet Process

The CRP is closely related to the [Dirichlet process](dirichlet_process.md#chinese-restaurant-process). The connection is that
the CRP integrates out the base measure $$G_0$$, meaning that the CRP cares only for how many
random elements have the same value, regardless of what that value is. For a more detailed explanation
of marginalizing out the base measure $$G_0$$, see
[the definition of the Blackwell-MacQueen Urn Scheme](blackwell_macqueen_urn_scheme.md#definition).

### Stick-Breaking Process

[Stick Breaking Process](stick_breaking_process.md)