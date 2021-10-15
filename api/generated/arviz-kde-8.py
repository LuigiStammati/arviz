# This is still experimental, does not always work.
rvs = np.random.vonmises(mu=0, kappa=30, size=500)
grid, pdf = kde(rvs, circular=True, custom_lims=(-1, 1))
plt.plot(grid, pdf)
plt.show()
