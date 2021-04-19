---
layout: post
author: Liu, Tsai, Lee (KDD 2014)
title: Online Chinese Restaurant Process
date: 2021-04-19
tags: dirichlet-process clustering bayesian-nonparametrics mixture-models chinese-restaurant-process online streaming
---

## Summary

Liu et al. propose an online inference algorithm for the Chinese Restaurant
Process. This is really two separate ideas, rolled into one. The first idea, which
makes inference tractable, is to sample from each clustomer's table posterior.
The second idea, is to allow for retroactive corrections if supervised cluster labels
are provided. The idea is to track, for each table, both the number of customers that were originally
assigned to the table but later moved elsewhere, and the number of customers that were originally
assigned elsewhere and later moved to the table. Together, these two counts (for each table)
allow for estimating the mismatch between the model and the true class labels and correcting
for future data.