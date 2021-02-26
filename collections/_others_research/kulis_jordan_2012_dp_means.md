---
layout: post
author: Kulis and Jordan (ICML 2012)
title: Revisiting k-means: New Algorithms via Bayesian Nonparametrics
date: 2021-02-07
tags: dirichlet-process k-means clustering bayesian-nonparametrics
---

One limitation of k-means clustering is that the number
of clusters must be specified in advance. Here, Kulis and Jordan show that 
a low-variance asymptotic analysis of a [Dirichlet process](content/learning/dirichlet_process.md)
Gaussian Mixture Model (DP-GMM) yields a k-means-like clustering
algorithm that doesn't require specifying the number of clusters in advance.

## K-Means Clustering for Gaussian Mixture Model

Finite GMM for observations $$o$$, mixing proportions $$\{\pi_c \}_{c=1}^C$$ and cluster 
Gaussian parameters $$\{\mu_c, \Sigma_c\}$$: 

$$p(x) = \sum_{c=1}^C \pi_c \mathcal{N}(x; \mu_c, \Sigma_c)$$

Objective function: 

$$min \sum_{x \in } $$

[Expectation Maximization](../../content/learning/probabilistic_graphical_models/expectation_maximization.md)
for GMM:

p()