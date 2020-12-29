# Kumaraswamy Distribution

The Kumaraswamy distribution is a distribution over the interval $$(0, 1)$$ described by two parameters
$$a, b > 0$$.

$$Kumaraswamy(x; a, b) = a b x^{a-1} (1 - x^a)^{b-1}$$

## Properties

- If $$a=1$$ or $$b=1$$ or both, the Kumaraswamy and Beta distributions are equivalent.

- Can draw samples using inverse CDF sampling as $$x \sim (1 - u^{1/b})^{1/a}$$ where
$$u \sim Uniform(0, 1)$$.