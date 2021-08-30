# Structure Learning as Regression

In some models, learning the structure can be cast as logistic regression.
For instance, consider the Ising model:

$$p(x) \propto \exp(x^T \theta x) $$

where $$x_n \in \{ 0, 1\}$$.

Suppose we hold If $$x_n = 1$$