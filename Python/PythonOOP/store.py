class Product(object):
    def __init__(self,item_name,price, weight,brand):
        self.item_name = item_name
        self.price = price
        self.weight = weight
        self.brand = brand
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self, amount):
        self.price = (self.price * amount) + self.price
        return self

    def return_item(self,reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0

        elif reason == "new":
            self.status = "for sale"

        elif reason == "opened":
            self.status = "used"
            self.price = self.price - (self.price * 0.2)

        return self

    def display_info(self):
        print "Name: " + self.item_name
        print "Price: $" + str(self.price)
        print "Weight: " + self.weight
        print "Brand: " + self.brand
        print "Status: " + self.status
        print " "
        return self

class Address(object):
    def __init__(self,street,city,state,zipcode):
        self.street = street
        self.city = city
        self.state = state
        self.zipcode = zipcode

    def display_info(self):
        print "Address: " + self.street + " " + self.city + ", " + self.state + " " + str(self.zipcode)
        return self
    
class Store(object):
    def __init__(self,name,location,owner):
        self.name = name
        self.location = location
        self.owner = owner
        self.products = {}

    def display_info(self):
        print self.name
        self.location.display_info()
        print "Owner: " + self.owner
        print " "

    def add_product(self,new_item):
        self.products.update({new_item.item_name : new_item})
        return self

    def remove_product(self,item_name):
        self.products.pop(item_name, None)

        return self
    def inventory(self):
        self.display_info()
        print "Current Inventory"
        for item in self.products.values():
            item.display_info()
        return self

# Create address
address1 = Address("412 Brookside Ave", "Winston", "Colorado", 74562)

# Create store
teststore = Store("Wagner Piano",address1,"Richard Wagner")

# Create products
item1 = Product("Grand Eco", 14000,"312lb", "Steinway")
item2 = Product("Chopin Edition", 9200,"305lb", "Yamaha")
item3 = Product("Grand Lt", 17500,"298lb", "Steinway")
item4 = Product("Baby Grand", 11020,"276lb", "Steinway")

# Add products
teststore.add_product(item1)
teststore.add_product(item2)
teststore.add_product(item3)
teststore.add_product(item4)

# Display Inventory
teststore.inventory()

# Remove product
teststore.remove_product("Grand Lt")

teststore.inventory()