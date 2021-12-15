# Expectile Regression

The goal of expectile regression is to learn a model that predict the expectiles of a random
variable $y$, perhaps given another random variable $x$. Suppose we want to learn the mean of
$y$. One way to accomplish this is via the
[Mean-Squared Error (MSE)](../machine_learning/loss_functions.md#mean-squared-error)
loss function. This is because the value of $$\hat{y}$$ that minimizes MSE is the mean of $$y$$:



Just as quantile regression generalized mean absolute error, expectile regression
generalized mean squared error. For $$\tau \in (0, 1)$$, the expectile regression loss function for the
$$\tau$$th expectile is:

$$ER_{\tau}(\hat{y}) = |(\hat{y} - y)^2 (\tau - \mathbb{I}(\hat{y}-y < 0))|$$

The loss function is convex and piece-wise quadratic.