# Introduction to Groups

A group is a set $$S$$ with an operation $$*$$ with the following properties:

1. Closure: $$\forall a, b \in S, a * b \in S$$
2. Associativity: $$a*(b*c) = (a * b) * c$$
3. Identity: $$e * a = a * e = a$$
4. Inverse: $$a * b = b * a = e$$

$$e$$ is a special element in the set called the identity element.

## Examples

- $$\mathbb{Z}_n^+ := \{ 0, 1, ..., n-1\}$$ with $$*=$$ addition modulo $$n$$
- $$\mathbb{Z}_n^+ := \{ 0 < a < n : gcd(a, n) = 1\}$$ with $$*=$$ multiplication modulo $$n$$. Note,
  in this group, every element is its own inverse because $$1 * 1 = 1, 3 * 3 = 1, 5 * 5 = 1, 7 * 7 = 1$$

## Properties

### Fermat's Little Theorem

If $$n$$ is prime, then $$\forall x \in \mathbb{Z}_n^*, x^{n-1} = 1 \% n$$.

### Fermat's Little Theorem for Polynomials

A number $$n$$ is prime if and only if $$\forall a \in \mathbb{Z}_n^*$$, the following polynomial
equation holds:

$$(x-a)^n = x^n -a \mod n$$
