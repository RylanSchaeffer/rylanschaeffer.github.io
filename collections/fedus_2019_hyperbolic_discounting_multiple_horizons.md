---
layout: post
author: Fedus, Gelada, Bengio, Bellemare and Larochelle (Arxiv)
title: Hyperbolic Discounting and Learning over Multiple Horizons
date: 2021-03-03
tags: reinforcement-learning discounting hazard-rate survival-function
---

## Motivation

Geometric discounting is ubiquitous in reinforcement learning e.g. Q-learning:

$$ Q(s_t, a_t) = r_t + \gamma \max_a Q(s_{t+1}, a)$$

This work discusses how 

## Correct Credit

This work was [rejected from ICLR](https://openreview.net/forum?id=rkezdaEtvH);
one reviewer criticized the work for adding little beyond preceding work, specifically
Zeb Kurth-Nelson and A David Redish's "Temporal-difference reinforcement learning with
distributed representations" (2009) and Peter D Sozou's 
"On hyperbolic discounting and uncertain hazard rates" (1998). I don't have time to review
who contributed what, but know that these authors may not deserve credit for the following
ideas.

## Geometric Discounting from Constant Hazard Rate

We first need two functions: the survival function, $$s(t)$$, which gives the probability
the agent is alive at time $$t$$, and the hazard rate

$$h(t) = - \partial_t \log s(t) = -\frac{1}{s(t)} \partial_t s(t)$$

The authors reason that one should discount a future reward by the probability of being alive
to obtain it:

$$V(r_t) = s(t) r_t $$

The authors then show that geometric discounting arises under a constant
hazard rate. Specifically, suppose $$h(t) = \lambda > 0$$ is constant. Then, solving for $$s(t)$$

$$
\begin{align}
\lambda &= - \partial_t \log s(t)\\
-\int_0^T \lambda dt &= \log s(t)\\
s(t) &= e^{-\lambda t}\\
&= (e^{-\lambda})^t\\
&= \gamma^t
\end{align}
$$

where $$\gamma := e^{-\lambda} = e^{-h(t)}$$. The intuition is that $$\gamma$$ is the per-time-step
probability of the episode continuing. For instance, suppose the hazard rate $$h(t) \rightarrow \infty$$
i.e. the probability of surviving is basically 0; then, $$\gamma \rightarrow 0$$, a very myopic view
which makes sense given one's expectation they won't survive.

## Alternative Discounting from Non-Constant Hazard Rate

If a constant hazard rate gives rise to geometric discounting, what discounting does a non-constant
hazard rate give rise to? Suppose we have a prior $$p(\lambda)$$ on the hazard rate i.e.

$$s(t) = \int_{\lambda=0}^{\infty} p(\lambda) e^{-\lambda t} d\lambda$$

If $$p(\lambda)$$ is exponential with rate $$1/k$$, then the survival function is hyperbolic, meaning
rewards should be discounted hyperbolically.

$$
\begin{align}
s(t) &= \int_{\lambda=0}^{\infty} p(\lambda) e^{-\lambda t} d\lambda\\
&= \int_{\lambda=0}^{\infty} \frac{1}{k} e^{-\lambda/k} e^{-\lambda t} d\lambda\\
&= \frac{1}{k} \frac{-1}{1/k + t} e^{\lambda (1/k + t)} \Big\lvert_{\lambda=0}^{\infty}\\
&= -\frac{1}{1 + kt} [0 - 1]\\
&= \frac{1}{1 + kt}
\end{align}
$$

Other priors over the hazard rate give different discounting schemes.