# Nystrom Approximation

The kernel (a.k.a. Gram) matrix grows quadratically with the number of data $$N$$. Using it 
requires space $$O(N^2)$$ and time $$O(N^3)$$. The Nystrom approximation
provides a way to create a rank-$$k$$ approximation of the kernel matrix with space
$$O(kN)$$ and time $$O(k^2N)$$.


The Nystrom approximation says that for an $$n \times n$$ kernel matrix $$K$$,
we can approximate it with low error in the following manner: first,
randomly shuffle columns and rewrite $$K = \begin{bmatrix}W & K_{12}^T\\K_{12} & K_22 \end{bmatrix}$$  
where $$W$$ is $$m \times m$$.

## Properties

- (Kumar, Mohri and Talwalkar 2012) Let $$\tilde{K}_k$$ denote the rank-k
  Nystrom approximation with $$m$$ columns that are sampled uniformly at random without replacement
  from $$K$$. Then 

$$\lvert\lvert K - \Tilde{K}_k \lvert \lvert_F \leq \lvert\lvert K - K_k \lvert \lvert_F + \epsilon$$

where $$\epsilon = \mathcal{O}(m^{-1/4}) \lvert \lvert K \lvert_F $$.