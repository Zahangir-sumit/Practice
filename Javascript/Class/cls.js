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



