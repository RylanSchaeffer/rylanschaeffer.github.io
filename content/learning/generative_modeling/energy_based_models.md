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
showed that if we define $$x^k \sim q_k(x)$$, then as $$k \rightarrow \infty$$ and $$\lambda \rightarrow 0$$,
$$q_k(x) \rightarrow p(x;\theta)$$.

## Learning the Energy Function

### Contrastive Divergence Training

Give a set of data $$\{x_n\}_{n=1}^N := p_{\mathcal{D}}$$, we would like to learn a good energy function $$E(x;\theta)$$
for the data. The immediately obvious approach is to minimize the negative log-likelihood:

$$\mathcal{L}(\theta) := \mathbb{E}_{x \sim p_{\mathcal{D}}}[-\log p(x;\theta)] = \mathbb{E}_{x \sim p_{\mathcal{D}}}[E(x;\theta) - \log Z(\theta)]$$

This is intractable because of the partition function $$Z(\theta)$$, so we can instead use

$$\nabla_{\theta} \mathcal{L}(\theta) \approx \mathbb{E}_{x^+ \sim p_{\mathcal{D}}}[\nabla_{\theta} E(x^+;\theta)] - \mathbb{E}_{x^- \sim q_k(x)}[\nabla_{\theta} E(x^-;\theta)]$$

where $$x^+ \sim p_{\mathcal{D}}$$ and $$x^- \sim q_k(x)$$ are sampled using the learned energy function. A derivation
of this can be found in [Richard Turner's 2005 notes](http://www.gatsby.ucl.ac.uk/~turner/Notes/ContrastiveDivergence/CDv3.pdf?ref=inference.vc)"

$$\begin{align*}
\nabla_{\theta} \mathcal{L}(\theta) &= \sum_n \nabla_{\theta} \log p(x_n;\theta) \\
&= \sum_n \nabla_{\theta} \log \frac{\exp(-E(x_n;\theta))}{Z(\theta)} \\
&= \sum_n \frac{1}{Z(\theta)} \nabla_{\theta} Z(\theta) - \nabla_{\theta} E(x_n;\theta) \\
&= \sum -\frac{1}{Z(\theta)} \int x \nabla_{\theta} E(x;\theta) \exp(-E(x;\theta)) dx - \nabla_{\theta} E(x_n;\theta) \\
&= N \mathbb{E}_{x^- \sim q_k(x)}[\nabla_{\theta} E(x^-;\theta)] - N \mathbb{E}_{x^+ \sim p_{\mathcal{D}}}[\nabla_{\theta} E(x^+;\theta)]
\end{align*}$$

What intuitively does this contrastive divergence mean? The gradient of the log likelihood is the difference
between the gradient of the energy function at the real data and the gradient of the energy function at the model's
generated data. Turner's notes have a beautiful quote: "The algorithm coverges when the ‘dreams’ of the model match ‘re-
ality’. If the ‘dreams’ do not match reality, the parameters are altered so that the next round of dreams will 
be more like reality."

Note: Hinton found that only a few steps of gradient ascent were necessary to get good results.

[Du and Mordatch (NeurIPS 2019)](https://arxiv.org/abs/1903.08689) found that several implementation details improved the
quality of generated data:

- Initializing new samples using either uniform noise (5% of the time) or using a replay buffer of previously generated samples (95% of the time)
- Constraining the Lipschitz constant of the energy network by (a) adding spectral normalization to all layers and (b) adding weak L2 regularization to energy of positive and negative samples

[Du, Li, Tenenbaum and Mordatch (ICML 2021)](https://arxiv.org/abs/2012.01316) noted that the above contrastive divergence loss
actually approximates the true CD loss, since the true CD loss prescribes taking infinitely many MCMC
steps but in practice, only finitely many steps are taken. The authors propose a new loss:

$$\nabla_{\theta} \mathcal{L}(\theta) = \mathbb{E}_{x^+ \sim p_{\mathcal{D}}}[\nabla_{\theta} E(x^+;\theta)] - \mathbb{E}_{x^- \sim q_k(x)}[\nabla_{\theta} E(x^-;\theta)] + \nabla_{\theta} q_k(x; \theta) \partial_{q_k(x; \theta)} KL(q_k(x; \theta)|| q_{\infty}(x;\theta))$$

where $$q_{\infty}(x;\theta)$$ is the stationary distribution of the MCMC chain. Du & colleagues propose a full
contrastive divergence loss:

$$\begin{align*}
\mathcal{L}_{Full} &= \mathcal{L}_{CD} + \mathcal{L}_{KL}\\
\mathcal{L}_{CD} &= \mathbb{E}_{x^+ \sim p_{\mathcal{D}}}[E(x^+;\theta)] - \mathbb{E}_{stopgrad(x^- \sim q_k(x))}[E(x^-;\theta)] \\
\mathcal{L}_{KL} &= \mathbb{E}_{x^- \sim q_k(x)}[E(x^-; stopgrad(\theta))] + \mathbb{E}_{x^- \sim q_k(x)}[\log q_k(x;\theta)]
\end{align*}$$

The stop-gradient operators are necessary to ensure the correctness of the gradients. The authors note that
without the KL loss term, the optimization process leads to an "adversarial" sampling landscape whereby
the network learns an energy function that makes sampling difficult, but the KL divergence term counteracts
this effect. The authors found this second loss terms improves the stability of training, the generality of
different architectures and the quality of generated samples.
