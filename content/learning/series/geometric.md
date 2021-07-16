# Geometric Series

Parent: [Series](../series.md)

A geometric series is an infinite sum of terms with a fixed ratio between terms:

$$\sum_{} $$

## Neumann Series

Neumann series generalize geometric series to linear operators. Specifically, let $$T$$ be
a linear operator and consider the series:

$$\sum_{k=0}^{\infty} T^k $$

If the Neumann series converges, then the series can be written as

$$\sum_{k=0}^{\infty} T^k = (I - T)^{-1} $$

Proof: Define $$X := \sum_{k=0}^{\infty} T^k$$. Then $$T X = \sum_{k=0}^{\infty} T^{k - 1}$$.
The difference $$X - TX = (I - T)X = T^0 = I \Rightarrow X = (I - T)^{-1}$$.