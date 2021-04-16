---
layout: post
author: Broderick, Boyd, Wibisono, Wilson (NeurIPS 2013)
title: Streaming Variational Bayes
date: 2021-04-16
tags: variational-bayes bayesian-nonparametrics streaming online
---

## Research Questions

- Suppose we receive data in an online/streaming setting, possibly with distributed
  computation. How to perform variational inference?
  

## Conceptual Notes

- Bayes Rule gives us a recursive update. Specifically, for sequences of collections of 
data $$C_1, C_2, ..., C_b$$, we have

    $$p(\theta|C_1, C_2, ..., C_b) \propto p(C_b| \theta, C_{b-1}, ... C_1) p(C_2|\theta, C_1) p(C_1|\theta) p(C_1)$$
  
- The authors posit a variational recursive update

    $$p(\theta|C_1, ..., C_b) \approx q_b(\theta) = A(C_b, q_{b-1}(\theta)) $$
  
- Can add parallelism in updates

- Assuming exponential families:
    - If we assume that the prior and approximate posteriors are in the exponential family
    - $$p(\theta) \propto exp(\zeta_0  T(\theta))$$
    - $$q_b(\theta) \propto exp(\zeta_b T(\theta))$$
    - Then the approximate posterior is given by
    
    $$p(\theta|C_1, ..., C_B) \approx exp \Big( (\zeta_0 + \sum_{b'=1}^b (\zeta_{b'} - \zeta_0)) T(\theta) \Big) $$
    
    - This is an unusual assumption. Usually the variational prior and variational posterior are chosen to be
    from the exponential family. Here, the true prior and variational posteriors are chosen to be 
      from the same exponential family
