# function input
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

# This function takes a dictionary as input an returns a list with tuples
# consisting of each key and its value
def create_tuple_list(data):
  temp_list = []
  temp_tuple = ()
  for key in data.keys():
    temp_tuple = (key, data[key])
    temp_list.append(temp_tuple)
  return temp_list

#function output
new_list = create_tuple_list(my_dict)
print new_list
