---
layout: post
title: Experience Replay in Machines and Mammals 
author: Rylan Schaeffer
date: 2022-01-19
tags: experience-replay reinforcement-learning
---

# Experience Replay

Experience replay is a fascinating topic spanning machine learning, neuroscience and 
cognitive science. At the heart of replay are 3 questions, asking how an
agent should use its past experiences

1. to build a model of its world?
2. to most efficiently propagate reward information in that model?
3. to plan future actions using that model?

The machine learning literature has historically focused on the second question, but emerging
work in neuroscience and cognitive science suggests that these three questions
are intimately related. This story begins with the second question and continues to the
forefront of the third and first questions.

## Notation

In reinforcement learning (RL), one common mathematical framework is to consider an agent
in a Markov Decision Process (MDP). An experience is commonly defined as a 4-tuple
of an agent's state, the action it takes, the reward it receives and the next state
it ends up in:

$$e_k = (s_k, a_k, r_k, s_{k+1})$$

As an agent moves through its environment, it builds a collection of these experience
often called a __replay buffer__.

## Advances

### Experience Replay

The right place to start is with model-free value-based RL: Q learning. The original 
idea of Q-Learning was when an agent obtains a new experience i.e. is in some state, 
takes an action, receives a reward, and moves to the next state), it should use that experience
to immediately perform a Bellman backup:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \eta (r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t))$$

