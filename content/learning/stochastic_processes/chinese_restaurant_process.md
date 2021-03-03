# Chinese Restaurant Process

__Parent__: [Stochastic Processes](../stochastic_processes.md)

The Chinese Restaurant Process (CRP) is a stochastic process for expressing distributions
over partitions of $$[N] := \{1, ..., N\}$$. Consequently, the CRP is frequently used in problems involving
clustering. The CRP is also known as Ewens sampling formula.

## Definition

### Definition as Distribution Over Partitions

The Chinese Restaurant Process (CRP; \cite{aldous_exchangeability_1985}) is a 
one-parameter (concentration parameter $\alpha > 0$) stochastic process that defines 
a discrete distribution over the partitions of a set. The CRP defines a conditional distribution for
the $t$th discrete variable $z_t$ given the preceding variables:

$$
\begin{equation}
P(z_t = k | z_{<t}, \alpha) = \begin{cases}
\frac{N_{t-1, k}}{\alpha + t - 1} & \text{if } 1 \leq k \leq K_{t-1}\\
\frac{\alpha}{\alpha + t - 1} & \text{if } k = K_{t-1} + 1\\
0 & \text{otherwise}
\end{cases}
\end{equation}
$$

where $$N_{t-1, k}$$ is the number of previous variables taking the value $$k$$, i.e. $$N_{t-1, k}
= \sum_{t'=1}^{t-1} \delta{I}(z_{t'} = k)$$. The term CRP arises from an analogy of seating a sequence
of customers at a Chinese restaurant that has an infinite number of tables, each with an infinite number
of chairs. Each customer is randomly placed either at a populated table with probability proportional to
the number of previous customers at that table, or at a new, unpopulated table with probability
proportional to $$\alpha$$. Letting $$K_{t}$$ denote the number of non-empty tables after the $$t$$ customer
is seated, the CRP can be equivalently defined using indicator variables:

$$
\begin{equation}
\begin{aligned}
p(z_t = k|z_{<t}, \alpha) &= \frac{1}{\alpha + t -1} \sum_{t' < t} \delta{1}(z_{t'}=k) \delta{1}(k \leq K_{t-1})\\
&\quad \quad + \frac{\alpha}{\alpha + t -1} \delta{I}(k = K_{t-1}+1)
\end{aligned}
\end{equation}
$$

where $$K_t$ is given by the Chinese Restaurant Table Distribution (below). An equivalent representation (that can
then be generalized to yield the[distance dependence CRP](distance_dependent_chinese_restaurant_process.md))
assigns customers to one another instead of assigning customers to tables.

$$p(c_i = j) \propto \begin{cases} 1 & j \neq i\\ \alpha & i = j \end{cases} $$

Customers that have been assigned into a connected component are then be grouped into tables.
For instance, if $$c_2$$ sits with $$c_1$$ and $$c_3$$ sits with $$c_2$$, then all three
are at the same table.

There's no nice joint distribution for the specific customer-table assignments, but once
customers have been assigned, there is a nice distribution for the partition of the set.
Suppose $$K_T$$ tables are non-empty and the number of customers at the $$k$$th table is given
by $$N_{T, k}$$. Then the probability of this partition $$\pi$$ of the set $$\{1, ..., T\} is given by

$$p(\Pi = \pi) = \frac{\alpha^{K_T - 1} }{(alpha + 1)_{T-1 \uparrow 1}} \prod_{k=1}^K (N_{T, k} - 1)!$$

where $$x_{M \uparrow a} = \prod_{m=0}^M (x + ma)$$ is the rising factorial. 

### Definition as Marginalizing Out DP Base Measure

Suppose we have the following generative model:

$$
\begin{align*}
G &\sim DP(\alpha, G_0)\\
\theta_1, ..., \theta_M &\sim_{i.i.d.} G
\end{align*}
$$

As explained in the [Blackwell-MacQueen Urn Scheme](blackwell_macqueen_urn_scheme.md), the
posterior predictive of $$\theta_{M+1}$$ can be written as:

$$\theta_{M+1} | \theta_1, ..., \theta_M \sim \frac{1}{\alpha + M}(\alpha G_0 + \sum_{m=1}^M \delta_{\theta_m})$$

However, some of those $$\theta_1, ..., \theta_M$$ may take the same value, meaning we can rewrite the
sum of the Dirac measures as the sum of the unique values $$\theta_1^*, ..., \theta_K^*$$ along
with the counts of each value appearing $$N_k$$: 

