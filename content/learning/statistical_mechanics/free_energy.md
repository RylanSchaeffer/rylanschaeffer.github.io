# Free Energy

For a given [Boltzmann distribution](boltzmann_distribution.md), the free energy
is defined as

$$ F(\beta) := - \frac{1}{\beta} \log Z(\beta)$$

Why is the free energy useful? It contains all (most of?) the useful information 
in a Boltzmann distribution.

## Thermodynamic Potentials

### Internal Energy

Define a function $$U(\beta) := \beta F(\beta)$$ called the internal energy. Differentiating
with respect to the inverse temperature $$\beta$$, we discover the expected energy: 

$$U(\beta) := \partial_{\beta} (\beta F(\beta))  = \langle E(x) \rangle$$

Proof:

$$
\begin{align*}
&U(\beta)\\
&:= \partial_{\beta} (\beta F(\beta))\\
&= F(\beta) + \beta \partial_{\beta} F(\beta)\\
&= F(\beta) + \beta \big(-\frac{1}{\beta^2} \log Z(\beta) - \frac{1}{B} \partial_{\beta} \log Z(\beta) \big)\\
&= F(\beta) - F(\beta) - \partial_{\beta} \log Z(\beta) \\
&= - \frac{1}{Z(\beta)} \sum_{x \in X} e^{-\beta E(x)} (-E(x))\\
&= \sum_{x \in X} \frac{1}{Z(\beta)} e^{-\beta E(x)} E(x)\\
&= \sum_{x \in X} p_{\beta}(x) E(x)\\
&= \langle E(x) \rangle
\end{align*}
$$

__High Temperature Limit__: What happens as $$\beta \rightarrow 0$$?

$$
\begin{align*}
\lim_{\beta \rightarrow 0} U(\beta)
&= -\sum_x p_{\beta}(x) E(x)\\
&= \sum_x \frac{1}{Z(\beta)} e^{-\beta E(x)} E(x)\\
&= \sum_x \frac{1}{Z(\beta)} (1 - \beta E(x) + \Theta(\beta^2))  E(x)\\
&= \sum_x \frac{1}{Z(\beta)} E(x) - \Theta(\beta)\\
&= \langle E(x) \rangle_{\beta=0} - \Theta(\beta)\\
\end{align*}
$$

We find that the internal energy becomes the average of each state's energy,
weighed uniformly.

__Low Temperatuer Limit__: What happens as $$\beta \rightarrow \infty$$?


$$
\begin{align*}
\lim_{\beta \rightarrow \infty} U(\beta)
&= 
\end{align*}
$$

### Canonical Entropy

The canonical entropy is defined as:

$$S(\beta) := - \sum_x p_{\beta}(x) \log p_{beta}(x)$$


__High Temperature Limit__: What happens as $$\beta \rightarrow 0$$?



## Properties

- $$F(\beta) = U(\beta) - \frac{1}{\beta}S(\beta)$$

- 
