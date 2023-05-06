/**
 * Se agrega una mejora interasante para capturar en grupos valores que estan detro de una expresión regular
 */
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);