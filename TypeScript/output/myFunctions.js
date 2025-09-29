function AddTwo(num) {
    return num + 2;
}
AddTwo(5);
let signUpUser = (name, email, isPaid) => {
    return true;
};
signUpUser("Jahangir", "jahan@gmail.com", true);
let loginUser = (email, Pass) => {
    return true;
};
let isLoggedIn = loginUser("jahan@gmail.com", "12345");
const getHello = (s) => {
    return "Hello";
};
function showError(errmsg) {
    throw Error(errmsg);
}
function combine(a, b) {
    return a + b;
}
const e = { name: "John", salary: 5000 };
const p = e;
console.log(p);
function printUser({ id, name, role = "guest" }) {
    console.log(`${id}-${name}-${role}`);
}
printUser({ id: 1, name: "Alice" });
// printUser({ id: 2, name: "Bob", role: undefined }); error
printUser({ id: 3, name: "Charlie", role: "admin" });
export {};
//# sourceMappingURL=myFunctions.js.map