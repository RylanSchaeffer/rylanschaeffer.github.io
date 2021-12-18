# Loss Functions

Here, we denote the target random variable $y$

## Mean Squared Error

$$ L_{MSE}(\hat{y}) = \frac{1}{2}\int_{\mathbb{R}} (y-\hat{y})^2 p(y) dy$$

The value $$\hat{y}$$ that minimizes MSE is the expected value of $$y$$:

$$
\begin{align*}
0 &= \partial_{\hat{y}} MSE(\hat{y})\\
&= \frac{1}{2}\int_{\mathbb{R} 2(y-\hat{y})(-1) p(y) dy\\
&= \int_{\mathbb{R} -y p(y) dy + \hat{y} \int_{\mathbb{R} p(y) dy\\
\hat{y} &= \mathbb{E}_y[y]
\end{align*}
$$



## Mean Absolute Error

$$ L_{MAE}(\hat{y}) = \int_{\mathbb{R}} |y - \hat{y}| p(y) dy$$


## Quantile Regression Loss


## Expectile Regression Loss

