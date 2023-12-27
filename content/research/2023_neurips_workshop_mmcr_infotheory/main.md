# An Information-Theoretic Understanding of Maximum Manifold Capacity Representations

Authors: **Rylan Schaeffer**, Berivan Isik, Victor Lecomte, Mikail Khona, Yann LeCun, Andrey Gromov, Ravid Shwartz-Ziv, Sanmi Koyejo

Venue: NeurIPS 2023 Workshops:
- [Unifying Representations in Neural Models](https://unireps.org/) **Oral**
- [Information-Theoretic Principles in Cognitive Systems](https://sites.google.com/view/infocog-neurips-2023/)  **Spotlight**
- [Symmetry and Geometry in Neural Representations)](https://www.neurreps.org/)
- [Self-Supervised Learning - Theory and Practice](https://sslneurips23.github.io/)

## Quick Links

- [Tweeprint](https://twitter.com/RylanSchaeffer/status/1729173604678660433)
- [Paper](paper.pdf)
- [Poster](poster.png)
- Recorded Talk

![](poster.png)

## Summary

Excited to begin announcing our #NeurIPS2023 workshop & conference papers (1/10)!

🔥🚀An Information-Theoretic Understanding of Maximum Manifold Capacity Representations🚀🔥

w/ amazing cast @vclecomte @BerivanISIK @sanmikoyejo @ziv_ravid @Andr3yGR @KhonaMikail @ylecun

![](MMCR_sphere_20231124_2117.jpg)


1/7

MMCR is a new high-performing self-supervised learning method at #NeurIPS2023 by @tedyerxa @s_y_chung @KuangYilun @EeroSimoncelli that SLAYS 🚀🚀🚀

MMCR: Data -> K transforms per datum -> Embed -> Average over K transforms -> Minimize negative nuclear norm

![](img_6.png)

2/7

MMCR originates from the statistical mechanical characterization of the linear separability of manifolds, building off foundational work by @s_y_chung @UriCohen42 @HSompolinsky

But what is this MMCR computational graph actually doing?

![](img_1.png)

3/7


We leverage tools from high dimensional prob & info theory to demonstrate that optimal solution to MMCR's nuclear norm loss is the same optimal solution that maximizes lower bound on mutual info btwn views

Specifically, we show that MMCR's loss has a lower bound, then...

![](img_2.png)

4/7

prove that a network with (1) perfect reconstruction (i.e. invariance) and (2) perfect uniformity achieves this loss lower bound with high probability

This configuration of embeddings maximizes a well-known lower bound on the mutual information between multiple views

![](img_3.png)

![](img_5.png)

![](img_4.png)

5/7

Numerical simulations confirm our maths, showing that the gap between MMCR's optimal loss and the loss achieved by invariant & uniform embeddings falls as a power in the number of manifolds (N) and in the ambient dimension (D), peaking at the N=D threshold
![](uniform_distribution_nuclear_norm_percent_err_vs_D_by_N.png)
![](uniform_distribution_nuclear_norm_percent_err_vs_N_by_D.png)

6/7


Appearing @ 4 workshops: @unireps (oral) InfoCog (spotlight) @neur_reps SSL  !!

Work done with amazing collaborators across many institutions @stai_research @StanfordData @StanfordAILab @NYUDataScience @mitbrainandcog @mcgovernmit @AIatMeta

❤️‍🔥❤️‍🔥❤️‍🔥

& stay tuned!

7/7

