/**
 * RegEx: Generar filtros para validar información.
*/
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, banana, kiwi, orange, pineaple, strawberry, pear, Apple';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
/**
 * [
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, banana, kiwi, orange, pineaple, strawberry, pear, Apple',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 57,
  input: 'Apple, banana, kiwi, orange, pineaple, strawberry, pear, Apple',
  groups: undefined
]
 */