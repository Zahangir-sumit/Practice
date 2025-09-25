class player {
    name: string;
    age: number;
    country: string;


    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }


    play(){
        console.log(`${this.name} is playing`);
    }
}

const mashrafi = new player("Mash", 41, "Bangladesh");