# Probability

## Probability Spaces

A __probability space__ is a 3-tuple consisting of a set $$X$$, a $$\sigma$$-algebra
and a probability measure $$P$$. A collection $$C$$ of subsets of set $$X$$ is
called a __$$\sigma$$-algebra__ on $$X$$ if

1. $$X \in C$$
2. C is closed under complementation. That is, if $$c \in C$$, then $$\overline{c}
:= X \ c \in C$$
3. C is closed under countable unions. That is, if $$c_1, c_2, ... \in C$$, then 
$$\cup_{i=1}^{\infty} c_i \in C$$

Relatedly, a function $$P: C \rightarrow [0, 1]$$ is a probability measure on $$C$$ if

1. $$P$$ is normalized i.e. $$P(X) = 1$$
2. $$P$$ is $$\sigma$$-additive i.e. P(\cup_{i=1}^{\infty} c_i) = 
\sum_{i=1}^{\infty} P(c_i)$$ 


## Independence

Two random variables are __independent__ if their joint probability is equal to the product
of the marginal probabilities:

$$P(A, B) = P(A) P(B)$$

If $$A, B$$ are independent, then so are the following by the following proofs:

$$
\begin{align*}
P(A, B^c) &= P(A) - P(A, B)\\
&= P(A) - P(A) P(B)\\
&= P(A)(1 - P(B))\\
&= P(A) P(B^c)\\
P(A^c, B) &= P(B) - P(A, B)\\
&= P(B)(1 - P(A))
&= P(B)P(A^c)\\
P(A^c, B^c) &= P(A^c) - P(A^c, B^c)\\
&= P(A^c) - P(A^c)P(B)\\
P(A^c)(1 - P(B))\\
P(A^c)P(B^c)
\end{align*}
$$


### Probability Integral Transform

__Theorem__: For any random variable $X$, its CDF $$F_X(x)$$
is distributed uniformly over $$(0,1)$$. That is, if we define $$Y = F_X(x)$$,
then $$Y \sim \mathcal{U}(0,1)$$.

<details>
<summary>Proof:</summary>
One property unique to $$\mathcal{U}(0,1)$$ is that its CDF $$F_Y(y) = P(Y \leq 
y) = y$$. We'll use this fact in the following manner:

$$
\begin{align*}
P(Y \leq y) &= P(F_X(x) \leq y)\\
&= P(x \leq F_X^{-1}(y))\\
&= F_X(F_X^{-1}(y))\\
&= y
\end{align*}
</details>


## Probability Distributions
<details>

### Cauchy Distribution

- Density: $$ p(x|x_0, \gamma) = \frac{1}{\pi} \frac{1}{1 + (\frac{x - x_0}{\gamma})^2}$$

The density is properly normalized:

$$\int_{\mathbb{R}} p(x | x_0, \gamma) dx = \frac{1}{\pi} \tan^{-1} (\frac{x - x_0}{\gamma})
\big\lvert_{-\infty}^{\infty} = \frac{1}{\pi}(\pi / 2 + \pi/2) = 1$$

- Mean: Undefined

To see why, consider $$\frac{1}{\pi} \int_{\mathbb{R}} \frac{x}{1+x^2} dx = \frac{2}{\pi}
\int_0^{\infty} \frac{x}{1+x^2} dx = \frac{1}{\pi} \lim_{x \rightarrow \infty} \log(1 + x^2)$$

- Variance: Undefined

</details>


## Inequalities
<details>

### Chebychev's Inequality

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


</details>
