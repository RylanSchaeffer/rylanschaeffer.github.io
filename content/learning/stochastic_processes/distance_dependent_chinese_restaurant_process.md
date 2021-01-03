# Distance Dependent Chinese Restaurant Process

One property of the [Chinese Restaurant Process](chinese_restaurant_process.md), called _exchangeability_,
is that the order in which the customers arrive doesn't matter.
However, for certain applications, exchangeability might be inaccurate. For instance, if your
data has temporal or spatial structure, then you would want clusters (tables) to reflect the
relevant notions of distance. [Blei and Frazier 2011](https://www.jmlr.org/papers/volume12/blei11a/blei11a.pdf)
introduce the Distance Dependent CRP (ddCRP) to generate the CRP to capture this desideratum.

The key conceptual difference is that instead of assigning customers to tables (clusters)
proportional to the number of people at the table, we assign customers to other customers proportional
to the distance between them. From this customer-customer assignment, we can reconstruct the clusters.
This also produces a distribution over partitions of the customers. How do we do this mathematically?
We start by rewrite the [common definition of the CRP](chinese_restaurant_process.md).
Let $$i, j$$ index customers and $$z_i$$ denote which customer $$i$$ is assigned to. In the CRP,
the probability that customer $$i$$ is assigned to customer $$j$$:

$$p_{CRP}(z_i = j) \propto \begin{cases} 1 & j < i\\ \alpha & i = j \end{cases} $$

We can now generalize this to the ddCRP by replacing the $$1$$ with the "distance" (not in the
strict mathematical sense) between $$i$$ and $$j$$, denoted $$d_{ij}$$. This gives us the ddCRP:

$$p_{ddCRP}(z_i = j) \propto \begin{cases} d{ij} & j < i\\ \alpha & i = j \end{cases} $$

In the Blei and Frazier paper, they further introduce a "decay" function
$$f: \mathbb{R} \rightarrow \mathbb{R}_{\geq 0}$$ to allow transformations of the distance. The probability of
assigning the $$i$$th customer to the $$j$$th customer is then:

$$
P(z_i = j|D, \alpha) = \begin{cases}
\frac{f(d_{ij})}{\alpha + \sum_k f(d_{ik})} & i \neq j \\
\frac{\alpha}{\alpha + \sum_k f(d_{ik})} & i = j
\end{cases}
$$

## Properties

- Every permutation of the data does not necessarily have the same probability under the ddCRP.
  In contrast, the CRP guarantees every permutation of the data is equally probable (i.e. the
  data is exchangeable). 

- 

## Inference via Gibbs Sampling 



## Variational Inference of Sequential ddCRP

One subtype of the ddCRP is the _sequential ddCRP_ (seqCRP), which specifically addresses distances that are
exclusively functions of time. The seqCRP is useful in modeling sequential data with latent clusters
where the number of clusters is not known a priori. [Bartunov and Vetrov 2014](http://proceedings.mlr.press/v32/bartunov14.pdf)
proposed a variational inference algorithm for the seqCRP. 

We consider a sequence of data $$\underline{x} = x_1, ..., x_T$$ that we assume was generated
by a seqCRP mixture model. As above, let $$f$$ be the decay function, $$D = \{d_{ij}\}$$ be the
set of pairwise distances, $$\alpha$$ be the concentration parameter and $$z_i$$ be the customer
that the $$i$$th customer is assigned to.
