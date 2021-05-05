# Beta Process

The Beta process is a random measure

## Definitions

### As a Levy Process Definition

A beta process $$B \sim BP(c, B_0)$$ is a positive Levy process whose Levy measure
depends on 2 parameters:

1. $$c: \Omega \rightarrow \mathbf{R}$$ is called the concentration function; if c
   is a constant, it is occasionally instead called the concentration parameter
2. $$B_0$$ is a fixed measure on $$\Omega$$ called the base measure

## Properties

### Conjugacy with the Bernoulli Process

If necessary, check out the [Bernoulli process](bernoulli_process.md) for a quick
refresher. Akin to how the Beta and Bernoulli/Binomial distributions are conjugate,
so too are the Beta and Bernoulli processes. Specifically, let $$B \sim BP(c, B_0)$$
and $$X_n | B \sim BeP(B)$$ for $$n = 1, ..., N$$. Then

$$ B | X_1, ..., X_N \sim BP(c+N, \frac{c}{c+n} B_0 + \frac{1}{c+n}\sum_{n=1}^N X_n)$$

or equivalently

$$ B | X_1, ..., X_N \sim BP(c+N, \frac{c}{c+n} B_0 + \frac{1}{c+n}\sum_{j} m_{Nj} \delta_{\omega_j})$$

where $$m_{Nj}$$ is the integer number of $$\{X_n\}_{n=1}^N$$ with Dirac measure $$\delta_{\omega_j}$$.

### Marginalizing Out Beta Process Prior

See [Bernoulli process](bernoulli_process.md) for details.