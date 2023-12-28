# Energy Transformer

[Hoover et al (NeurIPS 2023)](https://arxiv.org/abs/2302.07253) proposed the Energy Transformer as a novel
[assocative memory network](../associative_memory.html). The Energy Transformer begins by designing an 
energy function to route information between tokens, then designs a transformer-like architecture that replaces a 
sequence of transformer blocks (i.e., self-attention, feed-forward, normalization). The global energy function
imposes strong constraints on the operations inside the energy transformer, the order in which the operations
take place and the weight symmetries of the network.

