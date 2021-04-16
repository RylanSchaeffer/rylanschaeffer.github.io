---
layout: post
author: Nott, Zhang, Yau and Jasra (Journal of Computational and Graphical Statistics 2014)
title: A sequential algorithm for fast fitting of Dirichlet process mixture models
date: 2021-04-15
tags: mixture-models dirichlet-process bayesian-nonparametrics clustering
---

## Background

Previously, [Wang and Dunson (2011)](wang_comp_graph_statistics_2011_fast_inference_in_dpmm.md) proposed
a fast inference algorithm for Dirichlet process mixture models that could be applied in an online setting,
fancifully called Sequential Updating and Greedy Search (SUGS). The authors actually didn't intend 
for their algorithm to function online, recommending that to remove the dependency on observation order,
one should average over random orderings of the observations. The way SUGS made inference easy was
by taking the MAP of the latent cluster's posterior, deterministically placing the observation at a single
cluster.

## Research Questions

- Can we design a similarly fast online inference algorithm for DP mixture models that doesn't require
  collapsing the latent variable posterior at each time step?

## Conceptual Notes

- Goal: We'd like a posterior over cluster assignments $$z_{1:t}$$ and cluster parameters $$\theta_{1:t}$$
  given observations $$x_{1:t}$$
- Idea:
    - Suppose at time $$t$$, we have an approximate posterior for the previous time step
      $$p(z_{1:t-1}, \theta_{1:t-1}|x_{1:t-1}) \approx \prod_{t' < t} q_{t-1}(z_{t'}) \prod_{t'<t} q_{t-1}(\theta_{t'})$$
    - In English, that means we assume we have a fully factorized variational approximation of the joint 
      posterior from the previous time step
    - We can then update the previous time step's variational posterior by assuming the current step
      will have a similar form: $$ \prod_{t' \leq t} q_{t}(z_{t'}) \prod_{t' \leq t} q_{t}(\theta_{t'})$$
    -
- Challenge: How will we initialize the current time step's variational distribution's $$\{q_t(z_t)\}$$  and $$\{q_t(\theta_t)\}$$?
    - Answer: Use the previous time step's variational distributions to initialize all terms
    - For the new terms, $$q_t(z_t)$$ and $$q_t(\theta_t)$$, first initialize $$q_t(z_t)$$ as

        $$q_t(z_t) = q_{ij} \int q_{t-1}(\theta_k) p(y_t|\theta_k) d\theta_k $$
    
    where 

        $$q_{ij} = \frac{1}{\alpha + t - 1} \begin{cases} \sum_{t'< t} q_{t-1}(z_{t'} = j) + \alpha T\\
        \alpha (1 - ((i-1) \carat T)/T) \end{cases}$$
        
    - then update parameters using Equation 11

- Challenge: How will we fit the $$q_t(z_t)$$?
    - Answer: __Unanswered__. Minimize the ELBO. This requires access to the entire sequence.
    
- Challenge: How will we store a full distribution $$q(z_t)$$ for all $$t$$?
    - Answer: __Unanswered__. I think the space complexity grows with the square of number of samples $$t$$ i.e. $$O(t^2)$$