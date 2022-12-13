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

Case 1: $$gcd(n, x) \neq 1$$. Then $$x^{n-1} \neq 1 \mod n$$. Why? Because if $$x^{n-1} = 1 \mod n$$,
then $$x^{n-1} = nc + 1$$ for some $$c$$, and $$gcd(x,n)$$ can divide the LHS and $$nc$$, but thus cannot
divide $$nc + 1$$. Thus the algorithm will always detect $$n$$ as composite.

Case 2: $$gcd(x, n) = 1$$. Then let $$H = \{ x: x\in \mathbb{Z}_n^*, x^{n-1} = 1 \mod n\}$$. Note that
$$H \subseteq \mathbb{Z}_n^*$$ and $$H \neq \mathbb{Z}_n^*$$ since $$n$$ is not a Carmichael number. Thus per 
[Lagrange's Theorem](../group_theory/subgroups.md), $$|H| \leq \frac{1}{2} |\mathbb{Z}_n^*|$$. Thus the probability
$$n$$ is identified as composite is at least 0.5.