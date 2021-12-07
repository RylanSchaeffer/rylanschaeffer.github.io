# Nystrom Approximation

The kernel (a.k.a. Gram) matrix grows quadratically with the number of data.
The Nystrom approximation says that for an $$n \times n$$ kernel matrix $$K$$,
we can approximate it with low error in the following manner: first,
randomly shuffle columns and rewrite $$K = \begin{bmatrix}W & K_{12}^T\\K_{12} & K_22 \end{bmatrix}$$  
where $$W$$ is $$m \times m$$.

## Properties

- (Kumar, Mohri and Talwalkar 2012) Let $$\Tilde{K}_k$$ denote the rank-k
  Nystrom approximation with $$m$$ columns that are sampled uniformly at random without replacement
  from $$K$$. Then $$\lvert K - \Tilde{K}_k \lvert_F \leq \lvert K - K_k \lvert_F + \epsilon$$
  where $$\epsilon = \mathcal{O}(m^{-1/4}) \lvert K \lvert_F 