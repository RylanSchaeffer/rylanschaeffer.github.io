# Binary Discrete-Time Hopfield Networks

[Up](../associative_memory.md)

## +1/-1 Hopfield Networks

Consider a recurrent neural network with binary states $$x \in \{-1, +1\}^D$$ and discrete-time dynamics:

$$x(t) = \text{sign}(W x(t-1))$$

These dynamics monotonically non-increase the energy function:

$$E(x) = \frac{1}{2} x^T W x$$

and converge to a local minimum of $E(x)$. We can design the recurrent weight matrix $W$ such that 
the fixed points of the dynamics correspond to "memories" (also known as patterns and data).  Suppose we have
$N$ memories to store and $y_n$ is the $n$th memory. One way to create $W$ is with the outer product:

$$W = \sum_{n=1}^N y_n y_n^T$$

and then set $$W_{ii} = 0$$.

### Convergence

The dynamics converge to a local minimum of the energy functional $$E(x)$$, which is a fixed point of the dynamics.


### Capacity





## +1/0 Hopfield Networks

