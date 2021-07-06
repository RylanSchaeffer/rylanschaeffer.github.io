# Wiener Process

A Wiener process is a real-valued continuous-time (i.e. indexed by $$t \in \mathbb{R}, t\geq 0$$)
stochastic process i.e. $$ W = \{ W_t \}_{t \geq 0}$$ with the 4 following properties:

1. $$W_0 = 0$$

2. $$W$$ has independent increments, meaning that the increment $$W_{t+\tau} - W_t$$, where
   $$\tau > 0$$, is independent of past values $$W_s$$ where $$s \leq t$$
   
3. $$W$$ has Gaussian increments, meaning $$W_{t+u}- W_t \sim N(0, \tau)$$
 
4. $$W$$ has continuous paths, meaning $$W_t$$ is continuous in $$t$$

