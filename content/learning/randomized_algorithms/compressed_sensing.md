# Sparsity, Restricted Isometry and Compressed Sensing

## Sparsity

For $$x \in \mathbb{R}^n$$, $$||x||_0$$ is the number of non-zero coordinates of $$x$$.

The [Johnson-Lindenstrauss Lemma](johnson_lindenstrauss.md) told us that we can embed $$N$$ points
in a $$d$$-dimensional $$\ell_2$$ space with distortion $$1+\delta$$ in an $$\ell_2$$ space 
of dimension $$O(\log N / delta^2)$$; note, the number of points matters.

We will see that $$k$$-sparse vectors in $$d$$-dimensional $$\ell_2$$ space can be embedded
with distortion $$1+\delta$$ in $$\ell_2$$ space of dimension $$O(k \log n / \delta^2)$$; here, the
original dimension matters.

## Restricted Isometry Property (RIP)

We say a matrix $$A \in \mathbb{R}^{n \times m}$$ has the Restricted Isometry Property (RIP) with
parameters $$k, \delta$$ if $$\forall x \in \mathbb{R}^n$$ with $$||x||_0 \leq k$$,

$$(1-\delta)||x||_2 \leq ||A x||_2 \leq (1+\delta)||x||_2$$

The name arises because any restricted subset of $$x$$, $$Ax$$ is an approximate isometry.

### What matrices have RIP?

Consider $$k$$ and $$\delta = 0.1$$.

Suppose $$A \in \mathbb{R}^{m \times n}$$ with entries i.i.d. $$N(0, 1/m)$$ with
$$m = O(k \log n)$$. Then $$A$$, with high probability, will have RIP.

Suppose $$A \in \mathbb{R}^{m \times n}$$ with $$m = O(k \log^c n)$$ with rows chosen randomly
from the Discrete Fourier Transform.

Non-random matrix: Best deterministic contructions are $$m = O(k^{1.99} \log n)$$.

### Gaussian Matrix has RIP

**Theorem:** Let $$\delta \in (0, 1)$$ and choose $$k < m$$. $$\exists m = O(\frac{k \log n}{\delta^2})$$ such
that this matrix $$A \in \mathbb{R}^{m \times n}$$ with i.i.d. entries $$N(0, 1/m)$$ has RIP with probability
$$1 - o(1)$$.

Proof: Let $$\Sigma_k = \{x \in \mathbb{R}^k : ||x||_2 = 1, ||x||_0 \leq k$$. The first condition
just rescales the system (w.l.o.g.). Our strategy will be to:

1. Show that for any fixed $$x \in \Sigma_k$$, $$||Ax ||_2 \approx ||x||_2$$ w.h.p
2. Can't do union bound b/c infinite elements. Instead, define a finite set $$Y \subseteq \Sigma_k$$
 that "covers" $$\Sigma_k$$ well
3. Union bound over all $$y \in Y$$
4. Argue that this is enough

First, we define an $$\epsilon$$ covering. An $$\epsilon$$ covering of $$X \subseteq \mathbb{R}^n$$
is a subset $$Y \subseteq X$$ such that $$\forall x \in X, \exists y \in Y$$ such that

$$||x - y || \leq \epsilon$$

**Lemma:** $$\forall \epsilon \in (0, 1), X = \{x \in \mathbb{R}^k : ||x||_2 = 1$$ has an $$\epsilon$$
covering of size $$\leq (3/\epsilon)^k$$.

Proof: Consider choosing $$Y$$ greedily. Pick $$x$$, put ball around it, then repeat. Note that 
$$\forall y, y' \in Y, ||y - y'||_2 \geq \epsilon$$. Note that $$\forall y \in Y,
B(y; \epsilon/2) \subseteq B(0, 1 + \epsilon/2)$$ (relying on $$||y||_2 = 1$$). This implies that
$$\sum_{y \in Y} Vol(B(y, \epsilon / 2)) \subset Vol(B(0, 1+\epsilon/2)) := C_k \rho^k $$,
which in term implies that $$|Y| \leq \frac{C_k (1 + \epsilon/2)^k}{C_k (\epsilon/2)^k} \leq (3/\epsilon)^k$$.
A corollary then is that the set $$\Sigma_k$$ has an $$\epsilon$$-covering of size $$\leq {n \choose k} (3/\epsilon)^k$$.

Continuing along, with high probability, $$\forall y \in Y, ||y||_2 = (1 + \epsilon) ||A y||_2$$. Define
$$\epsilon = \delta/4$$. Fix $$y \in Y$$.
Claim: $$\mathbb{P}[\Big\lvert ||y||_2 - ||A y ||_2 \Big\lvert \geq \epsilon] \keq 2 \exp(-c \epsilon^2 m)$$.
Then, by a union bound:

$$\mathbb{P}[\exists y \in Y s.t. \Big\lvert ||y||_2 - ||A y ||_2 \Big\lvert \geq \epsilon] \leq \exp(-\Omega(k \log n)) = o(1)$$

Continuing along, we show w.h.p.

## Compressed Sensing

In compressed sensing, we consider recovering $$x$$ given a system $$A x = b$$, where $$A,b$$ are 
unknown. It turns out that if $$A$$ is nice and $$x$$ is sparse, we can uniquely recover $$x$$.

Claim: Suppose $$A$$ has RIP with parameters $$2k, \delta = 0.1$$. $$\exists$$ unique k-sparse $$x \in \mathbb{R}^n$$
that agrees with observed $$Ax$$. If $$x, x'$$ are k-sparse, and $$Ax = Ax'$$, then:

$$||x - x' || \leq \frac{1}{1-\delta}||A (x - x')||_2 = 0$$

If $$A$$ has RIP, we can efficiently recover $$x$$ by solving $$\arg \min_{x'} ||x'||_1 $$
such that $$A x' = A x$$, even though we care about solving $$\arg \min_{x'} ||x'||_0$$.
The two solutions will agree if $$A$$ has the 2k-RIP.

