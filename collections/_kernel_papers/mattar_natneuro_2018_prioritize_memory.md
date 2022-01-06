---
layout: post
author: Mattar and Daw (Nature Neuroscience 2018)
title: Prioritized memory access explains planning and hippocampal replay
date: 2022-01-01
tags: reinforcement-learning replay memory hippocampus
---

## Motivation

We start by considering an agent some environment. At a particular point in time $$t$$, our agent would
like to choose which of its experiences $$\{e_0, e_1, ..., e_{t-1}\}$$ to replay, where each experience
$$e_k$$ consists of a single step tuple of state, action, reward, next state i.e.:

$$e_k := (s_k, a_k, r_{k+1}, s_{k+1})$$

Each replayed experience, also known as a backup, might change the
agent's policy and correspondingly, its future return. How should the agent choose which experience to replay
first?

## Idea

### Objective Function

Suppose the agent at time $$t$$ is in state $$S_t = s_t$$, and it chooses to replay some experience $$e_k$$.
Here, replay means perform a Bellman backup:

$$Q(s_k, a_k) \leftarrow Q(s_k, a_k) + \eta \Big(r_{k+1} + \gamma \arg \max_a Q (s_{k+1}, a) - Q(s_k, a_k) )$$

with learning rate $$\eta$$.

Before replaying that experience, the agent has some value function for its current state:

$$V^{\pi_{old}}(S = s_t) := \mathbb{E}_{\pi_{old}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

After replaying that experience, the agent has a new (although possibly identical) value function
for its current state:

$$V^{\pi_{new, k}}(S = s_t) := \mathbb{E}_{\pi_{new, k}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

Mattar and Daw propose that the agent should choose to replay the experience that maximizes the
the increase from the old value function to the new value function i.e. how much **more** value the
agent will accrue moving forward.

$$\arg \max_{e_k} V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$

They term this improvement, this difference, the __Expected Value of Backup (EVB)__:

$$EVB(s_t, e_k) := V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$

### Decomposition of Objective Function

Mattar and Daw show that the expected value of a backup can be decomposed into two terms,
which they term __need__ and __gain__. Need refers to how likely the agent is to find itself in the $$k$$th state
in the future, and gain refers to how much more value the agent will earn after replaying the $$k$$th
experience. The intuition is that the agent wants to learn about states that it is likely to occupy in the future,
and it also wants to prioritize experiences that promise higher future rewards, but sometimes the two goals
clash e.g. if an experience promises high future value (high gain), but the agent will never be in that state
(zero need), then replaying that experience is unhelpful.


\begin{align*}
& EVB(s_t, e_k)\\
&:= V^{\pi_{new, k}}(s_t) -  V^{\pi_{old}}(s_t)\\
&= \sum_a \pi_{new}(a | s_t) \Big( Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}} (s_t, a) \Big)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \sum_a \pi_{old}(a|s_t) \Big( Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}}(s_t, a) \Big)
\end{align*}

where the third equality is reached by adding and subtracting $\pi_{old}(a|s_t) Q^{\pi_{new, k}} (s_t, a)$ inside the sum. We can simplify the difference between the new and old Q-values, using the property that $Q^{\pi}(s_t, a) = \sum_{s_{t+1}, a_{t+1}} p(s_{t+1}, a_{t+1}) (r_{t+1} + \gamma V^{\pi}(s_{t+1})$:

\begin{align*}
& Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}}(s_t, a)\\
&= \sum_{s_{t+1}, r_{t+1}} p(s_{t+1}, r_{t+1}|s_t, a) \Big(r_{t+1} + \gamma V^{\pi_{new, k}}(s_{t+1}) - r_{t+1} - \gamma V^{\pi_{old}}(s_{t+1}) \Big)\\
&= \gamma \sum_{s_{t+1}, r_{t+1}} p(s_{t+1}, r_{t+1}|s_t, a) \Big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big)\\
&= \gamma \sum_{s_{t+1}} p(s_{t+1}|s_t, a) \Big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big)\\
\end{align*}

The immediate reward doesn't matter in this difference we're considering that the agent has already committed to taking action $a$, so whether $a$ was sampled from the new or old policy is irrelevant. Plugging this result back in to our first equation, we discover a recursion:

