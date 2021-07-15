# Indian Buffet Process

There are many views of the Indian Buffet Process (IBP). One view
is that it defines a distribution over binary matrices with finitely
many rows and infinitely many columns. Another view is that the IBP is
the infinite limit of a finite binary latent feature model, analogous
to how the Chinese Restaurant Process is the infinite limit of
a finite latent mixture model.

The Indian Buffet Process is similar in many ways to the [Chinese 
Restaurant Process](chinese_restaurant_process.md), and in fact,
originated as an 

## Definition

### Infinite Limit Definition

One way to define the IBP is as the infinite limit of a [Beta-Bernoulli
compound distribution](../probability/beta_binomial_distribution.md), marginalizing out the 
beta random variable. Specifically, fix an integer number $$K$$ of possible features. Then,
draw $$K$$ values from $$Beta(\alpha / K, 1)$$ to represent the probability that any observation
possesses that $$k$$th feature. Then, for each observation $$n = 1, ..., N$$ and for each
feature $$k = 1, ..., K$$, draw whether that $$n$$th observation has the $$k$$th feature as 
a Bernoulli with probability $$\mu_k$$:

$$
\begin{align*}
\mu_k \sim_{i.i.d.} Beta(\alpha/K, 1)\\
Z_{nk} | \mu \sim_{i.i.d.} Bern(\mu_k))
\end{align*}
$$

If we integrate out $$\mu_k$$, we find that the probability $$Z_{1k}$$ equals 1 is Bernoulli
distributed with parameter $$\frac{\alpha/K}{\alpha/K}$$:

$$
\begin{align*}
p(Z_{1k} = 1) &= \int_{\mu_k} p(Z_{1k} = 1 | \mu_k) p(\mu_k) d\mu_k\\
&= \frac{\Gamma(\alpha/K + 1) \Gamma(\alpha / K + 1)}{\Gamma(\alpha/K) \gamma(\alpha/K + 1 + 1)}\\
&= \frac{\alpha/K}{\alpha/K}
\end{align*}
$$

To leading order, the probability is $$\alpha/K$$. Taking the limit as $$K \rightarrow \infty$$,
the number of non-zero $$k$$ in $$Z_{1}$$ will be $$ \sim Binomial(\alpha/K, K) 
\rightarrow Poisson(\alpha)$$. This is why the 1st customer samples $$Poisson(\alpha)$$ new dishes.

A helpful resource for this approach is Teh et al. 2007 Stick-breaking Construction for the 
Indian Buffet Process.

## Properties

### Relation to Beta Process

Thibaux and Jordan 2007 showed that the [beta process](beta_process.md) is the
de Finetti mixing distribution of the IBP, akin to how the [Dirichlet process](dirichlet_process.md)
is the de Finetti mixing distribution of the [Chinese Restaurant Process](chinese_restaurant_process.md).
A quick recap of the .

We know that 

## Inference

### Variational Inference for Linear Gaussian Model

Doshi-Velez et al. (2009) introduced two related mean-field variational inference algorithms
for the IBP with a linear-Gaussian likelihood. Both inference
algorithms consider the same generative model:

$$
\begin{align*}
Z \in \{0, 1\}^{N \times K} &\sim IBP(\alpha)\\ 
A_k \in \mathbb{R}^{K} &\sim N(\phi_k, \Phi_k)\\
\epsilon_n \in \mathbb{R}^{D} &\sim N(0, \sigma_x^2 I)\\ 
X \in \mathbb{R}^{N \times D} &= Z A + \epsilon
\end{align*}
$$

To approach the IBP, the authors use the IBP's stick-breaking construction, which
means placing a prior on $$\pi_k \in (0, 1)$$ per column of $$Z$$ and then drawing 
$$z_{n, k}| pi_k \sim Bern(\pi_k)$$. There are two ways to infer the stick lengths
$$\{\pi_k\}$$: directly, which the authors term the "finite" approach, and as the 
product of multiple betas, which the authors term the "infinite" approach:

$$\pi_k = \prod_{i=1}^k v_i \quad v_i \sim Beta(\alpha, 1)$$

The nice property of the infinite approach is that it preserves the independence of the
Beta variables $$\{v_k\}$$ when performing inference. Define the variables as $$ W := \{ \pi, Z, A\}$$
and the parameters as $$\theta := \{\alpha, \sigma_A, \sigma_x\}$$. The authors posit 
the following mean-field variational family:

$$q(W) := q(\pi; \tau) q(A; \phi, \Phi) q(Z; \nu)$$

