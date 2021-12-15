# Hilbert-Schmidt Integral Operator 

## Hilbert-Schmidt Kernel

A Hilbert-Schmidt kernel is a function $$k: \Omega \times \Omega \rightarrow \mathbb{C}$$ 
such that $$k$$ is a square integrable function, written $$k \in L^2(\Omega \times \Omega, \mathbb{C}).
This means that $$k $$ $$\int_{\Omega} \int_{\Omega} |k(x, y)|^2 dx dx < \infty$$.


## Hilbert-Schmidt Integral Operator

For a given kernel $$k$$, we can define an associated following linear operator $$T_k: L^2(\Omega, \mathbb{C}) 
\rightarrow L^2(\Omega, \mathbb{C})$$:

$$(T_k u)(x) = \int_{\Omega} k(x, y) u(y) dy$$

To be clear, the input function is $$u \in L^2(\Omega, \mathbb{C})$$ and the output function is
$$(T_k u) \in L^2(\Omega, \mathbb{C})$$; the above sentence tells us how to evaluate the function 
for a given $$x \in \Omega$$.


