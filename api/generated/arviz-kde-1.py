import numpy as np
import matplotlib.pyplot as plt
from arviz import kde
# >>>
rvs = np.random.gamma(shape=1.8, size=1000)
grid, pdf = kde(rvs)
plt.plot(grid, pdf)
plt.show()