where $$\tau := \{\tau_{k, 1}, \tau_{k, 2} \}_{k=1}^K, \phi := \{\phi_k\}_{k=1}^K,
\Phi := \{\Phi_k\}_{k=1}^K, \nu := \{\nu_{n, k} \}$$ are the variational parameters. More specifically,
in the finite variational algorithm, the variational family is:

$$q(W) = \Big(\prod_{k=1}^K q(\pi_k; \tau_{k, 1}, \tau_{k, 2}) \Big) \Big( \prod_{n=1}^N \prod_{k=1}^K
q(z_{n, k}; \nu_{n, k}) \Big) \Big(\prod_{k=1}^K q(A_k| \phi_k, \Phi_k) \Big)$$

whereas in the infinite variational algorithm, the variational family is:

$$q(W) = \Big(\prod_{k=1}^K \underbrace{\prod_{k' \leq k} q(v_k; \tau_{k, 1}, \tau_{k, 2})}_{=\pi_k} \Big)
\Big( \prod_{n=1}^N \prod_{k=1}^K q(z_{n, k}; \nu_{n, k}) \Big) \Big(\prod_{k=1}^K q(A_k| \phi_k, \Phi_k) \Big)$$

The key difference between the finite version and infinite version is in whether we model
$$\pi_k \sim Beta(\tau_{k, 1}, \tau_{k, 2})$$ (the finite version) or whether we model
$$v_k \sim Beta(\tau_{k, 1}, \tau_{k, 2})$$ (the infinite version). Moving forward, I'll
refer only to the infinite algorithm since the finite algorithm is very similar.
Since this is a variational algorithm, inference is performed by minimizing a variational lower bound on the log likelihood:

$$
\begin{align*}
\log p(X \lvert \theta) &\leq \mathbb{E}_q[\log p(X, W \lvert \theta)] + H[q]\\
&= H[q] + \mathbb{E}_q \Big[ \log p(\pi; \alpha) p(A | \{\phi_k, \Phi_k \}; \sigma_a) p(Z | \pi) p(X | Z, A ; \sigma_x) \Big]\\
&= H[q] + \sum_{k=1}^K \sum_{k' \leq k} \mathbb{E}_{q(v_k)}[\log p(v_k|\alpha)]\\ 
&\quad    + \sum_{k=1}^K \mathbb{E}_{q(A_k)}[\log p(A_k|\phi_k, \Phi_k; \sigma_a)] + \\
&\quad    + \sum_{k=1}^K \sum_{n=1}^N \mathbb{E}_{q(v)q(Z)}[\log p(z_{nk} | v)] + \\
&\quad    + \sum_{n=1}^N \mathbb{E}_{q(Z) q(A)}[\log p(X_n | Z, A; \sigma_x)]
\end{align*}
$$

Almost every term can be written in a closed form. The term inside the first sum is:

$$
\begin{align*}
\mathbb{E}_{q(v_k)}[\log p(v_k|\alpha)] &= \mathbb{E}_{q(v_k)}[\log \alpha v_k^{\alpha - 1}]\\
&= \log \alpha + (\alpha - 1) \mathbb{E}_{q(v_k)}[\log v_k]\\
&= \log \alpha + (\alpha - 1) (\psi(\tau_{k, 1}) - \psi(\tau_{k, 1} + \tau_{k, 2}))
\end{align*}
$$

where $$\psi(\cdot)$$ is the digamma function.

The term inside the second sum is: 

$$
\begin{align*}
\mathbb{E}_{q(A_k)}[\log p(A_k|\phi_k, \Phi_k; \sigma_a)] &=
- \frac{D}{2} \log (2 \pi \sigma_a^2) - \frac{1}{2\sigma_a^2} (\phi_k^T \phi_k + Tr[\Phi_k])
\end{align*}
$$

The term inside the fourth sum is:

$$
\begin{align*}
\mathbb{E}_{q(Z) q(A)}[\log p(X_n | Z, A; \sigma_x)]
&= \mathbb{E}_{q(Z) q(A)}[-\frac{D}{2} \log (2 \pi \sigma_n^2) - \frac{1}{2\sigma_n^2} (X_n - Z_n A)(X_n - Z_n A)^T ]\\
&= -\frac{D}{2} \log (2 \pi \sigma_n^2) - \frac{1}{2\sigma_n^2} (X_n X_n^T - 2X_n \mathbb{E}_{q(A)}[A^T] \mathbb{E}_{q(Z)})[Z^T] + \mathbb{E}_{q(Z) q(A)}[Z_n A A^T Z_n^T])\\
&= 10 
\end{align*}
$$