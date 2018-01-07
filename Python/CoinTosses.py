import random

# Keep track of heads or tails
total_heads = 0 
total_tails = 0

# This function returns the result of a coin toss, simulated by a random number that is
# rounded to either 1 or 0, for heads or tails
def toss_coin():
    result = ""
    rand = random.random()
    rand = round(rand)
    # Tails
    if rand == 0.0:
        result = "tail"
    # Heads
    if rand == 1.0:
        result = "head"
    return result

print "Starting the program..."
for i in range(0,5000):
    toss = toss_coin()
    if toss == "tail": 
        total_tails += 1
    if toss == "head":
        total_heads += 1
    print "Attempt #" + str(i) + ": Throwing a coin... It's a " + toss + "! ... Got " + str(total_heads) + " head(s) so far and " + str(total_tails) + " tail(s) so far"
print "Ending the program, thank you!"