# Multiples
print ""
print "Odd numbers 1 to 1000"
for oddNum in range(1,1000):
    if (oddNum % 2) != 0:
        print oddNum   

print ""
print "Multiples of 5 from 5 to 1,000,000"
for multiple in range(5,1000000):
    if (multiple % 5) == 0:
        print multiple


# Sum List
print ""
a = [1, 2, 5, 10, 255, 3]
sum_a = 0
for x in a:
    sum_a += x

print "Sum of " + str(a) + " is " + str(sum_a)

# Average List
print ""
a = [1, 2, 5, 10, 255, 3]
avg_a = 0
for x in a:
    avg_a += x

avg_a = float(avg_a / len(a))
print "Average of " + str(a) + " is " + str(avg_a)