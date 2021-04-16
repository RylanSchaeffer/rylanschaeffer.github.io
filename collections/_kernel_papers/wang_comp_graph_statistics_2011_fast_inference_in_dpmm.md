---
layout: post
author: Wang and Dunson (Journal of Computational and Graphical Statistics 2011)
title: Fast Bayesian Inference in Dirichlet Process Mixture Models
date: 2021-03-21
tags: mixture-models dirichlet-process bayesian-nonparametrics clustering
---

## Background

- How to perform online/streaming inference in Dirichlet process mixture model?

## Conceptual Notes

- Problem: Enumerating & updating all possible partitions (hypothesized clusters)
  requires superexponential time and space
- Idea: if each observation is assigned to one cluster, then the previous customers'
table assignments are known exactly
  - For each observation  $$x_n$$, set cluster assignment to the MAP value
    $$\hat{z}_n = \argmax_{k} p(z_n = k | \hat{z}_{1:n}, x_{1:n})$$
  - Then, using that cluster assignment, update the cluster's parameter(s)
- Algorithm is called Sequential Updating and Greedy Search (SUGS). Gershman calls it the 
"local MAP" approximation, which I feel is better
    
- Challenge: This sequential process means the latent variables are no longer exchangeable
    - Answer: Repeat the sequential process multiple times, changing the sequential ordering of the data,
      and average over the permutations
