# Levy Process

A Levy process is any stochastic process with independent, stationary increments.
Formally, this means that the stochastic process $${X_t: t \geq 0}$$ posses the following properties:

1. X_0 = 0 almost surely (i.e. with probability 1)

2. Independence of Increments: For any $$0 \leq t_1 < t_2 < ... < t_n < \infty$$, the following random
variables are mutually independent (independent of any intersection of the other events)

$$N_{t_1} - N_{t_0}, N_{t_2} - N_{t_1}, ..., N_{t_n} - N_{t_{n-1}}$$

3. Stationary Increments: $$\forall s < t, X_t - X_s =^D X_{t-s}$$

4. Continuity in probability: For any $$\epsilon > 0$$ and $$t \geq 0$$, we have

$$\lim_{h \rightarrow 0} P(|X_{t+h} - X_t| > \epsilon) = 0$$
