# Energy-Based Models (EBMs)

Probability distributions can be expressed as:

$$p(x;\theta) = \frac{\exp(-E(x;\theta))}{Z(\theta)} $$

for some energy function $$E(x;\theta)$$ and partition function $$Z(\theta) := \int_{x \in \mathcal{X}} \exp(-E(x ;\theta))$$. 
The partition function is typically difficult to work with (if not impossible), so the approach in
energy-based models is to train a model to learn the energy function $$E(x;\theta)$$.

## Generating Data

One can sample data from $$p(x;\theta)$$ by sampling from some initial distribution
and then performing gradient ascent using the gradient of the learned energy function, e.g.,
using Langevin dynamics:

$$x^k \leftarrow x^{k-1} - \frac{\lambda}{2} \nabla_x E(x; \theta) + \omega^k $$

where $$\omega^k \sim \mathcal{N}(0, \lambda)$$ is Gaussian noise. [Welling & Yeh (ICML 2011)](https://www.stats.ox.ac.uk/~teh/research/compstats/WelTeh2011a.pdf)
showed that if we define $$x^k \sim q(x)$$, then as $$k \rightarrow \infty$$ and $$\lambda \rightarrow 0$$,
$$q(x) \rightarrow p(x;\theta)$$.

## Learning the Energy Function

### Contrastive Divergence Training

Give a set of data $$\{x_n\}_{n=1}^N := p_{\mathcal{D}}$$, we would like to learn a good energy function $$E(x;\theta)$$
for the data. The immediately obvious approach is to minimize the negative log-likelihood:

$$\mathcal{L}(\theta) := \mathbb{E}_{x \sim p_{\mathcal{D}}}[-\log p(x;\theta)] = \mathbb{E}_{x \sim p_{\mathcal{D}}}[E(x;\theta) - \log Z(\theta)]$$

This is intractable because of the partition function $$Z(\theta)$$, so we can instead use


$$\nabla_{\theta} \mathcal{L}(\theta) \approx \mathbb{E}_{x^+ \sim p_{\mathcal{D}}}[\nabla_{\theta} E(x^+;\theta)] - \mathbb{E}_{x^- \sim q(x)}[\nabla_{\theta} E(x^-;\theta)]$$

where $$x^+ \sim p_{\mathcal{D}}$$ and $$x^- \sim q(x)$$ sampled using the learned energy function.


[Du and Mordatch (NeurIPS 2019)](https://arxiv.org/abs/1903.08689) found that several implementation details improved the
quality of generated data:

- Initializing new samples using either uniform noise (5% of the time) or using a replay buffer of previously generated samples (95% of the time)
- Constraining the Lipschitz constant of the energy network by (a) adding spectral normalization to all layers and (b) adding weak L2 regularization to energy of positive and negative samples

[Du, Li, Tenenbaum and Mordatch (ICML 2021)](https://arxiv.org/abs/2012.01316) found additional implementation details
that improved the quality of generated data:

