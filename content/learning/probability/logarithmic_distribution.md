# Logarithmic Distribution

The logarithmic distribution is a discrete distribution over the positive
integers defined by a single parameter $$p \in (0, 1)$$.

## Definition

- Probability Mass Function for $$x \in \{1, 2, 3, ...\}$$

$$P(X=x; p) = \frac{-1}{\log (1 - p)} \frac{p^x}{x}$$

## Derivation

The logarithmic distribution obtains its name from its construction
from the Taylor series expansion of the natural logarithm function.
Specifically, we start with the Maclaurin series

$$-\log(1 - p) = \sum_{k=1}^{\infty} \frac{p^k}{k}$$

Dividing both sides by $$-\log(1-p)$$ gives us a properly normalized
probability distribution.

## Relation to Other Distributions

### Negative Binomial

The [Negative Binomial](negative_binomial_distribution.md)