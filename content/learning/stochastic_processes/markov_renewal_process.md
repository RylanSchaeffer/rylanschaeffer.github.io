# Markov Renewal Process

A Markov Renewal Process (MRP) is a [stochastic process](../stochastic_processes.md)
that consists of a (possibly infinite) set of paired random variables $$\{(X_n, T_n)\}_{n=0}^{\infty}$$.
To build intuition, we can think of the $$X_n$$ variables as observations and $$T_n$$ as the time when they
are observed, although the below definition doesn't require either variable to have those particular
meanings. We say that the stochastic process is a MRP iff the elapsed time
between observations and the value of the observation depend only on the previous observation.
Formally, we write:

$$P(T_{n+1} - T_{n} \leq t, X_{n+1} = j | (X_0, T_0), (X_1, T_1), ..., (X_n = i, T_n))
= P(T_{n+1} - T_{n} \leq t, X_{n+1} = j | X_n = i)$$

This is akin to a [Markov Process](markov_process.md)