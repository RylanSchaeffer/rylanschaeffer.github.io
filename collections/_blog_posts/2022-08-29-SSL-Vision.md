---
layout: post
title: Self-Supervised Learning for Vision Cheatsheet
author: Rylan Schaeffer
date: 2022-08-29
tags: machine-learning self-supervised-learning vision
---

| Method | Latent Dim | Batch Size    | Optimizer | Learning Rate | Weight Decay | Scheduler                   | Epochs | 
|--------|------------|---------------|-----------|---------------|--------------|-----------------------------|--------|
| SimCLR | 128        | 4096        | LARS      | 4.8           | 10^-6        | Linear Warmup, Cosine Decay | 100    |




## MoCo 

## SimCLR (ICML 2020)
### Chen, Kornblith, Norouzi, Hinton

![](2022-08-29-SSL-Vision/simclr.png)

- 3 data augmentations, applied sequentially: random cropping, random color distortions, random Gaussian blur
- Base encoder $$f(\cdot)$$
- Projection head $$g(\cdot)$$; specifically use a 1-hidden-layer MLP
- Normalized temperature-scaled Cross Entropy (NT-Xent) loss:

$$l_{i, j} = -\log \frac{\exp (sim(z_i, z_j) / \tau)}{\sum_k^{2N} \mathbb{1} \exp (sim(z_i, z_k) / \tau)} $$

- Uses only augmented data in the batch
- No projection significantly hurts performance; why?

![](2022-08-29-SSL-Vision/simclr_no_projection.png)

- Paper claims that using $$h_i$$ rather than $$z_i$$ is better, but I don't see in what sense, or where the evidence is?
- NY-Xent loss outperforms logistic loss and margin loss