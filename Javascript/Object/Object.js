// Object

const person1 = {
    firstName: "Jahan",
    lastName: "Sumit",
    age: 29,
    fullName: function (){ return this.firstName + " " + this.lastName}
}

console.log("Name: " + person1.fullName());
console.log("Age: " + person1.age);


// Object.create()

const person2 = Object.create(person1);
person2.firstName = "Nur";
person2.lastName = "Nabi";
person2.age = 58;

console.log("Fater Name: " + person2.fullName());


//Object.fromEntries()

const fruits =[ 
["apples", 300],
["bananas", 400],
["pears", 500]
];

const obj = Object.fromEntries(fruits);
console.log(obj.pears);

const obj2 =  Object.fromEntries(fruits);
obj2.pears = 600;
console.log("from object 2: Pears - " + obj2.pears);


// Object.assign()

const p1 = {
    name : "Messi",
    age : 45,
    eyeColor : "blue"
};

const p2 = {
    name : "Ronaldo",
};

Object.assign(p1,p2);

console.log(p1);


// Same memory address shares

const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person;

x.age = 10;

console.log(person.age);

// Add properties

person.nationality = "Bangladeshi";

// Delete Properties

delete person.eyeColor;

// Nested objects

const myobj = {
    name : "John",
    age : 35,
    myCars : {
        car1 : "BMW",
        car2 : "Mercedes",
        car3 : "ford"
    }
}


// Object method

const personMethod = {
    firstName: "Dr",
    lastName: "Sumit",
    age: 29,
    fullName: function (){ return this.firstName + " " + this.lastName}
}

console.log("Name: " + personMethod.fullName());
console.log("Age: " + personMethod.age);


// Display Object
// Object.values()

const personValues = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(personValues);

let text = myArray.toString();

console.log(myArray);

// Json.stringify

let objstr = JSON.stringify(personValues);
console.log(objstr);
console.log(JSON);


// Constructor function

function CarT(make, model, color){
    this.make = make,
    this.model = model,
    this.color = color
};

const carObj = new CarT("ford", "frong", "red");
console.log(carObj.make);