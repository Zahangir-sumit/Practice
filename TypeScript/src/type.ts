type Username = string;
type Age = number;

let name: Username = "Alice";
let age: Age = 25;


type Role = "admin" | "editor" | "viewer";

let userRole: Role = "admin";


type User = {
  id: number;
  name: string;
  isActive: boolean;
};

let u: User = { id: 1, name: "Alice", isActive: true };


type ApiResponse<T> = {
  data: T;
  error?: string;
};

let response: ApiResponse<string> = {
  data: "Success"
};



// class Parent {
//   protected val = 1;
// }
// class Child extends Parent {
//   val = 2;
// }
// const c: Parent = new Child();
// console.log(c.val);