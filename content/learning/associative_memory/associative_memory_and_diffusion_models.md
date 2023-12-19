# Associative Memory and Diffusion Models

[Ambrogioni Arxiv 2023](https://arxiv.org/abs/2309.17290) showed that associative memory models and diffusion models
can be linked. 

## Background

### Continuous Modern Hopfield Network

The [modern continuous Hopfield Network](modern_continuous_hopfield_network.md) has energy function

$$E_{\beta}(X) := - \beta^{-1} \log \Big ( \sum_n \exp \Big ( \beta x \cdot y_n \Big ) \Big ) + \frac{1}{2} \lvert \lvert x \lvert \lvert_2^2$$

where $$\beta$$ is a temperature parameter and additive constants in $$x$$ are omitted. 

### Diffusion Models

We imagine we have a target distribution $$\phi(y)$$ available only through training dataset:

$$D = \{y_1, \dots, y_N\}$$

We inject noise that turns training samples into random noise, and learn to invert this process to turn random noise
into new samples. In one diffusion model (called the variance exploding equation), Ambrogioni writes this process
in reversed time with noiseless data corresponding to final time $$T$$:

$$x(t - dt) = x(t) + \sigma \sqrt{dt} \delta(t)$$

where $\sigma$ is the standard deviation of the noise and $\delta(t)$ is a standard Normal distribution. If we initialize 
the state with target distribution $$\phi(y)$$, then the inverse equation is:

$$x(t + dt) = x(t) + \sigma^2 \nabla_x \log p_t(x(t)) dt + \sigma \sqrt{dt} \delta(t)$$

where $$p_t(x)$$ is the marginal distribution of the noise-injection process at time $$t$$. For the variance exploding
equation, the marginal can be computed analytically:

$$p_t(x) = \mathbb{E}_{y \sim \phi(y)} \Big[ \frac{1}{\sqrt{2 \pi (T - t) \sigma^2}} \exp( -\frac{\lvert \lvert x - y \lvert \lvert_2^2}{2(T-t)\sigma^2}) \Big]$$

For real data, we may not know the score function $$\nabla_x \log p_t(x(t))$$, but we can estimate it with a neural network:

$$\mathcal{L}(\theta) = \frac{1}{2} \mathbb{E}_{y \sim D}, t \Big[ \mathbb{E}_{x(t)|y} \Big[\lvert \lvert \delta(t) - s(x(t), t; \theta) \lvert \lvert_2^2 \Big] \Big] $$

where $$\delta(t) = x(t) - y$$ is the total noise added to pattern $$y$$ up to time $$t$$. The score can then be recovered as:

$$\nabla_x \log p_t(x) \approx - \sigma^{-1} s(x(t), t; \theta)$$


## Connecting Continuous Modern Hopfield Network to Diffusion Models

## Illustrative Example: Exploding Variance Diffusion Models

Define the diffusion model energy function as:

$$E(x, t) = -\sigma^2 \log p_t(x) = - \sigma^2 \log \mathbb{E}_{y \sim \phi(y)} \Big[ \exp( -\frac{\lvert \lvert x - y \lvert \lvert_2^2}{2(T-t)\sigma^2}) \Big]$$

We replace the distribution $$\phi(y)$$ with a set of memories $$\{y_1, \dots, y_N\}$$ and define the energy function:

$$E(x, t) = - \sigma^2 \log  \Big[ \sum_n \exp( -\frac{\lvert \lvert x - y_n \lvert \lvert_2^2}{2(T-t)\sigma^2}) \Big]$$

Assuming that patterns are normalized to unit length and removing constant additive terms, we obtain:

$$\frac{1}{\sigma^2} E(x, t) = - \log  \Big[ \sum_n \exp( -\frac{1}{2(T-t)} x \cdot y_n ) \Big] + \frac{\lvert \lvert x \lvert \lvert_2^2}{(T-t)^2}$$

Now, define the time-dependent inverse temperature $$\beta(t)^{-1} := \sigma^2(T-t)$$ and multiply both sides by $$\beta(t)^{-1}$$:


$$\frac{\beta^{-1}(t)}{\sigma^2} E(x, t)  =  - \beta^{-1} \log \Big ( \sum_n \exp \Big ( \beta x \cdot y_n \Big ) \Big ) + \frac{1}{2} \lvert \lvert x \lvert \lvert_2^2$$

which is the energy of the continuous modern Hopfield network for fixed $$t$$.

Key differences:

1. In diffusion models, $$\beta(t)$$ is a function of time, whereas in continuous modern Hopfield networks, $$\beta$$ is a constant.
2. In diffusion models, the energy function is minimized with injected noise, whereas Hopfield networks have a deterministic energy function.

Ambrogioni points out that these two effects cancel because the divergence of $$\beta(t)$$ suppresses the stochastic fluctuations.
In experiments, there is no meaningful difference for large $$\beta$$.