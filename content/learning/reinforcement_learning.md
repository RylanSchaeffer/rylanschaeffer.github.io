# Reinforcement Learning

## Value-Based RL
-----

### Rescorla-Wagner Learning Rule

The Rescorla-Wagner Learning Rule (1972) was a seminal model of associative learning
that preceded reinforcement learning. Associative learning is the problem of learning
how different stimuli are associated with rewards or punishments $$r_n$$, where $$n$$ indexes
the trial number. The model considers the agent receiving a one-hot encoded stimulus vector
$$s_n$$, where each element indicates the presence or absence of a stimulus and $$n$$ is the
trial number, and the agent then uses a linear readout $$w_n$$ of the stimuli to predict 
the expected reward or punishment $$v_n$$:

$$ v_n = w_n^T s_n $$


Over the course of the $N$ trials, the linear readout $w_n$ is updated using the prediction
error, $r_n - v_n$ (occasionally denoted by $\delta_n$):

$$ w_{n+1} \leftarrow w_n + \eta (r_n - v_n) s_n $$

This learning rule is equivalent to online gradient descent under a mean-squared error loss
between the actual reward and the expected reward:

$$
\begin{align*}
L(w) &= \langle (r - v)^2 \rangle_{s} \\
\nabla_w L(w) &= \langle  0 - 2 r s + 2 s s^T w \rangle_{s}\\
&= 2 \langle (r - w^T s) s \rangle_{s}\\
&\propto \langle (r - v) s \rangle_{s}
\end{align*}
$$

## Policy-Based RL

### Policy Gradient Theorem

Define an agent's trajectory $\tau$ as the sequence of states,
actions and rewards it experiences: $s_1, a_1, r_1, s_2, ...$. Assuming
the agent's policy $p_{\theta}(a|s)$ depends on parameters $\theta$, we
can define the agent's expected return as the probability of a
trajectory, which depends on the agent's policy, times the return of
each trajectory, which depends only on the agent's policy through the
trajectory:

$$
\begin{align}
\mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] = \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau
\end{align}
$$

An agent that seeks to maximize its return can follow the gradient of
its expected return with respect to its policy's parameters:


$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau)] &= \nabla_{\theta} \int_{\tau} R(\tau) p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) \nabla_{\theta} p_{\theta}(\tau) d\tau \nonumber \\
&= \int_{\tau} R(\tau) p_{\theta}(\tau) \nabla_{\theta} \log p_{\theta}(\tau) d\tau \nonumber \\
&= \mathbb{E}_{\tau \sim p_{\theta}}[R(\tau) \nabla_{\theta} \log p_{\theta}(\tau)]
\end{align}
$$

## Actor-Critic RL
-----

### Constant Baseline

Unbiased:

$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau) - b]
&= \nabla_{\theta}  \mathbb{E}_{p(\tau)} [R(\tau)] - \nabla_{\theta} \mathbb{E}_{p(\tau)} [b]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b \nabla_{\theta} \mathbb{E}_{p(\tau)} [1]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b (0)\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)]
\end{align}
$$


### State-Dependent Baseline: $$b(s_t)$$

Unbiased:

$$
\begin{align}
\nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau) - b]
&= \nabla_{\theta}  \mathbb{E}_{p(\tau)} [R(\tau)] - \nabla_{\theta} \mathbb{E}_{p(\tau)} [b]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b \nabla_{\theta} \mathbb{E}_{p(\tau)} [1]\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)] - b (0)\\
&= \nabla_{\theta} \mathbb{E}_{p(\tau)} [R(\tau)]
\end{align}
$$



## Distributional RL
-----

