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