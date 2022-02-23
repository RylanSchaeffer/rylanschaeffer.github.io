# Nonparametric Statistics

A statistical model on a sample space $$X$$ is a set of probability measures on $$X$$.

$$M \subset PM(X)$$

Often times, it is useful to assume that the probability measures in the model can
be indexed by some parameters $$\theta$$:

$$M := \{ P_{\theta} \lvert \theta \in T \}$$

for some set $$T$$ and where we assume that $$\theta \rightarrow P_{\theta}$$ is bijective.
We say that the model is __parametric__ if $$T$$ has finite dimension. If $$T$$ does not have
finite dimension, then the model $$M$$ is __nonparametric__.

### Example

Suppose we observe $$X_1 = x_1, ..., X_N = x_N \in \mathbb{R}^D$$ and wish to estimate the density.
If we assume a Gaussian model, then we need to fit 2 parameters (mean and covariance),
each with fixed dimension. This would be a parametric model. If we instead use a kernel density
estimate model by placing a Gaussian bump at each data point, then the number of parameters
scales with the number of observations and thus there is no finite number of parameters that
identifies the model.