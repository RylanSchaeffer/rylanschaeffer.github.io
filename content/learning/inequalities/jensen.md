# Jensen's Inequality

Let $$f(x)$$ be a [convex function](../analysis_convex.md) $$f: X \rightarrow \mathbb{R}$$.
Jensen's Inequality states that $$\forall \lambda \in [0, 1], \forall x_1, x_2 \in X$$,

$$f(\lambda x_1 + (1 - \lambda) x_2) \leq  \lambda f( x_1) + (1 - \lambda) f(x_2) $$

This can be generalized to $$n$$ elements in the function's domain, so long as the coefficients
$$\lambda_i$$ remain non-negative:

$$f(\sum_i \lambda_i x_i) \leq \sum_i \lambda_i f( x_i) $$

The inequality is reversed if the function is concave.

## Applications to Information Theory

Jensen's Inequality appears everywhere in information theory e.g. KL Divergence, Mutual Information.
due to the frequent appearance of $$\log$$, a concave function. For instance, we can bound the log 
of a random variable's expected value:

$$\mathbf{E}[\log X] = \sum_x p(x) \log x \leq \log \sum_x p(x) x = \log (\mathbf{E}[X])$$