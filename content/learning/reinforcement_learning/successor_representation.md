# Successor Representation

Dayan (1992) proposed an alternative formulation of the state value function $$V_{\pi}(s)$$
that enables rapidly adapting if reward probabilities or transition probabilities change.
The idea is to separate the state value function into a product of rewards and future 
discounted state occupancies, which Dayan termed the __successor representation (SR)__  and 
which I denote $$M$$. Then, if either the rewards or the transitions change, recomputing 
$$V_{\pi}(s)$$ is simple.

The successor representation $$M$$ can also be learnt using temporal difference-like algorithms.

## Definition

Let $$S$$ denote the state space, let $$R \in \mathbb{R}^{|S|}$$ be a 
vector denoting the reward in each state i.e. $$R_s = R(s)$$ and let 
$$T^{\pi} \in \mathbb{R}^{|S| \times |S|}$$ be a matrix denoting the one-step transition matrix 
under the policy $$\pi$$. 

Recall that the state-value function is defined as the expected sum of future rewards:

$$V(s_t) := \mathbb{E}_{\pi}[\sum_{k=0}^{k=\infinity} \gamma^{k-1} r(s_{t + k}) \lvert S_t = s_t]$$

The distribution of 

If the state space $$\mathcal{X}$$ is discrete, then the successor representation can be written
as 

$$ S = (I - \gamma T)^{-1} p_0$$

The successor representation is a [Neumann series](../series/geometric.md#neumann-series)
and can therefore be expressed as:

$$M^{\pi} := \sum_{k=0}^{\infty} (\gamma T^{\pi})^k = (I - \gamma T^{\pi})^{-1}$$

## Learning the Successor Representation

One can learn the successor representation from samples with TD-learning. Let $$M^{\pi}_{(n)}$$ 
denote the SR after the $$n$$th update and let $$\eta$$ denote the learning rate. The Bellman
update is:

$$M_{(n+1)}^{\pi} \leftarrow M_{(n)}^{\pi} + \eta (\mathbb{I}() + \gamma M_{(n)}^{\pi} - M_{(n)}^{\pi}) 
