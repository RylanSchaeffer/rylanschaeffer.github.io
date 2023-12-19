## Modern Discrete Hopfield Network

[Up](../associative_memory.md)

In this article, we consider Hopfield networks with discrete states $$x \in \{-1, +1\}^D$$.

The [classical Hopfield network](classical_hopfield_network.md) has a limited storage capacity. If $D$ is the dimension
of the memories, then the network can store $$O(D)$$ memories, beyond which, no memory can be retrieved.

The modern (discrete) Hopfield network is a modification with significantly higher capacity.
Suppose we have $N$ memories to store and $y_n$ is the $n$th memory. We then define a new energy:

$$E(x) = h(\sum_n F(x \cdot y_n))$$

where $F$ is a non-linear function and $h$ is an arbitrary differentiable and strictly monotonic function.
[Krotov and Hopfield 2016](https://arxiv.org/abs/1606.01164) studied various choices of $$F$$ 
including logistics, rectified linear units and rectified polynomials, which was generalized by 
[Demircigil et al. 2017](https://arxiv.org/abs/1702.01929) to an infinite degree polynomial i.e. the exponential function.
Choosing $$F(x) = \exp(x)$$ can store $$2^{D/2}$$ (binary) memories.


