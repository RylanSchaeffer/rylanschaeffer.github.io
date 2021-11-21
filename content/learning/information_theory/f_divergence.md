# f-Divergence

## Definition

For any two probability distributions $$P, Q$$, an **f-divergence** is a function

$$D_f(P || Q) := \int f(\frac{dP}{dQ}) dQ $$

for any convex function $$f$$ such that $$f(1) = 0 (TODO: why is this necessary?)

If probability densities exist, then the $$f-divergence$$ can be written as:

$$D_f(P || Q) := \int f(\frac{p(x)}{q(x)}) q(x) dx $$


## Examples

- [Kullback-Leibler Divergence](kl_divergence.md): Set $$f(t) = t \log t$$:

$$D_{KL}(p || q) := \int \frac{p(x)}{q(x)} \log \frac{p(x)}{q(x)} q(x) dx = \int p(x) \log \frac{p(x)}{q(x)} dx$$

- [Reverse KL Divergence](kl_divergence.md): Set $$f(t) = - \log t$$

$$D_{KL}(p || q) := \int  \log \frac{q(x)}{p(x)} q(x) dx $$

- Jensen-Shannon Divergence

## Properties