\begin{align*}
& EVB(s_t, e_k)\\
&:= V^{\pi_{new, k}}(s_t) -  V^{\pi_{old}}(s_t)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \sum_a \pi_{old}(a|s_t) \Big( \gamma \sum_{s_{t+1}} p(s_{t+1}|s_t, a) \big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \big) \Big)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \gamma \, \mathbb{E}_{\substack{a_t \sim \pi_{old}(a|s_t)\\s_{t+1} \sim p(s_{t+1}|s_t, a_t)}} \Big[ V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big]\\
\end{align*}

Expanding out the recursive form, and using $T := p(S_{t+1} = s_{t_1} | S_t = s_t, A_t = a_t)$ to denote the MDP's state transition function, we obtain:
%
\begin{align*}
& EVB(s_t, e_k)\\
&=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \, \mathbb{E}_{\substack{a_t, ..., a_{t\prime-1} \sim \pi_{old}\\s_{t+1}, ..., s_{t\prime}|s_t \sim T}} \Big[ \sum_{a_{t\prime}} \big( \pi_{new, k}(a_{t\prime} | s_{t\prime}) - \pi_{old}(a_{t\prime}|s_{t\prime}) \big)  Q^{\pi_{new, k}}(s_{t\prime}, a_{t\prime}) \Big]
\end{align*}

We'll define the term inside the expectation the gain. It expresses the average additional value the agent will be able to obtain under its new policy compared against its previous policy:

$$Gain(s_{t\prime}) :=  \sum_{a_{t\prime}} \big( \pi_{new, k}(a_{t\prime} | s_{t\prime}) - \pi_{old}(a_{t\prime}|s_{t\prime})  \big) Q^{\pi_{new, k}}(s_{t\prime}, a_{t\prime}) $$

This expression exactly matches Mattar and Daw's expression (Eqn. 5), but they write the gain as $Gain(s_{t\prime}, a_{t\prime})$ even though the function does not depend on $a_{t\prime}$ whatsoever; I don't know why. Continuing on, since the term inside the expectation depends only on $s_{t\prime}$, the expectation can be simplified:
%
\begin{align*}
\mathbb{E}_{\substack{a_t, ..., a_{t\prime-1} \sim \pi_{old}\\s_{t+1}, ..., s_{t\prime} |s_t \sim T}} \Big[Gain(s_{t\prime}) \Big]
&= \sum_{\substack{a_t, ..., a_{t\prime-1}\\s_{t+1}, ..., s_{t\prime}}} p(a_t, ...., a_{t\prime-1}, s_{t+1}, ..., s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
&= \sum_{s_{t\prime} \in \mathcal{S}} p(s_{t\prime} | s_t) \, Gain(s_{t\prime})\\
&= \mathbb{E}_{p(s_{t\prime}|s_t)} \Big[ Gain(s_{t\prime}) \Big]
\end{align*}

This expression tells us that the agent needs to weigh the gain at state $s_{t\prime}$ by how likely the agent is to end up in state $s_{t\prime}$ at time $t\prime$, given that the agent is currently in state $s_t$ at time $t$. Plugging back in and rearranging, we have
%
\begin{align*}
EVB(s_t, e_k) &=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \sum_{s\prime \in \mathcal{S}} p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
&=\sum_{t\prime = t}^{\infty} \sum_{s_{t\prime} \in \mathcal{S}} \gamma^{t\prime - t}  p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
\end{align*}

If we assume that the agent's policy in one state has no effect on the agent's policy in other state, then when considering the $k$th experience $e_k := (s_k, a_k, r_{k+1}, s_{k+1})$, the gain in every state $s_{t\prime} \neq s_k$ is also 0 because $\pi_{new, k}(a_{t\prime} | s_{t\prime}) = \pi_{old}(a_{t\prime}|s_{t\prime})$. Under this assumption, the expected value of backing up the $k$th experience becomes:
%
\begin{align*}
EVB(s_t, e_k) &=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \delta(s_{t\prime}, s_k)  p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
\end{align*}

where $\delta(\cdot, \cdot)$ is a Kronecker delta i.e. 1 if its argument are equal, 0 otherwise.
We define this infinite future discount sum of state occupancy probabilities as the need:

\begin{align*}
Need(s_k) &:= \sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \delta(s_{t\prime}, s_k)  p(s_{t\prime}|s_t)
\end{align*}

