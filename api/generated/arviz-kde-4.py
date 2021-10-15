grid, pdf = kde(rvs, bound_correction=False, extend=True, extend_fct=0.5)
plt.plot(grid, pdf)
plt.show()
