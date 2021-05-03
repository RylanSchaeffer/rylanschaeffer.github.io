# Probability Spaces

__Parent__: [Probability](../probability.md)

## Definition

A probability space is a 3-tuple consisting of

1. A set $$\Omega$$ called the sample space i.e. the set of all possible outcomes
2. A [$$\sigma$$-algebra](sigma_algebra.md) $$F$$ on the set $$X$$, which informally specifies
   the set of all "possible" events (events are outcomes or combinations of outcomes)
3. A [probability measure](probability_measure.md) $$P: F \rightarrow [0, 1]$$

## Sigma Algebra

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


A collection $$C$$ of subsets of set $$X$$ is called a __$$\sigma$$-algebra__ on $$X$$ if

1. X belongs to C i.e $$X \in C$$
2. C is closed under complementation. That is, if $$c \in C$$, then $$\overline{c}
   := X \ c \in C$$
3. C is closed under countable unions. That is, if $$c_1, c_2, ... \in C$$, then
   $$\cup_{i=1}^{\infty} c_i \in C$$


## Related Material

A __measurable space__ (also called a Borel space) is a 2-tuple consisting of

1. A set $$X$$
2. A A [$$\sigma$$-algebra](sigma_algebra.md) on the set $$X$$

When the 2-tuple measure space is equipped with a measure $$\mu$$, becoming a 3-tuple,
the measurable space becomes a __measure space__.