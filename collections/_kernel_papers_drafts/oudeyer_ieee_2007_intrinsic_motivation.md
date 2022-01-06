`---
layout: post
author: First, ..., Last (Venue Year)
title: Intrinsic motivation systems for autonomous mental development
date: 2022-01-05
tags: cs422-embodied-learning intrinsic-motivation 
---


## Motivation

Children seem to be driven by intrinsic motivation (e.g. curiosity) and
this internal drive seems to guide them to acquire useful knowledge and skills.
How do we endow a machine agent with similar intrinsic motivation?

## Two Observations of Development

The authors claim that there are two properties of autonomous mental 
development:

1. Development is progressive and incremental
   - Comment: Is this actually true? Andrew Saxe paper had references that
     development is step-like; human children don't seem to learn K words a day
     every day
   - Regardless, historically, humans needed to design curricula for robots to 
     learn from
2. Development is autonomous and active
   - Comment: Is it autonomous? Humans acquire a tremendous amount from
     parents and other adults.
   - It is largely autonomous

## Autonomous Mental Development in Different Fields
    
This paper then turns to review insights into autonomous mental development 
from fields such as developmental psychology, neuroscience, developmental 
robotics and active learning.

- 

## Research Questions

## Experiment 1

### Setup 1

# Notes from Nick

- proposes generic world model-learning mechanism
- lucid thinking about incentivizing interagent learning
- Goal: learn a world model as well as possible?
  - What sort of world model?
  - One guess: forward prediction
  - Rylan: Why is forward critical?
    - Nick: For planning, latest techniques have been biased towards forward prediction 
    - Nick: Could be interesting project
    - Nick: Suppose goal is forward prediction. Could we learn a better world model
      using non-forward prediction learning objectives?
- How to engineer?
  - One common approach: Agent has two components
    - World model: what happens next, if I do X?
    - Controller: how do I gather good data that helps my world model?
  - Rylan: why is this 2-part model the right model?
    - Nick: underexplored, but not obvious what else to do 
- How does one motivate an agent to build its world model?
  - If you want to minimize world model loss
    - Challenge: Couch potato problem. Doing nothing ensures the model can 
      overfit to the current observation.
  - If you want to maximize world model loss
    - Challenge: White noise problem. Controller can guide towards unlearnable
      problem
  - "Simple progress" i.e. minimize loss curve slope
    - Challenge: Agent can just avoid hard problems and optimize easy ones

