# Directed Graphical Models

A directed graphical model is one way of expressing conditional dependencies between random variables.
Specifically, a directed graphical model $$G = (V, E)$$ represents each random variable with a node and
uses the directed edges to indicate conditional probabilities. Specifically, for a random variable $$X_i$$,
we say that its parents $$X_{\pi_i}$$ is the set of nodes such a directed edge goes from the parent to $$X_i$.

$$X_{\pi_i} = \{j \in V \lvert (j, i) \in E \}$$

The full joint distribution $$P(X_1, ..., X_N)$$ is said to __factorize__ as:

$$P(X_1, ..., X_N) = \prod_{n=1}^N P(X_n|X_{\pi_n})$$

One key point is that a given directed graph does not describe a single distribution. Rather,
the given graph describes a family of distributions such that each distribution in the family
can be factorized according to the graph structure. __Importantly, $$G$$ cannot have cycles__.
If it does, there is no consistent way to assign conditional probabilities.

## Extracting Conditional Independencies

For a given graph, the graph structure tells us which variables are conditionally independent
from other variables, possibly given other variables. More formally, we'd like to find all 
sets $$A, B, C$$ such that 

$$X_A \perp X_B | X_C$$

where $$X_A = \{X_i : i \in A\}$$. It turns out that considering three simple cases will be
sufficient to extract two rules that will allow us to determine all conditional independence
statements from the graph structure. I couldn't get BayesNet to work with Markdown, so bear with the poor "pictures".

- Ex 1:
  
$$ X_1 \rightarrow X_2 \rightarrow X_3$$

We can always write the joint probability as $$p(X_1, X_2, X_3) = p(X_1)p(X_2\lvert X_1)p(X_3 \lvert1,2)$$.
By following the factorization dictated by the graph, we also have 
$$p(X_1,X_2,X_3) = p(X_1)p(X_2\lvert X_1)p(X_3\lvert X_2)$$. Setting the two equal shows $$p(X_3 \lvert X_1,X_2)
= p(X_3 \lvert 2)$$, meaning $$X_3$$ is conditionally independent from $$X_1$$ given $$X_2$$.

- Ex 2: $$ 1 \leftarrow 2 \rightarrow 3$$. A similar analysis shows that $$1 \perp 3 \lvert 2$$.
Intuitively, if $$1$$ and $$3$$ are descendents of $$2$$, then knowing the parent $$2$$ renders the
 two descendents independent.

- Ex 3: $$ 1 \rightarrow 2 \leftarrow 3 $$. This one is trickier, but not by much. Suppose $$2$$ is the child of $$1$$ and $$3$$. Initially,
there's no relationship between the parents, so $$1 \perp 3$$, but if I observe that the child
has blue eyes and that $$1$$ does not, this tells me something about $$3$$. Consequently,
$$1 \perp 3$$ but $$1 \not\perp 3 \lvert 2$$.

__Directed Local Markov Property__:  A distribution $$p$$ over $$X^{\lvertV\lvert}$$ ($$V$$ is the set of 
variables) is said to satisfy the directed local
Markov property with respect to a DAG $$G = (V, E)$$ if $$\forall i \in V, x_i \perp 
x_{nd(i) \\ pi_i} \lvert \pi_i$$ where $$\pi_i$$ are the parents of $$i$$ and
 $$nd(i)$$ are the non-descendents of $$i$$. 

Directed Separation (or d-separation) describes rules for extracting
conditional independencies in a DAG. 

__Directed (d-) Separation__: For DAG $$G = (V, E)$$, we say the set of nodes $$A$$ is d-separated from the
 nodes $$B$$ with respect to nodes $$C$$ if every _path_ between nodes $$a\in A$$ and 
 $$b \in B$$ is _blocked_. A _path_ is a chain of edges that connect
two vertices, regardless of those edges' directionality. For determining whether a path is _blocked_,
there are really just two rules motivated by the earlier examples ($$1 \rightarrow 2 \rightarrow 3, 
1 \leftarrow 2 \rightarrow 3, 1 \rightarrow 2 \leftarrow 3$$):

1. Suppose arrows on the path don't meet head to head (e.g. $$1 \rightarrow 2 \rightarrow 3, 
1 \leftarrow 2 \rightarrow 3$$). Then the path is blocked if a node along the path is observed
and unblocked if not observed.

2. Suppose arrows on the path do meet head to head (e.g. $$1 \rightarrow 2 \leftarrow 3$$).
Then the path is unblocked if a node along the path is observed and blocked if not observed.
This also holds for descendents of node $$2$$.

__Directed Global Markov Property__: A distribution $$p$$ satisfies the 
global Markov property with respect to a DAG $$G=(V,E)$$ if $$\forall x_A, x_B, x_C \subset V,
\, x_A \perp x_B \lvert x_C \Leftrightarrow$$ $$A$$ and $$B$$ are d-separated by $$C$$.

It turns out that both the global Markov property and the local Markov property are equivalent,
and that both properties are equivalent to factorization.

__Theorem__: Let $$G$$ be a DAG. The following are equivalent:

1. $$p$$ factorizes according to $$G$$

2. $$p$$ satisfies the directed global Markov property with respect to $$G$$

3. $$p$$ satisfies the directed local Markov property with respect to $$G$$ 

The implication is that the following two lists are equivalent:

1. List all distributions that factorize according to the graph structure

2. List all distributions, then discard distributions which violate the conditional
independencies obtained by testing d-separation


Let $$I(G)$$ be the set of C.I. relations for a DAG $$G$$ corresponding to d-separation,
and let $$I(p)$$ be the set of C.I. relations for distribution $$p$$.

__Claim__: $$\forall G = (V,E), \exists p$$ such that $$p$$ factorizes according to $$G$$
 and $$I(G) = I(p)$$. Additionally, $$\exists p $$ for which no DAG exists satisfying
 $$I(G)= I(p)$$.
 
__Claim__: For two DAGs $$G_1, G_2$$, $$I(G_1) = I(G_2)$$ if and only if (1) both have 
the same skeleton (i.e. same edges, regardless of direction) and (2) same
v-structures (also called immoralities or common causes). 