The experience is then discarded. [In 1992, Lin introduced the idea of experience replay](https://link.springer.com/content/pdf/10.1007/BF00992699.pdf).
The idea was that instead of discarding past experiences immediately, the agent should store those experiences
in its replay buffer and then uniformly sample from the buffer. This idea proved critical
in [Minh et al.'s 2015 DQN Nature paper](https://www.nature.com/articles/nature14236).

![img_5.png](img_5.png)

Many people remember the paper for showing that deep Q-Learning can surpass human performance at Atari games,
but the authors were clear that experience replay was critical: f"Notably, the successful integration of
reinforcement learning with deep network architectures was _critically dependent on our incorporation
of a replay algorithm involving the storage and representation of recently experienced transitions._"
On a subset of 5 games, removing replay eviscerated the agent's performance. 

![img_6.png](img_6.png)

The specific replay mechanism was a queue (FIFO) with a capacity of 1 million experiences. that 
sampled experiences uniformly at random, on average 8 times. Note that because Q-learning is model
free, these experiences were not used to learn a model of any environment.

### Prioritized Experience Replay

At [ICLR 2016, Schaul et al.](https://arxiv.org/pdf/1511.05952.pdf) proposed that
sampling experiences uniformly at random might be a suboptimal approach. They suggested that
the agent could instead prioritize certain experiences, using the heuristic of
how wrong the agent's predictions were. Specifically, Schaul et al. suggested that when 
sampling experiences, the agent should take into account its temporal-difference (TD)
errors $$\deta_t$$ (also known as reward prediction errors):

$$ \delta_t := R_t + \gamma \max_a Q(S_t, a) - Q(S_{t-1}, A_{t-1})$$

As a motivating example, the authors present the "Blind Cliffwalk" environment, in which
there is a sequence of $$n$$ states, each state has 2 actions and in order to reach the goal state,
the agent must choose the correct action in each state or else go back to the beginning. 
If the agent samples uniformly over its
experiences, it needs a massive number of samples and updates to learn to reliably reach the goal,
whereas an oracle (which greedily selects a transition that maximimally reduces the global 
loss) requires significantly fewer samples and updates.

![](../_blog_posts/img_4.png)

However, the agent can't just greedily select the experience with the highest TD error,
for at least 2 reasons:

1. The agent will overfit to experiences with high TD errors because states with low TD error will never be replayed
2. If rewards are stochastic, high TD errors will be monopolized by tails of the reward distributions

Instead of greedily selecting experiences to replay, Schaul and colleagues propose that experiences should
be sampled randomly. They propose two different ways to define the priority of the $$k$$th experience

1. Direct: $$p_k := \lvert \delta_k \lvert + \epsilon$$, where $$\epsilon > 0$$ is a small positive constant to
   ensure even experiences with no TD error have a chance at being replayed
2. Indirect: $$p_k := \frac{1}{rank(k)}$$

and then sample experiences proportional to the priority:

$$p(e_k) = \frac{p_k^{\alpha}}{\sum_{k'} p_{k'}^{\alpha}} $$

They then introduce one other change: they use importance sampling weights, defined as:

$$w_k := \Big( \frac{1}{N p(e_k)} \Big)^{\beta}$$

They found that both prioritization approaches yielded similar boosts in max and average
performance on the Atari suite of games

![](img_2.png)

They also found that learning was faster for the prioritized replay agents.

![](img.png)

As a disclaimer, the authors later write "Note that mean performance is not a very reliable metric
because a single game (Video Pinball) has a dominant contribution." If that's the case, I don't 
understand why max score is a more reliable metric, since surely the same problem exists there?

Looking at each game individually, they found that while the effect of the replay sampling
differed depending on the game, both replay mechanisms typically offered an improvement.

![img_1.png](img_1.png)

#### Prioritized Experience Replay: Questions and Details

Questions

- Why did they only try their sampling on Double DQN and not DQN? What impact does prioritize replay
  have on DQN?
- The paper claims that the importance sampling (IS) weights are useful and offers a handwavy explanation
  for why. Are there any ablations testing the effects of not using the IS weights?
  - Fig 12 in the appendix contains such ablation tests, but only for 4 environments and 
    only for rank-based sampling. Honestly, this evidence seems to suggest not only that IS is not critical
    but that uniform is indistinguishable from rank-based no IS and from rank-based IS.

![img_3.png](img_3.png)

### Normative Prioritized Experience Replay

In [2018, Mattar and Daw](https://www.nature.com/articles/s41593-018-0232-z) presented a beautiful
and simple idea. Rather than proposing a heuristic for prioritizing experience, they asked: could the
problem of choosing experiences be written as an optimization problem? The answer
was yes! For a deeper dive, read my [blog post](../_kernel_papers/mattar_natneuro_2018_prioritize_memory.html),
but I've included a high level summary here.

Mattar and Daw's approach starts with consider what effect replaying an experience will have. 
Suppose the agent is in state $$s_t$$ and considers replaying experience $$e_k$$. 
Before replaying that experience, the agent has some value function for its current state:

$$V^{\pi_{old}}(S = s_t) := \mathbb{E}_{\pi_{old}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

After replaying that experience, the agent has a new (although possibly identical) value function
for its current state:

$$V^{\pi_{new, k}}(S = s_t) := \mathbb{E}_{\pi_{new, k}}[\sum_{i=t}^{\infty} \gamma^i R_{i+1}] $$

Mattar and Daw's idea is that the agent should choose to replay whichever experience maximizes the 
increase from the old value function in the current state to the new value function in the current state
i.e. how much **more** value the agent will accrue moving forward. They pose the following optimization problem:

$$\arg \max_{e_k} V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$

They term this improvement, this difference, the __Expected Value of Backup (EVB)__:

$$EVB(s_t, e_k) := V^{\pi_{new, k}}(S = s_t) - V^{\pi_{old}}(S = s_t)$$

Mattar and Daw then show that the expected value of a backup can be decomposed into the product of
two terms:

$$ EVB(s_t, e_k) := Need(s_t, s_k) Gain(s_k)$$

1. __Need__: How likely is the agent is to find itself in $$s_k$$ in the future?
2. __Gain__: How much more value will the agent accrue in $$s_k$$, following $$\pi_{new, k}$$ instead
 of $$\pi_{old}$$?

The intuition is that the agent wants to learn about states that it is likely to occupy in the future,
and it also wants to prioritize experiences that promise higher future rewards, but sometimes the two goals
clash e.g. if an experience promises high future value (high gain), but the agent will never be in that state
(zero need), then replaying that experience is unhelpful.

$$
\begin{align*}
& EVB(s_t, e_k)\\
&:= V^{\pi_{new, k}}(s_t) -  V^{\pi_{old}}(s_t)\\
&= \sum_a \pi_{new}(a | s_t) \Big( Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}} (s_t, a) \Big)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \sum_a \pi_{old}(a|s_t) \Big( Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}}(s_t, a) \Big)
\end{align*}
$$

where the third equality is reached by adding and subtracting $$\pi_{old}(a|s_t) Q^{\pi_{new, k}} (s_t, a)$$
inside the sum. We can simplify the difference between the new and old Q-values, using the property that
$$Q^{\pi}(s_t, a) = \sum_{s_{t+1}, a_{t+1}} p(s_{t+1}, a_{t+1}) (r_{t+1} + \gamma V^{\pi}(s_{t+1})$$:

$$
\begin{align*}
& Q^{\pi_{new, k}}(s_t, a) - Q^{\pi_{old}}(s_t, a)\\
&= \sum_{s_{t+1}, r_{t+1}} p(s_{t+1}, r_{t+1}|s_t, a) \Big(r_{t+1} + \gamma V^{\pi_{new, k}}(s_{t+1}) - r_{t+1} - \gamma V^{\pi_{old}}(s_{t+1}) \Big)\\
&= \gamma \sum_{s_{t+1}, r_{t+1}} p(s_{t+1}, r_{t+1}|s_t, a) \Big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big)\\
&= \gamma \sum_{s_{t+1}} p(s_{t+1}|s_t, a) \Big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big)\\
\end{align*}
$$

The immediate reward doesn't matter in this difference we're considering that the agent
has already committed to taking action $$a$$, so whether $$a$$ was sampled from the new
or old policy is irrelevant. Plugging this result back in to our first equation, we discover a recursion:

