import unittest

class LightBulb(object):
    def __init__(self, brand):
        self.is_on = False
        self.brand = brand
    def switch_on(self):
        self.is_on = True
    def switch_off(self):
        self.is_on = False
    def on_or_off(self):
        return self.is_on

class LightBulbFactory(object):
    def create_bulb(self, brand):
        new_bulb = LightBulb(brand)
        return new_bulb

class LightBulbTest(unittest.TestCase):
    def setUp(self):
        self.bulb_factory = LightBulbFactory()
        self.bulb = self.bulb_factory.create_bulb("GE")
    def testNewBulbIsLightBulb(self):
        return self.assertIsInstance(self.bulb, LightBulb)
    def testBulbHasBrand(self):
        return self.assertEqual("GE", self.bulb.brand)
    def testBulbDefaultOff(self):
        return self.assertEqual(False, self.bulb.on_or_off())
    def testTurnOnBulb(self):
        self.bulb.switch_on()
        return self.assertEqual(True, self.bulb.on_or_off())

    if __name__ == "__main__":
        unittest.main()