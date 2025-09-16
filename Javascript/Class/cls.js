class Product{

        constructor(name, price){
            this.name = name;
            this. price = price;
        }


        displayProduct(){
            console.log(`Product: ${this.name}`);
            console.log(`Price: ${this.price.toFixed(2)}`);

        }

        calculateTotal(){
            return this.price + (this.price * salesTax);
        }
}
const salesTax = 0.05;
const product1 = new Product("Apple", 100.00);

product1.displayProduct();


// Inheritence

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}


class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}