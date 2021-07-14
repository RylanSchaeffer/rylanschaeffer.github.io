# BNPs through Complete Random Measures

One lense through which to construct and understand
[Bayesian Nonparametrics (BNPs)](../bayesian_nonparametrics.md) is through
[Complete Random Measures (CRMs)](completely_random_measures.md). As explained
in the BNP page, a BNP model can be viewed as a countable set
of tuples of (traits, frequencies/rates). In order to use the model,
we need to specify a prior on the traits and frequencies/rates, and then
specify a likelihood. We can specify such a prior as a CRM:

$$\Theta = \sum_{k=1}^K \theta_k \delta_{\psi_k}$$

and specify a likelihood for the $$n$$-th datum given the CRM: 

$$X_n = \sum_{k=1}^K x_{n, k} \delta_{\psi_k}$$

where each $$x_{n,k} \sim_{i.i.d.} H(dx | \theta_k)$$, independently
across $$n$$ and $$k$$. Because $$x_{n, k}$$ can be 0, $$\Theta$$ can have more
atoms than $$X_n$$.

In order for the number of traits to be unbounded, the prior must have a 
countably infinite number of atoms. This implies 2 possibilities:

1. We have an infinite number of fixed location atoms

2. We have an infinite number of traits and frequencies/rates in the
   ordinary components

TODO: Clarify why each of these assumptions are necessary
   
At this point, we need to introduce some assumptions:

1. The atoms of the fixed component are sampled independently:

$$\Theta_{fixed, k} \sim_{indep} F_{fix, k}(d\theta) $$

2. The Poisson rate measure in the ordinary component decouples
into a product of two measures on the weights and locations:
   
$$\mu(d\theta \times d\Psi) = \nu(d\theta) G(d\Psi) $$

3. The number of fixed location atoms is finite

4. $$\nu(\mathbb{R}_{\geq 0}) = \infty$$. This assumption ensures that
the ordinary component has countably infinite atoms.
   