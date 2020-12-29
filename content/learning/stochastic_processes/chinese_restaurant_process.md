# Chinese Restaurant Process

The Chinese Restaurant Process (CRP) is a stochastic process for expressing distributions
over partitions of your data. Consequently, the CRP is frequently used in problems involving
clustering.

The name arises from imagining a queue of $$N$$ customers at a restaurant with infinitely many tables, each with
an infinite capacity. Fix a concentration parameter $$\alpha > 0$$.
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

$$p(z_i = j) \propto \begin{cases} 1 & j < 1\\ \alpha & i = j \end{cases} $$

Customers that have been assigned can then be grouped into tables. For instance,
if $$z_2$$ sits with $$z_1$$ and $$z_3$$ sits with $$z_2$$, then all three
are at the same table.

## Relation to the Dirichlet Process and Stick Breaking Process

The CRP is closely related to the [Dirichlet process](dirichlet_process.md) and the 
[Stick Breaking Process](stick_breaking_process.md). The difference is that
the CRP integrates out the base measure $$G$$, meaning that the CRP cares only for how many
elements have the same value, regardless of what that value (i.e. the location) is.

## Properties

1. The probability of seating arrangement is invariant under permutations. To see why, note
   that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha }$$

2. A seating arrangement is a [partition](https://en.wikipedia.org/wiki/Partition_(number_theory))
   of the customers. We could consider a distribution on the space
   of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
   closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for

