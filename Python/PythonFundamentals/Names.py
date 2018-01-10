# PART I
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

# This function prints information from input dictionary
def print_students(data):
    for i in range(0, len(data)):
        print data[i]["first_name"] + " " + data[i]["last_name"] 

print_students(students)

# PART II
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

# This functions prints information from input dictionary and prints length of 
# names used
def print_users(data):
    print "Students"
    for j in range(0, len(data["Students"])):
        print str(j + 1) + " - " + data["Students"][j]["first_name"] + " " + data["Students"][j]["last_name"] + " - " + str(len(data["Students"][j]["first_name"] +data["Students"][j]["last_name"]))
    print "Instructions"
    for j in range(0, len(data["Instructors"])):
        print str(j + 1) + " - " + data["Instructors"][j]["first_name"] + " " + data["Instructors"][j]["last_name"] + " - " + str(len(data["Instructors"][j]["first_name"] +data["Instructors"][j]["last_name"]))

print_users(users)