# Sobolev Spaces

Sobolev spaces are spaces of smooth functions i.e. functions with bounded
(in a mean-squared sense) $$k$th weak derivatives.


## Definition

The $$k$$th $$L^2$$ Sobolev space is defined as:

$$W^{k, 2}([a, b]) := \{f: [a, b] \rightarrow \mathbb{C} : \int_a^b |f(t)|^2 dt + \int_a^b |f^{(k)}(t)| dt < \infty \}$$

where $$f^{(k)}$$ is the $$k$$th weak derivative. We can define other Sobolev spaces by
considering other values of $$p$$, although these are 

## Weak Derivatives

What is a weak derivative? The weak derivative of a function $$f: \mathcal{H} \rightarrow \mathbb{C}$$
is a function such that for any smooth (i.e. infinitely differentiable)
function $$g$$ with compact support (i.e. 0 outside some interval), the 
following equality holds:

$$\int f'(x) g(x) dt = - \int f(x) g'(x) dx$$

As an example, consider $$f(t) = \lvert t \lvert$$. The function $$f(t) = sign(t)$$ is the 1st 
weak derivative because for any function $$\phi(t)$$, we have 

TODO

$$\int_{\mathbb{R}} sign(t) \phi(t) = \int \lvert t \rvert t \phi'(t) dt $$

Because Sobolev spaces' weak derivatives are bounded in a mean-squared sense, this is a weaker
condition than being bounded in a Lipschitz sense.

## Returning to Sobolev Spaces

We can define an inner product in a Sobolev space as:

$$\langle f, g \rangle_{W^{k, 2}} := \int_a^b f(t) g(t)^* dt + \int_a^b f^{(k)}(t) g^{(k)}(t)^* dt $$


## Bases for Sobolev Spaces

The Fourier basis can also provide a (modified) bases for Sobolev spaces. Specifically,
if we define the basis function:

$$\phi_z(t) := \frac{1}{\sqrt{T}} e^{i \frac{2 \pi z}{T} t}$$

Then the $$k$$th weak derivative will become:

$$\phi_z^{(k)}(t) := \Bigg( \frac{2 \pi i z}{T} \Bigg)^k \phi_z(t)$$

And the inner product in the Sobolev space is:

$$\langle \phi_n, \phi_m \rangle_{W^{k, 2}} := \langle \phi_n, \phi_m \rangle_{L^2} + \langle \phi_n^{(k)}, \phi_m^{(k)} \rangle_{L^2}$$

Letting $$f := \sum_z a_z \phi_z$$ and $$g := \sum_z b_z \phi_z$$, then

$$\langle f, g \rangle_{W^{k, 2}} = \sum_z  \Bigg(1 + \big(\frac{2 \pi z}{T})^2 \Bigg) a_z b_z^*$$


## Relationship to Hilbert Spaces


## Relationship to Reproducing Kernel Hilbert Spaces

