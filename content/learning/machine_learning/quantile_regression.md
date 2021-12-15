# Quantile Regression

The goal of quantile regression is to learn a model that predict the quantiles of a random
variable $y$, perhaps given another random variable $x$. Suppose we want to learn the median of
$y$. One way to accomplish this is via the
[Mean-Absolute Error (MAE)](../machine_learning/loss_functions.md#mean-absolute-error)
loss function. This is because the value of $$\hat{y}$$ that minimizes MAE is the median of $$y$$:

$$
\begin{align*}
0 &= \partial_{\hat{y}} MAE(\hat{y})\\
&= \int_{\mathbb{R}} \partial_{\hat{y}} | y - \hat{y}| p(y) dy\\
&= -\int_{-\infty}^{\hat{y}} p(y) dy + \int_{\hat{y}}^{\infty} p(y) dy  
\end{align*}
$$

- Quantile Regression

Quantile regression generalizes mean absolute error. For $$\tau \in (0, 1)$$,
the quantile regression loss function for the $$\tau$$th quantile is

$$ QR_{\tau}(\hat{y}) = (\hat{y} - y)(\tau - \mathbb{I}(\hat{y}-y < 0))$$

The loss function is convex and piece-wise linear.
