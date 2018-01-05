# Program to evaluate if a number is prime or a perfect square
# If number is prime, print "Foo", if number is perfect square, print "Bar"
# Else print "FooBar"

# Variables
currentSquare = 1
currentPrime = 2
isSquare = False
isPrime = False

for x in range(100,100000):
    isSquare = False
    isPrime = False
    
    # Evaluate if number is a square, use currentSquare to avoid using numbers that
    # have already been squared
    s = currentSquare
    tempSquare = 0
    while tempSquare <= x: 
        tempSquare = s * s
        if tempSquare == x:
            isSquare = True
            currentSquare = s
            break
        s += 1
     
    # If number was not a square, it might be a prime
    if isSquare == False:
        # Check numbers from 2 to the test number
        for i in range(2, x):
            # Check if number is even, if not, proceed
            if (i % 2) != 0:
                # Check if number is divisible by i
                if(x % i) == 0:
                    isPrime = False
                    break
        # If no number was found to divide test number, then it is prime
        else:
            isPrime = True
     
    #Output
    if isSquare == True:
        print str(x) + ": Bar"

    if isPrime == True:
        print str(x) + ": Foo"

    if isSquare == False and isPrime == False:
        print str(x) + ": FooBar"