# Deterministic Finite Automata

Deterministic finite automata (DFAs) are a class of "machines" in the theory of computation
that are perhaps one of the simplest classes possible and most limited in computational power. 
DFAs are equivalent to both [Non-Deterministic Finite Automata](nondeterministic_finite_automata.md)
and [Regular Languages](regular_languages.md). 

## Definition

A deterministic finite automaton (DFA) is a 5-tuple $$M := (Q, \Sigma, \delta, q_0, F)$$, where

- $$Q$$ is a finite set of elements called _states_
- $$\Sigma$$ is a finite set called the alphabet
- $$\delta: Q \cross \Sigma \rightarrow Q$$ is the transition function
- $$q_0 \in Q$$ is the start state
- $$F \subseteq Q$$ is the set of _accept_ states

### Rules of Operation

Let $$w := w_1 w_2 ... w_N$$ be a character that exists in the alphabet i.e. each $$w_n \in \Sigma$$.
For a given DFA $$M$$, we say that $$M$$ accepts $$w$$ is there is a sequence of states
$$r_0, r_1, ..., r_K \in Q$$ such that 3 conditions are met:

1. The machine starts in the start state i.e. $$r_0 = q_0$$
2. The machine follows the (deterministic) state transitions dictated by the sequence of characters
  i.e. $$r_{k+1} = \delta(r_{k}, w_{k+1})$$
3. The machine ends in an accept state i.e. $$r_K \in F$$

If $$A$$ is the set of all strings that machine M accepts, we say
that $$A$$ is the language of machine $$M$$ or that $$M$$ _recognizes_ $$A$$.



