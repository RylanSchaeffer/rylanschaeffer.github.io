# K Means

K means is a clustering problem of finding $$K$$ points called __centroids__ (typically in Euclidean space)
that minimize the total squared distance from a set of given data $$\{x_n \}_{n=1}^N$$. Each
datum is assigned to the nearest centroid, which defines a cluster $$C_k$$. The optimization problem is:

$$ \min_{\{C_k\}} L(\{C_k\}) := \min_{\{C_k\}}  \sum_{k=1}^K \sum_{x_n \in C_k} \lvert \lvert x_n - \mu_k \lvert \lvert^2$$

where the centroids $$\mu_k := \frac{1}{\lvert C_k \lvert} \sum_{x_n \in C_k} x_n$$ are the average of the data
assigned to each cluster.

## Algorithms

- [Lloyd's Algorithm](lloyds_algorithm.md)
- [K Means++](kmeans_plusplus.md)
- [DP Means](dp_means.md)
