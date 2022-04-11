# Introduction to Bayesian Optimization

Bayesian Optimization (BO) concerns gradient-free, assumption-free optimization. The goal
is to solve a general optimization problem with no known structure (e.g. convexity or linearity)
to exploit, and where we do not have access to any of the function $$f(\dot)$$'s derivatives.

$$\max_{x \in X} f(x)$$

Many other assumptions are also often applied, including:

- Evaluating the function is expensive. For instance, $$f(\cdot)$$ might be the outcome
of an economic policy and the input the available economic levers (e.g. tax credits).
- The feasible set $$X$$ is easy to assess membership.
- The function $$f$$ is continuous. This assumption is necessary to use a common approach
in the field (i.e. Gaussian process regression)

All/most approaches to Bayesian Optimization have two components:
1. A statistical model of the objective function, often called the _surrogate function_
2. A method for deciding where to sample next, often called the _acquisition function_.

There are a variety of different acquisition functions, but almost always, the 
surrogate function is Gaussian Process regression.

