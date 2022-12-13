# Primality Testing

Suppose we want to know whether $$n$$ is prime. From [Fermat's little theorem for polynomials](../group_theory/introduction_to_groups.md#fermats-little-theorem-for-polynomials)
we know that $$\forall x \in \mathbb{Z}_n^*$$, $$x^{n-1} = 1 \mod n$$. This suggests the following algorithm:

## Algorithm

Given an $$n$$, choose $$x \in \{1, ..., n-1\}$$ uniformly at random. If $$x^{n-1} = 1 \mod n$$,
output "prime". Otherwise, output "composite".

This will always work on prime numbers, but fail on Carmichael numbers (i.e. composite natural numbers 
such that $$\forall x \in \mathbb{Z}_n^*, x^{n-1} = 1 \mod n).

## Analysis

**Theorem:** Suppose $$n$$ is composite, but not a Carmichael number. Then the probability Fermat's test
outputs "composite" is $$\geq 1/2$$.

Proof: 