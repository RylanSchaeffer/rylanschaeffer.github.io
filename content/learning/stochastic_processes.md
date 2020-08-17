# Stochastic Processes

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

Properties:

1. The probability of seating arrangement is invariant under permutations. To see why, note
that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha }$$

2. A seating arrangement is a partition of the people. We could consider a distribution on the space
of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for 

### Distance Dependent Chinese Restaurant Process

Because the CRP defines a distribution on partitions of customers, the order in which
the customers arrive doesn't matter. This property is called exchangeability.
However, for certain applications, exchangeability might be undesirable. For instance, if your
data has temporal or spatial structure, then you would want clusters (tables) to reflect the
relevant notions of distance. [Blei and Frazier](https://www.jmlr.org/papers/volume12/blei11a/blei11a.pdf)
introduce the Distance Dependent CRP (ddCRP) to allow the CRP to capture this desideratum.

The key conceptual difference is that instead of assigning customers to tables (clusters)
proportional to the number of people at the table, we assign customers to other customers proportional
to the distance between them. This also produces a distribution over partitions of the customers.

To do this properly, we need a few extra ingredients. First, we need a measure of "distance" between all pairs of 
data points. I put "distance" in quotation marks because a distance function is defined as satisfying
three axioms (identity of indiscernibles, symmetry, triangle inequality), but Blei and Frazier
frustratingly use the word "distance" even though there's no requirement for any of the three axioms.
We use $$d_{ij}$$ to denote the "distance" from the $$i$$th datum to the $$j$$th datum
and $$D = \{ d_ij \}$$ to denote the set of all pairwise distances. We also permit a "decay" function
$$f: \mathbb{R} \rightarrow \mathbb{R}$$ to allow transformations of the distance. The probability of
assigning the $$i$$th customer to the $$j$$th customer is then:

$$
P(z_i = j|D, \alpha) = \begin{cases}
\frac{f(d_{ij})}{\sum_k f(d_{ik}) + \alpha} & i \neq j \\
\frac{\alpha}{\sum_k f(d_{ik}) + \alpha} & i = j
\end{cases}
$$