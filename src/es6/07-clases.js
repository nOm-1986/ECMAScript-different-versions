/**
 * CLASES
 * This -> Hace referencia al elemento padre que lo contiene.
 */


class User {}

class user {
    
    constructor(name = 'María') {
        //console.log('From constructor');
        this.name = name;
        console.log(this.greeting());
    }

    //metodos
    greeting(){
        return `Hello ${this.name}`;
    }
}

//Instancia de una clase:
//const newuser = new user();
//console.log(newuser.greeting());

const david = new user('Fabian');
const maria = new user();

/**
 * GETTERS Y SETTERS
 */

class user {
    constructor(name = 'Unnamed', age = 18) {
        this.name = name;
        this.age = age;
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
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 21);
console.log(bebeloper.age = 50);
console.log(bebeloper.uAge);
