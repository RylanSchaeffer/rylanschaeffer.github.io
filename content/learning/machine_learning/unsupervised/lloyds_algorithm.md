# Lloyd's Algorithm

Lloyd's Algorithm is an algorithm to solve the [K Means](k_means.md) problem
that is so ubiquitous it is often called the K Means algorithm, although
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

- __Assign__: Note that

$$L_{post} = L_{pre} - \lvert \lvert x_n - \mu_{pre} \lvert \lvert^2 + \lvert \lvert x_n - \mu_{post} \lvert \lvert^2$$

Per the rules of the assignment step, $$x_n$$ is only reassigned if

$$\lvert \lvert x_n - \mu_{pre} \lvert \lvert^2 > \lvert \lvert x_n - \mu_{post} \lvert \lvert^2$$

If $$\mu_{pre} = \mu_{post}$$ i.e. the datum is not assigned to a new cluster, the loss is unchanged.
If the datum is assigned to a new cluster, we know that

$$L_{post} - L_{pre} < 0$$

- __Update centroids__: We first need to prove a lemma, that for a given set of data, the average
  of the data is the point with the smallest summed distanced to each datum. Specifically, let
  $$\bar{z} := \frac{1}{N}\sum_n z_n$$ be the center and $$z$$ be an arbitrary point. Then

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
