# It accepts tuples and lists of length 2.
grid, pdf = kde(rvs, bound_correction=False, custom_lims=(0, 10))
plt.plot(grid, pdf)
plt.show()
