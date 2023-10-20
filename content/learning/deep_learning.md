# Deep Learning

## Normalization

### Layer Normalization

[Ba, Kiro and Hinton 2016](https://arxiv.org/abs/1607.06450) introduced Layer Normalization. Let $$\mathbf{a} \in \mathbb{R}^D$$ 
be a $$D$$-dimensional vector of activations. Layer normalization first computes the mean and standard deviation across 
the $$D$$ dimensions:

$$\mathbf{\mu} = \frac{1}{D} \sum_{d=1}^D a_d$$

$$\sigma = \sqrt{\frac{1}{D} \sum_{d=1}^D (a_d - \mu)^2 + \epsilon}$$

where $\epsilon$ is a small constant to avoid division by zero. Then, Layer normalization normalizes the activations:

$$ \frac{ \mathbf{a} - \mathbf{\mu}}{\sigma} $$

One can optionally introduce learnable parameters $\mathbf{\gamma}$ and $\mathbf{\beta}$ to scale and shift the normalized activations:

$$\mathbf{\gamma} \odot \frac{ \mathbf{a} - \mathbf{\mu}}{\sigma} + \mathbf{\beta}$$


### Root Mean Square Layer Normalization

[Zhang and Sennrich NeurIPS 2019](https://arxiv.org/abs/1910.07467) introduced Root Mean Square (RMS) layer normalization.
Rather 

### Batch Normalization


### Instance Normalization

