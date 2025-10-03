function printLength(value: string | number) {
    if(typeof value === "string"){
        console.log(value.length);
    }
    else{
        console.log(value.toFixed());
    }
}


function printMessage(msg?: string) {
  if (msg) {
    // ✅ msg is now 'string'
    console.log(msg.toUpperCase());
  } else {
    // ✅ msg is 'undefined'
    console.log("No message provided");
  }
}


function logDateOrString(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear()); // ✅ Date
  } else {
    console.log(value.toUpperCase()); // ✅ string
  }
}