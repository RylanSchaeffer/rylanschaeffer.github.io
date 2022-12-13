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

## Martingale Stopping Time Theorem

Suppose $$Z_0, Z_1, ...$$ is a martingale w.r.t. $$X_0, X_1, ...$$. Then $$\forall t \geq 0$$, 
$$\mathbb{E}[Z_t] = \mathbb{E}[Z_0]$$.

Proof: $$\mathbb{E}[Z_1] = \mathbb{E}[\mathbb{E}[Z_1 | X_0]] = \mathbb{E}[Z_0]$$

However, the above does not hold if $t$ is a random variable. To see why, consider 0/1 coin flips
where $$Z_t$$ increments if $$X_t$$ is heads and decrements if $$X_t$$ is tails.
$$T$$ = 1st time $$t$$ such that $$|Z_t| = 10$$. Here, $$\mathbb{E}[Z_T] = 10/2 + (-10)/2 = \mathbb{E}[Z_0]$$.
All good! But now consider $$T'$$ = 1st time $$t$$ such that $$Z_t = 10$$. Here, $$\mathbb{E}[Z_{T'}] = 10 \neq \mathbb{E}[Z_0]$$.
What happened? The problem is that $$T, T'$$ are random variables, meaning it's not automatically true
that $$\mathbb{E}[Z_T] = \mathbb{E}[Z_0]$$.

This raises the question of: what is the difference between $$T, T'$$? Is there a principled way to say
when $$\mathbb{E}[Z_T] = \mathbb{E}[Z_0]$$?

### Stopping Time
Given a discrete time process $$\{ X_t \}$$, an integer-valued random variable $$T$$ is called the
stopping time for $$\{ X_t \}$$ if the event that $$T=i$$ is mutually independent from all events
$$\{X_j | X_0, ..., X_i\}$$ for all $$j > i$$. Intuitively, this means $$T=i$$ depends only on $$X_0, ..., X_i$$
and nothing after.

Examples:
1. $$T_1 = min \{t: Z_t = 10 \}$$ is a valid stopping time
2. $$T_2 = min \{t: |Z_t| = 10 \}$$ is a valid stopping time
3. $$T_2 = max \{t: Z_t = 10 \}$$ is not a valid stopping time, since it depends on information after $$t$$

**Theorem**: Let $$\{Z_t\}$$ be a martingale w.r.t. $$\{X_t\}$$. Let $$T$$ be the stopping time.
Then $$\mathbb{E}[Z_T] = \mathbb{E}[Z_0]$$ if any of the following hold:

1. $$\exists $$ constant $$c$$ such that $$\forall i, |Z_i| < c$$ 
2. $$\exists $$ constant $$c$$ such that, with probability 1, $$T < c$$
3. $$\exists $$ constant $$c$$ such that $$\forall i$$, $$\mathbb{E}[T] < \infty$$ and $$\mathbb{E}[|Z_{i+1} - Z_i| \Big\lvert X_0, ..., X_i]$$

### Returning to Examples

Returning to the first of the above 2 examples, define $$\Tilde{Z}_t$$ equal to $$Z_t$$ for $$t \leq T$$ 
and $$Z_T$$ for $$t > T$$.
From this construction, we know that $$\mathbb{E}[Z_T] = \mathbb{E}[\Tilde{Z_T}]$$. We can then apply
the stopping time theorem under condition 1 by choosing $$c=11$$. In the second example, none of the 
three conditions apply. The intuition is that $$Z_t$$ might wander off to $$-\infty$$ without 
ever hitting 10.

## Example

