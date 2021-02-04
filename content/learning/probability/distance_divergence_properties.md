# Properties for Distances / Divergences

[Bellemare et al 2017](https://arxiv.org/abs/1705.10743) introduce several properties of
distances that might be desirable.

- Scale Sensitive: A distance $$d(\cdot, \cdot)$$ is scale sensitive if $$\exists \beta >0$$
  such that $$\forall X, Y, c>0$$

$$d(cX, cY) \leq \lvert c \lvert^{\beta} d(X, Y)$$

Intuitively, this just means that scaling the arguments by $$c$$ scales the distance by $$c$$,
possibly to some power.

- Sum Invariant: A distance $$d(\cdot, \cdot)$$ is sum invariant if for $$A$$ independent of
  $$X, Y$$, we have

$$d(X+A, Y+A) \leq d(X, Y)$$

Intuitively, this means a constant shift of both $$X, Y$$ doesn't change the distance between
them.