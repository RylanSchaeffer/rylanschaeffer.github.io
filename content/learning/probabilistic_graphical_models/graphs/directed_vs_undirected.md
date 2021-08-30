# Directed vs Undirected Graphs
-----

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
