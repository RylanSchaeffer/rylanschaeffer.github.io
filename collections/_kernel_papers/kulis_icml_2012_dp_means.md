---
layout: post
author: Kulis and Jordan (ICML 2012)
title: Revisiting k-means - New Algorithms via Bayesian Nonparametrics
date: 2021-02-25
tags: dirichlet-process k-means clustering bayesian-nonparametrics mixture-models
---

## Motivation

One limitation of k-means clustering is that the number
of clusters must be specified in advance. Here, Kulis and Jordan show that 
a low-variance asymptotic analysis of a [Dirichlet process](content/learning/dirichlet_process.md)
Gaussian Mixture Model (DP-GMM) yields a k-means-like clustering
algorithm that adds new clusters when justified by the data. 

## K-Means as Low-Variance Approximation of Expectation Maximization in Gaussian Mixture Model 

We quickly review k-means clustering and how it can be derived from a low variance asymptotic
approximation of expectation maximization applied to a Gaussian mixture model.
For a finite GMM with $$N$$ observations $$\{x_n\}$$,
we want to infer cluster assignments $$\{z_n\}$$ and each cluster's Gaussian parameters 
Gaussian parameters $$\{\mu_c, \Sigma_c\}$$. Let $$\pi_c$$ denote the mixing proportion of 
the $$c$$th class. The marginal distribution of an observation is:

$$p(x_n) = \sum_{c=1}^C p(x_n | z_n = c) p(z_n = c) = \sum_{c=1}^C \mathcal{N}(x_n; \mu_c, \Sigma_c) \pi_c$$

The cluster assignments and cluster parameters can be learnt using [Expectation Maximization](../../content/learning/probabilistic_graphical_models/learning/expectation_maximization.md).
Assuming the clusters each have equal covariance $$\sigma I$$, the E step takes the following form:

$$
\begin{align*}
p(z_n = c | x_n) &= \frac{p(x_n | z_n = c) p(z_n = c)}{p(x_n)}\\
&= \frac{\exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}{\sum_c \exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}
\end{align*}$$

As $$\sigma \rightarrow 0$$, all mass is placed on the nearest centroid, just as we do in
k-means clustering. The M step then updates the centroids (cluster means) to the average of the points
assigned to that particular cluster:

$$\mu_c = \frac{1}{|X_c|} \sum_{x_n \in X_c} x_n $$

where $$X_c = \{ x_n \colon p(z_n = c \lvert x_n) = 1 \}$$ is the set of observations assigned to the $$c$$th cluster.

We can phrase this as an optimization problem with the objective function:

$$\min_{\{\mu_c\}, \{z_n\}} \sum_{n=1}^N \mathbb{I}(z_n = c) ||x_n - \mu_c||_2^2$$ 

where the cluster centroids are defined above.

## Low-Variance Approximation of Dirichlet Process Gaussian Mixture Model

In a DP-GMM, we now have an infinite number of clusters, enabled through the Dirichlet Process.
Specifically, we draw an infinite number of cluster centroids $$\{\mu_c \}_{c=1}^{\infty}$$
from a base distribution $$G_0$$ and draw mixing proportions $$\{\pi_c\}_{c=1}^{\infty}$$
from $$DP(\alpha, G_0)$$. Then, for each observation, we posit that we draw 

$$
\begin{align*}
\mu_1, \mu_2, ... &\sim G_0

\end{align*}
$$