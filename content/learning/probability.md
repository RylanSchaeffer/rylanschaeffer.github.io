# Probability

## Probability Spaces

A __probability space__ is a 3-tuple consisting of a set $$X$$, a $$\sigma$$-algebra
and a probability measure $$P$$. Each are explained below:

### $$\sigma$$-Algebra

A collection $$C$$ of subsets of set $$X$$ is called a $$\sigma$$-algebra on $$X$$ if

1. $$X \in C$$
2. C is closed under complementation. That is, if $$c \in C$$, then $$\overline{c}
:= X \ c \in C$$
3. C is closed under countable unions. That is, if $$c_1, c_2, ... \in C$$, then 
$$\cup_{i=1}^{\infty} c_i \in C$$

### Probability Measure

Let $$C$$ be a $$\sigma$$-algebra on the set (the domain) $$X$$. A function $$P: 
C \rightarrow [0, 1]$$ is a probability measure if

1. $$P$$ is normalized i.e. $$P(X) = 1$$
2. $$P$$ is $$\sigma$$-additive i.e. P(\cup_{i=1}^{\infty} c_i) = 
\sum_{i=1}^{\infty} P(c_i)$$ 


