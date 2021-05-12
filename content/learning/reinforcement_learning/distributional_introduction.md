# Introduction to Distributional RL

Classically, RL concerns maximizing the _expected_ return. Many have looked at alternative
pursuits (e.g. Gilbert & Weng's 2016 Quantile RL), but the field didn't take off until
approximately 2017, when a series of papers emerged demonstrating that learning the full
return distribution, and not just its mean, produced agents that appeared to learn faster
and symptote to higher return.

### Background

The Bellman operator, classically defined, aims to reach a self-consistent set of predictions.
Let $$Q(s,a): \mathbb{S} \times \mathbb{A} \rightarrow \mathbb{R}$$ be the expected return of
being in state $$s$$ and taking action $$a$$. The Bellman operator
$$\mathcal{T}: Q \rightarrow Q$$ is:

$$T Q(s,a) = \mathbb{E}_r[R(s,a)] + \gamma \mathbb{E}_{S', A'} Q(S, A)$$

where state $$S'$$ is the next state with available actions $$A'$$. The Bellman operator
is powerful because is a contraction, meaning its repeated application will converge
to a fixed $$Q$$ function. [Bellemare, Dabney and Munos 2017](https://arxiv.org/abs/1707.06887)
asked whether defining a _distributional_ equivalent of the Bellman operator that is
also a contraction is possible. We define

We start by defining the set of action-value distributions, which maps a state
and an action to a probability distribution over the return:

$$\mathcal{Z} = \{ Z : S \times A \rightarrow P(\mathbb{R}) \}$$
