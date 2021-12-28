# K Means++

K Means++ is an algorithm to solve the [K Means](k_means.md) problem identical to
[Lloyd's Algorithm](lloyds_algorithm.md) but that uses a different initialization of 
cluster centroids. By intelligently choosing the centroids, K Means++ gains performance
guarantees and typically converges significantly faster.

## Description

The K Means++ algorithm initializes centroids in the following manner:

1. Sample a data point uniformly at random; this is the first centroid.
2. For k = 2, 3, ..., K:
    - Compute the distance from each point $$x \in \mathcal{X}$$ to the nearest existing centroid.
      Call these $$D(x)$$
    - Define the distribution $$p(x) = D(x)^2 / \sum_{x' \in \mathcal{X}} D(x')^2 $$
    - Choose the next centroid by sampling from the distribution

Then, K Means++ switches to Lloyd's algorithm starting with the sampled centroids.

## Properties

- __Theorem__: Let $$\phi := \sum_{x \in \mathcal{X}} \min_{c \in \mathcal{C}} ||x - c||^2$$
  be the loss for a set of centroids $$\mathcal{C}$$. For any dataset $$\mathcal{X}$$, 
  $$\mathbb{E}[\phi] \leq 8 (\log K + 2) \phi_{opt}$$.

## Proof of Theorem

__Overview__: The approach will be to show (1) that if we could initialize one centroid in each
cluster in the optimal clustering, the error is bounded, and (2) we can come close to initializing
one centroid in each optimal cluster using the above sampling procedure.

__Lemma 1__: Let $$X$$ be a set of points, and define $$\mu = \frac{1}{\lvert X \lvert} \sum_{x \in X} x$$
as the mean. Let $$z$$ be an arbitrary point. Then

$$ \sum_x \lvert \lvert x - z  \lvert \lvert^2 - \sum_x \lvert \lvert x - z  \lvert \lvert^2 = \lvert X \lvert \, \lvert \lvert \mu - z  \lvert \lvert^2$$

Proof: Starting with the LHS and letting $$\lvert X \lvert$$ denote the cardinality of $$X$$.

$$
\begin{align*}
&\sum_x \lvert \lvert x - z  \lvert \lvert^2 - \sum_x \lvert \lvert x - z  \lvert \lvert^2\\
&= \sum_x x^T x - 2x^T z + z^T z - (\sum_x x^T x - 2 x^T \mu + \mu^T \mu)\\
&= \lvert X \lvert z^T z - \lvert X \lvert \mu^T \mu + \sum_x -2 x^T z + 2 x^T \mu\\
&= \lvert X \lvert z^T z - \lvert X \lvert \mu^T \mu + \frac{\lvert X \lvert}{\lvert X \lvert}\sum_x -2 x^T z + 2 x^T \mu\\
&= \lvert X \lvert (z^T z + \mu^T \mu - 2 \mu^T z)\\
&= \lvert X \lvert \lvert \lvert \mu - z  \lvert \lvert^2
\end{align*}
$$


__Lemma 2__: Let $$A$$ be an arbitrary cluster in $$C_{opt}$$ and let $$C$$ be the clustering with a single centroid, 
chosen uniformly at random from $$A$$. Then

$$\mathbb{E}[\phi(A)] = 2 \phi_{opt}(A)$$

Proof: Define the optimal centroid $$\mu_A \defeq \frac{1}{\lvert A \lvert} \sum_{a \in A} a$$.

$$
\begin{align*}
&\mathbb{E}[\phi(A)]\\
&= \sum_{a_0 \in A} p(a_0 \text{ initial centroid}) \, \phi(A)\\
&= \sum_{a_0 \in A} \frac{1}{\lvert A \lvert} \sum_{a \in A} \lvert \lvert a - a_0 \lvert \lvert^2\\
&= \frac{1}{\lvert A \lvert} \sum_{a_0 \in A} \Big(\lvert A \lvert \, \lvert \lvert a_0 - \mu_A  \lvert \lvert^2 +  \sum_{a \in A} \lvert \lvert a - \mu_A \lvert \lvert^2  \Big)\\
&= \sum_{a_0 \in A} \lvert \lvert a_0 - \mu_A  \lvert \lvert^2 +  \frac{1}{\lvert A \lvert} \sum_{a_0 \in A} \sum_{a \in A} \lvert \lvert a - \mu_A \lvert \lvert^2\\
&= 2 \sum_{a \in A} \lvert \lvert a - \mu_A  \lvert \lvert^2\\
&= 2 \phi_{opt}(A)
\end{align*}
$$
