# Martingales

Let $$Z_0, Z_1, ...$$ be a sequence of real-valued random variables and let $$X_0, X_1, ...$$
be a sequence of random variables. We say that $$\{Z_t\}$$ is a martingale with respect
to $$\{X_t\}$$ if the following hold for all $$t \geq 0$$:

1. $$Z_t$$ is a function of $$X_0, ..., X_t$$
2. $$\mathbb{E}[|Z_t|] < \infty$$
3. $$\mathbb{E}[Z_t | X_0, ..., X_{t-1}] = Z_t$$

Example: Suppose $$X_t$$ is the outcome of a fair coin flip. Every heads, you win $1, and every
tails, you lose $1. Let $$Z_t$$ be the total money at time $$t$$. This satisfies the 3 requirements
to be a martingale.

## Doob Martingale

Let $$A$$ be a r.v. and $$\{X_t\}$$ a sequence of random variables. The Doob martingale of $$A$$
w.r.t. $$\{ X_t \}$$ is a sequence $$\{ Z_t \}$$ given by:

$$Z_t = \mathbb{E}[A | X_0, ..., X_t]$$

Doob martingales are often useful when some quantity is "uncovered" over time or more information
is gained over time.

Example: Suppose we have $$m$$ balls and $$n$$ bins and $$A$$ is the number of empty bins after $$m$$
balls are dropped. Let $$X_t$$ be the location of the $$t$$th ball. Then $$Z_0 = \mathbb{E}[A]$$ and
$$Z_t = \mathbb{E}[A | X_0, ..., X_t]$$.