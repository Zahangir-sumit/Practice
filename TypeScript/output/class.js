class player {
    name;
    age;
    country;
    occupasion;
    isActive;
    constructor(n, a, c, i) {
        this.name = n;
        this.age = a;
        this.country = c;
        this.isActive = i;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const mashrafi = new player("Mash", 41, "Bangladesh", true);
class Person {
    firstName;
    lastName;
    age;
    country;
    constructor(firstName, lastName, age, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
const man = new Person("Jahangir", "Alam", 29, "Bangladesh");
console.log(man.getFullName());
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("woof!");
    }
}
const d = new Dog("Rex");
d.move();
d.bark();
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class ConsoleLogger {
    log(message) {
        console.log("LOG: ", message);
    }
}
class MathUtil {
    static PI = 3.14;
    static square(n) {
        return n * n;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.square(5));
export {};
//# sourceMappingURL=class.js.map