# This script simulates the Langton Ant.  The ant moves around and check if a pixel is on or off.
# The path seems to follow a random order but it will suddenly diverge onto a "highway" after
# approximately 12000 steps and move until it is off the screen.  This script will end after
# 14000 steps, it may take around 10 minutes to compute.

import turtle
import math
import colorsys

# Constants
map = []

# Variables
antPositionX = 64
antPositionY = 64
antDirection = 0
t = turtle.Pen()
turtle.bgcolor("black")

# Initialize map
for i in range(0, 128 * 128):
    map.append(0)

# Run through steps and move ant each step
for steps in range(0,14000):
    # Move North
    if antDirection == 0:
        antPositionY += 1
        if map[antPositionY * 128 + antPositionX] == 0: # Turn Right
            antDirection += 1
            if antDirection > 3:
                antDirection = 0
            map[antPositionY * 128 + antPositionX] = 1
        else:                                           # Turn Left
            antDirection -= 1
            if antDirection < 0:
                antDirection = 3
            map[antPositionY * 128 + antPositionX] = 0
    
    # Move East
    elif antDirection == 1:
        antPositionX += 1
        if map[antPositionY * 128 + antPositionX] == 0: # Turn Right
            antDirection += 1
            if antDirection > 3:
                antDirection = 0
            map[antPositionY * 128 + antPositionX] = 1
        else:                                           # Turn Left
            antDirection -= 1
            if antDirection < 0:
                antDirection = 3
            map[antPositionY * 128 + antPositionX] = 0
    
    # Move South
    elif antDirection == 2:
        antPositionY -= 1
        if map[antPositionY * 128 + antPositionX] == 0: # Turn Right
            antDirection += 1
            if antDirection > 3:
                antDirection = 0
            map[antPositionY * 128 + antPositionX] = 1
        else:                                           # Turn Left
            antDirection -= 1
            if antDirection < 0:
                antDirection = 3
            map[antPositionY * 128 + antPositionX] = 0
    
    # Move West
    else: 
        antPositionX -= 1
        if map[antPositionY * 128 + antPositionX] == 0: # Turn Right
            antDirection += 1
            if antDirection > 3:
                antDirection = 0
            map[antPositionY * 128 + antPositionX] = 1
        else:                                           # Turn Left
            antDirection -= 1
            if antDirection < 0:
                antDirection = 3
            map[antPositionY * 128 + antPositionX] = 0
    
    color = colorsys.hsv_to_rgb(steps/14000.0, 1.0, 1.0)
    t.color(color)
    t.setpos(5 * (antPositionX - 64), 5 * (antPositionY - 64))

# Wait for mouse click to close window
turtle.exitonclick()
