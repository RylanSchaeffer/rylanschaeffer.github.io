# Machine Learning

## Loss Functions

### Regression

- Mean Squared Error:

$$ MSE(\hat{y}) = \frac{1}{2}\int_{\mathbb{R}} (y-\hat{y})^2 p(y) dy$$

The value that minimizes MSE is the expected value of $$y$$:

\begin{align*}
0 &= \partial_{\hat{y}} MSE(\hat{y})\\
&= \frac{1}{2}\int_{\mathbb{R} 2(y-\hat{y})(-1) p(y) dy\\
&= \int_{\mathbb{R} -y p(y) dy + \hat{y} \int_{\mathbb{R} p(y) dy\\
\hat{y} &= \mathbb{E}_y[y]
\end{align*}

- Mean Absolute Error

$$ MAE(\hat{y}) = \int_{\mathbb{R}} |y - \hat{y}| p(y) dy$$

- Quantile Regression

For $$\tau \in (0, 1)$$, the quantile regression loss function for the
$$\tau$$th quantile is 

$$ \rho_{\tau}(\hat{y} - y) = (\hat{y} - y)(tau - \mathbb{I}(\hat{y}-y < 0))$$

- Expectile Regression

For $$\tau \in (0, 1)$$, the expectile regression loss function for the
$$\tau$$th expectile is 

$$ \rho_{\tau}(\hat{y} - y) = |(\hat{y} - y)^2 (tau - \mathbb{I}(\hat{y}-y < 0))$$|


## Classification