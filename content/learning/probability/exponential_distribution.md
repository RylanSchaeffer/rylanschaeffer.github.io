# Exponential Distribution

## Definition

The exponential distribution is a single parameter $$\lambda$$ continuous distribution 
over $$(0, \infty)$$. Its PDF is:

$$p(x)= \lambda e^{-\lambda x}$$

Its CDF is:

$$F(x) = \int_{0}^{x} \lambda e^{- \lambda t} dt = - e^{-lambda x} \lvert_{0}^{\infty} = 1 - e^{-\lambda x}$$

We can check that this is a valid CDF. As $$x\rightarrow \infty, F(x) \rightarrow 1$$ and as
$$x\rightarrow 0, F(x) \rightarrow 0$$. Additionally, the CDF is monotonically increasing:

$$ \partial_x F(x) = e^{-\lambda x} > 0$$

## Properties

### Memoryless

We say that a random variable $$X$$ is memoryless if $$\forall s, t > 0$$,

$$P(X\geq s + t \lvert X \geq s) = P(X \geq t)$$

Claim: Let $$X \sim Exp(\lambda)$$. Then $$X$$ is memoryless.

Proof: 

$$
\begin{align*}
P(X \geq t) &= 1 - F(t) = e^{-\lambda t}\\
P(X\geq s + t \lvert X \geq s) &= \frac{P(X\geq s + t, X \geq s)}{P(X \geq s)}\\
&= \frac{P(X\geq s + t)}{P(X \geq s)}\\
&= \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}\\
&= e^{-\lambda t}
\end{align*}
$$

Claim: If $$X$$ is a non-negative, continuous random variable that is memoryless, then
$$X\sim Exp(\lambda)$$ for some $$\lambda$$. Intuitively, this means that the exponential
distribution is the only memoryless distribution.

Proof:

$$X$$ being memoryless means that 

$$
\begin{align*}
P(X \geq t) &= P(X\geq s + t \lvert X \geq s)\\
&= \frac{P(X\geq s + t, X \geq s)}{P(X \geq s)}\\
P(X \geq t) P(X \geq s) &= P(X\geq s + t)
\end{align*}
$$

This quantity, $$P(X \geq c)$$ for some $$c$$ is called the survival function
$$S(\cdot) = 1 - F(\cdot)$$. For our purposes, thinking in terms of the survival function
is more clear. Here, we know that 

$$S(s+t) = S(t)S(s)$$

Our strategy will be to find the survival function $$S(\cdot)$$ and use it to show that $$X$$ is
exponential. Just by plugging in values, we can figure out a few things:

- First, try setting $$s=t$$. That gives us
  
$$S(t + t) = S(2t) = S(t)S(t) = S(t)^2$$

- We may as well try plugging any integer multiple of $$t$$. That is, $$\forall m \in \mathbb{Z} $$
  
$$S(mt) = S(t)^m$$


- The same holds for reciprocals of integers i.e. $$\forall n \in \mathbb{Z}$$
  
$$S(t/n) = S(t)^{1/n}$$

- We can combine the two previous to see that the property holds for any rationals

$$S(\frac{m}{n}t) = S(t)^{m/n}$$

- $$\forall c \in \mathbb{R}$$, we can express $$c$$ as the limit of a sequence of rationals $$m/n$$.
 Because $$X$$ is continuous, so too is $$S(\cdot)$$, meaning that
  
$$ \lim_{m/n \rightarrow c} S(\frac{m}{n}t)= S(\lim_{m/n \rightarrow c} \frac{m}{n}t) = S(t)^c$$

What function obeys $$S(ct) = S(t)^c$$? Setting $$t=1$$ shows us that

$$S(x) = S(1)^x = e^{x \log S(1)}$$

Since $$S(1) = P(X \geq 1)$$ is a probability, $$\log S(1) < 0$$. Define $$- \lambda = \log S(1)$$
with $$\lambda > 0$$. Then we have

$$S(x) = e^{- \lambda x}$$

This is exactly the survival function of the exponential. Recall that the survival function 
was defined as $$S(x) = 1 - F(x)$$ and the CDF of an exponential is $$F(x) = 1 - e^{-\lambda x}$$.
Consequently, we conclude that because $$X$$ has the survival function of an exponential, it has
the CDF of an exponential and is therefore an exponential random variable.