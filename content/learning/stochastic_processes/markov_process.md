# Markov Process

A Markov process is a discrete-time [stochastic process](../stochastic_processes.md).
To constuct a MP, 3 components are necessary:

1. a finite set of states: $$\mathcal{X}$$  
2: an initial probability distribution over the set of states: $$p_0$$
3: A transition operator $$T: \mathcal{X} \rightarrow \mathbb{P}(\mathcal{X}}$$, which specifies 

$$T(X_t = x) := P(X_{t+1} = x' \lvert X_t = x})$$

A Markov process is a set of random variables indexed by time $$\{X_t\}_{t=1, 2, 3...}$$
where the distribution is given by:

$$
\begin{align*}
X_1 &\sim p_0\\
X_{t+1} \lvert X_{t} &\sim T X_t
\end{align*}
$$