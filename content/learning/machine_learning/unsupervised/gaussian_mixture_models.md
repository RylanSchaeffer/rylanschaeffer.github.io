# Gaussian Mixture Models



## K-Means is Low-Variance Limit of Expectation Maximization in GMM

The [k-means](k_means.md) clustering problem can be derived from a zero-variance limit of
expectation maximization in a Gaussian mixture model. For a finite GMM with $$N$$ observations $$\{x_n\}$$,
we want to infer cluster assignments $$\{z_n\}$$ and each cluster's Gaussian parameters
Gaussian parameters $$\{\mu_c, \Sigma_c\}$$. Let $$\pi_c$$ denote the mixing proportion of
the $$c$$th class. The marginal distribution of an observation is:

$$p(x_n) = \sum_{c=1}^C p(x_n | z_n = c) p(z_n = c) = \sum_{c=1}^C \mathcal{N}(x_n; \mu_c, \Sigma_c) \pi_c$$

The cluster assignments and cluster parameters can be learnt using [Expectation Maximization](../../content/learning/probabilistic_graphical_models/learning/expectation_maximization.md).
Assuming the clusters each have equal covariance $$\sigma I$$, the E step takes the following form:

$$
\begin{align*}
p(z_n = c | x_n) &= \frac{p(x_n | z_n = c) p(z_n = c)}{p(x_n)}\\
&= \frac{\exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}{\sum_c \exp(-\frac{1}{2\sigma} ||x_n - \mu_c||_2^2) \pi_c}
\end{align*}$$

As $$\sigma \rightarrow 0$$, all mass is placed on the nearest centroid, just as we do in
k-means clustering. The M step then updates the centroids (cluster means) to the average of the points
assigned to that particular cluster:

$$\mu_c = \frac{1}{|X_c|} \sum_{x_n \in X_c} x_n $$

where $$X_c = \{ x_n \colon p(z_n = c \lvert x_n) = 1 \}$$ is the set of observations assigned to the $$c$$th cluster.

We can phrase this as an optimization problem with the objective function:

$$\min_{\{\mu_c\}, \{z_n\}} \sum_{n=1}^N \mathbb{I}(z_n = c) ||x_n - \mu_c||_2^2$$

where the cluster centroids are defined above.