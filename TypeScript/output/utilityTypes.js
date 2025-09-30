// 👉 Makes all properties optional.
const uOpt = {
    name: "Alice", // ✅ age and id not required
};
const uReq = { id: 1, name: "Bob", age: 30 }; // ✅ must provide all
const myCar = { brand: "Toyota", year: 2020 };
const u = { id: 1, name: "Sam" }; // ✅ age not required
const uEx = { id: 2, name: "Lina" }; // ✅ age excluded
const perms = {
    admin: true,
    editor: false,
    viewer: true,
};
const s1 = "success"; // ✅
const s2 = "error"; // ✅
const n = 42; // ✅
// const n: StrictNumber = null; ❌
// Get the return type of a function
function getUser() {
    return { id: 1, name: "zara" };
}
const u1 = { id: 1, name: "zara" };
// Gets the parameter types of a fucntion
function greet(name, age) {
    return `Hello ${name}, age ${age}`;
}
const args = ["Alice", 25];
export {};
//# sourceMappingURL=utilityTypes.js.map