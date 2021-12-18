# K-Means

K-means is a clustering problem of finding $$K$$ points called __centroids__ (typically in Euclidean space)
that minimize the total squared distance from a set of given data $$\{x_n \}_{n=1}^N$$. Each
datum is assigned to the nearest centroid, which defines a cluster $$C_k$$. The optimization problem is:

$$ \min_{\{C_k\}} L(\{C_k\}) := \sum_{k=1}^K \sum_{x_n \in C_k} \lvert \lvert x_n - \mu_k \lvert \lvert^2$$

where $$\mu_k := \frac{1}{|C_k|} \sum_{x_n \in C_k} x_n$$

## Algorithms

### Lloyd's Algorithm

Lloyd's Algorithm is so ubiquitous it is often called the K-Means algorithm, although
we should distinguish the K-Means problem from any particular algorithm used to solve it.

__Theorem 1__: Lloyd's monotonically decreases the above objective until local convergence.

Proof: First, note that $$L$$


### K-Means++


### DP-Means

Kulis and Jordan 2012 introduced a 