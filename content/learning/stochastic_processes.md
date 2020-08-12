# Stochastic Processes

## Chinese Restaurant Process

Imagine a queue of $$N$$ customers at a restaurant with infinitely many tables, each with
an infinite capacity. Suppose that the first customer $$x_1$$ sits at a table and that every
subsequent customer either sits at a new table with probability $$\alpha / (n - 1 + \alpha)$$
or sits with others with probability $$c_i / (n - 1 + \alpha)$$, where $$c_i$$ is the number
of people at the $$i$$th table.

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
that for $$n$$ customers,  

2. A seating arrangement is a partition of the people. We could consider a distribution on the space
of all possible partitions for $$n$$ customers, but the partition function $$\rho(n)$$ has no known
closed form. It grows approximately $$e^{O(\sqrt{n})}$$.

3. The expected number of tables grows logarithmically. To see why, in order for 