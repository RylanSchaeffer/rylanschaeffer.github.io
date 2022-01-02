---
layout: post
author: Mattar, Daw (Nature Neuroscience 2018)
title: Prioritized memory access explains planning and hippocampal replay
date: 2022-01-02
tags: reinforcement-learning 
---

## Motivation

We start by considering an agent some environment. At a particular point in time $$t$$, our agent would 
like to choose which of its experiences $$\{e_0, e_1, ..., e_{t-1} \}$$ to replay, where each experience
$$e_k$$ consists of a single step tuple of state, action, reward, next state i.e.,
$$ e_k := (s_k, a_k, r_{k+1}, s_{k+1})$$. Each replayed experience, also known as a backup, might change the
agent's policy and correspondingly, its future return. How should the agent choose which experience to replay
first?