$$
\begin{align*}
& EVB(s_t, e_k)\\
&:= V^{\pi_{new, k}}(s_t) -  V^{\pi_{old}}(s_t)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \sum_a \pi_{old}(a|s_t) \Big( \gamma \sum_{s_{t+1}} p(s_{t+1}|s_t, a) \big( V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \big) \Big)\\
&= \sum_a \Big( \pi_{new, k}(a | s_t) - \pi_{old}(a|s_t) \Big)  Q^{\pi_{new, k}}(s_t, a)\\
&\quad \quad + \gamma \, \mathbb{E}_{\substack{a_t \sim \pi_{old}(a|s_t)\\s_{t+1} \sim p(s_{t+1}|s_t, a_t)}} \Big[ V^{\pi_{new, k}}(s_{t+1})-  V^{\pi_{old}}(s_{t+1}) \Big]\\
\end{align*}
$$

Expanding out the recursive form, and using $$T := p(S_{t+1} = s_{t_1} | S_t = s_t, A_t = a_t)$$
to denote the MDP's state transition function, we obtain:

$$
\begin{align*}
& EVB(s_t, e_k)\\
&=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \, \mathbb{E}_{\substack{a_t, ..., a_{t\prime-1} \sim \pi_{old}\\s_{t+1}, ..., s_{t\prime}|s_t \sim T}} \Big[ \sum_{a_{t\prime}} \big( \pi_{new, k}(a_{t\prime} | s_{t\prime}) - \pi_{old}(a_{t\prime}|s_{t\prime}) \big)  Q^{\pi_{new, k}}(s_{t\prime}, a_{t\prime}) \Big]
\end{align*}
$$

We'll define the term inside the expectation the gain. It expresses the average
additional value the agent will be able to obtain under its new policy compared
against its previous policy:

$$Gain(s_{t\prime}) :=  \sum_{a_{t\prime}} \big( \pi_{new, k}(a_{t\prime} | s_{t\prime}) - \pi_{old}(a_{t\prime}|s_{t\prime})  \big) Q^{\pi_{new, k}}(s_{t\prime}, a_{t\prime}) $$

This expression exactly matches Mattar and Daw's expression (Eqn. 5), but they write
the gain as $$Gain(s_{t\prime}, a_{t\prime})$$ even though the function does not depend
on $$a_{t\prime}$$ whatsoever; I don't know why. Continuing on, since the term inside
the expectation depends only on $$s_{t\prime}$$, the expectation can be simplified:

$$
\begin{align*}
\mathbb{E}_{\substack{a_t, ..., a_{t\prime-1} \sim \pi_{old}\\s_{t+1}, ..., s_{t\prime} |s_t \sim T}} \Big[Gain(s_{t\prime}) \Big]
&= \sum_{\substack{a_t, ..., a_{t\prime-1}\\s_{t+1}, ..., s_{t\prime}}} p(a_t, ...., a_{t\prime-1}, s_{t+1}, ..., s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
&= \sum_{s_{t\prime} \in \mathcal{S}} p(s_{t\prime} | s_t) \, Gain(s_{t\prime})\\
&= \mathbb{E}_{p(s_{t\prime}|s_t)} \Big[ Gain(s_{t\prime}) \Big]
\end{align*}
$$


This expression tells us that the agent needs to weigh the gain at state $$s_{t\prime}$$
by how likely the agent is to end up in state $$s_{t\prime}$$ at time $$t\prime$$,
given that the agent is currently in state $$s_t$$ at time $$t$$. Plugging back in and
rearranging, we have

$$
\begin{align*}
EVB(s_t, e_k) &=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \sum_{s\prime \in \mathcal{S}} p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
&=\sum_{t\prime = t}^{\infty} \sum_{s_{t\prime} \in \mathcal{S}} \gamma^{t\prime - t}  p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
\end{align*}
$$

If we assume that the agent's policy in one state has no effect on the agent's
policy in other state, then when considering the $k$th experience $$e_k :=
(s_k, a_k, r_{k+1}, s_{k+1})$$, the gain in every state $$s_{t\prime} \neq s_k$$
is also 0 because $$\pi_{new, k}(a_{t\prime} | s_{t\prime}) = \pi_{old}(a_{t\prime}|s_{t\prime})$$.
Under this assumption, the expected value of backing up the $k$th experience becomes:

$$
\begin{align*}
EVB(s_t, e_k) &=\sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \delta(s_{t\prime}, s_k)  p(s_{t\prime}|s_t) \, Gain(s_{t\prime})\\
\end{align*}
$$

where $$\delta(\cdot, \cdot)$$ is the Kronecker delta i.e. 1 if its argument are equal, 0 otherwise.
We define this infinite future discount sum of state occupancy probabilities as the need:

$$
\begin{align*}
Need(s_k) &:= \sum_{t\prime = t}^{\infty} \gamma^{t\prime - t} \delta(s_{t\prime}, s_k)  p(s_{t\prime}|s_t)
\end{align*}
$$


## Theory

https://ieeexplore.ieee.org/abstract/document/8636075

## Empirical Study

http://proceedings.mlr.press/v119/fedus20a.html

https://arxiv.org/pdf/1712.01275.pdf


## Replay for Changing Goals

https://arxiv.org/abs/1707.01495

https://arxiv.org/pdf/1906.08387.pdf




## Replay in Continual Learning

https://arxiv.org/abs/1811.11682

https://ojs.aaai.org/index.php/AAAI/article/view/11595