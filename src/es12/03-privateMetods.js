
class user {

    constructor(name = 'Unnamed', age = 18) {
        this.name = name;
        this.#age = age;
    }

    //metodos
    speak(){
        return `Hello`;
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }

    set uAge(age) {
        this.age = age;
    }
}

const bebeloper = new user('Fabian', 20);
bebeloper.age = 5;
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 21);
console.log(bebeloper.age = 50);
console.log(bebeloper.uAge);

