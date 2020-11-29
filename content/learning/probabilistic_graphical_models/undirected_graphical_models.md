# Undirected Graphical Models

An undirected graphical model is a different way of representing probabilistic relationships
on a graph. An undirected graph $$G=(V, E)$$ also represents variables using vertices.
Rather than starting with factorization, it is easier to start with separation.

__Undirected Separation__: For a given undirected graph $$G+(V, E)$$, $$A, B \subset V$$
are separated w.r.t. $$C \subset V$$ if every path between any $$a \in A, b \in B$$ passes
through some $$c \in C$$.

__Global Markov Property__: A distribution $$p$$ satisfies this property if it satisfies
all conditional independence statements $$x_A \perp x_B \lvert x_C$$ for all disjoint sets
$$A, B, C \in V$$ such that $$A, B$$ are separated w.r.t. $$C$$.

__Pairwise Markov Property__: $$\forall (i, j) \not\in E, \, x_i \perp x_j \lvert x_{V \setminus \{i, j\}}$$

__Factorization__: Let $$cl^*(G)$$ be the set of maximal cliques on $$G$$. Then the Boltzmann
(or Gibbs) distribution on $$G$$ is defined as 

$$p(x) = \frac{1}{Z} \exp(- \sum_{c \in cl^*(G)} \Psi (x_c))$$

where $$x_c$$ are the nodes in the maximal clique and $$\Psi: X^{\lvertc\lvert} \rightarrow \mathbb{R}_{\geq 0}$$
are non-negative functions called potentials. Cliques can be intuited from a physics perspective.
If undirected edges describe interactions between objects, then a maximial clique is a group of particles
that all interact. That interaction has some energy, and the sum of all the interactions has a 
total energy.

__Claim__: Factorization $$\Rightarrow$$ Undirected Global Markov Property.

__Hammersley-Clifford Theorem__: If $$p(x) > 0$$, then factorization w.r.t. undirected $$G$$
$$\Leftrightarrow$$ undirected global Markov property $$\Leftrightarrow$$ undirected local
Markov property.

## Gaussian Undirected Graphs

As the name implies, all variables have Normal distributions. Properties:

1. Potentials can have at most pairwise interactions between variables because
$$J$$ creates pairwise terms and $$h$$ creates single terms, but there are no other higher
interaction terms.

2. $$x_i \perp x_j \Leftrightarrow \Sigma_{ij} = 0$$

3. $$x_i \perp x_j | \text{everything else} \Leftrightarrow J_{ij} = 0$$. This only
holds when conditioning on everything else. Consequently, to test $$x_i \perp x_j | x_k$$,
first marginalize till only $$x_i, x_j, x_k$$ remain.
