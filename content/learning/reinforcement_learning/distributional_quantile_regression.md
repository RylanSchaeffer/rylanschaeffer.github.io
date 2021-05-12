# Quantile Regression RL

One contribution of C51 was showing that the distributional Bellman operator is a contraction
between probability distributions in the maximal Wasserstein metric, defined as the largest
Wasserstein distance evaluate at all states and actions between two action-value distributions
$$Z_1, Z_2$$:

$$d_p (Z_1, Z_2) = \sup_{s, a} W_p (Z_1(s,a), Z_2(s,a)) $$

However, a previous work [Bellemare et al 2017](https://arxiv.org/abs/1705.10743) showed that minimization of the
Wasserstein metric leads to biased gradients. The question was now whether an online RL algorithm
could be defined that makes use of the distributional Bellman operator as a contraction.
[Dabney et al 2018](https://arxiv.org/abs/1710.10044) showed the answer is yes. The idea
has two parts. First, Dabney showed that minimizing the Wasserstein metric directly can accomplished
indirectly by minimizing an alternative loss function called _Quantile Regression_ (QR) loss.
Second, because the QR loss does not suffer from biased gradients, minimizing the QR loss provides a
distributional RL algorithm that works with stochastic gradient descent.

Before diving in, we need a quick primer on _quantiles_ and _quantile regression_.
Quantiles are a generalization of the median. Let $$\tau \in (0, 1)$$. The $\tau$-th quantile of
a random variable $$X$$ is then the value $$X_{\tau}$$ such
that $$P(X \leq X_{\tau}) = \tau$$ and $$P(X > X_{\tau}) = 1 - \tau$$. The
$$\tau=0.5$$ quantile is the median. Suppose $$x_{\tau}$$ is my estimate of the $$\tau$$th quantile.
One way to learn the $$\tau$$th quantile is by the quantile regression error, defined as

$$QRE_{\tau}(x, x_{\tau})$$

If I perform gradient


Dabney and his co-authors note that if
we constrain the agent to represent the return distribution using a fixed number of
_quantiles_, then we can construct an alternative approach. For those unfamiliar with
quantiles,

Let $$\mathcal{Z}_Q \subset \mathcal{Z}$$ represent the set of action-value distributions
such that the distribution is represented using $$K$$ quantiles. Suppose we're trying to
learn an arbitrary action-value distribution $$Z^* \in \mathcal{Z}$$, but constrained
to using $$\hat{Z} \in \mathcal{Z}_Q$$. Formally, we're looking for $$\hat{Z}$$ that
minimizes the Wasserstein distance:

$$\hat{Z} = \underset{Z \in \mathcal{Z}_Q}{\operatorname{argmin}} W_1 (Z, Z^*)$$

Let $$z_{\tau_1}, z_{\tau_2}, ..., z_{\tau_K}$$ denote the values of $$Z$$ corresponding to the
$$K$$ quantiles. If we place uniform probability mass on each quantile (i.e. probability mass
1 / $$K$$ at each $$z_{\tau_i}$$), then the Wasserstein distance can be written:

$$W_1(Z, Z^*) = \sum_i^K \int_{\tau_{i-1}}^{\tau_i} |F_{Z^*}^{-1}(u) - z_{\tau_i}| du $$

This becomes useful because we can find quantiles that uniquely minimize the Wasserstein distance
and then instead of minimizing the Wasserstein distance directly, we can instead minimize something
called the quantile regression loss (to be explained) with the newly found quantiles. This two-step
process indirectly minimizes the Wasserstein distance but plays nicely with stochastic gradient
descent.

The quantiles that minimize the above expression can be calculated as:

$$
\begin{align*}
0 &= \partial_{z_{\tau_i}} W_1 (Z, Z^*)\\
&= \partial_{z_{\tau_i}} \int_{\tau_{i-1}}^{\tau_i} |F_{Z^*}^{-1}(u) - z_{\tau_i}| du\\
&= \int_{\tau_{i-1}}^{F_(z_{\tau_i})}} -1 du + \int_{F_(z_{\tau_i})}^{\tau_{i}} + 1 du\\
&= -F_(z_{\tau_i}) + \tau_{i-1} + \tau_{i} - F_(z_{\tau_i})\\
F_(z_{\tau_i}) &= \frac{\tau_i + \tau_{i-1}}{2}\\
z_{\tau_i} &= F_{Z^*}^{-1} \Big(\frac{\tau_i + \tau_{i-1}}{2} \Big)
\end{align*}
$$

Intuitively, this says that if you want to minimize the Wasserstein loss and your
only flexibility is where you place the quantiles, then the quantiles that minimize
the Wasserstein loss are the quantiles that are halfway between $$z_{\tau_{i-1}}$$
and 
