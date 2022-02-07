# Quaternions

Just like how complex numbers generalize real numbers, Quaternions further generalize
complex numbers to 4 dimensions, with 3 "imaginary" components. A quaternion is defined
as a 4-vector:

$$q := a + bi +cj + dk$$

The first dimension is called the _real part_ and the latter three dimensions are called
the _vector part_. Just like how complex numbers allow interaction between the real
and imaginary components, quaternions similarly allow interactions via the following definitions:

- $$i^2 = j^2 = k^2 = -1$$
- $$i$$ times $$j$$ (i.e. $$ij$$) produces $$k$$
- $$j$$ times $$k$$ (i.e. $$jk$$) produces $$i$$
- $$k$$ times $$i$$ (i.e. $$ki$$) produces $$j$$
- The previous three rules, in the opposite order, require a multiplicative factor of $$-1$$

This seems hard to remember until you realize these rules function in a circle:

$$ i \rightarrow j \rightarrow k \rightarrow i $$

Going in the reverse order requires multiplying by $$-1$$.

Just as we can write all unit complex numbers as 

$$z = \cos (\theta) +  \sin (\theta) i $$,

We can similarly write any quarternion in as

$$q = \cos(\theta) + \sin (\theta) (ai + bj + ck)$$

## Properties

- Double cover: we can produce any desired rotation as $$q v \overbar{q} = (-q) v (- \overbar{q})$$,
  meaning there are two ways to perform any rotation.
