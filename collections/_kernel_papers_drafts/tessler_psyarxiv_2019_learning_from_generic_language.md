---
layout: post
author: Tessler and Goodman (PsyArXiv 2019)
title: Learning from Generic Language
date: 2021-08-06
tags: cultural-learning cultural-ratchet natural-language-processing
---

## Background

[Previous work](../_kernel_papers/chopra_cogsci_2019_first_crank_cultural_ratchet.md) showed
that boolean concepts can be accurately and quickly transmitted using language, and that two language
constructs (generics and qualifiers) play a central role in transmitting conceptual knowledge. The immediate
question is how generics actually work to convey information? Generics have been studied for a long time,
and one challenge is that they appear to be too flexible. Consider the four following generics,
which all have the same structure:

1. Mosquitoes fly
2. Mosquitoes lay eggs
3. Mosquitoes are female
4. Mosquitoes carry malaria

Most would agree that 1, 2 and 4 are true, but 3 seems odd if not outright false.
However, when we think about each statement, peculiarities emerge. 100% of mosquitoes fly whereas <1% of mosquitoes
carry malaria, but both statements seem true, whereas the exact same
percentage (50%) of mosquitoes lay eggs and are female but we think of laying eggs as true but being female as false.
I think these examples show at least two peculiarities.
First, how prevalent a property is for a class (i.e. in what fraction of the instances of a class does the 
property hold true) doesn't seem to determine our agreement with whether the class has the property. Second,
there appears to be implicit type checking: particular properties (i.e. gender) are properties of instances,
not properties of classes (i.e. laying eggs).

In a previous paper, these two authors proposed a model to explain how humans probabilistically 
interpret/evaluate generics. In this paper, they test their model's predictions against human behavioral data. 

## Computational Model



## Research Questions

## Experiments

### Exp 1
