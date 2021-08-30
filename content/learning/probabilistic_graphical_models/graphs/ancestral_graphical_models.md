# Ancestral Graphs

See Ancestral Graph Markov Models by Richardson and Spirtes for a complete description.
Motivated by the property that Gaussians are closed under marginalization and conditioning, we ask what
graphs are closed under both operations?

Consider an undirected graph $$x_1 - L - x_2 - x_3$$ and we marginalize out $$L$$. Is there
another undirected graph which is a P-map for the original graph? Yes: $$x_1 - x_2 - x_3$$.
What if we instead condition on $$L$$? Again, there is a P-map for the original graph:
$$x_1 \phantom{-} x_2 - x_3$$. We conclude that undirected graphs are closed under
conditioning and marginalization.

We now ask the same two questions of directed graphs. The answer to both will be no.
Consider $$x_1 \rightarrow x_2$$, $$x_3 \rightarrow x_4$$, $$L \rightarrow x_2$$
and $$L \rightarrow x_4$$. For a concrete example, $$x_1, x_3$$ might be treatments,
$$x_2, x_4$$ outcomes and $$L$$ the general health state of the study participant.
If we try to marginalize out $$L$$, no directed graph will be a P-map. For another 
graph, too complicated for me to type, marginalization can create a new V-structure,
meaning the original graph's independencies are affected. Consequently, directed 
graphs are not closed under conditioning nor marginalization.

We can rectify this shortcoming by introducing bidirectional edges e.g. $$x_i \leftrightarrow
x_j$$ and undirected edges $$x_i - x_j$$. This class of graphs is called
Ancestral Graphs.

__Ancestral Graph__: An ancestral graph $$G=(v, (U, D, B))$$ is a graph with three
sets of edges: undirected $$U$$, directed $$D$$ and bidirectional $$B$$. 

TODO: why is this?
