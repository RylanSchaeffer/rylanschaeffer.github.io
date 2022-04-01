# Regular Operations

1. Union: $$A \cup BB := \{s : s \in A \text{ or } s \in B\}$$
2. Concatenation: $$A \cdot B := \{ab : a \in A \text{ and } b \in B \}$$
3. Star: $$A^* := \{ a_1 a_2 .... a_k : k \geq 0 \text{ and } a_i \in A$$

## Closure Properties

Closure means that if you take an element (or several) from a set
and apply an operation, the result is another element of the original set.
With that in mind, [regular languages](regular_languages.md) have the following
properties:

- **Theorem**: The set of regular languages is closed under union.

Proof by construction: Let $$A, B$$ be regular languages. By the equivalence of regular
languages to [deterministic finite automata](deterministic_finite_automata.md),
there exists DFAs $$M_A, M_B$$ which respective accept $$A, B$$. Intuitively, we want
to build a new machine that will run both $$M_A, M_B$$ machines in parallel, and accept
if either $$M_A$$ or $$M_B$$ accepts. Define a new machine $$M_{AB}$$
with states given by the cross product of $$Q_A \times Q_B$$, start state $$q_{AB} = (q_A, q_B)$$,
accept states $$(F_A \times Q_A, F_B \times Q_B)$$, and transition function 
$$\delta_{AB}((Q_A, Q_B), w) = (\delta_A( Q_A, w), \delta_B (Q_B, q))$$. 

- **Theorem**: The set of regular languages is closed under concatenation.

Proof by construction: Let $$A, B$$ be regular languages. By the equivalence of regular
languages to [non-deterministic finite automata](nondeterministic_finite_automata.md), there
exists NFAs $$M_A, M_B$$ which recognize $$A, B$$. Intuitively, we want to build a new machine
that, given string $$ab$$ where $$a \in A$$ and $$b \in B$$, will sequentially run $$M_A$$
until $$a$$ is consumed and then run $$M_B$$ until $$b$$ is consumed. However, we don't know
a prior where $$a$$ ends and $$b$$ begins, so we'll use the NFA's non-determinism to run
machine $$M_B$$ after each character has been consumed; if any of those machines accept the 
remaining string, then the new machine accepts.
