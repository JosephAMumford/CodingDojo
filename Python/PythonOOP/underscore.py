class Underscore(object):
    # Return a list of value where each element has been applied to function
    def map(self, list, function):
        for i in range(0,len(list)):
            list[i] = function(list[i])
        return list
    
    # Use intitial value if needed, like in multiplication; if it is zero, result will always
    # be zero.  For addition, you would pass 0 or leave blank
    def reduce(self, list, function,initial=None):
        if initial == None:
            value = 0
        else:
            value = initial
        for i in list:
            value = function(value,i)
        return value
    
    # Return index of first element which satisfies function
    def find(self, list, function):
        index = None
        for i in range(0,len(list)):
            if function(list[i]) == True:
                index = i
                break
        return index 

    # Return a list of all values that satisfy the function
    def filter(self, list, function):
        values = []
        for i in range(0,len(list)):
            if function(list[i]) == True:
                values.append(list[i])
        return values
    
    # Return a list of all values that do not satisfy the function
    def reject(self, list, function):
        values = []
        for i in range(0,len(list)):
            if function(list[i]) == False:
                values.append(list[i])
        return values

# Create underscore object
_ = Underscore()

# Use map function to apply function to all liest elements
mapped = _.map([1,2,3,4], lambda x: x * x)
print mapped

# Use reduce function to reduce list of values to a single value with supplied function 
reduced = _.reduce([4,1,3,2,5,2], lambda x,y: x + y, 0)
print reduced

# Use find function to return first result (index of list) where expression is true
found = _.find([1,4,3,2,5,6], lambda x: x == 2)
print found

# Use function to return all values that return true when evaluated with function
filtered = _.filter([1,2,3,4,5,6], lambda x: x % 2 == 0)
print filtered

# Use function to return all values that return false when evaluated with function
rejected = _.reject([1,2,3,4,5,6], lambda x: x % 2 == 0)
print rejected