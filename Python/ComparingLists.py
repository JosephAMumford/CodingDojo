# variables
isEqual = False

# test cases
#list_one = [1,2,5,6,2]
#list_two = [1,2,5,6,2,3]

#list_one = [1,2,5,6,5]
#list_two = [1,2,5,6,5,3]

#list_one = [1,2,5,6,5,16]
#list_two = [1,2,5,6,5]

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

# check length of lists, if equal, they may be identical
# otherwise they are not
if len(list_one) == len(list_two):
    i = len(list_one)
    for value in range(0,i):
        if list_one[value] == list_two[value]:
            isEqual = True
        else:
            isEqual = False

# print both lists and say if they are equal or not
if isEqual == True:
    print "List one is identical to list two"
    print list_one
    print list_two
else:
    print "List one is not identical to list two"
    print list_one
    print list_two