# Graph Relations

Let $$I(\cdot)$$ be the set of all conditional independencies consistent
with the input graph/input distribution.

__Independence Map (I-Map)__: Graph $$G$$ is an independence map for distribution $$p$$
if $$I(G) \subseteq I(p)$$. Intuitively, that means $$p$$ has at least the 
conditional independencies implied by the graph.

__Perfect Map (P-Map)__: Graph $$G$$ is a perfect map for distribution $$p$$ if $$I(G) = I(p)$$.
For a given undirected graph or a given undirected graph, there always exists some $$p$$
such that $$G$$ is a perfect map for $$p$$.  

__Minimal I-Map$$: Graph $$G$$ is a minimal I-map for $$p$$ if $$G$$ is an I-map and
removing any edges from the graph causes $$G$$ to lose its status as an I-map.

To make these terms concrete, consider the following directed graph $$G$$:

$$X_1 \rightarrow X_3 \leftarrow X_2$$

- Suppose $$P(X_1, X_2, X_3) = P(X_1) P(X_2) P(X_3)$$. Then $$G$$ is an I-map.
- Suppose $$P(X_1, X_2, X_3) = P(X_1) P(X_2) P(X_3|X_1, X_2)$$. Then $$G$$ is a P-map.
- Suppose $$P(X_1, X_2, X_3) = P(X_2) P(X_1|X_2) P(X_3|X_1, X_2)$$. Then $$G$$ is neither an
  I-map nor a P-map.
