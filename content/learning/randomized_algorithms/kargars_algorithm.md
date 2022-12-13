# Kargar's Algorithm

A graph cut is a partition of a graph into 2 non-empty partition. We say that an edge
crosses a cut if it goes from one partition to the other. The minimum graph cut is
the cut with the fewest edges crossing it.

## Algorithm

Kargar's algorithm attempts to find a minimum graph cut in the following manner:

1. Pick a random edge
2. Contract it (i.e. merge its two vertices into one)
3. Repeat under only 2 vertices left
4. Return cut corresponding to the 2 partitions of vertices

## Theorem

**Theorem**: The probability that Kargar's algorithm returns the min cut in a graph
with $$N$$ vertices is $$\geq 2 / n(n-1)$$.

For comparison, the probability that a random cut is the mincut can be as small as $$2^{-\Omega(N)}$$.
What's the intuition? Suppose $$C$$ is a mincut (there might be more than 1!). Kargar's algorithm will fail only if it 
contracts an edge crossing $$C$$. But this isn't too likely to happen since there are relatively few edges
in $$C$$.

Proof: Let $$C$$ be a min-cut and denote the edges that Kargar's algorithm contracts as 
$$e_1,..., e_{n-2}$$. Let $$E_i$$ be event that $$e_i$$ does not cross $$C$$. In order to successfully
return a mincut, all $$E$$ need to occur:

$$\mathbb{P}[E_1 \land E_2 \land ... \land E_{n-2}] = \mathbb{P}[E_1] \mathbb{P}[E_1 | E_2] ... \mathbb{P}[E_{n-1}| E_{<n-2}]$$

Consider a single step:

$$\mathbb{P}[E_j | E_{<j}] = 1 - \mathbb{P}[\neg E_j  |E_{<j}]$$

The term on the right is the probability of crossing cut $$e_j$$, given that no
previous edges crossed the cut. The probability whether we cut $$e_j$$ will be the number
of edges remaining in the cut of the contracted graph divided by the number of edges
in the contracted graph after contracted $$j-1$$ edges. This means that
the number of edges remaining is lower bounded by:

$$\text{\# edges remaining} \geq \text{\# vertices remaining} \text{min degree of any vertex} / 2$$

which is lower bounded by:

$$\geq (n - j + 1) (\text{\# edges crossing C}) / 2$$

Thus:

$$1 - \mathbb{P}[\neg E_j  |E_{<j}] \geq  \frac{n-j-1}{n-j+1}$$

Returning to consider the full chain of steps:

$$\mathbb{P}[E_1 \land E_2 \land ... \land E_{n-2}] \geq \frac{n-2}{n} \frac{n-3}{n-1} ... \frac{1}{3} = \frac{2}{n(n-1)}$$

## Improved Algorithm

To do better, we can run Kargar's algorithm $$n (n-1) \log \delta$$ times and take the smallest cut.
This will find the mincut with probability $$1-\delta$$.
