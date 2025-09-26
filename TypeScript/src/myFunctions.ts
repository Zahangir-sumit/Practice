function AddTwo(num: number){
    return num + 2;
}


AddTwo(5);

let signUpUser = (name: string, email: string, isPaid?: boolean) => {
    return true
}

signUpUser("Jahangir", "jahan@gmail.com", true);

let loginUser = (email: string, Pass: string) => {
    return true;
}

let isLoggedIn = loginUser("jahan@gmail.com", "12345");

const getHello = (s: string): string => {
    return "Hello";
}


function showError(errmsg: string): never {
    throw Error(errmsg);
} 

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
// console.log(combine(1, "2")); error


interface Person { name: string; salary: number; }
type Employee = { name: string; salary: number; }
const e: Employee = { name: "John", salary: 5000 };
const p: Person = e;
console.log(p);


type User = { id: number; name: string; role?: string  };
function printUser({ id, name, role = "guest" }: User) {
  console.log(`${id}-${name}-${role}`);
}
printUser({ id: 1, name: "Alice" });
// printUser({ id: 2, name: "Bob", role: undefined }); error
printUser({ id: 3, name: "Charlie", role: "admin" });
