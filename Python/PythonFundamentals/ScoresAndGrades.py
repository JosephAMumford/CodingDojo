import random

# This function prints the score and grade depending on the input score
def print_score(score):
    grade = ""
    if score >= 60 and score <= 69:
        grade = 'D'
    if score >= 70 and score <= 79:
        grade = 'C'
    if score >= 80 and score <= 89:
        grade = 'B'
    if score >= 90 and score <= 100:
        grade = 'A'
    print "Score: " + str(score) + "; Your grade is " + grade

print "Score and Grades"
for i in range(0,10):
    # Get a random number between 60 and 100 for a score
    random_num = random.randint(60,100)
    print_score(random_num)
print "End of the program. Bye!"
    