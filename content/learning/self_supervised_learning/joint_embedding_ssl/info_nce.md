# InfoNCE


$$I(X ; Y) \geq \mathbb{E} [ \frac{1}{K} \sum_{i=1}^K \log \frac{\exp f(x_i, y_i)}{\frac{1}{K} \sum_{j=1}^K exp f(x_i, y_j)} ]$$

where expectation is over $$K$$ independent samples $$\{(x_i, y_i)\}_{i=1}^K$$ from the joint distribution $$p(x, y)$$.