# Markov Process

## Definition

A Markov process is a discrete-time [stochastic process](../stochastic_processes.md).
To constuct an MP, 3 components are necessary:

1. A set $$\mathcal{X}$$, commonly called "states"  
2: An initial probability distribution over the set of states: $$p_0$$
3: A transition operator $$T: \mathcal{X} \rightarrow \mathbb{P}(\mathcal{X}}$$, which specifies a conditional distribution

$$T(X_t = x) := P(X_{t+1} = x' \lvert X_t = x})$$

A Markov process is a set of random variables indexed by time $$\{X_t\}_{t=1, 2, 3...}$$
where the distribution is given by:

$$
\begin{align*}
X_1 &\sim p_0\\
X_{t+1} \lvert X_{t} &\sim T X_t
\end{align*}
$$

If the set $$\mathcal{X}$$ is finite, the transition operator can be written as a 
$$\lvert \mathcal{X} \lvert \times \lvert \mathcal{X} \lvert$$ dimensional matrix called
a __transition matrix__ or __stochastic matrix__.

## Properties

### Finite Dimensional

- Each column of $$T$$ must sum to 1

- The marginal probability of the $$k$$th variable $$X_k$$ is given by

$$p(X_k) = T p(X_{k-1}) = T^{k-1} X_1$$