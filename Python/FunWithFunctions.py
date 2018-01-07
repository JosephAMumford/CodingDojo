# This function will print a list of number between 1 and 2000 and determine
# if they are odd or even
def odd_even():
    for i in range(1,2000):
        if(i % 2) == 0:
            print "Number is " + str(i) + ".  This is an even number."
        else:
            print "Number is " + str(i) + ".  This is an odd number."

odd_even()


# This function will iterate through a list and returns a new list
# of each value mulitplied by a number
def multiply(a,b):
    newList = []
    for i in range(0,len(a)):
        newList.append(a[i] * b)
    return newList

l = [2,4,10,16]
p = multiply(l,5)
print p

# This function will take a list a generate a new list containing a list for each value
# in the input list.  Each of those lists will contain a value of 1 equal to the number
# of the values in the input list.
def layered_multiples(arr):
    new_array = []
    #  Iterate through the input list
    for i in range(0, len(arr)):
        l = []
        # Create a new list filled with 1's equal to the value of index i of the input array
        for j in range(0, arr[i]):
            l.append(1)
        new_array.append(l)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x

