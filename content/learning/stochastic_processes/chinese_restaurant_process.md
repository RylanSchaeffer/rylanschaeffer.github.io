# Chinese Restaurant Process

__Parent__: [Stochastic Processes](../stochastic_processes.md)

The Chinese Restaurant Process (CRP) is a stochastic process for expressing distributions
over partitions of $$[N] := \{1, ..., N\}$$. Consequently, the CRP is frequently used in problems involving
clustering.

## Definition

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

## Properties

1. The probability of seating arrangement is invariant under permutations. To see why, note
   that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha }$$

2. A seating arrangement is a [partition](https://en.wikipedia.org/wiki/Partition_(number_theory))
   of the customers. We could consider a distribution on the space
   of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
   closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for

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