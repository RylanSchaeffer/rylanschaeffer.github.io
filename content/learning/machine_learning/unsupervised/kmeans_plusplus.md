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
  be the loss for a set of centroids $$\mathcal{C}$$. For any data $$\mathcal{X}$$, 
  $$\mathbb{E}[\phi] \leq 8 (\log K + 2) \phi_{opt}$$.

## 

