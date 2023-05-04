function *generatorFunction() {
    yield ' Jose '
    yield ' Fabian '
    yield ' Beltran '
}

const generator = generatorFunction()
// Call next four times
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());