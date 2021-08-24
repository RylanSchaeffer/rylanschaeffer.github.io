# Neural Ordinary Differential Equations

Many deep networks (e.g. RNNs) perform the following operation:

$$h_{t+1} = h_{t+1} + f(h_t, \theta_t) $$

Rewriting the dynamics and taking the small time limit, we see that this operation
is a discrete approximation of a derivative:

$$\frac{dh(t)}{dt} = f(h_t, \theta_t) $$

The idea of Neural ODEs is to 

## Benefits

1. Memory efficiency
2. Adaptive computation
3. Sealable/Invertible normalizing flows
4. Continuous time-series models