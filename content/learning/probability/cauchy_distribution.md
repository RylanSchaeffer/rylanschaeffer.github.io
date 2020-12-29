# Cauchy Distribution

- Density: $$ p(x \lvert x_0, \gamma) = \frac{1}{\pi} \frac{1}{1 + (\frac{x - x_0}{\gamma})^2}$$

The density is properly normalized:

$$\int_{\mathbb{R}} p(x \lvert x_0, \gamma) dx = \frac{1}{\pi} \tan^{-1} (\frac{x - x_0}{\gamma})
\big\lvert_{-\infty}^{\infty} = \frac{1}{\pi}(\pi / 2 + \pi/2) = 1$$

- Mean: Undefined

To see why, consider $$\frac{1}{\pi} \int_{\mathbb{R}} \frac{x}{1+x^2} dx = \frac{2}{\pi}
\int_0^{\infty} \frac{x}{1+x^2} dx = \frac{1}{\pi} \lim_{x \rightarrow \infty} \log(1 + x^2)$$

- Variance: Undefined
