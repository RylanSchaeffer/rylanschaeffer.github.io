---
layout: post
author: Mattar, Daw (Nature Neuroscience 2018)
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

## Idea

### Objective Function

Suppose the agent at time $$t$$ is in state $$S = s_t$$, and it chooses to replay some experience $$e_k$$. 
Here, replay means perform a Bellman backup:

$$Q(S = s_k, A = a_k) \leftarrow Q(S = s_k, A = a_k) + \alpha \Big(r_{k+1} + \gamma \arg \max_a Q (S = s_{k+1}, A = a) - Q(S = s_k, A = a_k) )$$

Before replaying that experience, the agent has some value function for its current state:

$$V^{\pi_{old}}(S = s_t) := \mathbb{E}_{\pi_{old}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

After replaying that experience, the agent has a new (although possibly identical) value function
for its current state:

$$V^{\pi_{new, k}}(S = s_t) := \mathbb{E}_{\pi_{new, k}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

Mattar and Daw propose that the agent should choose to replay the experience that maximizes the 
the increase from the old value function to the new value function i.e. how much **more** value the
agent will accrue moving forward.

$$\arg \max_{e_k} V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$

They term this improvement, this difference $$V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$, 
the __Expected Value of Backup (EVB)__.

### Decomposition of Objective Function

Mattar and Daw show that the expected value of a backup can be decomposed into two terms,
which they term __need__ and __gain__. Need refers to how likely the agent is to find itself in the $$k$$th state
in the future, and gain refers to how much more value the agent will earn after replaying the $$k$$th
experience. The intuition is that the agent wants to learn about states that it is likely to occupy in the future,
and it also wants to prioritize experiences that promise higher future rewards, but sometimes the two goals
clash e.g. if an experience promises high future value (high gain), but the agent will never be in that state
(zero need), then replaying that experience is unhelpful. 

$$
\begin{align*}
\end{align*}
$$

### Setup 1

