# Infinite Hidden Markov Model

## Motivation

One commonly encountered model in Bayesian inference is the
[Hidden Markov Model (HMM)](../bayesian_methods/hidden_markov_model.md). A
potential problem with HMMs is that they require specifying in advance a finite number
of (discrete) latent states, whereas we may not know the total number of latent
states. Instead, we'd prefer to use a non-parametric model that grows in complexity with
the amount of observed data.

To meet this need, [Beal, Ghahramani and Rasumussen 2001](https://proceedings.neurips.cc/paper/2001/file/e3408432c1a48a52fb6c74d926b38886-Paper.pdf) 
introduced the __infinite Hidden Markov Model__ (iHMM), also known as the Hierarchical Dirichlet
Process-Hidden Markov Model (HDP-HMM). This model modifies the traditional HMM
by allowing for new latent states and new emission characters to be added as more
data is observed. To make inference tractable, the authors integrate out the infinite possible
parameters to obtain a posterior over the latent states and posteriors over three hyperparameters:

1. $$\alpha$$, which controls the tendency to linger in a state
   
2. $$\beta$$, which controls the tendency to explore new transitions/states

3. $$\gamma$$, which controls the expected number of hidden states

Technical Note: I think Hierarchical Dirichlet Process is a misnomer. Due to that particular
integration of parameters, the iHMM is more similar to the [Chinese Restaurant Process](chinese_restaurant_process.md)
than the [Dirichlet Process](dirichlet_process.md). 

## Definition



## Inference