# Change of Variable Theorem

Suppose we have some random variable $$z_0 \in \mathbb{R}^n$$ with distribution
$$p(z_0)$$ and we are given a differentiable function $$f: \mathbb{R}^n \rightarrow \mathbb{R}^n$$. Define

$$z_1 = f(z_0) $$

What is the distribution of $$p(z_1)$$? We can see that 

$$\partial z_1 = \partial f(z_0) = \partial_{z_0} f * \partial z_0 $$

Consequently, if we take the log probability, we have:

$$\log p(z_1) = \log p(z_0) + \log \det(\frac{\partial f}{\partial z_0}) $$