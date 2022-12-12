# Chernoff Bounds

Let $$X$$ be a random variable. By applying Markov's Inequality to the
[moment generating function](../probability/moment_generating_functions.md) of $$X$$, we obtain Chernoff 
bounds i.e. $$\forall t > 0$$:

$$\mathbb{P}[X \geq a] = \mathbb{P}[e^{t X} \geq e^{t a}] \leq \frac{\mathbb{E}[e^{t X}]}{e^{t a}}$$

## Properties

- If $$X_i$$ is a single Bernoulli with probability $$p_i$$, then using the 
  [Bernoulli MGF](../probability/moment_generating_functions.md#univariate-bernoulli),
  $$\mathbb{P}[X_i \geq a] \leq  \frac{1 + p_i (e - 1)}{e^a}$$

- If $$X$$ is a sum of independent but not necessarily identically distributed Bernoullis with mean $$\mu$$, 
  then $$\forall \delta > 0$$:

$$\mathbb{P}[X \geq (1 + \delta) \mu] \leq \Big( \frac{e^{\delta}}{(1 + \delta)^{1+\delta}} \Big)^{\mu}$$

and

$$\forall \delta > 0, \mathbb{P}[X \leq (1-\delta) \mu] \leq \Big( \frac{e^{-\delta}}{(1 - \delta)^{1-\delta}} \Big)^{\mu}$$

- Corollaries: If $$X$$ is the sum of indep. but not necessarily identical Bernoullis, then:

    - $$\forall \delta \in (0, 1], \mathbb{P}[X \geq (1+\delta) \mu] \leq e^{-\mu \delta^2/3}$$
    - $$\forall \delta \in (0, 1], \mathbb{P}[X \leq (1-\delta) \mu] \leq e^{-\mu \delta^2/2}$$
    - $$c \geq 6, \mathbb{P}[X \geq c \mu] \leq 2^{-c/\mu}$$

## Examples

### Fair Coin Flips

Let $$X$$ be the number of heads after $$n$$ coin flips of a fair coin, and consider the probability that
$$X \geq 3n/4$$. [Markov's Inequality](markov_inequality.md) tells us that the probability
is:

$$\mathbb{P}[X \geq 3n/4] \leq \frac{\mathbb{E}[X]}{3n/4} = \frac{n/2}{3n/4} = \frac{2}{3}$$

Intuitively, that feels loose, especially if $$n$$ is large. What does [Chebyshev's Inequality]
tell us?

$$\mathbb{P}[X \geq 3n/4] \leq \frac{4}{n} $$

That's inversely related to $$n$$, which is Better! But intuitively, we expect that $$\exp(-\Omega(n))$$
should be possible. Using Chernoff's gives us exponential decay in $$n$$.