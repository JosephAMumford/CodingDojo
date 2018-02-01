class Bike(object):
    def __init__(self,price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print "Price: " + str(self.price)
        print "Max Speed: " + str(self.max_speed)
        print "Miles ridden: " + str(self.miles)

        return self

    def ride(self):
        print "Riding"
        self.miles = self.miles + 10
        return self

    def reverse(self):
        print "Reversing"
        self.miles = self.miles - 5

        # Ensure miles is not negative
        if self.miles < 0:
            self.miles = 0

        return self

bike1 = Bike(100,12,0)
bike2 = Bike(340,15,0)
bike3 = Bike(256,16,0)

#Have the first instance ride three times, reverse once and have it displayInfo().
# No chaining
print "Bike 1" 
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

print " "

# Have the second instance ride twice, reverse twice and have it displayInfo().
# Chaining
print "Bike 2"
bike2.ride().ride().reverse().reverse().displayInfo()

print " "
 
# Have the third instance reverse three times and displayInfo().
#Chaining
print "Bike 3"
bike3.reverse().reverse().reverse().displayInfo()