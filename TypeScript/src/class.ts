class player {
    public name: string;
    private age: number;
    protected country: string;
    public occupasion?: string;
    readonly isActive: boolean;


    constructor(n: string, a: number, c: string, i: boolean){
        this.name = n;
        this.age = a;
        this.country = c;
        this.isActive = i;
    }


    play(){
        console.log(`${this.name} is playing`);
    }
}

const mashrafi = new player("Mash", 41, "Bangladesh", true);


class Person{
    firstName: string;
    lastName: string;
    age: number;
    country: string;

    constructor(firstName:string, lastName: string, age: number, country: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }

    getFullName(){
        return this.firstName +" "+ this.lastName;
    }
}


const man = new Person("Jahangir", "Alam", 29, "Bangladesh");

console.log(man.getFullName());


class Animal {
    constructor(public name: string){}
    move(){
        console.log(`${this.name} is moving`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("woof!");
    }
}

const d = new Dog("Rex");

d.move();
d.bark();

abstract class Shape{
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number){
        super();
    }
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}


interface Logger {
    log(message: string):void;
}

class ConsoleLogger implements Logger {
    log(message: string) {
        console.log("LOG: ", message);
    }
}


class MathUtil {
    static PI = 3.14;
    static square(n: number) {
        return n * n;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));