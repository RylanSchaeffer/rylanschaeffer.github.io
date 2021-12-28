# K Means

K means is a clustering problem of finding $$K$$ points called __centroids__ (typically in Euclidean space)
that minimize the total squared distance from a set of given data $$\{x_n \}_{n=1}^N$$. Each
datum is assigned to the nearest centroid, which defines a cluster $$C_k$$. The optimization problem is:

$$ \min_{\{C_k\}} L(\{C_k\}) := \min_{\{C_k\}}  \sum_{k=1}^K \sum_{x_n \in C_k} \lvert \lvert x_n - \mu_k \lvert \lvert^2$$

where the centroids $$\mu_k := \frac{1}{\lvert C_k \lvert} \sum_{x_n \in C_k} x_n$$ are the average of the data
assigned to each cluster.

## Algorithms

### Lloyd's Algorithm

Lloyd's Algorithm is so ubiquitous it is often called the K Means algorithm, although
we should distinguish the K Means problem from any particular algorithm used to solve it.
Lloyd's algorithm repeats the two alternating steps until convergence:

1. Assign: For each datum $$x_n$$, compute the distance between the datum and the $$K$$ centroids. Assign
  the datum to the nearest centroid.
2. Update centroids: For each cluster, set the centroid $$\mu_k = \frac{1}{|C_k|} \sum_{x_n \in C_k} x_n$$
  based on the previous assignments.

__Theorem 1__: Lloyd's monotonically decreases the K Means objective until local convergence.

Proof: First, note that $$L(\{C_k\}) \geq 0$$ because $$\lvert \lvert x_n - \mu_k \lvert \lvert^2 \geq 0$$
and the sum of nonnegative terms is itself nonnegative. This means the objective function $$L(\{C_k\})$$
cannot be lowered indefinitely.

We show that each step cannot increase the loss. 

1. Assign: Note that

$$L_{post} = L_{pre} - \lvert \lvert x_n - \mu_{pre} \lvert \lvert^2 + \lvert \lvert x_n - \mu_{post} \lvert \lvert^2$$

Per the rules of the assignment step, $$x_n$$ is only reassigned if

$$\lvert \lvert x_n - \mu_{pre} \lvert \lvert^2 > \lvert \lvert x_n - \mu_{post} \lvert \lvert^2$$

If $$\mu_{pre} = \mu_{post}$$ i.e. the datum is not assigned to a new cluster, the loss is unchanged.
If the datum is assigned to a new cluster, we know that 

$$L_{post} - L_{pre} < 0$$

2. Update centroids: We first need to prove a lemma, that for a given set of data, the average
  of the data is the point with the smallest summed distanced to each datum. Specifically, let 
  $$\bar{z} := \frac{1}{N}\sum_n z_n$$ be the mean and $$z$$ be an arbitrary point. Then

  $$\sum_n \lvert \lvert z_n - \bar{z} \lvert \lvert^2 \leq \sum_n \lvert \lvert z_n - z \lvert \lvert^2$$

Proof: 

$$ \begin{align*}
&\sum_n \lvert \lvert z_n - z \lvert \lvert^2\\
&= \sum_n \lvert \lvert z_n - \bar{z} + \bar{z} - z \lvert \lvert^2\\
&= \sum_n \lvert \lvert z_n - \bar{z} \lvert \lvert^2 + \lvert \lvert \bar{z} - z \lvert \lvert^2 + 2 \sum_n (z_n \bar{z} - z_n z - \bar{z}\bar{z} + \bar{z} z)\\
&= \sum_n \lvert \lvert z_n - \bar{z} \lvert \lvert^2 + \lvert \lvert \bar{z} - z \lvert \lvert^2\\
&\geq \sum_n \lvert \lvert z_n - \bar{z} \lvert \lvert^2\\
\end{align*}
$$

This lemma tells us that relocated the centroids from the previously assigned points to the new points
cannot increase the sum of squared distances. Hence, the loss is nonincreasing.

### K Means++


### DP Means

One central question for clustering is choosing the number of clusters. Kulis and Jordan 2012
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
&= \mathcal{N}(\mu_k, \sigma I) \sum_n \mathbbm{I}(z_n = k)
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

$$ \{ \lvert \lvert x_n - \mu_1 \lvert \lvert^2, ..., \lvert \lvert x_n - \mu_k \lvert \lvert^2, \lambda \}$$

In other words, the observation will be assigned to the cluster with the smallest value
in the above set. Either the observation is close to an existing cluster, or it's more than
$$\lambda$$ away from all existing clusters and will thus create a new cluster.

This actually corresponds to a modified k-means objective function:

$$ \min_{\{C_k\}} L(\{C_k\}) := \min_{\{C_k\}}  \sum_{k=1}^K \sum_{x_n \in C_k} \lvert \lvert x_n - \mu_k \lvert \lvert^2 + \lambda k$$

where we can now see that there's a regularization term for the number of clusters.