# Probabilistic Graphical Models

## Overview
-----

A joint distribution over $$N$$ variables $$\{x_i\}_{i=1}^N can permit complicated relationships
between the variables. One general principle is that performing inference
becomes easier in the absence of relationships between variables. This motivates
us to specify relationships between variables as a graphs and then use the graph
structure to design efficient inference algorithms

## History
-----
- Statistical physics: undirected graphs to represent distribution over large
system of interacting particles

- Genetics: directed graphs to model inheritance

- Statistics: interactions in multi-dimensional contingency tables


## Directed Graphical Models
-----


A directed graphical model is one way of combining graphs with random variables. Specifically,
a directed graphical model $$G = (V, E)$$ is defined as the tuple of $$V$$, a set of vertices, each 
representing a random variable, and $$E \subseteq V \times V$$, a set of directed edges.
One particular $$G$$ defines a family of joint distributions over the random variables
by imposing conditional independencies in the edges. 
We denote the $$i$$th random variable $$X_i$$ and its set of parent nodes

$$\pi_i = \{j \in V \lvert (j, i) \in E \}$$

__Importantly, $$G$$ cannot have cycles__. If it does, there is no consistent way to assign
conditional probabilities.

### Extracting Conditional Independence from Directed Graphs

I use numbers to represent random variables rather than $$x_1, x_2, ...$$. I couldn't get
BayesNet to work with Markdown, so bear with the poor "pictures".  

- Ex 1: $$ 1 \rightarrow 2 \rightarrow 3$$ .Here, by the definition of conditional probabilities, we have
$$p(1,2,3) = p(1)p(2\lvert1)p(3\lvert1,2)$$. By the structure of the graph, we also have 
$$p(1,2,3) = p(1)p(2\lvert1)p(3\lvert2)$$. Setting the two equal shows $$p(3\lvert1,2) = p(3\lvert2)$$, meaning
3 is conditionally independent from 1 given 2.

- Ex 2: $$ 1 \leftarrow 2 \rightarrow 3$$. A similar analysis shows that $$1 \perp 3 \lvert 2$$.
Intuitively, if $$1$$ and $$3$$ are descendents of $$2$$, then knowing the parent $$2$$ renders the
 two descendents independent.

- Ex 3: $$ 1 \rightarrow 2 \leftarrow 3 $$. This one is trickier, but not by much. Suppose $$2$$ is the child of $$1$$ and $$3$$. Initially,
there's no relationship between the parents, so $$1 \perp 3$$, but if I observe that the child
has blue eyes and that $$1$$ does not, this tells me something about $$3$$. Consequently,
$$1 \perp 3$$ but $$1 \not\perp 3 \lvert 2$$.

__Directed Local Markov Property__:  A distribution $$p$$ over $$X^{\lvertV\lvert}$$ ($$V$$ is the set of 
variables) is said to satisfy the directed local
Markov property with respect to a DAG $$G = (V, E)$$ if $$\forall i \in V, x_i \perp 
x_{nd(i) \\ pi_i} \lvert \pi_i$$ where $$\pi_i$$ are the parents of $$i$$ and
 $$nd(i)$$ are the non-descendents of $$i$$. 

Directed Separation (or d-separation) describes rules for extracting
conditional independencies in a DAG. 

__Directed (d-) Separation__: For DAG $$G = (V, E)$$, we say the set of nodes $$A$$ is d-separated from the
 nodes $$B$$ with respect to nodes $$C$$ if every _path_ between nodes $$a\in A$$ and 
 $$b \in B$$ is _blocked_. A _path_ is a chain of edges that connect
two vertices, regardless of those edges' directionality. For determining whether a path is _blocked_,
there are really just two rules motivated by the earlier examples ($$1 \rightarrow 2 \rightarrow 3, 
1 \leftarrow 2 \rightarrow 3, 1 \rightarrow 2 \leftarrow 3$$):

1. Suppose arrows on the path don't meet head to head (e.g. $$1 \rightarrow 2 \rightarrow 3, 
1 \leftarrow 2 \rightarrow 3$$). Then the path is blocked if a node along the path is observed
and unblocked if not observed.

2. Suppose arrows on the path do meet head to head (e.g. $$1 \rightarrow 2 \leftarrow 3$$).
Then the path is unblocked if a node along the path is observed and blocked if not observed.
This also holds for descendents of node $$2$$.

__Directed Global Markov Property__: A distribution $$p$$ satisfies the 
global Markov property with respect to a DAG $$G=(V,E)$$ if $$\forall x_A, x_B, x_C \subset V,
\, x_A \perp x_B \lvert x_C \Leftrightarrow$$ $$A$$ and $$B$$ are d-separated by $$C$$.

