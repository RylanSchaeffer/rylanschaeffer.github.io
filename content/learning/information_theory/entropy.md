# Entropy

## Properties

- The entropy of a discrete distribution over $$N$$ elements is bounded by $$\log N$$

Proof: Use [Gibb's Inequality](gibbs_inequality.md), setting $$q_n = 1/N$$. Then
$$H(p) \leq -\sum_n p_n \log \frac{1}{N} = \log N (\sum_n p_n) = \log N$$