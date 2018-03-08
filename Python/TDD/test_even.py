import unittest

def isEven(n):
    return n % 2 == 0

class IsEvenTests(unittest.TestCase):
    def testTwo(self):
        self.failUnless(isEven(2))
    def testThree(self):
        self.failIf(isEven(3))

if __name__ == '__main__':
    unittest.main()

