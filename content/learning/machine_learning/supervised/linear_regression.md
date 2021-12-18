# Linear Regression

## Ordinary Linear Regression

In ordinary linear regression a.k.a. ordinary least-squares regression, 
we consider a linear model

$$\hat{y} = x^T \beta$$

and loss function

$$L_{OLS}(\beta) := \frac{1}{2N} \sum_n \lvert \lvert y_n - x_n^T \beta \lvert \lvert_2^2$$

The parameters that minimize the loss are 

$$\beta^* = (X^T X)^{-1} X^T Y $$

## Ridge Regression

In ridge regression, we consider a regularized loss function

$$L_{Ridge}(\beta) := \frac{1}{2N} \sum_n \lvert \lvert y_n - x_n^T \beta \lvert \lvert_2^2
+ \lambda \lvert \lvert \beta \lvert \lvert_2^2$$

The parameters that minimize 


## Hat Matrix


