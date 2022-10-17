# Empty Pigeonholes

Suppose we have $$N$$ pigeons and $$N$$ holes, and the pigeons are uniformly distributed
amongst the various holes. What is the expected number of empty holes?

## Solution

Define $$X = \text{number of empty holes} = \sum_{n=1}^N \mathbb{I}\text{nth hole is empty}$$ 

Then

$$
\begin{align*}
\mathbb{E}[X] &= \sum_n \mathbb{P}(\text{nth hole is empty})\\
&= \sum_n \Big(\frac{N -1}{N} \Big)^N\\
&= N(1 - \frac{1}{N})^N\\
&= N / e
\end{align*}
$$

because $$1 - \frac{1}{N} \approx \exp(-1/N)$$.