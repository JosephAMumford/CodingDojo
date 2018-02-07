# Class to hold basic patient information
class Patient(object):
    def __init__(self,id,name,allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed_number = None

    def display_info(self):
        print " "
        print "Patient: " + self.name
        print "Id: " + str(self.id)
        # Create a list of allergies.  Check if there are any, add commas between each one
        allergy_string = ""
        if len(self.allergies) > 0:
            for i in range(0,len(self.allergies)):
                allergy_string = allergy_string + self.allergies[i]
                if i < len(self.allergies) - 1:
                    allergy_string = allergy_string + ", "
        print "Allergies: " + allergy_string
        print "Bed Number: " + str(self.bed_number)

# Class to hold hospital information
class Hospital(object):
    def __init__(self, name):
        self.patients = []
        self.name = name
        self.capacity = 50
        # Create a boolean list to keep track of which beds are in use
        self.beds = []
        for i in range(0,self.capacity):
            self.beds.append(False)

    def admit(self, _patient):
        if len(self.patients) < self.capacity:
            self.patients.append(_patient)
            # Find the first unused bed to assign patient to
            for i in range(0,self.capacity):
                if self.beds[i] == False:
                    self.beds[i] = True;
                    _patient.bed_number = i+1
                    break
        
        return self
    
    def disharge(self, _patient):
        index = 0
        for i in range(0, len(self.patients)):
            if _patient.name == self.patients[i].name:
                index = i
                break
        self.patients.pop(index)
        self.beds[index] = False
        _patient.bed_number = None
        return self
    
    def display_info(self):
        print ""
        print "====================="
        print self.name
        print "====================="
        beds_used = len(self.patients)
        print str(beds_used) + " of " + str(self.capacity) + " beds in use"
        for i in range(0,len(self.patients)):
            self.patients[i].display_info()

#Create patients
patient1 = Patient(100,"Joseph Mumford",["Peanuts"])
patient2 = Patient(110,"Paul Atreides",["Milk","Shellfish","Cinnamon"])

#Create hospital
hospital = Hospital("Ninja Hopsital")
hospital.admit(patient1)
hospital.admit(patient2)
hospital.display_info()

#Disharge patient
hospital.disharge(patient1)
hospital.display_info()

#Print patient to show bed_number was reset
print " "
patient1.display_info()