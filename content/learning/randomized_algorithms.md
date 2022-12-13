# Randomized Algorithms

## What are randomized algorithms?

Randomized algorithms are algorithms that have access to a source of randomness. This means that
their execution path and their outputs are both random. In general, we might be interested
in making statements like the following:

1. $\forall x \in \mathcal{X}, \mathbb{P}[Alg(x, r) \text{is correct}] \geq ...$
2. $$\forall x \in \mathcal{X}, \mathbb{V}[Alg(x, r) \text{runtime}] \leq ...$$

## Why do we care about randomized algorithms?

It turns out that there are problems for which we can find efficient and likely to be
correct _randomized_ algorithms and for which we cannot find equally efficient deterministic 
algorithms. There are open questions in computational complexity about what exactly randomness
buys us!

## What are types of randomized algorithms?

Broadly, there are 2 families of randomized algorithms:

1. Las Vegas: The output is always correct, but the runtime is random
2. Monte Carlo: The runtime is always fast, but the answer is possibly wrong

## Tools & Example Problems

- [Empty Pigeonholes](randomized_algorithms/empty_pigeonholes.md)
- [Coupon Collector Problem](randomized_algorithms/coupons_collector_problem.md)
- [Primality Testing](randomized_algorithms/primality_testing.md)
- [Minimum Graph Cut (Kargar's Algorithm)](randomized_algorithms/kargars_algorithm.md)
- [Moment Generating Functions](probability/moment_generating_functions.md)
- [Balls and Bins](randomized_algorithms/balls_and_bins.md)
- [Poissonization](randomized_algorithms/poissonization.md)
- [Metric Embeddings](randomized_algorithms/metric_embeddings.md)
- [Lovazc Local Lemma](randomized_algorithms/lovasz_local_lemma.md)
- [Algorithmic Lovazc Local Lemma](randomized_algorithms/algorithmic_lovasz_local_lemma.md)
- [Markov Chains](randomized_algorithms/markov_chains.md)
- [Martingales](randomized_algorithms/martingales.md)

## Useful Inequalities
- [Markov's Inequality](inequalities/markov_inequality.md)
- [Chebyshev's Inequality](inequalities/chebyshev_inequality.md)
- [Chernoff Bounds](inequalities/chernoff_bounds.md)
- [Bernstein's Inequality](inequalities/bernstein_inequality.md)
- [Hoeffding's Inequality](inequalities/hoeffding_inequality.md)
- [Azuma-Hoeffding Bound](inequalities/azuma_hoeffding_bound.md)

## References
- Mary Wootter's [Stanford CS265](https://web.stanford.edu/class/cs265/)