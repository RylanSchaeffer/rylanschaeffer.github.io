# Principal Component Analysis

Principal component analysis (PCA) is a linear unsupervised learning method useful
for structure discovery and dimensionality reduction. PCA can be viewed in many complementary
ways.

## PCA as the Eigendecomposition of the Covariance

Suppose we have a vector-value random variable $$X \in \mathbb{R}^D$$ with
mean $$\mu \in \mathbb{R}^D$$ and covariance $$\Sigma \in \mathbb{R}^{D \times D}$$.
The covariance matrix $$\Sigma$$ is a symmetric positive semi-definite matrix, meaning
it admits an eigendecomposition:

$$\Sigma = U \Lambda U^T$$

where $$U \in \mathbb{R}^{D \times D}$$ is an orthogonal matrix of eigenvectors, and 
$$\Lambda \in \mathbb{R}^{D \times D}$$ is a diagonal matrix of eigenvalues
$$\lambda_1 \geq \lambda_2 \geq ... \geq \lambda_D \geq 0$$.
The eigenvectors $$\{v_n\}$$ are orthonormal, meaning they point along different orthogonal 
directions with length (norm) 1. The eigenvalues are the lengths of the different directions, 
and correspond to the variance the data displays in those directions. That is, $$\lambda_n$$ is the
variance of the data in the direction of $$v_n$$.

The above text describes the true covariance, but the same perspective holds for the empirical covariance.
Suppose we instead have data $$\{x_n\}_{n=1}^N$$, where $$N$$ is the number of data points, and we stack the data in a matrix:

$$X \in \mathbb{R}^{D \times N}$$

We subtract the mean to center the data:

$$\bar{X} := X - \Big( \frac{1}{N} \sum_n x_n \Big)\mathbf{1}^T  $$

The empirical covariance matrix is defined as:

$$\hat{\Sigma} := \frac{1}{N - 1} \bar{X} \bar{X}^T$$

The empirical covariance matrix is also symmetric positive semi-definite, and also admits an eigendecomposition:

$$\hat{\Sigma} = \hat{U} \hat{\Lambda} \hat{U}^T $$

where $$\hat{U} \in \mathbb{R}^{D \times D}$$ is the orthogonal matrix of empiric eigenvectors, and
$$\hat{\Lambda} \in \mathbb{R}^{D \times D}$$ is the diagonal matrix of empirical eigenvalues.



