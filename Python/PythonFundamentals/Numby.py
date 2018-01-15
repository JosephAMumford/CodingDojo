import numpy as np
import matplotlib.pyplot as plt

#This function creates a Mandelbort fractal
def mandelbrot(h, w, maxit=40):
    y,x = np.ogrid[-1.4:1.4:h*1j, -2:0.8:w*1j]  #Get x and y coordinate from pixel input within the given range
    c = x+y*1j
    z = c
    divtime = maxit + np.zeros(z.shape, dtype=int)

    #For each pixel, loop through max iterations to determine value
    for i in range(maxit):
        z = z**2 + c
        diverge = z*np.conj(z) > 2**2
        div_now = diverge & (divtime==maxit)
        divtime[div_now] = i
        z[diverge] = 2

    return divtime

plt.imshow(mandelbrot(600,600))         #size of image
plt.set_cmap('jet')                     #set color scheme
plt.show()