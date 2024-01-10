# Gradients in Math and Code

## General Rule for Computing Gradients

The general rule for computing gradients is the [chain rule](https://en.wikipedia.org/wiki/Chain_rule).
Getting the matrix calculus dimensions correct is often tricky, but there are several consistent rules
one can use. The general rule is: if you have a function that takes in an input with shape 
`(A, B, C, ...)` and produces an output with shape `(X, Y, Z, ...)`, then the gradient of the output
with respect to the input should be `(X, Y, Z, ..., A, B, C, ...)`. The reason why is that, in general,
one needs to specify how each output element varies as each input element varies.

## Examples

### Gradient of Scalar w.r.t. Scalar

Example: $$L(y, \hat{y}) = \frac{1}{2} (y - \hat{y})^2$$ with $$y, \hat{y} \in \mathbb{R}$$.

Goal: Compute $$\frac{d}{d\hat{y}} L(y, \hat{y})$$

Shape Analysis: The output is a scalar, and the gradient is with respect to another scalar, so we expect
the gradient's shape to be `(output shape, input shape) = (1, 1)`.

Code:


### Gradient of Scalar w.r.t. Vector

Example: $$L(y, \hat{y}) = \frac{1}{2} \lvert \lvert y - \hat{y} \lvert \lvert_2^2$$ with $$\hat{y} \in \mathbb{R}^n$$.

Goal: Compute $$\nabla_{\hat{y}} L(y, \hat{y})$$

Shape Analysis: $$ L(y, \hat{y})$$ is a scalar, and $$\hat{y}$$ is a $$n$$-dimensional vector, so we expect the gradient's 
shape to be `(output shape, input shape) = (1, n)`.

Code:

```python
y_minus_yhat 
```