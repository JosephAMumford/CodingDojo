class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
};


class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
