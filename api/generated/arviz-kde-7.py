rvs = np.random.vonmises(mu=np.pi, kappa=1, size=500)
# bw_fct > 1 means less smoothness.
grid, pdf = kde(rvs, circular=True, bw_fct=3)
plt.plot(grid, pdf)
plt.show()
