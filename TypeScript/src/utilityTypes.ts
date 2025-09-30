// 👉 Makes all properties optional.

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const uOpt: PartialUser = {
  name: "Alice", // ✅ age and id not required
};



type StrictUser = Required<User>;

const uReq: StrictUser = { id: 1, name: "Bob" ,age: 30}; // ✅ must provide all

//👉 Makes all properties immutable.
interface Car {
  brand: string;
  year: number;
}

const myCar: Readonly<Car> = { brand: "Toyota", year: 2020 };

// myCar.year = 2021 ❌ Error


//👉 Create a type by picking specific keys.
type UserPreview = Pick<User, "id" | "name">;

const u: UserPreview = { id: 1, name: "Sam" }; // ✅ age not required


//👉 Create a type by excluding specific keys.

type UserWithoutEmail = Omit<User, "age">;

const uEx: UserWithoutEmail = { id: 2, name: "Lina" }; // ✅ age excluded



// Record<K, T>

//👉 Construct an object type with keys of type K and values of type T.

type Roles = "admin" | "editor" | "viewer";
type Permissions = Record<Roles, boolean>;

const perms: Permissions = {
  admin: true,
  editor: false,
  viewer: true,
};

//👉 Remove types from a union.

type Status = "success" | "error" | "pending";
type FinalStatus = Exclude<Status, "pending">;

const s1: FinalStatus = "success"; // ✅
// const s: FinalStatus = "pending"; ❌


//👉 Keep only the types that are in both.

type Allowed = Extract<Status, "success" | "error">;

const s2: Allowed = "error"; // ✅


//👉 Removes null and undefined.

type MaybeNumber = number | null | undefined;
type StrictNumber = NonNullable<MaybeNumber>;

const n: StrictNumber = 42; // ✅
// const n: StrictNumber = null; ❌

// Get the return type of a function

function getUser(){
  return { id: 1, name: "zara"};
}

type UserReturn = ReturnType<typeof getUser>;

const u1: UserReturn = { id: 1, name: "zara"};


// Gets the parameter types of a fucntion

function greet(name: string, age: number){
  return `Hello ${name}, age ${age}`;
}

type GreetParams = Parameters<typeof greet>;


const args: GreetParams = ["Alice", 25]