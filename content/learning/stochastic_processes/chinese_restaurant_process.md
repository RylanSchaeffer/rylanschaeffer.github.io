## Chinese Restaurant Process

The Chinese Restaurant Process (CRP) is a stochastic process for expressing distributions
over partitions of your data. Consequently, the CRP is frequently used in problems involving
clustering.

The name arises from imagining a queue of $$N$$ customers at a restaurant with infinitely many tables, each with
an infinite capacity. The first customer $$z_1$$ sits at a table, which we label table 1. For
each subsequent customer $$z_n$$, let $$K_{n-1}$$ denote the number of tables occupied by the
preceding $$n-1$$ customers and let $$n_k$$ denote the number of people at the $$k$$th table. Then
the $$n$$ customer either sits at a new table with probability:

$$P(z_n = K_{n-1} + 1) = \frac{\alpha}{n - 1 + \alpha}$$

or sits at table $k$ with probability:

$$P(z_n = k) = \frac{n_k}{n - 1 + \alpha}$$

The parameter $$\alpha$$ defines this stochastic process and expresses how likely new customers
are to choose a new table. Note that $$CRP(\alpha)$$ defines
a probability distribution over partitions of $$n$$ elements.
For the $n$th customer, the sum of all outcomes is 1:

$$
\begin{align*}
\frac{\alpha}{n - 1 + \alpha} + \sum_i \frac{c_i}{n-1+\alpha}
&= \frac{1}{n - 1 + \alpha}(\alpha + \sum_i c_i)\\
&= \frac{1}{n - 1 + \alpha}(\alpha + n - 1)\\
&= 1
\end{align*}
$$

## Relation to the Dirichlet Process and Stick Breaking Process

The CRP is closely related to the [Dirichlet process](dirichlet_process.md) and the 
[Stick Breaking Process](stick_breaking_process.md). The difference is that
the CRP integrates out the base measure $$G$$, meaning that the CRP cares only for how many
elements have the same value, regardless of what that value (i.e. the location) is.

## Properties

1. The probability of seating arrangement is invariant under permutations. To see why, note
   that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha }$$

2. A seating arrangement is a [composition](https://en.wikipedia.org/wiki/Composition_(combinatorics))
   of the customers. We could consider a distribution on the space
   of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
   closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for

