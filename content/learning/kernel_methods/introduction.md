# Kernel Methods: Introduction

There are 4 key aspects of kernel methods:

1. Data are embedded in a "feature" vector space
2. Inside that feature space, we seek linear relationships between our data
3. In that feature space, constructing the actual features for each datum
  is not necessary; only the pairwise inner products are necessary.
4. The pairwise inner products can be computed directly from the original data.

## Warmup: Ordinary Linear Regression

To build up to kernel methods, suppose we wish to perform supervised learning
with a linear function class:

$$ g(x) := \langle w, x, \rangle$$

Given data $$\{(x_n, y_n)\}$$, we can stack the vectors to form an $$N \times D$$
matrix $$X$$ (where $$N$$ is the number of data and $$D$$ is the dimension 
of each $$x$$) and $$N \times 1$$ vector $$y$$. The solution that minimizes the 
mean squared error is:

$$
\begin{align*}
L(w) &= \lvert \lvert X w - y \lvert \lvert_2^2\\
0 &= \nabla_w L(w)\\
&= X^T (X w - y)\\
w &= (X^T X)^{-1} X^T y
\end{align*}
$$

Remark: This assumes that $$(X^T X)^{-1}$$ exists. If it does, we can rewrite
the parameters $$w$$ as 

$$w = X^T X (X^T X)^{-2} X^T y = X^T \alpha = \sum \alpha_n x_n $$

which shows that the parameters $$w$$ are some linear combination of the 
training data.

## Warmup: Ridge (L2) Linear Regression

Linear regression requires that $$ (X^T X)^{-1}$$ exists. To remove this constraint,
we can instead consider ridge (L2-regularized) regression. We again consider a
linear function class:

$$ g(x) := \langle w, x \rangle$$

But now, we seek parameters that minimize the regularized loss:

$$
\begin{align*}
L(w) &= \lvert \lvert X w - y \lvert \lvert_2^2 + \lambda \lvert \lvert w \lvert \lvert_2^2 \\
0 &= \nabla_w L(w)\\
&= X^T (X w - y) + \lambda w\\
X^T y &= X^T X w  + \lambda I_D w\\
w &= (X^T X + \lambda I_D )^{-1} X^T y
\end{align*}
$$

Recalling that $$D$$ is the dimension of $$x$$, this $$D \times D$$ matrix $$X^T X + \lambda I_D$$ will always be invertible. This 
particular expression for $$w$$ is called the **primal solution**, and it 
is commonly covered in most introductory linear regression courses. 
Given a new $$x$$, the model's prediction using the primal solution is:

$$g(x) = \langle w, x \rangle = y^T X (X^T X + \lambda I_D)^{-1} x$$

However, another expression for $$w$$ exists, called the **dual solution**. This dual solution
is given by

$$w = X^T (X X^T + \lambda I_N)^{-1} y$$

One way to show this is with the so-called
[push-through identity](https://en.wikipedia.org/wiki/Woodbury_matrix_identity).
Another way is to recall that in ordinary linear regression, we saw 
that the solution could be written as a linear combination of the training data and try
finding a similar form for ridge linear regression. If we assume that $$w := X^T \alpha$$
for some $$\alpha$$, we find that:

$$
\begin{align*}
L(w) &= \lvert \lvert X w - y\lvert \lvert_2^2 + \lambda \lvert \lvert w \lvert \lvert_2^2 \\
0 &= \nabla_w L(w)\\
&= X^T (X w - y) + \lambda w\\
w &= X^T (y - X w) / \lambda\\
\end{align*}
$$

Define $$\alpha := (y - X w) / \lambda$$ and solve for $$\alpha$$, using that $$w = X^T \alpha$$:

$$
\begin{align*}
\lambda \alpha &= y - X w\\
\lambda \alpha &= y - X X^T \alpha\\
\alpha &= (X X^T + \lambda I_N)^{-1} y\\
w &= X^T (X X^T + \lambda I_N)^{-1} y
\end{align*}
$$

Given a new $$x$$, the model's prediction using the dual solution is:

$$g(x) = \langle w, x \rangle = y^T (X X^T + \lambda I_N)^{-1} X x$$


A few remarks:
1. The two predictions are exactly the same
2. The primal solution expresses the parameters $$w$$ in terms of 
how the relative features co-vary with one another and co-vary with the regression target.
3. The dual solution expresses the parameters $$w$$ as a weighted combination
  of the training data, where the weights are determined by how similar each 
  datum is to every other datum.
4. The $$\alpha$$ are called the **dual variables**

The dual solution shows us that the linear model's predictions can be expressed
solely in terms of inner products between (1) the test datum and each training datum,
and (2) every pair of training data. The equivalence between primal and dual solutions
gives rise to kernel methods.
