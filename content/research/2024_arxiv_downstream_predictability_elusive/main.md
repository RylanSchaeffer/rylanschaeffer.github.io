# Why Has Predicting Downstream Capabilities of Frontier AI Models with Scale Remained Elusive?

Authors: Rylan Schaeffer, Hailey Schoelkopf, Brando Miranda, Gabriel Mukobi, Varun Madan, Adam Ibrahim, Herbie Bradley, Stella Biderman, Sanmi Koyejo

Venue: Arxiv 2024.


## Quick Links

- [Paper](paper.pdf)

## Summary


❤️‍🔥❤️‍🔥Excited to share our new paper ❤️‍🔥❤️‍🔥

**Why Has Predicting Downstream Capabilities of Frontier AI Models with Scale Remained Elusive?**   w/ @haileysch__ @BrandoHablando @gabemukobi @varunrmadan @herbiebradley @ai_phd @BlancheMinerva @sanmikoyejo

https://arxiv.org/abs/2406.04391

![img.png](img.png)


1/N

Predictable behavior from scaling AI systems is extremely desirable. While scaling laws are well established, how particular downstream capabilities scale is significantly muddier
@sy_gadre @lschmidt3 @ZhengxiaoD @jietang

https://arxiv.org/abs/2403.08540

https://arxiv.org/abs/2403.15796

Why??

![img_2.png](img_2.png)

![img_1.png](img_1.png)

2/N

We identify a new factor for widely-used multiple choice QA benchmarks e.g. MMLU:

Downstream performance is computed from negative log likelihoods via a sequence of transformations that progressively deteriorate the statistical relationship between performance and scale


![img_3.png](img_3.png)

3/N

Specifically, for a single sample in a benchmark, to compute Accuracy, NLLs are transformed into probabilities, then renormalized based on the available choices, then thresholded

This sequence of transformations decorrelates performance from scale ☠️

![img_4.png](img_4.png)

4/N

To demonstrate this, we compute how correlated scores are with pretraining compute across a range of models and multiple-choice QA benchmarks

In log probability space, we find that scores are highly correlated with compute

![img_5.png](img_5.png)

5/N

But as we transform scores into probabilities, and then mask based on the **incorrect** choices, the correlation between
scores and pretraining compute drops and falls further for accuracy.

![img_6.png](img_6.png)

6/N

We demonstrate this quantiatively across 

![img_7.png](img_7.png)