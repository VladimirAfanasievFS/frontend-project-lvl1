import { getRandomNumber } from './const';
import launchLogic from './games/index';

const description = 'What is the result of the expression?';
let mark = 0; // из полученного числа делаем символ
let result = 0; // из читаемого символа делаем решение
const getData = () => {
  const number1 = getRandomNumber(1, 99); // рандомное число
  const number2 = getRandomNumber(1, 99); // рандомное число
  const numberSign = getRandomNumber(1, 3); // рандомное число на знак
  switch (numberSign) {
    case 1:
      mark = '*';
      break;
    case 2:
      mark = '-';
      break;
    default:
      mark = '+';
  }
  const question = `${number1} ${mark} ${number2}`; // рандомное выражение
  switch (mark) {
    case '*':
      result = number1 * number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      result = number1 + number2;
  }
  const questionRight = result;
  return [question, questionRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
