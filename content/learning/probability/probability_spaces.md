# Probability Spaces

__Parent__: [Probability](../probability.md)

# Definition

A probability space is a 3-tuple consisting of

1. A set $$X$$ called the sample space i.e. the set of all possible outcomes
2. A $$\sigma$$-algebra on the set $$X$$, which informally tells us all the
   possible ways to carve
3. A probability measure $$P$$

Intuitively, the sample space gives us all possible outcomeshe $$\sigm
   
A collection $$C$$ of subsets of set $$X$$ is
called a __$$\sigma$$-algebra__ on $$X$$ if

1. X belongs to C i.e $$X \in C$$
2. C is closed under complementation. That is, if $$c \in C$$, then $$\overline{c}
   := X \ c \in C$$
3. C is closed under countable unions. That is, if $$c_1, c_2, ... \in C$$, then
   $$\cup_{i=1}^{\infty} c_i \in C$$
