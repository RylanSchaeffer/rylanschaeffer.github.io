# QM-AM-GM-HM Inequality

Let $$a_1, ..., a_N$$ be a set of $$N$$ positive numbers.

Define the four following means:

1. Arithmetic:

$$\mu_{AM} = \frac{1}{N} \sum_n a_n$$

2. Quadratic:

$$\mu_{QM} = \Big( \frac{1}{N} \sum_n a_n^2 \Big)^2$$

3. Geometric:

$$\mu_{GM} = \Big( \prod_n a_n \Big)^N$$

4Harmonic Mean:

$$\mu_{HM} = \frac{N}{\sum_n \frac{1}{a_n}}$$

The QM-AM-GM-HM Inequality states that 

$$ \mu_{QM} \geq \mu_{AM}  \geq \mu_{GM} \geq \mu_{HM} $$


## Inclusion of Power Mean

One can generalize the arithmetic and quadratic means to the [power mean](power_mean.md), which is 
defined as:

$$\mu_{PM}^{(k)} = \Big( \frac{1}{N} \sum a_n^k \Big)^{1/N}$$

For two powers $$k_1> k_2 > 0$$, the power mean inequality states that

$$\mu_{PM}^{(k_1)} \geq \mu_{PM}^{(k_2)}$$

This includes the above QM-AM relationship, since $$\mu_{QM} = \mu_{PM}^{(2)}$$ and $$\mu_{AM} \mu_{PM}^{(1)}$$.