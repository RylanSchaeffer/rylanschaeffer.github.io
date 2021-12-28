# DP Means

DP Means is an algorithm to solve the [K Means](k_means.md) problem. One central
question for Lloyd's algorithm is choosing the number of clusters. Kulis and Jordan 2012
introduced a modification of Lloyd's Algorithm that allows for adding clusters dynamically.
To do this, they take a low-variance limit of a
[Dirichlet Process](../content/learning/bayesian_nonparametrics/dirichlet_process.md)
which leads to a very simple and very nice algorithm that they called DP-Means.

Consider the following Dirichlet Process, where the base distribution is a zero-mean isotropic
Gaussian $$\mathcal{N}(0, \rho I)$$.

$$
\begin{align*}
\{ \pi_k, \mu_k \}_{k=1}^{\infty} &\sim DP(G_0, \alpha)\\
z_1,..., z_N &\sim Discrete(\pi)\\
x_1,..., x_N &\sim \mathcal{N}(\mu_{z_n}, \sigma I)
\end{align*}
$$

Letting $$X, Z$$ denote the complete set of observations and cluster assignments respectively,
for the $$n$$th data point, the probability it belongs to the $$k$$th cluster is:

$$
\begin{align*}
p(z_n = k|X, Z_{-n}) &\propto p(x_n|z_n = k) p(z_n = k|X_{-n}, Z_{-n})\\
&= \mathcal{N}(\mu_k, \sigma I) \sum_n \mathbb{I}(z_n = k)
\end{align*}
$$

And the probability it belongs to a new cluster is:

$$
\begin{align*}
p(z_n = new|X, Z_{-n}) &\propto p(x_n|z_n = new) p(z_n = new|X_{-n}, Z_{-n})\\
&= \int \mathcal{N}(x_n|\mu, \sigma I) dG_0(\mu) \alpha\\
\end{align*}
$$

The inner integral is a Normal-Normal compound distribution, which yields
a new Normal distribution $$x_n \sim \mathcal{N}(0, (\rho + \sigma) I)$$.
The easiest way to see this is to realize $$x_n = (x_n - \mu) + \mu$$ and
we know that $$x - \mu \sim \mathcal{N}(0, \sigma I)$$ and $$\mu \sim \mathcal{N}(0, \rho I)$$;
then, by linearity of expectation and variance, we know that the expected value
of $$x_n$$ is $$0$$ and the variance is $$\sigma + \rho$$.

If we redefine the Dirichlet Process's concentration parameter $$\alpha$$ as

$$\alpha := (1 + \rho / \sigma )^{d/2} \exp(- \lambda / 2 \sigma)$$

for a new parameter $$\lambda$$, we obtain the following probabilities for cluster
assignments:

$$p(z_n = k| ...) \propto \mathcal{N}(\mu_k, \sigma I) \sum_n \mathbb{I}(z_n = k)$$

and

$$p(z_n = new| ...) \propto \exp(- \frac{\lambda}{2\sigma} - \frac{\lvert \lvert x_n \lvert \lvert^2}{2(\rho + \sigma})$$

Then taking the limit as $$\sigma \rightarrow 0$$, the numerators will be dominated
by the smallest value of:

$$ \Big\{ \lvert \lvert x_n - \mu_1 \lvert \lvert^2, ..., \lvert \lvert x_n - \mu_k \lvert \lvert^2, \lambda \Big\}$$

In other words, the observation will be assigned to the cluster with the smallest value
in the above set. Either the observation is close to an existing cluster, or it's more than
$$\lambda$$ away from all existing clusters and will thus create a new cluster.

This actually corresponds to a modified k-means objective function:

$$ \min_{\{C_k\}} L(\{C_k\}) := \min_{\{C_k\}}  \sum_{k=1}^K \sum_{x_n \in C_k} \lvert \lvert x_n - \mu_k \lvert \lvert^2 + \lambda k$$

where we can now see that there's a regularization term for the number of clusters.


