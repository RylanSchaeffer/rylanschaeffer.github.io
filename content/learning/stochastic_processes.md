# Stochastic Processes

## Chinese Restaurant Process

Imagine a queue of $$N$$ customers at a restaurant with infinitely many tables, each with
an infinite capacity. Suppose that the first customer $$z_1$$ sits at a table and that every
subsequent customer $$z_n$$ either sits at a new table with probability $$\alpha / (n - 1 + \alpha)$$
or sits with others with probability $$n_k / (n - 1 + \alpha)$$, where $$n-1$$ is the number of
already seated customers and $$n_k$$ is the number of people at the $$k$$th table.

Note that this single-parameter ($$\alpha$$) process defines a valid probability distribution.
For the $n$th customer, the sum of all outcomes is 1:

\begin{align*}
\frac{\alpha}{n - 1 + \alpha} + \sum_i \frac{c_i}{n-1+\alpha}
&= \frac{1}{n - 1 + \alpha}(\alpha + \sum_i c_i)\\
&= \frac{1}{n - 1 + \alpha}(\alpha + n - 1)\\
&= 1
\end{align*}

Properties:

1. The probability of seating arrangement is invariant under permutations. To see why, note
that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha }

2. A seating arrangement is a partition of the people. We could consider a distribution on the space
of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for 

### Distance Dependent Chinese Restaurant Process

One property at the heart of the CRP is that the customers are exchangeable. Specifically,
because the CRP defines a distribution on partitions of customers, the order in which
the customers arrive doesn't matter. However, for certain applications, this might be 
an undesirable property. For instance, if your data has temporal or spatial structure,
then you would want likely clusters to reflect the relevant notions of distance. Blei and Frazier
introduce the Distance Dependent CRP (ddCRP) to allow the CRP to capture this aspect.

The   