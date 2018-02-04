class Animal(object):
    def __init__(self,name,health):
        self.name = name
        self.health = 50
    
    def walk(self):
        self.health = self.health - 1
        return self

    def run(self):
        self.health = self.health - 5
        return self

    def display_health(self):
        print "Health: " + str(self.health)
        return self

# Create instance of Animal
animal1 = Animal("Edgar",30)
animal1.walk().walk().walk().run().run().display_health()

class Dog(Animal):

    def pet(self):
        self.health = self.health + 5
        return self

# Create instance of Dog
dog1 = Dog("Raspberry",150)
dog1.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):

    def fly(self):
        self.health = self.health - 10
        return self

    def display_health(self):
        print "I am a Dragon"
        return self

# Create instance of Dragon
dragon1 = Dragon("Phantoon", 500)
dragon1.walk().run().fly().fly().fly().display_health()

# Create new Animal
animal2 = Animal("Probos",200)

#animal2.pet()
#AttributeError: 'Animal' object has no attribute 'pet'

#animal2.fly()
#AttributeError: 'Animal' object has no attribute 'fly'

animal2.display_health()    
#Health: 50 - does not say "I am a Dragon"
