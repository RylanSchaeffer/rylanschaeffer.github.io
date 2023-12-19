# Associative Memory and Diffusion Models

[Ambrogioni Arxiv 2023](https://arxiv.org/abs/2309.17290) showed that associative memory models and diffusion models
can be linked. In particular, the [modern continuous Hopfield Network](modern_continuous_hopfield_network.md) has 
energy function

$$E_{\beta}(X) := - \beta^{-1} \log \Big ( \sum_n \exp \Big ( \beta x \cdot y_n \Big ) \Big ) + \frac{1}{2} \lvert \lvert x \lvert \lvert_2^2$$

where $$\beta$$ is a temperature parameter and additive constants in $$x$$ are omitted. Turning to the diffusion model,
we imagine we have a target distribution $$\phi(y)$$ available only through training dataset:

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

