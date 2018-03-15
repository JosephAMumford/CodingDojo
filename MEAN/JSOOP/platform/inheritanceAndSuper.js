// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();