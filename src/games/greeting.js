/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!`);

export { getName };