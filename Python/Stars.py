# PART I
# This function draws stars equal to the value at index i in input list
#def draw_stars(star_map):
#    for i in range(0, len(star_map)):
#        stars = ""
#        for j in range(0, star_map[i]):
#            stars += "*"
#        print stars            

#x = [4,6,1,3,5,7,25]
#draw_stars(x)

# PART II
# This function draws either stars equal to the value of a number or the first
# letter of a string value equal to length of the string
def draw_stars(star_map):
    for i in range(0, len(star_map)):
        stars = ""
        # Get current value in input list and determine if it is a string or not
        value = star_map[i]
        if isinstance(value, basestring):
            for j in range(0, len(value)):
                stars += value[0].lower()
        else:
            for k in range(0,value):
                stars += "*"
        print stars     

x = [4, "Tom", 1, "Michael", 5,7,"Jimmy Smith"]
draw_stars(x)