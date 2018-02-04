def varargs(arg1, *args):
    print "Got " + arg1 + " and " + ", ".join(args)

varargs("one")
varargs("one","two")
varargs("one","two","three")
varargs("one","two","three","four","five","six")

def varargs1(arg1,*args):
    print "args is of " + str(type(args))
    
varargs1("one","two","three")
