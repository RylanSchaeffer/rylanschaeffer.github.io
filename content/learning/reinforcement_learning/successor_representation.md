# Successor Representation

Dayan (1992) proposed an alternative formulation of the state value function $$V^{\pi}(s)$$
that enables rapidly adapting if reward probabilities or transition probabilities change.
The idea is to separate the state value function into a product of rewards and future 
discounted state occupancies, which Dayan termed the __successor representation (SR)__  and 
which I denote $$M$$. Then, if either the rewards or the transitions change, recomputing 
$$V^{\pi}(s)$$ is simple.

The successor representation $$M$$ can also be learnt using temporal difference-like algorithms.

## Definition

Let $$S$$ denote the state space, let $$R \in \mathbb{R}^{|S|}$$ be a 
vector denoting the reward in each state i.e. $$R_s = R(s)$$ and let 
$$T^{\pi} \in \mathbb{R}^{|S| \times |S|}$$ be a matrix denoting the one-step transition matrix 
under the policy $$\pi$$. 

Recall that the state-value function is defined as the expected sum of future rewards:

$$V^{\pi}(s_t) := \mathbb{E}_{\pi}[\sum_{k=0}^{k=\infty} \gamma^{k-1} r(s_{t + k}) \lvert S_t = s_t]$$

If the state space $$\mathcal{X}$$ is discrete and the rewards are deterministic, 
then the state value function can be written as:

$$V^{\pi}(s_t) = r^T \mathbb{E}_{\pi}[\sum_{k=0} (\gamma T^{\pi})^{k}] s$$


where $$r \in \mathbb{R}^{\lvert S \lvert}$$ is a vector of the reward in each state. That
matrix, the future sum of discounted state occupancies, is called the success representation.
It is a [Neumann series](../series/geometric.md#neumann-series)
and can therefore be expressed as:

$$S^{\pi} := \sum_{k=0}^{\infty} (\gamma T^{\pi})^k = (I - \gamma T^{\pi})^{-1}$$

## Learning the Successor Representation

One can learn the successor representation from samples with TD-learning. Let $$M^{\pi}_{(n)}$$ 
denote the SR after the $$n$$th update and let $$\eta$$ denote the learning rate. The Bellman
update is:

$$M_{(n+1)}^{\pi} \leftarrow M_{(n)}^{\pi} + \eta (\mathbb{I}() + \gamma M_{(n)}^{\pi} - M_{(n)}^{\pi})$$ 
