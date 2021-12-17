# Chebychev's Inequality

Let $$X$$ be a random variable and let $$g(x)>0$$. Then $$\forall r > 0$$,

$$P(g(x) \geq r) \leq \frac{\mathbb{E}_x[g(x)]}{r}$$

<details>
<summary>Proof</summary>
$$
\begin{align*}
\mathbb{E}_x[g(x)] &= \int_x g(x) p(x) dx\\
&\geq \int_{x: g(x) \geq r} g(x) p(x) dx\\
&\geq r \int_{x: g(x) \geq r} p(x) dx\\
&= r P(g(x) \geq r)
\end{align*}
$$

</details>
