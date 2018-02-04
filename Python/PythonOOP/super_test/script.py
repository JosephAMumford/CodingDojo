from modules import Human

class Wizard(Human.Human):
    def __init__(self):
        super(Wizard, self).__init__()
        self.intelligence = 10

    def heal(self):
        self.health += 10

class Ninja(Human.Human):
    def __init__(self):
        super(Ninja,self).__init__()
        self.stealth = 10
    
    def steal(self):
        self.stealth += 5

class Samurai(Human.Human):
    def __init__(self,health,strength):
        super(Samurai,self).__init__(health)
        self.strength = 10

    def sacrifice(self):
        self.health -= 5

#health,intelligence,stealth,strength
samurai1 = Samurai(5,5)
print "Health: " + str(samurai1.health)
print "Strength: " + str(samurai1.strength)

