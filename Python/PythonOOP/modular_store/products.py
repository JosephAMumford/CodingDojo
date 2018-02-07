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

if __name__ == "__main__":
    product = Product("Grand Eco", 14000,"312lb", "Steinway")
    print product
    print product.add_tax(0.18)
    print product.display_info()