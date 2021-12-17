# Gibb's Inequality

Gibb's Inquality states that for a discrete distribution $$P$$ over $$N$$ elements,
its entropy $$H(P) := - \sum_n p_n \log p_n $$ is upper bounded by the cross entropy
with any other discrete distribution $$Q$$, with equality if and only if $$P = Q$$.
A perhaps more intuitive statement is that a discrete distribution's entropy is smaller
than the cross entropy under any other distribution.

Proof: Our goal is to show that 

$$- \sum_n p_n \log p_n \leq - \sum_n p_n \log q_n $$

Rearranging, this is equivalent to showing that:

$$- \sum_n p_n \log p_n + \sum_n p_n \log q_n \leq 0$$

Or more specifically, that

$$\sum_n p_n \log \frac{q_n}{p_n} \leq 0$$

We can show this using [Jensen's Inequality](../inequalities/jensen_inequality.md):

$$
\begin{align*}
\sum_n p_n \log \frac{q_n}{p_n} &\leq \log \sum_n p_n \frac{q_n}{p_n}\\
&= \log \sum_n q_n\\
&= \log 1\\
&= 0
\end{align*}
$$

