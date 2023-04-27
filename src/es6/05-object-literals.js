// enhanced object literals

function newUser(user, age, country, uId) {
    //Forma antigua.
    // return {
    //     user: user,
    //     age: age,
    //     country: country
    // }
    // Nueva forma.
    return {
        user,
        age, 
        country,
        id: uId || 2
    }
}
console.log(newUser('Fabian', 35, 'CO'));
console.log(newUser('Fabian', 35, 'CO',5));