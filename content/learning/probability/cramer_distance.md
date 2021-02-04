# Cramer Distance

Like the Wasserstein distance, the Cramer distance is a way of quantifying the distance
between probability distributions on a metric space. If $$P(x), Q(x)$$ are two cumulative
distributions of the real random variable $$X$$, then the Cramer distance is defined as

$$C_p(P, Q) = \Big(\int_{-\infty}^{\infty} \lvert P(x) - Q(x)\lvert^p \Big)^{1/p} $$

When $$p=1$$, the Wasserstein distance and the Cramer distance agree. Visually, if we picture
$$X$$ on the abscissa and the CDF on the ordinate, then the Wasserstein distance is the sum
over horizontal slices, sweeping vertically, whereas the Cramer distance is the sum over
vertical slices, sweeping horizontally.