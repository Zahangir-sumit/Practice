class player {
    name;
    age;
    country;
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const mashrafi = new player("Mash", 41, "Bangladesh");
export {};
//# sourceMappingURL=class.js.map