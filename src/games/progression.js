import getRandomNumber from '../helpers.js';
import launchLogic from './index.js';

const description = 'What number is missing in the progression?';

const numberGeneration = (lengthProgression, arithmeticRandom) => {
  let i = 0;
  let l = 0;
  const line = '';
  const arr = [];
  while (i < lengthProgression) {
    l += arithmeticRandom;
    arr.push(`${line}${l} `);
    i += 1;
    l += 1;
  }
  return arr;
};

const generateMissingProgressin = (number) => {
  const numberRandom = getRandomNumber(1, (number.length - 1));
  let a = 0;
  const colon = '..';
  let resul = '';
  let reply = 0;
  while (a < number.length) {
    resul = `${resul}${number[a]}`;
    if (a === numberRandom - 1) {
      resul = `${resul}${colon} `;
      reply = number[numberRandom].slice(0, -1);
      a += 1;
    }
    a += 1;
  }
  // reply = reply.slice(0, -1);
  return [resul, reply];
};


// const getExpression = (number, numberLength, arithmetic, secretNumber) => {
//   let i = 0;
//   let missNumber = 0;
//   let a = 0;
//   let sum = number;
//   let result = '';
//   while (i <= numberLength) {
//     sum += arithmetic;
//     if (i === secretNumber) {
//       a = sum;
//       missNumber = a;
//       a = '..';
//       result = `${result}${a} `;
//     } else {
//       result = `${result}${sum} `;
//     }
//     i += 1;
//   }
//   const question = result;
//   const answer = String(missNumber);
//   return [question, answer];
// };
const generateRound = () => {
  const lengthProgression = getRandomNumber(5, 10);
  const arithmeticRandom = getRandomNumber(1, 3);
  const [resul, reply] = generateMissingProgressin(numberGeneration(lengthProgression, arithmeticRandom));
  const question = String(resul);
  const answer = String(reply);
  return [question, answer];
};

// const generateRound = () => {
//   const number1 = getRandomNumber(1, 20);
//   const lengthProgression = getRandomNumber(5, 10);
//   const arithmeticRandom = getRandomNumber(1, 4);
//   const getSecretNumber = getRandomNumber(1, lengthProgression);
//   return getExpression(number1, getSecretNumber, lengthProgression, arithmeticRandom);
// };
// console.log(generateRound(numberGeneration()));
const start = () => launchLogic(description, generateRound);

export { description, start };
