# Power Laws

## Representation o

Consider a power law with exponent $$\alpha > 0$$:

$$x^{-\alpha}$$

This can be represented as an integral of exponentials:

$$x^{-\alpha} = \frac{1}{\Gamma(\alpha)} \int_0^{\infty} t^{\alpha-1} e^{-x t} dt $$

Proof: First, substitute the definition of the gamma function:

$$
\frac{1}{\int_0^{\infty} b^{\alpha-1} e^{-b} db} \int_0^{\infty} t^{\alpha-1} e^{-x t} dt
$$

Second, perform a variable substitution with $$xt = u \Rightarrow t = \frac{u}{x}, x dt = du$$:

$$
\frac{1}{\int_0^{\infty} b^{\alpha-1} e^{-b} db} \int_0^{\infty} \left( \frac{u}{x} \right)^{\alpha-1} e^{-u} \frac{1}{x} du
$$

Third, simplifying:

$$
\frac{x^{-\alpha}}{\int_0^{\infty} b^{\alpha-1} e^{-b} db} \int_0^{\infty} u^{\alpha-1} e^{-u} \frac{1}{x} du
$$

Which yields:

$$x^{-\alpha}$$
