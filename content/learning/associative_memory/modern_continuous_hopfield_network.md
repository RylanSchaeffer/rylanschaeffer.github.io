# Modern Continuous Hopfield Network [Up](../associative_memory.md)

The [discrete modern Hopfield network](modern_discrete_hopfield_network.html) generalized the  classical Hopfield 
network to obtain significantly higher capacity. However, its state space was still discrete: $$x \in \{-1, +1\}^D$$.
[Ramsauer et al. 2019](https://arxiv.org/abs/2008.02217) proposed a continuous version of the modern Hopfield network.
The state space is now continuous:

$$x \in \mathbb{R}^D$$

Omitting additive constants in $$x$$, the energy function is proportional to:

$$E_{\beta}(X) := - \beta^{-1} \log \Big ( \sum_n \exp \Big ( \beta x \cdot y_n \Big ) \Big ) + \frac{1}{2} \lvert \lvert x \lvert \lvert_2^2$$

where $$\beta$$ is a temperature parameter. [Krotov and Hopfield 2020](https://arxiv.org/abs/2008.06996) also studied a similar model TODO
