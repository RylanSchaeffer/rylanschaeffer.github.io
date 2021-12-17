---
layout: post
author: Campbell, Shi, Rainforth, Doucet (NeurIPS 2021)
title: Online Variational Filtering and Parameter Learning
date: 2021-12-17
tags: streaming-inference online-inference variational-inference 
---


## Research Questions

This paper provides an algorithm to do online state estimation and parameter learning
in State Space Models (i.e. first-order Markov latent variable temporal data). The nifty
bit of this algorithm is that previously inferred quantities don't need to be 
retroactively revised.

## Background

Disclaimer: I change the notation slightly because I feel the authors' notation is too cumbersome.

A State Space Model (SSM) consists of a sequence of latent variables $$(x_t)_{t \geq 1}$$ and
a sequence of observable variables $$(y_t)_{t \geq}$$ such that the joint distribution factorizes as

$$p(x_{1:T}, y_{1:T}) = p(x_1) p(y_1|x_1) \prod_{t=2}^{t=T} p(x_t | x_{t-1}) p(y_t | x_t)$$

The so-called __smoothing distribution__ is given by: 

$$p(x_{1:T} | y_{1:T}) = p(x_1|y_{\leq T}) \prod_{t=2}^{t=T} p(x_t | x_{t-1}, y_{\leq T})$$

A typical variational approach is to define the variational family:

$$q(x_{1:T}|y_{1:T}) = \prod_{t=1}^{t=T} q(x_t | x_{t-1}, y_{\leq T})$$

However, this doesn't work in the online setting because at each time step i.e. as $$T$$ increases,
each term $$q(x_t | x_{t-1}, y_{\leq T})$$ must be retroactively revised. An alternative variational
family, which doesn't require revising, can be defined as:

$$q(x_{1:T}|y_{1:T}) = \prod_{t=1}^{t=T} q(x_t | x_{t-1}, y_{\leq t})$$

But then the distribution over $$x_t$$ fails to condition on all available information at time $$T$$.

## Algorithm




### Setup 1

