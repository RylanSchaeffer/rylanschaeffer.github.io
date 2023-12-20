# Decoupled Uniformity

[Dufumier et al. ICML 2023](https://arxiv.org/abs/2206.01646) introduced a new self-supervised learning objective called decoupled uniformity.
It is a modification of [SimCLR](simclr.html) that operates on "means" (i.e. averages over augmentations) rather than
the embeddings themselves. Specifically, for a single datum $$x_n$$, we can sample $$K$$ augmentations:

$$x_n^{(k)} = t^{(k)}(x), \quad t^{(k)} \sim p(\mathcal{A})$$

where $$\mathcal{A}$$ is a set of augmentations. We then compute the mean embedding for the $$n$$th datum:

$$\mu_n = \frac{1}{K} \sum_{k=1}^K f_{\theta}(x_n^{(k)})$$