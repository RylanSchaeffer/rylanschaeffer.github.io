# $$\sigma$$-Algebra

__Parent__: [Probability](../probability.md)

# Definition
## Sigma Algebra

Informally, a $$\sigma$$-algebra on a given sample space $$\Omega$$ tells us all the ways
we might define valid events. For instance, if we're rolling 6-sided dice, we might want to be
able to define events like "All sides are even" or "All sides are above 4." These events don't
directly belong to the sample space but can be constructed from the sample space.

Formally, for a given set $$\Omega$$, the set $$F(\Omega)$$ is called a $$\sigma$$-algebra on
$$\Omega$$ if

1. $$\varnothing, \Omega$$ belong to the set i.e $$\Omega, \varnothing \in F(\omega)$$
2. $$F(\Omega)$$ is closed under complementation: if $$\sigma \in F(\Omega)$$,
   then $$\overline{\sigma} := \Omega \ \sigma \in F(\Omega)$$
3. $$F(\Omega)$$ is closed under countable unions: if $$\sigma_1, \sigma_2, ...
   \in F(\Omega)$$, then $$\cup_{i=1}^{\infty} \sigma_i \in F(\Omega)$$

For a given set $$\Omega$$, we can construct $$\sigma$$-algebras of different complexities.
The simplest is $$F(\Omega) := \{\varnothing, \Omega\}$$, which we can quickly check
is a valid $$\sigma$$-algebra. The algebra contains the original set and the empty set;
the algebra is closed under complementation; the algebra is closed under countable unions.
The most complicated is the power set of $$\Omega$$ i.e. $$F(\Omega) := P(\Omega)$$.

### Borel Sigma-Algebras

The Borel $$\sigma$$-algebra $$B$$ on a topological space $$\Omega$$ is the smallest
$$\sigma$$-algebra containing all open sets of $$\Omega$$