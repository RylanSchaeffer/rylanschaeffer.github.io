# Moment Generating Functions

The moment generating functino (MGF) of random variable $$X$$ is a function $$M_X: \mathbb{R} \rightarrow \mathbb{R}$$:

$$M_X(t) = \mathbb{E}[e^{tX}]$$

The name arises because the moments of $$X$$ appear in the Taylor series expansion about $$t=0$$:

$$M_X(t) = \mathbb{E}[e^{tX}] = 1 + \mathbb{E}[X] + \mathbb{E}[X^2] \frac{t^2}{2!} + \mathbb{E}[X^3]\frac{t^3}{3!}$$

The $$k$$th derivative w.r.t. $$t$$ and evaluated at $$t=0$$ yields the $$k$$th moment:

$$\frac{d^k}{dt^k} M_X(0) = \mathbb{E}[X^k]$$

## Properties

- If 2 random variables have the same MGF, they have the same distribution

## Examples

### Univariate Gaussian 

Consider a Normal random variable $$Z \sim \mathcal{N}(\mu, \sigma^2)$$. Its MGF is:

$$M_Z(t) = \mathbb{E}[e^{tZ}] = \int p(z; \mu, \sigma^2) e^{tz} dz = e^{(\mu + \delta^2 t) - \mu)/2\sigma}$$

This means the sum of 2 independent Gaussians is itself Gaussian. Suppose $$X \sim \mathcal{N}(\mu_1, \sigma_1^2)$$
and $$Y \sim \mathcal{N}(\mu_2, \sigma_2^2)$$. Considering $$X + Y$$:

$$M_{X+Y} = \mathbb{E}[e^{t(X+Y)}] = \mathbb{E}[e^{tX}] \mathbb{E}[e^{tY}]
= \exp \Big( (\mu_1 + \mu_2)t + \frac{1}{2} (\sigma_1^2 + \sigma_2^2) t^2 }$$

$$\Rightarrow X+ Y \sim \mathcal{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$$