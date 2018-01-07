# Test dictionary
my_info = {}
my_info["name"] = "Joseph"
my_info["age"] = 35
my_info["country"] = "The United States"
my_info["language"] = "C#"

# This function prints the values of input dictionary
def print_bio(data):
    print "My name is " + data["name"]
    print "My age is " + str(data["age"])
    print "My country of birth is " + str(data["country"])
    print "My favorite language is " + str(data["language"])

print_bio(my_info)