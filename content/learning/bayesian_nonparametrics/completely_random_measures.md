# Complete Random Measures

Disclaimer: Most of this comes from Tamara Broderick's excellent paper
"Posteriors, conjugacy, and exponential families for completely random measures."

## Review of BNP Models

Bayesian nonparametric (BNP) models revolve around collections of pairs of
(traits, frequencies/rates). The principle challenge of Bayesian nonparametrics
is how, starting with a countable infinity of traits and frequencies in the prior,
to integrate over the infinite possibilities to compute a finite posterior over traits
and frequencies based on data. More specifically, we have traits $$\{\psi_k \in \Psi\}$$
and frequencies or rates $$\theta_k$$. A BNP model starts with a discrete measure on $$\Psi$$:

$$ \Theta := \sum_{k=1}^K \theta_k \delta_{\psi_k}$$

where $$K$$ can be finite or countably infinite. The $$n$$th datum $$X_n$ is another 
discrete measure on $$\Psi$$:

$$ X_n := \sum_{k=1}^{K_n} x_{n,k} \delta_{\psi_{n,k}}$$

where $$x_{n,k} \in \mathbb{R}_+$$ is the degree to which the $$n$$th datum possesses 
the trait $$\psi_{n,k}$$. Each $$\psi_{n,k} \in \{\psi_k \}$$ but different data can
possess different traits.

Using a BNP model requires specifying a prior distribution $$p(\Theta)$$ and a likelihood
$$p(X_n|\Theta)$$.

## Random Measures

A random measure is a random element whose values are [measures](../measure_theory/measures.md).
More formally, let $$\Sigma_{\Psi}$$ be the [sigma-algebra](../probability/sigma_algebra.md) of $$\Psi$$.
For a measure $$\Theta$$ over $$\Psi$$ to be random, for any measurable set $$A \in \Sigma_{\Psi}$$,
the quantity $$\Theta(A)$$ must be a random variable.

## Completely Random Measures

A completely random measure (CRM) is a random measure that satisfies 1 additional property:
for any disjoint, measurable sets $$A_1, ..., A_k \in \Sigma_{\Psi}$$, the random variables
$$\Theta(A_1), ..., \Theta(A_k)$$ are independent.

## Properties

Kingman 1967 shows that CRMs can always be split into 3 parts:

$$\Theta = \Theta_{det} + \Theta_{fix} + \Theta_{ord}$$

$$\Theta_{fix}$$ stands for "fixed locations":

$$\Theta_{fix} = \sum_{k=1}^{K_{fix}} \theta_{fix, k} \delta_{\psi_{fix}, k} $$

where $$\theta_{fix,k} \in \mathbb{R}_{\geq 0}$$ are random weights and 
$$\delta_{\psi_{fix}, k} $$ are fixed locations. Note that, by the independence property
of CRMs, the $$\theta_{fix,k}$$ must be independent random variables.

$$\Theta_{ord}$$ standards for "ordinary"