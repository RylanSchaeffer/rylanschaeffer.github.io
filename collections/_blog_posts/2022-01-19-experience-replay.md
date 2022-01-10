---
layout: post
title: Experience Replay in Machines and Mammals 
author: Rylan Schaeffer
date: 2022-01-19
tags: experience-replay reinforcement-learning
---

# Experience Replay

Experience replay is a fascinating topic spanning machine learning, neuroscience and 
cognitive science. At the heart of replay are three related questions: how should an
agent use its past experiences ...

1. to build a model of its world?
2. to most efficiently propagate reward information in that model?
3. to plan future actions using its model of the world?

The machine learning literature has historically focused on the second question, but emerging
work in neuroscience and cognitive science is suggesting that these three questions
are intimately related. This story begins with the second question and continues to the
forefront of the third and first questions

## Notation

In reinforcement learning (RL), when considering an agent in a Markov Decision Process,
an experience is commonly defined as a 4-tuple:

$$e_k = (s_k, a_k, r_k, s_{k+1})$$

As an agent moves through its environment, it builds a collection of these experience
often called a __replay buffer__.

$$\{e_1, e_2, ..., e_T\} $$

# Experience Replay in Machines

## Algorithms

### Experience Replay

[In 1992, Lin introduced the idea of experience replay](https://link.springer.com/content/pdf/10.1007/BF00992699.pdf).
As an agent traverse its environment, rather than uses its immediate experiences to update
itself and then discarding them, Lin proposed that the agent should store the experiences
in a replay buffer and then uniformly sample experiences from the buffer.

DQN used large sliding window, sampled uniformly at random, revisited each transition ~8 times

### Prioritized Experience Replay

At [ICLR 2016, Schaul et al.](https://arxiv.org/pdf/1511.05952.pdf) proposed a different
approach to sampling from the agent's replay buffer. Rather than sampling uniformly at random,
the agent could instead prioritize certain experiences based on how wrong the agent's predictions
were in those contexts. Specifically, the authors suggested that the agent should use its 
temporal-difference (TD) errors (also known as reward prediction errors).

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