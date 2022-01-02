---
layout: post
author: Mattar, Daw (Nature Neuroscience Year)
title: Prioritized memory access explains planning and hippocampal replay
date: 2022-01-02
tags: reinforcement-learning hippocampus memory replay
---

## Motivation

We start by considering an agent some environment. At a particular point in time $$t$$, our agent would 
like to choose which of its experiences $$\{e_0, e_1, ..., e_{t-1}\}$$ to replay, where each experience
$$e_k$$ consists of a single step tuple of state, action, reward, next state i.e.,
$$ e_k := (s_k, a_k, r_{k+1}, s_{k+1})$$. Each replayed experience, also known as a backup, might change the
agent's policy and correspondingly, its future return. How should the agent choose which experience to replay
first?

## Derivation

Suppose the agent at time $$t$$ is in state $$S = s_t$$, and it chooses to replay $$e_k$$. Here, replay
means perform a Bellman backup:

$$Q(S = s_k, A = a_k) \leftarrow Q(S = s_k, A = a_k) + \alpha \Big(r_{k+1} + \gamma \arg \max_a Q (S = s_{k+1}, A = a) - Q(S = s_k, A = a_k) )$$

Before replaying that experience, the agent has some value function for its current state:

$$V(S = s_t) := \mathbb{E}_{\pi^{old}}[\sum_i \gamma^i R_{i+1}] $$


### Setup 1