It turns out that both the global Markov property and the local Markov property are equivalent,
and that both properties are equivalent to factorization.

__Theorem__: Let $$G$$ be a DAG. The following are equivalent:

1. $$p$$ factorizes according to $$G$$

2. $$p$$ satisfies the directed global Markov property with respect to $$G$$

3. $$p$$ satisfies the directed local Markov property with respect to $$G$$ 

The implication is that the following two lists are equivalent:

1. List all distributions that factorize according to the graph structure

2. List all distributions, then discard distributions which violate the conditional
independencies obtained by testing d-separation


Let $$I(G)$$ be the set of C.I. relations for a DAG $$G$$ corresponding to d-separation,
and let $$I(p)$$ be the set of C.I. relations for distribution $$p$$.

__Claim__: $$\forall G = (V,E), \exists p$$ such that $$p$$ factorizes according to $$G$$
 and $$I(G) = I(p)$$. Additionally, $$\exists p $$ for which no DAG exists satisfying
 $$I(G)= I(p)$$.
 
__Claim__: For two DAGs $$G_1, G_2$$, $$I(G_1) = I(G_2)$$ if and only if (1) both have 
the same skeleton (i.e. same edges, regardless of direction) and (2) same
v-structures (also called immoralities or common causes). 


## Undirected Graphical Models
-----

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

## Relationship between Directed and Undirected Graphs

Directed and undirected graphs can represent different distributions. 

- Ex:  $$1 \rightarrow 2 \rightarrow 3 \Rightarrow 1 - 2 - 3$$. However, so too does
$$1 \leftarrow 2 \leftarrow 3 \Rightarrow 1 - 2 - 3$$ as does $$1 \leftarrow 2
\rightarrow 3 \Rightarrow 1 - 2 - 3$$. So 3 directed graphs can be represented by 
one undirected graph.

- Ex: $$1 \rightarrow 2 \leftarrow 3$$ has no equivalent undirected graph with these
and only these conditional independencies.

- Ex: $$ 1 - 2 - 3 - 4 - 1$$ has no equivalent directed graph. Because the undirected
graph has a loop, at some point, 2 edges will collide. Suppose the collision happens
at $$3 \rightarrow 4 \leftarrow 1$$. In the undirected graph, we have $$1 \perp 3 \lvert 2, 4$$.
But in the directed graph, we have $$1 \not\perp \lvert 2, 4$$.

__Efficient Representation__: Suppose $$G_1, G_2 $$ are two graphs with corresponding families
$$P(G_1), P(G_2)$$ and with sets of CIs given by $$I(G_1), I(G_2)$$. If a distribution
$$p$$ is representable by both graphs i.e. $$p \in P(G_1), p \in P(G_2)$$, we say 
$$G_1$$ is a more efficient representation of $$p$$ if $$I(G_1) \subset I(G_2)$$.

__Independence Map__: A DAG or UG is called an independence map (or I-map) for 
distribution $$p$$ if set of CIs expressed by graph $$I(G) \subset I(p)$$, where
$$I(p)$$ is the set of CIs expressed by the distribution.

The implication of being an I-map is that $$p$$ is one of the distributions in the 
set of families represented by the graph.

__Perfect Map__: A graph $$G$$ is a perfect map for distribution $$p$$ if $$I(G) = I(p)$$.

__Minimal I-Map__: A graph $$G$$ is a minimal I-map if removing any edge would cause
it to no longer be an I-map for distribution $$p$$.

Note: A minimal I-map for a distribution $$p$$ may not be unique. It depends on the choice
of topological ordering and which CIes (if any) are dropped.

__Moralization__: An undirected graph $$G' = (V, E')$$ is a moralization of a DAG $$G=(V, E)$$
if $$(i, j) \in E \Rightarrow (i, j) \in E'$$ and if $$ i \rightarrow k \leftarrow j$$, we connect
$$i$$ to $$j$$ (either direction fine). This connection is called a "moralization" after 
"marrying" two unmarried nodes.

Claim: DAG $$G$$ has undirected perfect map $$\Leftrightarrow$$ moralization of G does not add
any edges.

__Chordal__: An undirected graph (UG) is chordal if every loop of size $$\geq 4$$ has a chord
(an edge connecting 2 non-consecutive nodes in loop)

Claim: Undirected graph G has a directed P-map $$\Leftrightarrow$$ G is chordal


### Gaussian Undirected Graphs


Important Properties:

Potentials have only at most pairwise interactions
between variables. This is because $$J$$ creates pairwise terms and $$h$$ creates single
terms, but there are no other higher interaction terms.



## Factor Graphs

A factor graph $$G=((V, F), E)$$ is a bipartitie graph such that $$V$$ are variable nodes 
and $$F$$ are factor nodes.