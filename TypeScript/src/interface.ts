interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};


interface Car {
  brand: string;
  model?: string; // optional
  readonly year: number; // cannot be changed
}

const myCar: Car = { brand: "Toyota", year: 2020 };

// myCar.year = 2021; error

interface Animal {
  name: string;
  speak():void
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(){
    console.log(this.name + " says woof!");
  }
}

const d = new Dog("Buddy");
d.speak(); // Buddy says woof!



interface Shape{
    color: string;
}


interface Circle extends Shape{
    radius: number;
}


const circle: Circle = {
    radius: 50,
    color: "red"
}
console.log(circle);


interface User {
  name: string;
}
interface User {
  age: number;
}

const u: User = { name: "Ali", age: 25 };