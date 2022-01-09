# Boltzmann Distribution

Suppose we have a system, and let $$X$$ denote the set of a system's possible
configurations. By configuration, we mean a complete microscopic determination of the system's
state. The __Boltzmann distribution__ plays a central role in statistical mechanics,
and is defined as:

$$p_{\beta}(x) = \frac{1}{Z(\beta)} \exp(-\beta E(x))$$

where $$\beta = 1/T > 0$$ is called the __inverse temperature__ and $$E(x)$$ is the
energy of the configuration $$x \in X$$. The normalizing constant $$Z(\beta)$$ is
called the __partition function__ and is defined as:

$$Z(\beta) = \sum_{x \in X} \exp \big( -\beta E(x) \big) $$

## Relation to Free Energy

See [free energy](free_energy.md).

## Properties

- By embedding the Boltzmann distribution in a one-parameter continuum, by taking
  $$\beta \rightarrow 0$$, we get a uniform distribution and by taking $$\beta \rightarrow \infty$$
  we get a distribution concentrated on the maximum. Very nice!




## Examples

### Binary (Ising) Spins

Consider a single particle, with one of two possible spin values: $$x \in \{-1, +1\}$$. 
In a magnetic field $$B$$, the energy of the particle is defined as:

$$E(x) = - B x$$

This means that the energy is lower when $$x$$ points in the direction of the magnetic 
field. The Boltzmann distribution is thus

$$p_{\beta}(x) = \frac{1}{Z(\beta)} exp(-\beta E(x)) = \frac{1}{Z(\beta)} \exp(\beta B x)$$

The average value of the system (called the magnetization) is given by

$$\langle x \rangle = \sum_{x \in X} p_{\beta}(x) x = -\exp(-\beta B) + \exp(\beta B) = \tanh( \beta B)$$

For this simple system, when the temperature $$T = 1/\beta >> |B|$$, the magnetization is
small, meaning the expected value is near 0. However, when the temperature is small, the
magnetization approaches $$\pm 1$$, meaning the spin matches the magnetic field.

### Multiple (Potts) Spins

Consider a single particle, with one of two several discrete spin values: $$x \in \{1, 2, ..., q \}$$.
In a magnetic field $$B$$ pointing in direction $$r$$, the energy of the particle is defined as:

$$E(x) = - B \delta_{x, r}$$

The average value of the system (called the magnetization) is given by:

$$\langle \delta_{x, r} \rangle = \sum_{x \in X} p_{\beta}(x) \delta{x, r}
= p_{\beta}(r) = \frac{\exp (\beta B)}{ \exp(\beta B ) + q - 1}$$

As with the Ising spin, $$T = 1/\beta >> |B| \Rightarrow $$, the magnetization is
small, meaning the expected value is near 0. However, when the temperature is small, the
magnetization approaches $$\pm 1$$, meaning the spin matches the magnetic field.

