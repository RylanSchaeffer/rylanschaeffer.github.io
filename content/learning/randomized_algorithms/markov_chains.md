# Markov Chains

## Definition

## Properties

- **Stationary Distribution**: A distribution $$\pi$$ is a stationary distribution of a markov chain $$P$$
  if $$\pi = P \pi$$
- **Irreducible**: A chain is irreducible if one can get from any state to any other state
- **Periodic**: A chain is periodic if there exists some state where we can only return
  to it only multiples of $$d$$ stpes
- **Transient**: A state is transient if there is some probability we never return to it
- **Recurrent**: A state is recurrent if we return to it with probability 1

## Fundamental Theorem of Markov Chains

Let $$X_0, X_1, ...$$ denote a Markov chain such that (1) the state space is finite and (2)
the chain is irreducible (can get from any state to any other state - not necessarily in a single step!)
and aperiodic (can only return to a state in multiples of $$d$$ steps).

Then there exists a unique stationary distribution $$pi$$ such that:

1. $$\forall i \neq j$$, $$\lim_{t \rightarrow \infty} \mathbb{P}[X_t = i | X_0 = j] = \pi_j$$
2. $$\forall i$$, $$\pi_i = 1/\mathbb{E}[\min_{t > 0} \{t: X_t = i | X_0 = i \}]$$

### Understanding the Implications

1. A stationary distribution exists and is unique
2. After a long time, the probability of being in state $$i$$ is $$\pi_i$$, regardless of where we start
3. The expected number of steps to return to a state is $$1 / \pi_i$$

### Violation: Finite State Space

What happens if the Markov chain has an infinite state space? Then either a stationary
distribution exists, or the probability of going from $$X_0=j$$ to $$X_t = i$$ is $$0$$.

### Violation: Not irreducible

What happens if the Markov chain is not irreducible? Then we can decompose the graph
into irreducible subcomponents, and the chain will convert to one of those subcomponents,
but which one depends on the initial conditions.

### Violation: Not aperiodic

What happens if the Markov chain is periodic? There is still a unique stationary distribution,
but we can no longer guarantee that $$\forall i \neq j$$, $$\lim_{t \rightarrow \infty} \mathbb{P}[X_t = i | X_0 = j] = \pi_j$$.
To understand why, imagine a deterministic loop for the state space. The minimum time to return is also deterministic
(the length of the loop $$\lvert S \lvert$$), so the probability of being in state $$i$$ depends on
the number of steps taken.