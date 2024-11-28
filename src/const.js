/* eslint-disable max-len */
import { name } from './greeting';

const reportsCorrectAnswer = () => {
  const i = 'Correct!'; // сообщение правильный ответ
  return i;
};
const reportsErrorsAnswer = (a, b, c) => {
  const result = `'${a}' is wrong answer ;(. Correct answer was '${b}'\nLet's try again, ${c}!`;
  return result;
}; // сообщение при ошибке
const simile = (a, b) => {
  let result = 0;
  if (a === b) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
};
const storesPrimeNumber = () => {
  const result = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  return result;
};
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min); // рандомное число от и до
const getTheAnswer = () => `Congratulations, ${name}!`;
export {
  reportsCorrectAnswer, reportsErrorsAnswer, simile, getRandomNumber, storesPrimeNumber, getTheAnswer,
};
