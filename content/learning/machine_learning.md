# Machine Learning

## Loss Functions

### Regression

- Mean Squared Error:

$$ MSE(\hat{y}) = \frac{1}{2}\int_{\mathbb{R}} (y-\hat{y})^2 p(y) dy$$

The value $$\hat{y}$$ that minimizes MSE is the expected value of $$y$$:

$$
\begin{align*}
0 &= \partial_{\hat{y}} MSE(\hat{y})\\
&= \frac{1}{2}\int_{\mathbb{R} 2(y-\hat{y})(-1) p(y) dy\\
&= \int_{\mathbb{R} -y p(y) dy + \hat{y} \int_{\mathbb{R} p(y) dy\\
\hat{y} &= \mathbb{E}_y[y]
\end{align*}
$$

- Mean Absolute Error

$$ MAE(\hat{y}) = \int_{\mathbb{R}} |y - \hat{y}| p(y) dy$$

The value $$\hat{y}$$ that minimizes MAE is the median of $$y$$:

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

- Expectile Regression

Just as quantile regression generalized mean absolute error, expectile regression
generalized mean squared error. For $$\tau \in (0, 1)$$, the expectile regression loss function for the
$$\tau$$th expectile is:

$$ER_{\tau}(\hat{y}) = |(\hat{y} - y)^2 (\tau - \mathbb{I}(\hat{y}-y < 0))|$$



### Classification