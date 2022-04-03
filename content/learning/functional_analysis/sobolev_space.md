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

## Returning to Sobolev Spaces

Because Sobolev spaces are bounded in a mean-squared sense

We can define an inner product in a Sobolev space as:

$$\langle f, g \rangle_{W^{k, 2}} := \int_a^b f(t) g(t)^* dt + \int_a^b f^{(k)}(t) g^{(k)}(t)^* dt $$



## Relationship to Hilbert Spaces


## Relationship to Reproducing Kernel Hilbert Spaces

