# Introduction to Signals and Systems

- Signals are functions, typically of time e.g. $$x(t)$$
- Systems provide an abstraction for how an input signal is converted into an output 
  signal e.g. $$x(t) \rightarrow \text{System} \rightarrow y(t)$$
- Signals can be discrete (time) or continuous (time)

### Example 1

Suppose water flows into a leaky tank. Water comes in with rate $$r_i(t)$$ and
flows out with rate $$r_o(t)$$. Let $$h(t)$$ be the height of water in the tank.
If we assume $$r_o(t) \propto h(t)$$ and $$h(t)$$ obeys water conservation i.e.
$$\partial_t h(t) \propto r_i(t) - r_o(t)$$, then 

$$\partial_t r_o(t) \propto \partial_t h(t) \propto r_i(t) - r_o(t)$$
  
The constant of proportionality must have units $$1/\text{time}$$. One over the constant
is frequently called the time constant $$\tau$$:

$$\tau \partial_t r_1(t) = r_i(t) - r_o(t) $$
