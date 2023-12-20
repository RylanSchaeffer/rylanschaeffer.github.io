# Decoupled Uniformity

[Dufumier et al. ICML 2023](https://arxiv.org/abs/2206.01646) introduced a new self-supervised learning objective called decoupled uniformity.
It is a modification of [SimCLR](simclr.html) that operates on "means" (i.e. averages over augmentations) rather than
the embeddings themselves. Specifically, for a single datum $$x_n$$, we can sample $$K$$ augmentations:

$$x_n^{(k)} = t^{(k)}(x), \quad t^{(k)} \sim p(\mathcal{A})$$

where $$\mathcal{A}$$ is a set of augmentations. We then compute the mean embedding for the $$n$$th datum:

$$\mu_n = \frac{1}{K} \sum_{k=1}^K f_{\theta}(x_n^{(k)})$$

The Decoupled Uniformity loss then incentivizes uniformity of the means:

$$\mathcal{L}_{DU} = \log \mathbb{E}\Big[\exp (- \lvert \lvert \mu_n -  \mu_{n'} \lvert \lvert_2^2 ) \Big]$$

## Negative Positive Coupling

One problem with [InfoNCE](info_nce.html) and other methods like [Alignment & Uniformity](alignment_and_uniformity.html) 
is the so-called "Negative-Positive Coupling" (NPC) problem. Because the uniformity losses incentivize making
all the embeddings uniform, this hurts the alignment loss. [Decoupled Constrastive Learning](decoupled_contrastive_learning.html)
proposed removing positive pairs from the InfoNCE.

Consider the gradient of the Decoupled Uniformity loss with respect to the embedding $$z_n^{(k)}$$:

$$ \nabla_{z_n^{(k)}} \mathcal{L}_{DU} = -4 \sum_{n \neq j} w_{n, j} (\mu_n - \mu_j) $$

where $$w_{n,j} := \exp(- \lvert \lvert \mu_n -  \mu_j \lvert \lvert_2^2) / \Big(\sum_{n(n-1)} \sum_{i \neq j} \exp(- \lvert \lvert \mu_i -  \mu_j \lvert \lvert_2^2) \Big)$$.

The overall sum of the weights $$\sum_{n \neq j} w_{n, j}$$ quantifies whether $$\mu_n$$ is close to other samples
in the batch, while the individual weights $$w_{n, j}$$ quantify whether the negative means $$\{\mu_j\}_{j \neq n}$$
are close to the positive mean $$\mu_n$$.
