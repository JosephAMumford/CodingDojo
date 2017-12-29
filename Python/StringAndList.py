import string

# Find and Replace
print "FIND AND REPLACE"
words = "It's Thanksgiving day.  It's my birthday, too!"
print words
print "Position of first instance of day is " + str(words.find("day"))
newString = string.replace(words, "day", "month")
print newString

# Min and Max
print ""
print "MIN AND MAX"
x = [2, 54, -2, 7, 12, 98]
print "Min is " + str(min(x))
print "Max is " + str(max(x))

#First and Last
print ""
print "FIRST AND LAST"
x = ["hello", 2, 54, -2, 7, 12, 98, "world"]
print "First value is " + str(x[0])
print "Last value is " + str(x[len(x) - 1])

#New List
print ""
print "NEW LIST"
x = [19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]
print x
x.sort()
print "Sorted list is " + str(x)
half = len(x) / 2
firstList = x[:half]
secondList = x[half:]
print "First half is " + str(firstList)
print "Second half is " + str(secondList)
secondList.insert(0,firstList)
print "New list is " + str(secondList)