# Empirical Risk Minimization

Suppose there is a joint distribution $$(x, y ) \sim D$$ of
interest, and we are given samples $$\{x_n , y_n \}_{n=1}^N$$,
and we would like to find a function/model/hypothesis/predictor
$$h: \mathcal{X} \rightarrow \mathcal{Y}$$ that is "close" to the 
true conditional relationship, where closeness is measured
by some loss function $$\ell: \mathcal{Y} \times \mathcal{Y} \rightarrow
\mathbb{R}_+$$.

The goal is to find $$h$$ that minimizes

$$H(h) := \mathbb{E}_{(x,y) \sim D}[\ell(h(x), y)] $$

Define the **excess risk** for any hypothesis $$h$$ as:

$$E(h) := L(h) - \inf_{g \in \mathcal{H}} L(g)$$

Empirical Risk Minimization says to choose the hypothesis $$\hat{h}$$:

$$\hat{h} := \min_{h \in \mathcal{H}} \hat{L}(h) := \frac{1}{N} \sum_n \ell(h(x_n), y_n)$$

## Asymptotic Excess Risk

A key question is: under what conditions does the excess risk of 
the empirical risk minimizer go to 0 as the number of samples $$N \rightarrow \infty$$?

$$E(\hat{h}^{(N)}) = f(N)$$

where $$f(N) \rightarrow 0$$ as $$N \rightarrow \infty$$.

#### Example: Noiseless Linear Regression with Isotropic Gaussian Covariates

Let $$x_n \sim \mathcal{N}(0, I_D)$$, and $$y_n = \langle x_n ,\theta^* \rangle$$. Let $$\ell(a, b) = (a-b)^2$$.
The solution is given by the OLS estimator:

$$\hat{\theta} = (X^T X)^+ X^T X \theta^*$$

If $$N > D$$, then $$(X^T X)$$ is invertible w.h.p, and the excess error will be 0. But 
if $$N \leq D$$, then the excess risk is:



## Properties

- For any $$h \in \mathcal{H}, \mathbb{E}[\hat{L}(h)] = L(h)$$. Proof by linearity of expectation.

- 