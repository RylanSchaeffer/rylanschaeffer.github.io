---
layout: post
title: Self-Supervised Learning for Vision Cheatsheet
author: Rylan Schaeffer
date: 2022-08-29
tags: machine-learning self-supervised-learning vision
---

| Method | Latent Dim | Batch Size    | Optimizer | Learning Rate | Weight Decay | Scheduler                   | Epochs | 
|--------|------------|---------------|-----------|---------------|--------------|-----------------------------|--------|
| SimCLR | 128        | 4096        | LARS      | 4.8           | 1e-6         | Linear Warmup, Cosine Decay | 100    |
| TiCo   | 256        | 4096        | LARS      | 3.2           | 1.5e-6       | Linear Warmup, Cosine Decay | 1000   |


## CPC (Arxiv 2018)

## Deep InfoMax (DIM) (ICLR 2019)



## AMDIM (NeurIPS 2019)

## MoCo (CVPR 2020)

## SimCLR (ICML 2020)

![](2022-08-29-SSL-Vision/simclr.png)

- 3 data augmentations, applied sequentially: random cropping, random color distortions, random Gaussian blur
- Base encoder $$f(\cdot)$$
- Projection head $$g(\cdot)$$; specifically use a 1-hidden-layer MLP
- Normalized temperature-scaled Cross Entropy (NT-Xent) loss:

$$\ell_{i, j} = -\log \frac{\exp (sim(z_i, z_j) / \tau)}{\sum_k^{2N} \mathbb{1} \exp (sim(z_i, z_k) / \tau)} $$

- Uses only augmented data in the batch
- No projection significantly hurts performance; why?

![](2022-08-29-SSL-Vision/simclr_no_projection.png)

- Paper claims that using $$h_i$$ rather than $$z_i$$ is better, but I don't see in what sense, or where the evidence is?
- NY-Xent loss outperforms logistic loss and margin loss
- Another nice graphic from TiCo
 
![](2022-08-29-SSL-Vision/simclr_in_tico.png)

## SwAV (NeurIPS 2020)

## BYOL (NeurIPS 2020)

## SimSiam (CVPR 2021)

- No negative sample pairs, no large batches, no momentum encoders

## TiCo (Rejected at NeurIPS 2021)

![](2022-08-29-SSL-Vision/tico.png)

- Loss has 2 terms: transformation invariance and covariance contrast

$$\ell = -\frac{1}{N} \sum_n ||z_n^' z_n^{''}||_2^2 + \frac{\rho}{N} \sum_{n} (z_n^')^T C_t z_n^' $$

where $$C_t$$ is the second moment matrix of the representations.

Equivalently:

$$ \ell = -\frac{1}{N} \sum_n z_n^{'} \cdot z_n^{''} + \frac{\rho}{N^2} \sum_{ij} (z_i^{'} \cdot z_j^{''})^2 $$

- TiCo is both a contrastive and redundancy reduction method
- The covariance contrast loss incentivizes (transformations of) different data to be orthogonal
- The covariance contrast loss can also be viewed as regularizing the Frobenius (matrix norm) of $$\frac{1}{N} Z_{F}^T Z_F$$
  where $$Z_F$$ is the $$N \times F$$ matrix of normalized features 

![](2022-08-29-SSL-Vision/tico_results.png)

## VICReg (ICLR 2022)

## Barlow Twins