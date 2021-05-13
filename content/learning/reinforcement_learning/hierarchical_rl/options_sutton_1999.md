# Options (Sutton, Precup, Singh)

## Background

As background, when this paper was published, the RL community had been exploring
different approaches for considering abstractions over actions. The hope was that
agents don't necessarily need to plan at a granular level, but could instead
form some notion of temporally extended, multi-step sequences of actions and
use those instead. This paper introduced the notion of __options__ to present a
minimal extension of RL that allows for a general treatment of abstract actions.

Disclaimer: In my opinion, this paper is something of a letdown. It introduces a new
mathematical object and then spends the paper showing that the new object doesn't 
introduce any mischief. However, this new object fails to (1) provide new conceptual
insight or (2) direct the creation of better RL agents. Later work has certainly
addressed these questions, but this paper does not.

## Notation

$$\mathcal{A}_s$$ is the set of actions available in state $$s \in \mathcal{S}$$.
$$\mathcal{S}^+$$ is the set of states $$\mathcal{S}$$ unioned with a special terminal 
state, indicating the end of the trajectory. 

## Options

An __option__ is defined as a 3 tuple consisting of 

1. A policy $$\pi: \mathcal{S} \times \mathcal{A} \rightarrow [0, 1]$$
2. A termination condition $$\beta: \mathcal{S}^+ \rightarrow [0, 1]$$
3. An initiation set $$\mathcal{I} \subseteq S$$

We say that an option $$(\pi, \beta, \mathcal{I})$$ is __available__ in state
$$s_t \in \mathcal{S}$$ iff $$s_t \in \mathcal{I}$$.