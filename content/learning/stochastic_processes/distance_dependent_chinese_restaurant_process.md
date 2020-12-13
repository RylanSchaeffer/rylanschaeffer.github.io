### Distance Dependent Chinese Restaurant Process

Because the CRP defines a distribution on partitions of customers, the order in which
the customers arrive doesn't matter. This property is called exchangeability.
However, for certain applications, exchangeability might be undesirable. For instance, if your
data has temporal or spatial structure, then you would want clusters (tables) to reflect the
relevant notions of distance. [Blei and Frazier 2011](https://www.jmlr.org/papers/volume12/blei11a/blei11a.pdf)
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
\frac{f(d_{ij})}{\alpha + \sum_k f(d_{ik})} & i \neq j \\
\frac{\alpha}{\alpha + \sum_k f(d_{ik})} & i = j
\end{cases}
$$

We can define a sequential CRP by defining $$d_{ij} = \infty$$ for $$j > i$$.
