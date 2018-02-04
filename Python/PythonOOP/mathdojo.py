class MathDojo(object):
    def __init__(self):
        self.result = 0

    # PART I - Supports ints
    def add(self,x,*args):
        self.result = self.result + x
        for arg in args:
            self.result  = self.result + arg
        return self

    def subtract(self,x,*args):
        self.result = self.result - x
        for arg in args:
            self.result  = self.result - arg
        return self
    
    # PART II and PART III - Supports ints, lists, and tuples
    def add2(self,*args):
        for arg in args:
            if type(arg) == int:
                self.result  = self.result + arg
            elif type(arg) == list:
                for value in arg:
                    self.result  = self.result + value
            elif type(arg) == tuple:
                for value in arg:
                    self.result  = self.result + value
        return self

    def subtract2(self,*args):
        for arg in args:
            if type(arg) == int:
                self.result  = self.result - arg
            elif type(arg) == list:
                list_sum = 0
                for value in arg:
                    list_sum  = list_sum + value
                self.result = self.result - list_sum
            elif type(arg) == tuple:
                tuple_sum = 0
                for value in arg:
                    tuple_sum  = tuple_sum + value
                self.result = self.result - tuple_sum

        return self

md = MathDojo()
# PART I
print "Part I: " + str(md.add(2).add(2,5).subtract(3,2).result)
# Result is 4

# PART II, III
md.result = 0
print "Part II, III: " + str(md.add2([1], 3,4).add2([3,5,7,8], [2,4.3,1.25]).subtract2(2, [2,3], [1.1,2.3]).result)
# result is 28.15
