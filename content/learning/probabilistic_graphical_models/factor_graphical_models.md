# Factor Graphs

A factor graph $$G=((V, F), E)$$ is a bipartitie graph where $$V$$ are random variable nodes,
$$F$$ are factor nodes and edges $$E \subseteq V \times F$$. Like [directed graphs](directed_graphical_models.md)
and [undirected graphs](undirected_graphical_models.md), a given factor graph describes a family
of distributions where each distribution $$p$$ in the family can be written as:

$$P(X_V) = \frac{1}{Z} \prod_{i \in F} f_i(X_{V_i})$$

where $$Z = \sum_{X_V} \prod_{i \in F} f_i(X_{V_i})$$ is the normalization constant and 
$$f_i(\cdot)$$ are non-negative functions. Intuitively, what this says is that the probability
density/mass of a realization of the random variables can be expressed as a product of the
variables interacting through their shared factors.

## Converting Undirected Graphs to Factor Graphs

Converting an undirected graph to a factor graph can grow the number of vertices exponentially.
To see why this is, consider the complement of an undirected graph where the nodes are connected
in disjoint triangles; in other words, each node is connected to every other node except for two.


A factor graph is a tree if and only if the undirected graph is chordal and doesn't contain
$$\tilde{K}_4 i.e. a subgraph that would be chordal but one edge is missing.

## Factor Graph Properties