Classically, RL concerns maximizing the _expected_ return. Many have looked at alternative 
pursuits (e.g. Gilbert & Weng's 2016 Quantile RL), but the field didn't take off until
approximately 2017, when a series of papers emerged demonstrating that learning the full
return distribution, and not just its mean, produced agents that appeared to learn faster
and symptote to higher return.

### Background

The Bellman operator, classically defined, aims to reach a self-consistent set of predictions.
Let $$Q(s,a): \mathbb{S} \times \mathbb{A} \rightarrow \mathbb{R}$$ be the expected return of
being in state $$s$$ and taking action $$a$$. The Bellman operator
$$\mathcal{T}: Q \rightarrow Q$$ is:

$$T Q(s,a) = \mathbb{E}_r[R(s,a)] + \gamma \mathbb{E}_{S', A'} Q(S, A)$$

where state $$S'$$ is the next state with available actions $$A'$$. The Bellman operator
is powerful because is a contraction, meaning its repeated application will converge
to a fixed $$Q$$ function. [Bellemare, Dabney and Munos 2017](https://arxiv.org/abs/1707.06887) 
asked whether defining a _distributional_ equivalent of the Bellman operator that is
also a contraction is possible. We define 

### C51 RL

Since there's no guarantee the return distribution will be nice, we need to think
of how to allow an agent to flexibly represent distributions. C51's approach 
was to use a categorical distribution (hence the C). 



### Quantile Regression RL

One contribution of C51 was showing that the distributional Bellman operator is a contraction 
between probability distributions in a Wasserstein metric. The problem is that a previous work
[Bellemare et al 2017](https://arxiv.org/abs/1705.10743) pointed out that minimization of the
Wasserstein metric leads to biased gradients. The question was now whether an online RL algorithm
could be defined that makes use of the distributional Bellman operator as a contraction.
[Dabney et al 2018](https://arxiv.org/abs/1710.10044) showed that the answer is yes. The idea
is to show that minimizing the Wasserstein metric directly can accomplished indirectly by minimizing an alternative
loss function called _Quantile Regression_ (QR) loss. Minimizing the QR loss, together with the
distributional-Bellman contraction result, provides a distributional RL algorithm that 
works with stochastic gradient descent.

We start by defining the set of action-value distributions, which maps a state
and an action to a probability distribution over the return:

$$\mathcal{Z} = \{ Z : S \times A \rightarrow P(\mathbb{R}) \}$$

The maximal Wasserstein distance between two action-value distributions $$Z_1, Z_2$$ is 
defined as the largest Wasserstein distance evaluate at all states and actions:

$$d_p (Z_1, Z_2) = \sup{s, a} W_p (Z_1(s,a), Z_2(s,a)) $$

However, minimizing the Wasserstein distance with stochastic gradient descent yields biased
gradients, so we need an alternative approach. Dabney and his co-authors note that if 
we constrain the agent to representing the return distribution using a fixed number of 
_quantiles_, then we can construct an alternative approach. For those unfamiliar with
quantiles, quantiles are a generalization
of the median. Specifically, if $$\tau \in (0, 1)$$, the $\tau$-th quantile of a random
variable $$X$$ is the value $$X_{\tau}$$ such that $$P(X \leq X_{\tau}) = \tau$$ and
$$P(X > X_{\tau}) = 1 - \tau$$. The $$\tau=0.5$$ quantile is the median.

Let $$\mathcal{Z}_Q \subset \mathcal{Z}$$ represent the set of action-value distributions
such that the distribution is represented using $$K$$ quantiles. Suppose we're trying to 
learn an arbitrary action-value distribution $$Z^* \in \mathcal{Z}$$, but constrained 
to using $$\hat{Z} \in \mathcal{Z}_Q$$. Formally, we're looking for $$\hat{Z}$$ that
minimizes the Wasserstein distance:

$$\hat{Z} = \argmin_{Z \in \mathcal{Z}_Q} W_1 (Z, Z^*)$$

Let $$z_{\tau_1}, z_{\tau_2}, ..., z_{\tau_K}$$ denote the values of $$z$$ corresponding to the
$$K$$ quantiles. If we place uniform weight on each quantile (i.e. we place probability mass
1 / $$K$$ at each $$z_{\tau_i}$$), then the Wasserstein distance can be written:

$$W_1(Z, Z^*) = \sum_i^K \int_{\tau_{i-1}}^{\tau_i} |F_{Z^*}^{-1}(u) - z_{\tau_i}| du $$

This becomes useful because we can find quantiles that uniquely minimize the Wasserstein distance
and then instead of minimizing the Wasserstein distance directly, we can instead minimize something
called the quantile regression loss (to be explained) with the newly found quantiles. This two-step
process indirectly minimizes the Wasserstein distance but plays nicely with stochastic gradient
descent.

The quantiles that minimize the above expression can be calculated as:

$$
0 &= \partial_{z_{\tau_i}} W_1 (Z, Z^*)\\
&= \partial_{z_{\tau_i}} \int_{\tau_{i-1}}^{\tau_i} |F_{Z^*}^{-1}(u) - z_{\tau_i}| du\\
&= \int_{\tau_{i-1}}^{F_(z_{\tau_i})}} -1 du + \int_{F_(z_{\tau_i})}^{\tau_{i}} + 1 du\\
&= -F_(z_{\tau_i}) + \tau_{i-1} + \tau_{i} - F_(z_{\tau_i})\\
F_(z_{\tau_i}) &= \frac{\tau_i + \tau_{i-1}}{2}\\
z_{\tau_i} &= F_{Z^*}^{-1} \Big(\frac{\tau_i + \tau_{i-1}}{2} \Big)
$$

Intuitively, this says that if you want to minimize the Wasserstein loss and your
only flexibility is where you place the quantiles, then quantiles that minimize the Wasserstein
loss are the quantiles that are equally spaced between 

### Expectile Regression RL 

### Connection to Neuroscience

[Dabney et al. 2020](https://www.nature.com/articles/s41586-019-1924-6)