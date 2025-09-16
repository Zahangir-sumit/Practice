console.log("welcome test");




const total = product1.calculateTotal();
console.log(`Total Price is: $${total.toFixed(2)}`);

console.log(document);

testBack(testCallBack);

function testBack(callback){

    console.log("Callback executing");
    callback();
}

function testCallBack(){
    console.log("Call back executed");
}





let arr =  [1,5,6,2,4,3];

let arr2 =  arr;
arr2 = arr2.sort();

console.log(arr);
console.log(arr2);