$$\theta_{M+1} | \theta_1, ..., \theta_M \sim \frac{1}{\alpha + M}(\alpha G_0 + \sum_{k=1}^K N_k \delta_{\theta_k^*})$$

This is an equivalent definition of $$CRP(\alpha)$$. That is, the CRP is the posterior predictive
distribution of a Dirichlet Process, marginalizing out the DP's base measure.

## Properties

- The probability of a random partition of $$N$$ customers $$\Pi_N$$ equalling a particular parition $$\pi_N$$
  with $$K$$ blocks and $$N_k$$ elements in the $$k$$th block is given by

$$P(\Pi_N = \pi_N) = \frac{\alpha^{K-1} \prod_{k=1}^K (N_k - 1)!}{(\alpha + 1)_{N-1 \uparrow 1}} $$

where the denominator is the so-called rising factorial, defined as $$x_{M \uparrow a} := \prod_{m=1}^{M-1}(x + ma)$$.

- The expected number of tables $$K$$ grows logarithmically with the number of customers $$N$$. Specifically,

$$\mathbb{E}[K | N] = \sum_{n=1}^N \frac{\alpha}{\alpha + n - 1} = \alpha (\digamma(\alpha + N) - \digamma(\alpha))
\approx \alpha \log(1 + \frac{N}{\alpha})$$

where $$\digamma(\cdot)$$ is the Digamma function. Similarly, the variance around the expected number of tables
grows logarithmically:

$$\mathbb{V}[K | N] \approx \alpha \log (1 + \frac{N}{\alpha})$$

- The probability of seating arrangement is invariant under permutations. To see why, note
   that for $$N$$ customers, the normalization constant is always $$\Pi_n^N \frac{1}{n - 1 + \alpha}$$

- A seating arrangement of $$N$$ customers defines a partition over $$[N] := \{1, ..., N\}$$. The number
 of partitions for $$N$$ customers is given by the [Bell numbers](https://en.wikipedia.org/wiki/Bell_number)
  
## Relation to Other Stochastic Processes

### Chinese Restaurant Table (CRT) Distribution

The (random) number of non-empty tables after $$t$$ customers have been seated, 
denoted $$K_t$$, is described by the Chinese Restaurant Table (CRT) Distribution:

$$
\begin{equation}
P(K_t = k) = \frac{\Gamma(\alpha)}{\Gamma(t + \alpha)} |s(t, k)| \alpha^k \delta{1}(k \leq t) \label{eq:CRT_distribution}
\end{equation}
$$

$$|s(t, k)|$$ are unsigned Stirling numbers of the first kind. The CRT can equivalently be defined
as a sum of independent but non-identically distributed Bernoulli random variables indicating the 
$t$th customer was placed at a new table.

$$
\begin{equation*}
K_t = \sum_{t'=1}^t b_{t'} \quad  \text{ where } \quad b_{t'} \sim Bernoulli \Big( \frac{\alpha}{\alpha + t' - 1} \Big)
\end{equation*}
$$

By Le Cam's Theorem, $$K_t$$ is well approximated by a Poisson distribution with rate 
$$\lambda = \alpha \log (1 + t/\alpha)$$, showing that the average number of tables grows
logarithmically with $$t$$. Another, more direct proof of the expected value and variance is:

$$
\begin{align*}

\end{align*}
$$

### Blackwell-MacQueen Urn Scheme

As far as I can tell, the [Blackwell-MacQueen Urn scheme](blackwell_macqueen_urn_scheme.md) is identical
to the CRP. One small difference in usage is that CRP discussions tend to focus more on partitions,
whereas BM Urn Schemes tend to focus on the specific realization of each random variable in the sequence.

### Dirichlet Process

The CRP is closely related to the [Dirichlet process](dirichlet_process.md#chinese-restaurant-process). The connection is that
the CRP integrates out the base measure $$G_0$$, meaning that the CRP cares only for how many
random elements have the same value, regardless of what that value is. For a more detailed explanation
of marginalizing out the base measure $$G_0$$, see
[the definition of the Blackwell-MacQueen Urn Scheme](blackwell_macqueen_urn_scheme.md#definition).

### Stick-Breaking Process

[Stick Breaking Process](stick_breaking_process.md)