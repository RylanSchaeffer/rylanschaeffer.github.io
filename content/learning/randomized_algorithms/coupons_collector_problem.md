# Coupon Collecting Problem

Suppose items have $$N$$ unique possible type (e.g. coupons), and every time we obtain an
item, its type is uniformly random.

## Question 1: What is the expected number of items we need to collect in order to obtain at least 1 item of each type?

Define $$X_n$$ as the number of items by which we obtain the $$n$$-th type.

First, note that $$\mathbb{E}[X_1] = 1$$. Second, note that $$\mathbb{E}[X_2 - X_1] = \frac{1}{1 - 1/N}$$, because
the probability that we obtain a new type is 1 minus the probability we obtain the 
type we already have, and thus the expected number of required items is 1 over that 
probability. Third, note that $$\mathbb{E}[X_n - X_{n-1}] = \frac{1}{1 - (n-1)/N)$$,
for the same reason as above.

We want to know:

$$ \begin{align*}
\mathbb{E}[X_N] &= \mathbb{E}[X_N - X_{N-1} + X_{N-1} ... + X_2 - X_1 + X_1]\\
&= 1 + \sum_{n=2}^N \mathbb{E}[X_n - X_{n-1}\\
&= 1 + \sum_{n=1}^{N-1} \frac{1}{1 - n/N)\\
&\approx 1 + N \sum_{n=1}^{N-1} \frac{1}{n}\\
&= \Theta (N \log N)
\end{align*}$$

## Question 2: What is the probability we haven't seen all $$N$$ types after $$2 N \log N$$ boxes?

Per [Markov's Inequality](../inequalities/markov_inequality.md):

$$\mathbb{P}[X \geq 2 N \log N] \leq \frac{\mathbb{E}[X]}{2 N \log N} = \frac{N \log N}{2 N \log N} = \frac{1}{2}$$

Recall that for any geometric random variable $$Y$$, $$\mathbb{V}[Y] = \frac{1-p}{p^2}$$.
Thus, the variance of $$X$$ is:

$$\mathbb{V}[X] = \sum_{n=0}^{N-1} \mathbb{V}[X_n] = \sum \frac{1 - \frac{N - n}{N}}{(\frac{N-1}{N})^2} < N^2 \sum_{j=1}^N \frac{1}{j^2} < N^2 \frac{\pi^2}{6}$$

Per [Chebyshev's Inequality](../inequalities/chebyshev_inequality.md):

$$\mathbb{P}[X \geq 2 N \log N] \leq \mathbb{V}[|X - \mathbb{E}[X]]| \geq N \log N + O(N)] \leq \frac{\mathbb{V}[X]}{N^2 \log^2 N} = O(\frac{1}{\log^2 N})$$


