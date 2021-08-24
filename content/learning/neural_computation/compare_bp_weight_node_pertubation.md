# Comparison of Backprop, Weight Perturbation & Node Perturbation

[Werfel, Xie and Seung 2004](../papers/Werfel_Xie_Seung_2004_Learning_Curves_for_SGD_in_Linear_Feedforward_Networks.pdf)
offer a comparison of the convergence of
Backpropagation (BP), Weight Pertuubation (WP) and Node Perturbation (NP) in a
simple linear model as a function of the input dimension $N$ and output dimension $M$.
They consider the following student-teacher setup, where $W^*$ is the teacher's
weight matrix and where $W$ is the student's weight matrix, both in $$\mathbb{R}^{M
\times N}$$:

$$x \in \mathbb{R}^N \sim \mathcal{N}(0, I), \qquad y^* \in \mathbb{R}^M = W^* x,
\qquad y = W x , \qquad L(W) = ||y - y^*||_2^2$$
