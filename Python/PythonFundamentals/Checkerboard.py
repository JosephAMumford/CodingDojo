# You need two loops, one for y-axis and one for x-axis
for y in range(0,8):
    # Create a string variable, print adds a line break so we build each row as a string
    line = ""
    for x in range(0,8): 
        # Here we check if row and column is even or odd, alternate patterns on odd rows
        if y % 2 == 0:
            if x % 2 == 0:
                line += '*'
            else:
                line += ' '
        else:
            if x % 2 == 0:
                line += ' '
            else:
                line += '*'
    # Print the row
    print line