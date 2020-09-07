# Probabilistic Graphical Models

## Overview
-----

Bayesian inference frequently involves computing a conditional distribution:

$$ p(x|y) = \frac{p(x, y)}{p(y)} = \frac{p(x, y)}{\sum_x p(x, y)}$$

Without any information the relationship between $$x$$ and $$y$$, if $$x$$ is
$$D$$ dimensional, the integral requires summing over $$|X|^D$$ terms,
which is exponential in the dimension. However, if some relationship is known,
we might be able to simplify the integral. For instance, if dimensions are
conditionally independent given $$y$$, we have:
 
$$p(x|y) = \prod_{n=1}^N p(x_n|y) = \prod_{n=1}^N \frac{p(x_n, y)}{\sum_{x_n} p(x_n, y)}$$

With independence, the number of sums shifts from exponential to linear in dimension.
Structure matters! We shall wee that the degree of structure inherent in a 
problem is closely associated with the efficiency of inference.


## Directed Graphical Model
-----


A directed graphical model is one way of combining graphs with random variables. Specifically,
a directed graphical model $$G$$ is defined as the tuple of $$U$$, a set of nodes, each 
representing a random variable, and $$U \subseteq V \times V$$, a set of directed edges.
One particular $$GG$$ defines a family of joint distributions over the random variables
by imposing conditional independencies in the edges. 
We denote the $$i$$th random variable $$X_i$$ and its set of parent nodes

$$\pi_i = \{j \in V | (j, i) \in E \}$$

__Importantly, $$G$$ cannot have cycles__. If it does, there is no consistent way to assign
conditional probabilities.

### Extracting Conditional Independence from Graph Structure

I use numbers to represent random variables rather than $$x_1, x_2, ...$. I couldn't get
BayesNet to work with Markdown, so bear with the poor "pictures".  

- Ex 1:

$$ 1 \rightarrow 2 \rightarrow 3$$

Here, by the definition of conditional probabilities, we have

$$p(1,2,3) = p(1)p(2|1)p(3|1,2)$$

By the structure of the graph, we also have

$$p(1,2,3) = p(1)p(2|1)p(3|2)$$

Setting the two equal shows $$p(3|1,2) = p(3|2)$$, meaning 3 is conditionally independent from 
1 given 2 i.e. $$1 \perp 3 | 2$$.

- Ex 2:
 
$$ 1 \leftarrow 2 \rightarrow 3$$

A similar analysis shows that $$1 \perp 3 | y$$ Intuitively, if $$1$$ and $$3$$ are descendents
of $$2$$, then knowing $$2$$ renders the two descendents independent.

- Ex 3:

$$ 1 \rightarrow 2 \leftarrow 3 $$

This one is trickier, but not by much. Suppose $$2$$ is the child of $$1$$ and $$3$$. Initially,
there's no relationship between the parents, so $$1 \perp 3$$, but if I observe that the child
has blue eyes and that $$1$$ does not, this tells me something about $$3$$. Consequently,
$$1 \perp 3$$ but $$1 \not\perp 3 | 2$$.

_Local Markov Property_: For a given DAG $$G = (V, E)$$, we say that the DAG has the local
Markov property if $$\forall i \in V, x_i \perp x_{nd(i)\pi_i}$$ | \pi_i$$ where $$\pi_i$$
are the parents of $$i$$ and $$nd(i)$$ are the non-descendents of $$i$$. 


## History
-----
- Statistical physics: undirected graphs to represent distribution over large
system of interacting particles

- Genetics: directed graphs to model inheritance

- Statistics: interactions in multi-dimensional contingency tables
