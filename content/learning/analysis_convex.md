# Convex Analysis

## Basics

A __convex set__ is a set $$X$$ such that $$\forall x_1, x_2 \in X, \forall \lambda \in [0, 1],
\lambda x_1 + (1 - \lambda) x_2 \in X$$.

A __convex function__ is a real-valued function $$f: X \rightarrow \mathbb{R}$$ such that
$$\forall x_1, x_2 \in X, \forall \lambda \in [0, 1], f(\lambda x_1 + (1 - \lambda) x_2) \leq
\lambda f(x_1) + (1 - \lambda) f(x_2)$$ i.e. [Jensen's Inequality](information_theory/jensen_inequality.md).
Interestingly, Wikipedia says that another definition of a convex function is a function that 
satisfies Jensen's inequality.