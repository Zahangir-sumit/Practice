function printLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value.toFixed());
    }
}
function printMessage(msg) {
    if (msg) {
        // ✅ msg is now 'string'
        console.log(msg.toUpperCase());
    }
    else {
        // ✅ msg is 'undefined'
        console.log("No message provided");
    }
}
function logDateOrString(value) {
    if (value instanceof Date) {
        console.log(value.getFullYear()); // ✅ Date
    }
    else {
        console.log(value.toUpperCase()); // ✅ string
    }
}
export {};
//# sourceMappingURL=narrowing.js.map