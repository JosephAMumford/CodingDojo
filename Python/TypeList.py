#input
l = ['magical unicorns',19,'hello',98.98,'world']
# l = [2,3,1,7,4,12]
# l = ['magical','unicorns']
# l = [2, 3.14, 5.8, 5]

# variables
string = ""
totalInt = 0
totalFloat = 0
sumTotal = 0

# loop through list to evaluate element types
# and add like values together
for value in l:
    if isinstance(value, basestring):
        string +=  " " + value
    if isinstance(value, int):
        totalInt += value
    if isinstance(value, float):
        totalFloat += value

# add floats and ints together for mixed numbers
sumTotal = totalInt + totalFloat

# evaluate types in list
if len(string) == 0 and totalFloat == 0:
    print "List is of integer type"
    print "Sum is: " + str(totalInt)
if len(string) == 0 and totalInt == 0:
    print "List is of float type"
    print "Sum is: " + str(totalFloat)
if len(string) != 0 and sumTotal == 0:
    print "List is of string type"
    print "String value is: " + string
if len(string) == 0 and totalInt != 0 and totalFloat != 0:
    print "List is of mixed number type"
    print "Sum is: " + str(sumTotal)
if len(string) != 0 and sumTotal != 0:   
    print "List is of mixed type"
    print "String value is: " + string
    print "Sum is: " + str(sumTotal)