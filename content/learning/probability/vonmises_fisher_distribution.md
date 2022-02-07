# von Mises-Fisher Distribution

The von Mises-Fisher (vMF) distribution is a distribution on the (hyper)sphere, making it
useful for modeling spherical data (e.g. in self-supervised learning) or directional statistics.
It has two parameters:

1. The mean direction $$\mu$$ s.t. $$\lvert \lvert \mu \rvert \rvert = 1$$
2. The concentration $$\kappa \geq 0$$

For $$X \in \mathbb{R}^{D} \sim vMF(\mu, \kappa)$$, its probability density is defined as

$$p(X=x; \mu, \kappa) \propto \exp( \kappa \mu^T x)$$

The normalizing constant is $$C_D(\kappa) = \frac{\kappa^{D/2 - 1}}{(2 \pi)^{D/2} I_{D/2 - 1}(\kappa)}$$,
where $$I_{D/2 - 1}$$ denotes the modified Bessel function of the first kind.

## Properties

- Expected Value: Define $$y := \kappa \mu$$. The vMF distribution's expected value $$\mathbf{E}[X]$$ is:

$$
\begin{align*}
\mathbf{E}[X] &= \int_S x exp(y^T x) dx\\
&= \frac{d}{dy} \int exp(y^T x) dx\\
&= \nabla_y \kappa \frac{d}{d\kappa} \int exp(y^T x) dx\\
&= \mu \frac{d}{d\kappa} \int exp(y^T x) dx\\
&= \mu (2 \pi)^{D/2 - 1} \Bigg(\frac{I'(\kappa)}{I(\kappa)} - \frac{D/2 -1 }{\kappa} \Bigg) \frac{I(\kappa)}{\kappa^{D/2 -1}}
\end{align*}
$$

where $$I'(\kappa)$$ denotes $$\frac{d}{d\kappa}I(\kappa)$$. The expected value is always inside the
(hyper)sphere, which intuitively makes sense.

- Reparameterization: Rather than using 2 parameters (the mean direction $$\mu$$ and magnitude $$\kappa$$),
  we could instead use a single unconstrained parameter $$\kappa \mu \in \mathbb{R}^D$$. Why we use
  two parameters seems to be for conceptual clarity, although I don't know if that really
  helps.

- Exponential Family: The vMF distribution falls in the [exponential family](exponential_family_distributions.md)
