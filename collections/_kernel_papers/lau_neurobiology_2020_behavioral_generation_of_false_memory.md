---
layout: post
author: Lau, ..., Josselyn (Neurobiology of Learning and Memory 2020)
title: The role of neuronal excitability, allocation to an engram and memory linking in the behavioral generation of a false memory in mice
date: 2021-03-22
tags: memory-engrams lateral-amygdala auditory-fear-conditioning visual-fear-conditioning optogenetics
---

## Background

Previously, [Rashid et al. 2016](../_kernel_papers_drafts/rashid_science_2016_competition_memory_engrams.md)
and [Cai et al. 2016](../_kernel_papers_drafts/cai_nature_2016_shared_memory_engrams.md) showed that conditioning
close in time result in overlapping engrams, and [Yokose et al. 2017](yokose_science_2017_overlapping_memory_engrams.md)
further showed that the overlap in neurons between engrams is responsible for linking the
shared experiences.

## Research Questions

This paper asks and answers:

- Is creating a behavioral response to a false memory possible? Answer: Yes
- How does the behavioral response depend on elapsed time? Answer: 3 hours is possible, 24 hours is not.

## Experiments

### Exp 1 (Behavior)

- Day 1: Fear condition Tone A. Then, either 3hr or 24hr later, present a neutral stimulus Tone B
- Day 2: Test Tone B 
- Day 3: Test Tone A.

![1A](lau_neurobiology_2020_behavioral_generation_of_false_memory/1A.png)

- Freezing in response to Tone B during first presentation is equal between 3h and 24 hr groups
- Freezing to Tone B during test is higher for 3h than 24 hr group

![1B](lau_neurobiology_2020_behavioral_generation_of_false_memory/1B.png)

- For control, repeat experiment with no Tone B exposure.

![1C](lau_neurobiology_2020_behavioral_generation_of_false_memory/1C.png)

- Freezing (in decreasing order): Tone A > Tone B (3 hr) > Tone B (24 hours) = No Tone B exposure

![1D](lau_neurobiology_2020_behavioral_generation_of_false_memory/1D.png)


### Exp 2 (Behavior)

- Repeat the same experiment, replacing the negative Tone A with negative Light A

![2A](lau_neurobiology_2020_behavioral_generation_of_false_memory/2A.png)

- Same results as before
- Freezing in response to Tone B during first presentation is equal between 3h and 24 hr groups  
- Freezing during test (in decreasing order): Light A > Tone B (3 hr) > Tone B (24 hr)

![2B](lau_neurobiology_2020_behavioral_generation_of_false_memory/2B.png)

### Exp 3 (Neural, Behavioral)

- Later experiments will need to manipulate engrams in 3 hours. This is too short for
  the typical tag-and-manipulate approach, necessitating allocate-and-manipulate approach
- Consequently, need to test that allocate-and-manipulate is valid. Want to test that
  optogenetical manipulation increases probability of neurons being recruited to engram strategy
- Group 1: Use blue-light to activate specific neurons during fear conditioning. Use red light 
  to inhibit those same neurons.

![4B](lau_neurobiology_2020_behavioral_generation_of_false_memory/4B.png)
  

- Group 2: No blue-light to activate specific neurons during fear conditioning. Use red light
  to inhibit those same targeted neurons.

![4BContro](lau_neurobiology_2020_behavioral_generation_of_false_memory/4BControl.png)

- Result: Group 1 freeze less when red light activated
- Takeaway: Optogenetic stimulation controllably biases which neurons are recruited to the engram



