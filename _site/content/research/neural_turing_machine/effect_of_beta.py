import numpy
import matplotlib.pyplot as plt


def content_addressing(beta, weight_vector):
    return numpy.exp(beta * weight_vector) / numpy.sum(numpy.exp(beta * weight_vector))


x_values = numpy.logspace(-1, 2, num=50)
weight_vector = numpy.array([0.1, 0.5, 0.25, 0.1, 0.05])

y_vectors = numpy.transpose(
    numpy.array([content_addressing(x_value, weight_vector) for x_value in x_values])
)


fig, ax = plt.subplots()
ax.set_xscale("log")
ax.stackplot(x_values, y_vectors)
plt.title(
    "Content Weight Vector as function of Beta",
)
plt.suptitle
plt.xlabel("Beta")
plt.ylabel("Content Weight Vector")
plt.show()
