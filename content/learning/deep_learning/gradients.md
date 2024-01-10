# Gradients in Math and Code

## General Rule for Computing Gradients

Computing gradients is done via the [chain rule](https://en.wikipedia.org/wiki/Chain_rule).
Getting the matrix calculus dimensions correct is often the tricky part.
One general rule is: if a function's input has shape 
`(A, B, C, ...)` and its output has shape `(X, Y, Z, ...)`, then the gradient of the output
with respect to the input should have shape `(X, Y, Z, ..., A, B, C, ...)`. The reason why is that, in general,
one needs to specify how each output element varies as each input element varies.

## Examples

Notes:
- Almost all these examples were drawn from neural networks but the principles should generally hold
- Because we often have a batch dimension in deep learning, I'll assume that each derivative with respect to network 
  inputs has a batch dimensions of size $$B$$

### Gradient of Scalar w.r.t. Scalar

- Motivating Example: $$L(y, \hat{y}) = \frac{1}{2} (y - \hat{y})^2$$ with $$y, \hat{y} \in \mathbb{R}$$.

- Goal: Compute $$\frac{d}{d\hat{y}} L(y, \hat{y})$$

- Shape Analysis: The output is a scalar, and the gradient is with respect to another scalar, so we expect
the gradient's shape to be `(output shape, input shape) = (1, 1)`.

- Code:

```python
B, D = 256, 1
y = np.random.randn(B, D)
yhat = np.random.randn(B, D)
loss = 0.5 * np.square(y - yhat)  # Shape: (B, 1)
dloss_dyhat = -np.einsum(
  "i,bj->bij",
  np.ones(1),
  y - yhat)  # Shape: (B, 1, 1)
```

### Gradient of Scalar w.r.t. Vector

- Motivating Example: $$L(y, \hat{y}) = \frac{1}{2} \lvert \lvert y - \hat{y} \lvert \lvert_2^2$$ with $$\hat{y} \in \mathbb{R}^n$$.

- Goal: Compute $$\nabla_{\hat{y}} L(y, \hat{y})$$

- Shape Analysis: $$ L(y, \hat{y})$$ is a scalar, and $$\hat{y}$$ is a $$n$$-dimensional vector, so we expect the gradient's 
shape to be `(output shape, input shape) = (1, n)`.

- Code:

```python
B, D = 256, 10
y = np.random.randn(B, D)
yhat = np.random.randn(B, D)
loss = 0.5 * np.square(y - yhat)  # Shape: (B, 1)
dloss_dyhat = -np.einsum(
  "i,bj->bij", 
  np.ones(1),
  y - yhat)  # Shape: (B, 1, D)
```

### Gradient of Vector w.r.t. Matrix

- Motivating Example: $$\hat{y} = W x$$ with $$\hat{y} \in \mathbb{R}^n$$, $$W \in \mathbb{R}^{n \times m}$$, and $$x \in \mathbb{R}^m$$.
- Goal: Compute $$\nabla_{W} \hat{y}$$
- Shape Analysis: $$\hat{y}$$ is a $$n$$-dimensional vector, and $$W$$ is an $$n \times m$$ matrix, so we expect the gradient's shape to be `(n, n, m)`.
- Code:

```python
B, output_dim, input_dim = 256, 10, 20
W = np.random.randn(output_dim, input_dim)
x = np.random.randn(B, input_dim)
yhat = np.einsum("ij,bj->bi", W, x)  # Shape: (B, output_dim)
dyhat_dW = np.einsum(
  "ij,bk->bijk",
  np.eye(output_dim),
  x)  # Shape: (B, output_dim, output_dim, input_dim)
```

### Gradient of Scalar w.r.t. Matrix

- Motivating Example: $$L(y, W x) = \frac{1}{2} \lvert \lvert y - W x \lvert \lvert_2^2$$ with $$y \in \mathbb{R}^n$$, $$W \in \mathbb{R}^{n \times m}$$, and $$x \in \mathbb{R}^m$$.
- Goal: Compute $$\nabla_{W} L(y, W x)$$
- Shape Analysis: $$ L(y, W x)$$ is a scalar, and $$W$$ is an $$n \times m$$ matrix, so we expect the gradient's shape to be `(1, n, m)`.
- Code:

```python
B, output_dim, input_dim = 256, 10, 20
y = np.random.randn(B, output_dim)
W = np.random.randn(output_dim, input_dim)
x = np.random.randn(B, input_dim)
diff = y - np.einsum("rc,bc->br", W, x)  # Shape: (B, output_dim)
loss = 0.5 * np.square(
  np.linalg.norm(diff, axis=1, keepdims=1)
)  # Shape: (B, 1)
dloss_dyhat = -np.einsum(
  "i,bj->bij",
  np.ones(1),
  diff)  # Shape: (B, 1, output_dim)
dyhat_dW = np.einsum(
  "ij,bk->bijk",
  np.eye(output_dim),
  x)  # Shape: (B, output_dim, output_dim, input_dim)
dloss_dW = np.mean(
  np.einsum(
    "bij,bjjk->bjk",
    dloss_dyhat,
    dyhat_dW),
  axis=0,
  keepdims=True)  # Shape: (1, output_dim, input_dim)
```

- Note: In the final calculation, we average over the batch dimension to compute the average gradient across the batch.
- Note: All we did was apply the chain rule. The key is to get the dimensions right.

### Gradient of Elementwise Nonlinearity Applied to Vector w.r.t. Vector

- Motivating Example: $$a = \phi(h)$$ for vectors $$a, h \in \mathbb{R}^n$$, where $$\phi$$ is an elementwise nonlinearity.
- Goal: Compute $$\nabla_{h} a$$
- Shape Analysis: $$a$$ is a $$n$$-dimensional vector, and $$h$$ is a $$n$$-dimensional vector, so we expect the gradient's shape to be `(n, n)`.
- Code:

```python
B, D = 256, 10
h = np.random.randn(B, D)
sigmoid = lambda x: 1 / (1 + np.exp(-x))
a = sigmoid(h)  # Shape: (B, D)
dsigmoid_dargument = lambda x: sigmoid(x) * (1 - sigmoid(x))
da_dh = np.einsum(
  "bi,ij->bij",
  dsigmoid_dargument(h),
  np.eye(D),
)  # Shape: (B, D, D)
```

- Note: We had to use the eye because einsum doesn't directly support adding a dimension in this context.