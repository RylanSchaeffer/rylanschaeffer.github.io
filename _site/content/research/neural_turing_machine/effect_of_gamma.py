import numpy
import matplotlib.pyplot as plt


def content_addressing(gamma, weight_vector):
    return numpy.power(weight_vector, gamma) / numpy.sum(
        numpy.power(weight_vector, gamma)
    )


x_values = numpy.logspace(0, 1, num=50)
weight_vector = numpy.array([0.1, 0.5, 0.25, 0.1, 0.05])

y_vectors = numpy.transpose(
    numpy.array([content_addressing(x_value, weight_vector) for x_value in x_values])
)


fig, ax = plt.subplots()
ax.set_xscale("log")
ax.stackplot(x_values, y_vectors)
plt.title(
    "Weight Vector as function of Gamma",
)
plt.suptitle
plt.xlabel("Gamma")
plt.ylabel("Weight Vector")
plt.show()
