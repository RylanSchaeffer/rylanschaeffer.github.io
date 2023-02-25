---
layout: post
title: Language Models (Mostly) Know What They Know (Paper Notes)
author: Rylan Schaeffer
date: 2023-02-14
tags: machine-learning 2023
---



## Main Claims

- When prompted in the right format, large models accurately estimate the probability that a given answer is correct
  (sometimes called "well-calibrated")
- When prompted in the right format, large models can accurately estimate the probability that they'll be able to
  answer a question correctly (specifically without being given an answer to evaluate)

## Terminology

P(True) = the model's subjective belief that a given question and corresponding answer will be correct

P(IK) = the model's subjective belief that it will be able to answer a given question correctly

## Can models accurately estimate whether a given question and corresponding answer will be correct?

When prompted in a particular manner, and under 20-shot evaluation, LMs are decent at estimating P(True) (left).
The right plot shows that self-estimated accuracy improves with scale.

![](2023-02-25-LMs-Mostly-Know-What-They-Know/kadavath_2022_fig1.png)

Question: Is the left plot for a specific model scale? Or all model scales combined?

Question: On the right plot, why do different datasets have such differences in accuracy?


## Can models accurately estimate whether they'll be able to answer a given question correctly?

![](2023-02-25-LMs-Mostly-Know-What-They-Know/kadavath_2022_fig2.png)
