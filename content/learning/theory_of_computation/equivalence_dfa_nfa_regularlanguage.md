# Equivalence of DFAs, NFAs and Regular Languages

One central result is that the set of languages accepted by 
[Deterministic Finite Automata](deterministic_finite_automata.md), 
the set of languages accepted by [Non-Deterministic Finite Automata] and the
set of [Regular Languages](regular_languages.md) are all exactly equivalent.
The equivalence between these three classes is shown pairwise below.

**Theorem**: Every NFA has an equivalent DFA.

**Theorem**: Every DFA has an equivalent NFA.

**Theorem**: A language is regular if and only if some deterministic finite automaton
recognizes it.

**Theorem**: A language is regular if and only if a regular expression describes it.