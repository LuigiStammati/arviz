rvs = np.random.vonmises(mu=np.pi, kappa=1, size=500)
grid, pdf = kde(rvs, circular=True)
plt.plot(grid, pdf)
plt.show()
