const user = {
    name: "Alice",
    age: 25
};
const myCar = { brand: "Toyota", year: 2020 };
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " says woof!");
    }
}
const d = new Dog("Buddy");
d.speak(); // Buddy says woof!
const circle = {
    radius: 50,
    color: "red"
};
console.log(circle);
export {};
//# sourceMappingURL=interface.js.map