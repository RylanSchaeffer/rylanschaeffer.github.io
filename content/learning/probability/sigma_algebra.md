# $$\sigma$$-Algebra

__Parent__: [Probability](../probability.md)

# Definition

For a given set $$X$$, a set $$\Sigma$$ of subsets of $$X$$ is called a $$\sigma$$-algebra on
the set $$X$$ if

1. $$X$$ belongs to the set i.e $$X \in \Sigma$$
2. $$\Sigma$$ is closed under complementation. That is, if $$\sigma \in \Sigma$$,
   then $$\overline{\sigma} := X \ \sigma \in \Sigma$$
3. $$\Sigma$$ is closed under countable unions. That is, if $$\sigma_1, \sigma_2, ...
   \in \Sigma$$, then $$\cup_{i=1}^{\infty} \sigma_i \in \Sigma$$
   
Informally, a $$\sigma$$-algebra tells us all the ways to carve up $$X$$ in a nice way
that allows for use with a [probability measure](probability_measures.md) to create 
a [probability space](probability_spaces.md).
