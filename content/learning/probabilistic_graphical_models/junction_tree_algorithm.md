# Junction Tree Algorithm

The success of [belief propagation (a.k.a. Sum-Product Algorithm)](belief_propagation.md) at efficiently
computing marginal distributions in trees lead to the question of whether we can perform exact
inference of marginal distributions in general undirected graphs. The Junction Tree Algorithm allows
us to do so under certain settings. The approach is to convert a given undirected graph to an
undirected tree where the nodes in the tree correspond to maximum cliques in the original graph.
However, this prompts some immediate follow up questions, including:

- When does a graph have a junction tree?
- If a graph has a junction tree, how can we efficiently find it?
- If a graph doesn't have a junction tree, what do we do?

These questions will be answered in the second half.