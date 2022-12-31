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

## Examples

### Example: Coupon Collecting

Suppose we have $$n$$ types of coupons in cereal boxes. Under uniform probability, 
how many boxes (draws) are necesssary to get all $$n$$? Let $$X$$ be the number of draws till
all are acquired.

Claim:  $$\forall c$$, c contant, $$\lim_{n\rightarrow \infty} \mathbb{P}[X \geq n \log n + cn] = 1 - \exp(-\exp(-c))$$

Our approach to answering the above question will require 2 steps:

Step 1 (Poissonization): Show, in limit as $$n \rightarrow \infty$$, the probability of seeing every type of couppon after 
$$k\sim Poisson(n \log n + cn)$$ is $$1 - \exp(-\exp(-c))$$.

After opening $$k\sim Poisson(n \log n + cn)$$ boxes, the number of coupons of each type is 
independently $$Poisson(\log n + c)$$. Thus, the probability we see all coupons is the product
of the probabilities of that each coupon type $$\geq 1$$:

$$\mathbb{P}[\text{See all coupons}] = (1 - \mathbb{P}[Poisson(\log n + c) = 0])^n \rightarrow \exp(-\exp(-c))$$

as $$n\rightarrow \infty$$.


Step 2 (De-Poissonization): Show that the probability of seeing every type after $$n \log n + cn$$ boxes (draws) is
the probability of seeing every type after $$k\sim Poisson(n \log n + cn)$$ (draws) plus/minus o(1).

**Lemma:** $$\mathbb{P}[\text{See all coupons after b boxes}] = \mathbb{P}[\text{See all coupons after } b \pm n^{0.9} boxes] \pm o(1)$$

Let $$X$$ be the number of boxes needed to get all coupons. Define events $$A = X \geq b - n^{0.9}$$
and $$B = X \geq b + n^{0.9}$$. Then

$$ \mathbb{P}[X \geq b + n^{0.9}] = \mathbb{P}[X \geq b - n^{0.9}] + \Delta \leq \mathbb{P}[X \geq b - n^{0.9}]+\frac{2n^{0.9}}{n}$$

where $$\Delta$$ is the event that $$b-n^{0.9}\leq X \leq b+n^{0.9}$$.

**Lemma:** $$\mathbb{P}[|k - (nlog n +cn)| \geq n^{0.9}] = o(1)$$.

### Example: Max Load

Claim: $$\exists c$$ such that w.h.p., the max load $$\geq c \log n / (\log \log n)$$ for large
enough $$n$$.

Step 1 (Poissonify): Toss $$k \sim Poisson(n/2)$$ balls into $$n$$ bins. Each load is 
independently $$\sim Poisson(1/2)$$. Let $$b = c \log n / \log \log n$$. Then the
probability of no bin with load $$\geq b$$ is $$\leq$$ probability of no bin with load $$b$$,
which is $$(1 - e^{-1/2}(1/2)^b/b!)^n = (1 - \Omega(n^{-c}))^n \leq e^{-\Omega(n/n^c)} = o(1)$$
so long as $$c<1$$. Thus the probability the max load after $k$$ balls is greater than
$$c \log n / \log \log n$$ is at least $$1 - o(1)$$.

Step 2 (Depoissonify): Show that with high probability $$k \leq n$$. If so, the probability
the max load after $$n$$ exceeds $$n \log n / \log \log n$$  is $$\geq$$ than the probability the
max load after $$k$$ exceeds $$c \log n / \log \log n$$, which is $$\geq$$ than $$1 - o(1)$$

$$\mathbb{P}[k \leq n] \leq \mathbb{P}[|k - \mathbb{E}[k] \geq n/2] \leq \frac{\mathbb{V}[k]}{(n/2)^2} = 1/2n$$

$$\mathbb{P}[X \geq b - n^{0.9}]$$