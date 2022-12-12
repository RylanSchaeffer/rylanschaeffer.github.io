# Markov Chain Mixing Times

## Definition

If a [Markov chain](markov_chains.md) has a stationary distribution, one property we might want to know is 
how long the chain needs to run till we reached that stationary distribution. 
More specifically, let $$X_0, X_1,...$$ be a finite, irreducible, aperiodic Markov chain with 
stationary distribution $$\pi$$. Let $$P_s^t$$ be the distribution over $$X_t | X_0=s$$. Define
the worst possible distance between $$\pi$$ and all other distributions as:

$$\Delta(t) := \max_s ||\pi - P_s^T|| $$

where the distance is [total variation distance](../probability/total_variation_distance.md).
We define the Markov chain's mixing time as:

$$\tau_{mix} = min \{t : \Delta(t) \leq 1/2e \}$$

## Properties

- For any finite, irreducible, aperiodic Markov chain, $$\delta(t)$$ is non-increasing 
  and $$\Delta(c \tau_{mix}) \leq e^{-c}$$ i.e. $$1/2e$$ can be turned into $$e^{-c}$$ by taking
  a constant multiple number of additional steps.

- $$\Delta(t) := max_s ||P_s^T - \pi || \leq max_{s, s'} ||P_s^T - P_{s'}^T$$ \leq 2\Delta t$$

Proof: (LHS) By the definition of stationarity, $$\pi = sum_w \pi_w P_w^T \Rightarrow
\max_s ||P_s^T - \pi|| = \max_{s} ||P_s^T - \sum_w \pi_w P_w^T|| \leq max_{s, s'} ||P_s^T - P_{s'}^T||$$

(RHS) By the triangle inequality: $$||P_s^t - P_{s'}^T|| \leq ||P_s^T - \pi|| \leq ||P_{s'}^T - \pi|| \leq 2 \Delta(t)$$.