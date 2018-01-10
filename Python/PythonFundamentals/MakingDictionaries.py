# Input lists
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

# This function makes a dictionary out of two lists.  It will test to ensure both
# lists are the same size.  If not, the shorter list will be used for the keys
def make_dict(list1, list2):
    new_dict = {}
    if len(list1) != len(list2):
        if len(list1) > len(list2):
            for i in range(0, len(list2)):
                new_dict[list2[i]] = list1[i]
        else:
            for i in range(0, len(list1)):
                new_dict[list1[i]] = list2[i]
    else:
        for i in range(0, len(list1)):
                new_dict[list1[i]] = list2[i]
    return new_dict

my_dictionary = make_dict(name, favorite_animal)
print my_dictionary