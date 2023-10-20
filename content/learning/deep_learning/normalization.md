# Normalization in Deep Learning

### Layer Normalization

[Ba, Kiro and Hinton 2016](https://arxiv.org/abs/1607.06450) introduced Layer Normalization. Let $$\mathbf{a} \in \mathbb{R}^D$$
be a $$D$$-dimensional vector of activations. Layer normalization first computes the mean and standard deviation across
the $$D$$ dimensions:

$$\mathbf{\mu} = \frac{1}{D} \sum_{d=1}^D \mathbf{a}_d$$

$$\sigma = \sqrt{\frac{1}{D} \sum_{d=1}^D (\mathbf{a}_d - \mu)^2 + \epsilon}$$

where $$\epsilon > 0$$ is a small constant to avoid division by zero. Then, Layer normalization normalizes the activations:

$$ \frac{ \mathbf{a} - \mathbf{\mu}}{\sigma} $$

One can optionally introduce learnable parameters $$\mathbf{\gamma}, \mathbf{\beta} \in \mathbb{R}^D$$ to scale and shift the normalized activations:

$$\mathbf{\gamma} \odot \frac{ \mathbf{a} - \mathbf{\mu}}{\sigma} + \mathbf{\beta}$$

where $$\odot$$ denotes elementwise multiplication.

### Root Mean Square Layer Normalization

[Zhang and Sennrich NeurIPS 2019](https://arxiv.org/abs/1910.07467) introduced Root Mean Square (RMS) layer normalization.
Rather than centering, RMS Layer Norm normalizes the activations by their root mean square. Let $$\mathbf{a} \in \mathbb{R}^D$$
be a vector of activations. RMS Layer Norm first calculates the root mean square:

$$RMS(\mathbf{a}) = \sqrt{\frac{1}{D} \sum_d \mathbf{a}_d^2} $$

RMS Layer Norm then normalizes the activations:

$$\frac{\mathbf{a}}{RMS(\mathbf{a})} $$

One can optionally introduce learnable parameters $$\mathbf{\gamma} \in \mathbb{R}^D$$ to scale the normalized activations:

$$\mathbf{\gamma} \odot \frac{\mathbf{a}}{RMS(\mathbf{a})} $$

This forces the vectors to lie on a $$\sqrt{D}$$-scaled hypersphere.

### Batch Normalization


### Instance Normalization

