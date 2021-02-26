---
layout: post
author: Kulis and Jordan (ICML 2012)
title: Revisiting k-means: New Algorithms via Bayesian Nonparametrics
date: 2021-02-25
tags: dirichlet-process k-means clustering bayesian-nonparametrics
---

One limitation of k-means clustering is that the number
of clusters must be specified in advance. Here, Kulis and Jordan show that 
a low-variance asymptotic analysis of a [Dirichlet process](content/learning/dirichlet_process.md)
Gaussian Mixture Model (DP-GMM) yields a k-means-like clustering
algorithm that adds new clusters when justified by the data. 

## Review of K-Means

We quickly review k-means clustering and how it can be derived as an asymptotic low-variance
algorithm of expectation maximization applied to a Gaussian mixture model.
For a finite GMM with $$N$$ observations $$\{x_n\}$$,
we want to infer cluster assignments $$\{z_n\}$$ and each cluster's Gaussian parameters 
Gaussian parameters $$\{\mu_c, \Sigma_c\}$$. Let $$\pi_c$$ denote the mixing proportion of 
the $$c$$th class. The marginal distribution of an observation is:

$$p(x_n) = \sum_{c=1}^C p(x_n | z_n = c)= \sum_{c=1}^C \mathcal{N}(x_n; \mu_c, \Sigma_c) \pi_c$$

The cluster assignments and cluster parameters can be learnt using [Expectation Maximization](../../content/learning/probabilistic_graphical_models/expectation_maximization.md).
Assuming the clusters each have equal covariance $$\sigma I$$, the E step takes the following form:

$$
\begin{align*}
p(z_n = c | x_n) = \frac{p(x_n | z_n = c) p(z_n = c)}{p(x_n)}\\
&= \frac{\exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}{\sum_c \exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}
\end{align*}$$

As $$\sigma \rightarrow 0$$, all mass is placed on the nearest centroid, just as we do in
k-means clustering. The M step updates the centroid (means) to the average of the points
assigned to a particular cluster:

$$\mu_c = \frac{1}{|X_c|} \sum_{x_n \in X_c} x_n $$

where $$X_c = \{x_n : p(z_n = c | x_n) = 1 \}$$.


objective function:

$$min \sum_{x \in } $$
