# bw_fct > 1 means more smoothness.
grid, pdf = kde(rvs, bw_fct=2.5)
plt.plot(grid, pdf)
plt.show()
