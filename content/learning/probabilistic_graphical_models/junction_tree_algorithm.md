# Junction Tree Algorithm

The success of [belief propagation (a.k.a. Sum-Product Algorithm)](belief_propagation.md) at efficiently
computing marginal distributions in trees lead to the question of whether we can perform exact
inference of marginal distributions in general undirected graphs. The Junction Tree Algorithm allows
us to do so under certain settings. The approach is to convert a given undirected graph to an
undirected tree where the nodes in the tree correspond to maximum cliques in the original graph (called a junction
tree), and then apply belief propagation in the junction tree. We first start with some definitions.

A __clique graph__ of graph $$G$$ is a new graph where the new graph's nodes are the max cliques in $$G$$.
A __clique tree__ is a clique graph that is a tree.

For example, consider a graph $$G$$ with edges (1,2), (1, 3), (1, 4), (2, 4), (3, 4), (2,5) and (4, 5).
There are three max cliques: (1, 3, 4), (2, 4, 5), and (1, 2, 4). These three max cliques form the nodes
of $$G$$'s clique graph. If we want this clique graph to be a clique tree, we might connect the nodes as
(1, 3, 4) - (2, 4, 5) - (1, 2, 4) or we might connect the nodes as (1, 3, 4) - (1, 2, 4) - (2, 4, 5).
Is there a difference between these two? Yes. We want to ensure a constraint is met, specifically that
the variable 1 in (1, 3, 4) must always take the same value as the variable 1 in (1, 2, 4), and similarly
for the other variables (e.g. 2 in (1, 2, 4) and 2 in (2, 4, 5)). This prompts the so-called junction
tree property.

__Junction Tree Property__: Let $$C_v$$ denote the set of all max cliques in an undirected graph $$G=(V, E)$$
that contain node $$v \in V$$.
A clique tree for graph $$G$$ is said to satisfy the junction tree property if $$\forall v \in C_v$$, the 
set of nodes $$C_v$$ in the clique tree are still connected when all other nodes are removed.

Returning to the above example, (1, 3, 4) - (2, 4, 5) - (1, 2, 4) is not a junction tree because if we 
choose 1 and delete all nodes not containing 1 (here, this means deleting (2, 4, 5)), then the remaining
nodes (1, 3, 4) and (1, 2, 4) are no longer connected. However, (1, 3, 4) - (1, 2, 4) - (2, 4, 5)
is a junction tree because choosing 1 and deleting (2, 4, 5) leaves (1, 3, 4) connected to (1, 2, 4), and
similarly for other choices of variables such as 2.

If a clique tree satisfies the junction tree property, we can enforce the constraint that we want. Specifically,
we can define the edge potentials to be 1 if and only if the variables shared between the nodes are all
equal. For instance, in the edge (1, 2, 4) - (2, 4, 5), the edge potential would be defined as

$$\psi_{124, 245} = \mathbb{1}(2 in (1, 2, 4) == 2 in (2, 4, 5)) & \mathbb{1}(4 in (1, 2, 4) == 4 in (2, 4, 5)) $$

By setting edges to enforce this constraint, the factor potentials in the original graph are
node potentials in the junction tree.

However, this prompts some immediate follow-up questions, including:

- When does a graph have a junction tree?
- If a graph has a junction tree, how can we efficiently find it?
- If a graph doesn't have a junction tree, what do we do?

 
