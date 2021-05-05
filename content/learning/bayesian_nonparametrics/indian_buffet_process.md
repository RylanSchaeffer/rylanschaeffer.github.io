# Indian Buffet Process

There are many views of the Indian Buffet Process (IBP). One view
is that it defines a distribution over binary matrices with finitely
many rows and infinitely many columns. Another view is that the IBP is
the infinite limit of a finite binary latent feature model, analogous
to how the Chinese Restaurant Process is the infinite limit of
a finite latent mixture model.

The Indian Buffet Process is similar in many ways to the [Chinese 
Restaurant Process](chinese_restaurant_process.md), and in fact,
originated as an 

## Definition

### Infinite Limit Definition

One way to define the IBP is as the infinite limit of a [Beta-Bernoulli
compound distribution](../probability/beta_binomial_distribution.md), marginalizing out the 
beta random variable. Specifically, fix an integer number $$K$$ of possible features. Then,
draw $$K$$ values from $$Beta(\alpha / K, 1)$$ to represent the probability that any observation
possesses that $$k$$th feature. Then, for each observation $$n = 1, ..., N$$ and for each
feature $$k = 1, ..., K$$, draw whether that $$n$$th observation has the $$k$$th feature as 
a Bernoulli with probability $$\mu_k$$:

$$
\begin{align*}
\mu_k \sim_{i.i.d.} Beta(\alpha/K, 1)\\
Z_{nk} | \mu \sim_{i.i.d.} Bern(\mu_k))
\end{align*}
$$

If we integrate out $$\mu_k$$, we find that the probability $$Z_{1k}$$ equals 1 is Bernoulli
distributed with parameter $$\frac{\alpha/K}{\alpha/K}$$:

$$
\begin{align*}
p(Z_{1k} = 1) &= \int_{\mu_k} p(Z_{1k} = 1 | \mu_k) p(\mu_k) d\mu_k\\
&= \frac{\Gamma(\alpha/K + 1) \Gamma(\alpha / K + 1)}{\Gamma(\alpha/K) \gamma(\alpha/K + 1 + 1)}\\
&= \frac{\alpha/K}{\alpha/K}
\end{align*}
$$

To leading order, the probability is $$\alpha/K$$. Taking the limit as $$K \rightarrow \infty$$,
the number of non-zero $$k$$ in $$Z_{1}$$ will be $$ \sim Binomial(\alpha/K, K) 
\rightarrow Poisson(\alpha)$$. This is why the 1st customer samples $$Poisson(\alpha)$$ new dishes.

A helpful resource for this approach is Teh et al. 2007 Stick-breaking Construction for the 
Indian Buffet Process.

## Properties

### Relation to Beta Process

Thibaux and Jordan 2007 showed that the [beta process](beta_process.md) is the
de Finetti mixing distribution of the IBP, akin to how the [Dirichlet process](dirichlet_process.md)
is the de Finetti mixing distribution of the [Chinese Restaurant Process](chinese_restaurant_process.md).
A quick recap of the .

We know that 