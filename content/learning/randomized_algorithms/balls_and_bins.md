# Balls and Bins

Balls and bins are a group of classic problems centered around how random objects are distributed
around finitely many outcomes. 


## Probability of No Collisions

This problem is often informally called the Birthday "Paradox". Suppose we toss $$n$$ balls 
into $$m$$ bins, uniformly at random. What is the probability that no two balls end in the same bin?
If $$n > m$$, the probability of a collision must be $$1$$ by the pigeonhole principle. If $$n \leq m$$,
then:

$$\mathbb{P}[\text{no balls collide}] = \frac{m}{m} \frac{m-1}{m} ... \frac{m-n+1}{m}$$


## Probability of Max Load

Suppose we toss $$n$$ balls into $$n$$ bins. What is the maximum number of balls in any bin?

**Proposition**: There exists constant $$c$$ such that w.h.p., the max load per bin is
$$\leq \frac{c \log n}{\log \log n}$$.

Proof: First, note that $$\forall k > \frac{3 \log n}{\log \log n} $$, the probability that
an arbitrarily chosen bin has load exactly $$k$$ is $$o(1/n^2)$$:

$${n \choose k} (1/n)^k (1 - 1/n)^{n-k} \leq (\frac{n^k}{k!}) (1/n)^k = 1/(k!) $$

And per Stirling:

$$1/(k!) \leq (e/k)^k \leq \Big(\frac{e \log \log n}{3 \log n} \Big)^{3 \log n / \log \log n}$$

This quantity is upper bounded by:

$$n^{-3 + 3 \log \log \log / \log \log n} = o(1/n^2)$$

Second, we can union bound over all possible $$n$$ bins and all $$<n$$ relevant values of $$k$$:

$$\mathbb{P}[\text{Any bin has load } > \frac{3 \log n}{\log \log n}] = o(1)$$