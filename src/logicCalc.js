/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getName } from './greeting.js';
import {
  getRandomNumber, reportsCorrectAnswer, reportsErrorsAnswer, getTheAnswer,
} from './const.js';

const solution = () => {
  console.log('What is the result of the expression?'); // знакомство с игрой
  let i = 1;
  let mark = 0; // из полученного числа делаем символ
  let result = 0; // из читаемого символа делаем решение
  while (i <= 3) {
    const getRandomNumberOne = getRandomNumber(1, 99); // рандомное число
    const getRandomNumberTwo = getRandomNumber(1, 99); // рандомное число
    const getNumberSign = getRandomNumber(1, 3); // рандомное число на знак
    switch (getNumberSign) {
      case 1:
        mark = '*';
        break;
      case 2:
        mark = '-';
        break;
      default:
        mark = '+';
    }
    const arithmeticExpressions = ` ${getRandomNumberOne} ${mark} ${getRandomNumberTwo}`; // рандомное выражение
    console.log(`Question:${arithmeticExpressions}`); // даем число пользователю
    const getAnswer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    switch (mark) {
      case '*':
        result = getRandomNumberOne * getRandomNumberTwo;
        break;
      case '-':
        result = getRandomNumberOne - getRandomNumberTwo;
        break;
      default:
        result = getRandomNumberOne + getRandomNumberTwo;
    }
    const verification = Math.round(result) === Number(Math.round(getAnswer)) ? 1 : 0;
    if (verification === 1) {
      console.log(reportsCorrectAnswer()); // при правильном ответе продолжаем игру
    } else {
      return reportsErrorsAnswer(getAnswer, Math.round(result), getName); // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return getTheAnswer(getName);
};
export { solution };
