import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// eslint-disable-next-line import/prefer-default-export
export const name = readlineSync.question('May I have your name? ');
