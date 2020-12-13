# Gaussian Processes

A Gaussian process (GP) is a stochastic process such that any finite subset of the set 
is distributed as a multivariate Gaussian. Specifically, the set of random variables
$$\{f(x) : x \in X \}$$ is said to be drawn from a GP with mean function $$\mu(\cdot)$$
and covariance function $$k(\cdot, cdot)$$ if for any $$x_1, ..., x_m \in X$$

$$\begin{bmatrix} f(x_1) \\ \vdots \\ f(x_m) \end{bmatrix} \sim \mathcal{N} \Big(
\begin{bmatrix} \mu(x_1) \\ \vdots \\ \mu(x_m) \end{bmatrix},
\begin{bmatrix} k(x_1, x_1) & \dots & k(x_1, x_m) \\ \vdots & & \vdots \\ 
k(x_m, x_1) & \dots & k(x_m, x_m) \end{bmatrix} \Big)$$

The following notation is used as shorthand:

$$ f(\cdot) \sim \mathcal{GP}(\mu(\cdot), k(\cdot, \cdot))$$

Gaussian processes are a generalization of a finite-dimensional multivariate Gaussian
random vector. We can think of each index element $$x$$ as the input to function $$f(\cdot)$$
and the corresponding elements $$f(x)$$ as the function evaluated at that point. Consequently,
GPs are frequently described as "distributions over functions."

In order for a GP to be valid, the covariance function $$k(\cdot, \cdot)$$ must define a 
valid covariance matrix when evaluated at $$x_1, ..., x_m$$. Any function is therefore a valid
covariance function if the kernel matrix $$K$$ is always positive semidefinite for any points
$$x_1, ..., x_m$$.

## GP Regression

One common application of GPs is regression. GP Regression can be viewed as Bayesian regression
where the parameters are marginalized out. As a warm-up, let's quickly review how Bayesian linear
regression works. Suppose we have some data set $$X \in \mathbb{R}^{n \times d}, Y \in
\mathbb{R}^{n}, \theta \in \mathbb{R}^d$$ and we'd like to model $$Y$$ as a linear function of $$X$$
with additive errors $$\epsilon \in \mathbb{R}^n$$:

$$Y = X \theta + \epsilon $$

Assuming our data are sampled i.i.d., the parameter posterior is given by

$$ p(\theta | X, Y) = \frac{p(\theta) \prod_n p(y_n|\theta, x_n) }{\int_{\theta} p(\theta) \prod_n p(y_n|\theta, x_n) d\theta}$$

and the posterior predictive is given by

$$p(y_{new}|x_{new}, X, Y) = \int_{\theta} p(y_{new}|x_{new}, \theta) p(\theta | X, Y) d\theta $$

If we place Gaussian priors on the errors $$\epsilon$$ and the parameters $$\theta$$, then both 
the parameter posterior and the posterior predictive are Gaussian. For instance, suppose

$$
\begin{align*}
\theta &\sim \mathcal{N}(0, \tau^2 I)\\
\epsilon &\sim \mathcal{N}(0, \sigma^2)
\end{align*}
$$

Then the parameter posterior and the posterior predictive are

$$
\begin{align*}
\theta | X, Y &\sim \mathcal{N}(\frac{1}{\sigma^2} A^{-1} X^T y, A^{-1})\\
y_{new} | x_{new}, X, Y &\sim \mathcal{N}(\frac{1}{\sigma^2} x_{new}^T A^{-1} X^T Y, x_{new}^T A^{-1} x_{new} + \sigma^2)
\end{align*}
$$

where $$A = \frac{1}{\sigma^2} X^T X + \frac{1}{\tau^2}I$$. With Gaussian processes, we can 
work directly with the posterior predictive because we know that for any training data $$(X_{train}, Y_{train})$$
and any test data $$(X_{test}, Y_{test})$$, the combination of the training and test data must have a joint
Gaussian distribution. Specifically, suppose we model $$y_n$$ as some function of $$x_n$$ with additive 
Gaussian noise $$\epsilon_n \sim \mathcal{N}(0, \sigma^2)$$:

$$y_n = f(x_n) + \epsilon_n$$

If we place a zero mean Gaussian Process prior on the function $$f$$, then :

$$f(\cdot) \sim \mathcal{GP}(0, k(\cdot, \cdot))$$

Because the sum of independent Gaussian random variables is itself a random variable, we have that

$$
\begin{bmatrix}Y_{train} \\ Y_{test} \end{bmatrix} = \mathcal{N} \Big(
\begin{bmatrix} \end{bmatrix} \begin{bmatrix} \end{bmatrix}
\Big)
$$

For a more complete explanation, see [Stanford CS299's notes](http://cs229.stanford.edu/section/cs229-gaussian_processes.pdf).

TODO: finish