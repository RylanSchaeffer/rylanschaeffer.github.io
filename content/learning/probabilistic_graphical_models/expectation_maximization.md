# Expectation Maximization

Previously, we assumed that all variables were observed. Now we consider the presence
of latent (unobserved) variables. The presence of latent variables can screw up
parameter estimation. For instance, if $$x$$ is observed and no latent variables are present,
then we can directly maximize the log likelihood:

$$\argmax_{\theta} \log p(x|\theta) $$

However, if there exist latent variables $$y$$, then directly maximizing the log likelihood
is no longer possible:

$$\argmax_{\theta} \log \int_y p(x, y| \theta) $$


Expectation Maximization (EM) is a principled iterative algorithm for simultaneously
inferring both latent variables and parameters for their distributions.
For concreteness, suppose we have observable random variable $x$, latent variable
$$y$$ and parameters $$\theta = \{\theta_x, \theta_y\}$$ for the distributions $$p(y| \theta_y)$$
and $$p(x|y, \theta_x)$$. In such a setting, inference is difficult because we have
two unknown but related quantities: the unknown values of the latent variables (i.e. $$y$$),
and the unknown parameters for the latent and observable variables' distributions (i.e.
$$\theta$$. EM makes inferring both unknowns possible by iteratively repeating
by two steps. First, we pretend we had observed the latent variables and we then
infer values of the distributions' parameters $$\theta$$. Second, we pretend
we have the parameters for distributions and we then infer values of the latent variables $$y$$.



One straightforward way to understand EM is by viewing it as progressively
tightening a lower bound on the (log) likelihood. Per Jensen's Inequality, 
any distribution over the latent variables $$q(y)$$ creates a lower bound on the log likelihood:

$$\begin{align}
l(\theta) \defeq \log p(x|\theta)
&= \log \int_y p(x, y| \theta) dy && \text{Marginalization over $y$}\\
&= \log \int_y \frac{p(x, y| \theta)}{q(y)} q(y) dy && 1 = \frac{q(y)}{q(y)}\\
&= \log \mathbb{E}_{q(y)}[\frac{p(x, y| \theta)}{q(y)}] && \text{Defn. of expectation}\\
&\geq \mathbb{E}_{q(y)}[\log \frac{p(x, y| \theta)}{q(y)}] && \text{Jensen's Inequality}
\end{align}$$



We call this lower bound $F(q, \theta) \defeq \mathbb{E}_{q(y)}[\log \frac{p(x, y| \theta)}{q(y)}]$
the <b>free energy</b>. It has several equivalent forms that will reveal to us
the two EM steps that, when iteratively applied, monotonically increase the free energy,
and thus monotonically increase the log likelihood.



$$\begin{align}
F(q, \theta) &\defeq \mathbb{E}_{q(y)}[\log \frac{p(x, y| \theta)}{q(y)}]\\
&= \mathbb{E}_{q(y)}[\log p(x, y| \theta)] - H[q] && \text{where }
H[q] = \mathbb{E}_{q(y)}[\log q(y)] = \text{entropy of $q(y)$} \\
&= l(\theta) - KL[q(y)||p(y|x, \theta)] &&
\text{where } KL[q(y)||p(y|x, \theta)] = -\mathbb{E}_{q(y)}[\log \frac{p(y|x, \theta)}{q(y)}]
\end{align}$$



Why are alternative forms of the free energy useful? The second tells us that if we want
to maximize the free energy with respect to $\theta$, we can do so independently of
$$q(y)$$: generate samples from $$q(y)$$ and then choose $$\theta^* = \argmax_{\theta}
\log p(x, y| \theta)$$, since $$H[q]$$ is constant with respect to $$\theta$$. The third
tells us that if we want to maximize the free energy with respect to $$q(y)$$, we can
do so independently of $$\theta$$: since $$\theta$$ is fixed, setting $$q(y) = p(y|x, \theta)$$
raises the free energy exactly to the likelihood. We know that this increases the
log likelihood because every KL divergence is non-negative. Using $$(k)$$ to indicate the
$$k$$th step, we now have the EM algorithm:

- Holding parameters $\theta$ fixed, optimize $$F(q, \theta)$$ with respect
to $$q$$:

$$\begin{align}q^{(k)}(y) = \argmax_{q(y)} F(q(y), \theta^{(k-1)}) \Rightarrow
q^{(k)}(y) = p(y|x, \theta^{(k-1)})\end{align}$$

- Holding $$q(y)$$ fixed, optimize $$F(q, \theta)$$ with respect to $$\theta$$:
$$\begin{align}\theta^{(k)} = \argmax_{\theta} F(q^{(k)}(y), \theta) =
\argmax_{\theta} \mathbb{E}_{q^{(k)}(x)}[\log p(x, y| \theta)]\end{align}$$
  
There are two questions we might immediately ask. First, why is this pair of steps
guaranteed to monotonically increase the log likelihood? Second, is this pair of
steps guaranteed to converge?



