# Probabilistic Graphical Models

## Overview

A joint distribution over $$N$$ variables $$\underline{x}$$ can permit complicated relationships
between the variables. One general principle is that performing inference
becomes easier in the absence of relationships between variables. This motivates
us to specify relationships between variables as a graphs and then use the graph
structure to design efficient inference algorithms.

- [History](probabilistic_graphical_models/history.md)
- Types of Graphical Models
    - [Directed Graphs](probabilistic_graphical_models/graphs/directed_graphical_models.md)
    - [Undirected Graphs](probabilistic_graphical_models/graphs/undirected_graphical_models.md)
    - [Directed vs Undirected](probabilistic_graphical_models/graphs/directed_vs_undirected.md)
    - [Factor Graphs](probabilistic_graphical_models/graphs/factor_graphical_models.md)
    - [Ancestral Graphs](probabilistic_graphical_models/graphs/ancestral_graphical_models.md)
    - [Graph Relations](probabilistic_graphical_models/graphs/graph_relations.md)
    - Causal Graphs
- Parameter Estimation
    - Maximum Likelihood
- Types of Inference Problems
    - Marginalization
    - Most Probable Configuration / MAP
- Exact Inference Algorithms
    - [Elimination Algorithm](probabilistic_graphical_models/exact_inference_algs/elimination_algorithm.md)
    - [Sum-Product (Belief Propagation)](probabilistic_graphical_models/exact_inference_algs/belief_propagation.md)
    - [Junction Tree Algorithm](probabilistic_graphical_models/exact_inference_algs/junction_tree_algorithm.md)
- Approximate Inference Algorithms
    - Loopy Belief Propagation
    - Variational Inference
    - Graph Partitioning
- Learning
    - Some variables unobserved, graph is known -> [Expectation Maximization](probabilistic_graphical_models/learning/expectation_maximization.md)
    - All variables observed, graph is unknown [Chow Liu Algorithm]()
    - Structure 
    
