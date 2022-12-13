# Poissonization

The [Poisson distribution](../probability/poisson_distribution.md) is useful for studying 
discrete events. Poissonization is a way of tackling problems by considering a tangled
problem (i.e. one with non-independent events), pretending events are independent, 
studying the events using the Poisson distribition, then relaxing the assumption of independence
and showing the dependent result can't deviate too much from the independent result.

## Motivation

Suppose we drop exactly $$k$$ balls into $$m$$ bins, and then study how many balls are in
each bin (or what the max load across bins is, or other questions). The number of balls in each bin 
are not independent, because we dropped exactly $$k$$ balls and thus knowing information
about one bin tells us information about the other bins. However, suppose we instead 
first sample $$k \sim Poisson(n)$$. It turns out that:

- $$\forall i$$, the number of balls in bin i $$\sim Poisson(n/m)$$
- The number of balls in each bin are all independent

Proof: For simplicity, assume 2 bins and let $$X_1, X_2$$ be the number of balls in bins 1, 2.
Claim: $$\mathbb{P}[X_1 = i, X_2=j] = \mathbb{P}[Poisson(n/2) = i] \mathbb{P}[Poisson(n/2) = j]$$.
To see why, $$\mathbb{P}[X_1 = i, X_2=j] = \mathbb{P}[k=i+j] \mathbb{P}[Bin(i+j, 1/2) = 1]$$. 
Rearranging, we'll achieve the claim. The same logic applies to more than 2 bins, but one must use
the multinomial distribution.

Takeaway: By choosing $$k$$ randomly, we break the dependence! Thus, by considering a random $$k$$
instead of a fixed $$k$$, this problem (of number of balls per bin) becomes much easier to analyze.