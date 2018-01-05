# Variable
# This is the header of the multiplication table
tableHeader = "x   1  2  3  4  5  6  7  8   9  10  11  12"

print tableHeader

# Loop through the rows 1 - 12
for y in range(1,13):
    row = str(y)
    if y < 10:
        row += ' '
    # Loop through the columns 1 - 12
    for x in range(1,13):
        # The value of the row multiplied by the column
        value = x * y
        # The following pads the value with space depending on decimal place
        if  x < 9:
            if value < 10:
                row += '  ' + str(value)
            if value >= 10:
                row += ' ' + str(value)
        else:
            if value < 10:
                row += '   ' + str(value)
            if value < 100 and value >= 10:
                row += '  ' + str(value)
            if value >= 100:
                row += ' ' + str(value)
    print row    