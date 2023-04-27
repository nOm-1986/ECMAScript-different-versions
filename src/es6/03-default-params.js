function newUser(name, age, country) {
    var name = name || 'Fabian';
    var age = age || 36;
    var country = country || 'CO';
}

const newAccount = (name = 'Fabian', age= 26, country = 'CO') => {
    console.log(name, age, country);
}

newAccount();
newAccount('Maria Jose', 4, 'Australia');

