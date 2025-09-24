function AddTwo(num: number){
    return num + 2;
}


AddTwo(5);

let signUpUser = (name: string, email: string, isPaid: boolean) => {
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
