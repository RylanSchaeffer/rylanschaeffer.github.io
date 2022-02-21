---
layout: post
title: Finetuned Language Models are Zero-Shot Learners
author: Rylan Schaeffer
date: 2022-01-20
tags: natural-language-processing deep-learning language-models
---


Jason Wei presented his 2021 ICLR paper [Finetuned Language Models Are Zero-Shot Learners](https://arxiv.org/abs/2109.01652)
at the Stanford NLP journal club:

![img_1.png](2022-01-20-google-brain-flan/img_1.png)

The idea is simple: finetune a language model on a collection of NLP tasks, described using natural
language. The result is that the model performs tasks it hasn't seen before via instructions.

![img_2.png](2022-01-20-google-brain-flan/img_2.png)

The proof

![img_3.png](2022-01-20-google-brain-flan/img_3.png)

## Background

![img_4.png](2022-01-20-google-brain-flan/img_4.png)

"Instruction tuning" .

![img_5.png](2022-01-20-google-brain-flan/img_5.png)

## Motivation



## Training

62 NLP datasets, with 12 task clusters

![img_6.png](2022-01-20-google-brain-flan/img_6.png)

Generate natural language instruction templates for each task

![img_7.png](2022-01-20-google-brain-flan/img_7.png)

137B parameter pretrained checkpoint. Instruction tune all parameters for 30 k steps on 62 datasets,
spanning 12 task clusters.

## Results

![img_8.png](2022-01-20-google-brain-flan/img_8.png)

More effective on tasks where verbalizing instructions is easy

![img_9.png](2022-01-20-google-brain-flan/img_9.png)

Performs better from prompt tuning

![img_14.png](2022-01-20-google-brain-flan/img_14.png)

## Scaling Laws

![img_11.png](2022-01-20-google-brain-flan/img_11.png)


## Ablation

Clusters don't have same number of datasets and different datasets have different sizes


![img_10.png](2022-01-20-google-brain-flan/img_10.png)

10 templates per dataset, trying different ways of rephrasing the same goal. Additional
templates has little effect

![img_12.png](2022-01-20-google-brain-flan/img_12.png)

Natural language instructions critical to zero-shot learning

![img_13.png](2022-01-20-google-brain-flan/img_13.png)



Contact: jasonwei@google.com