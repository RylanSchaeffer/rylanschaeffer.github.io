# Free Energy

For a given [Boltzmann distribution](boltzmann_distribution.md), the free energy
is defined as

$$ F(\beta) := - \frac{1}{\beta} \log Z(\beta)$$

Why is the free energy useful? It contains all (most of?) the useful information 
in a Boltzmann distribution.

## Thermodynamic Potentials

### Internal Energy

If we consider $$\beta$$ times the free energy (called the __internal energy__), and differentiate
with respect to the inverse temperature $$\beta$$, we discover the expected energy: 

$$U(\beta) := \partial_{\beta} (\beta F(\beta))  = \langle E(x) \rangle$$

Proof:

$$
\begin{align}
&U(\beta)\\
&:= \partial_{\beta} (\beta F(\beta))\\
&= F(\beta) + \beta \partial_{\beta} F(\beta)\\
&= F(\beta) + \beta \big(-\frac{1}{\beta^2} \log Z(\beta) - \frac{1}{B} \partial_{\beta} \log Z(\beta) \big)\\
&= F(\beta) - F(\beta) + \partial_{\beta} \log Z(\beta) \\
&= -\partial_{\beta} \log Z(\beta) \\
&= - \frac{1}{Z(\beta)} \sum_{x \in X} e^{-\beta E(x)} -E(x)\\
&= \sum_{x \in X} \frac{1}{Z(\beta)} e^{-\beta E(x)} E(x)\\
&= \sum_{x \in X} p_{\beta}(x) E(x)\\
&= \langle E(x) \rangle
\end{align}
$$
 