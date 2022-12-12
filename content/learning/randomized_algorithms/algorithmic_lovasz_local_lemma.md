# Algorithmic Lovasz Local Lemma

The [Lovasz Local Lemma (LLL)](lovasz_local_lemma.md) is an _existential_ argument; specifically,
the LLL says that (under appropriate conditions) the probability of avoiding all undesirable events
is positive, meaning that such a configuration must exist.

But how does one actually find a configuration that avoids all bad events, efficiently?

## Notation

We introduce some notation, along with a concrete example from k-SAT

- $$\mathcal{V}$$ is a set of variables e.g. the positive and negative literals $$X_1, ... X_n$$ in k-SAT
- $$\mathcal{A} = \{ A_1, ..., A_m \}$$ are the "bad" events that are functions of $$\mathcal{V}$$
  e.g. $$A_i$$ is the event that the $$i$$th clause is unsatisfiable
- $$Vbl(A_i)$$ is the (sub)set of $$\mathcal{V}$$ involved in computing $$A_i$$ e.g. $$Vbl(A_i)$$
  is the set of all variables involved in the $$i$$th clause
- $$\Gamma(A_i)$$ is the set of all $$A_j$$ such that $$Vbl(A_i) \cap Vbl(A_j) \neq \emptyset$$
  i.e. the interacting variables between $$A_i$$ and $$A_j$$ e.g. the set of all $$A_j$$ such that
  they share variables with the $$i$$th clause

## Algorithm

Given $$\mathcal{V}, \mathcal{A}$, choose a random assignment $$\sigma_v$$ for each random variable
$$v \in \mathcal{V}$$. While there is some $$A_i \in \mathcal{A}$$ such that $$A(\sigma) = 1$$ (i.e.
 a bad event is happening), (1) Choose an arbitrary event $$A_i$$ with $$A(\sigma) = 1$$ and (2)
update $$\sigma$$ by reselecting/resampling $$\{\sigma_v : v \in Vbl(A_i) \}$$ randomly.

**Theorem (Symmetric Algorithmic LLL by Moser-Tardos 2010)**: Let $$\mathcal{A}$$ be a collection of bad events
determined by random variables in $$\mathcal{V}$$. Suppose $$\forall A \in \mathcal{A}$$:

- $$|\Gamma(A) | \leq d + 1$$ i.e. $$A$$ is independent of all but $$d$$ other events
- $$\mathbb{P}[A] \leq 1 / e (d+1)$$

Then the given algorithm will find assignments such that no bad event in $$\mathcal{A}$$ occurs,
and the expected number of re-randomizations is $$P(|\mathcal{A}| / (d+1))$$.

**Theorem (Asymmetric Algorithmic LLL)**: Let $$\mathcal{A}$$ be a collection of bad events
determined by random variables in $$\mathcal{V}$$. Suppose $$\exists x: \mathcal{A} \rightarrow (0, 1)$$
such that $$\forall A \in \mathcal{A}$$:

$$\mathbb{P}[A] \leq x(A) \prod_{B \in \Gamma(A) \setminus \{A \}} (1 - x(B))$$

Then algorithm will find assignment such that no event of $$\mathcal{A}$$ occurs, and the expected
number of rerandomizations is $$\leq \sum_{A \in \mathcal{A}} \frac{x(A)}{1 - x(A)}$$.

