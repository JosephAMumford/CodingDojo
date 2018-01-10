# Input list
word_list = ['hello','world','my','name','is','Anna']

# Variables
new_list = []
wordsFound = False

# You can change this to any character that you want to search for
char = 'o'

# Loop through each word in the word list
for word in word_list:
    # Get the length of each word, how many characters in string
    i = len(word)
    # Loop through each character in word, using the length of the word as the range
    for x in range(0,i):
        temp = word
        if temp[x] == char:
            new_list.append(word)
            wordsFound = True

# Output
# If one or more words were found containing the desired character
if wordsFound == True:
    num = len(new_list)
    if num > 1:
        print "There are " + str(num) + " words containing the character " + char
    else:
        print "There is 1 word that contains the character " + char  
    
    print new_list
# If no words in list contain the character
else:
    print "There were no words in the list containing the character " + char