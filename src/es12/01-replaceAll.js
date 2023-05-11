/**
 * ReplaceAll: ayuda a buscar y reemplazar texto, en todas las coincidencias.
 * Replace solo cambia la primera coincidencia.
 */

const string = "JavaScript es un maravilloso lenguage de programación, JavaScript por segunda vez.";

const replaceString = string.replace("JavaScript", "TypeScript");
const replaceString2 = string.replaceAll("JavaScript", "TypeScript");
console.log(replaceString);
console.log(replaceString2);
