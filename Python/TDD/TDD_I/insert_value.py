def insert_val_at(index, my_list, value):
    if index >= len(my_list):
        return False
    if index < len(my_list):
        my_list.insert(index,value)
        return my_list

