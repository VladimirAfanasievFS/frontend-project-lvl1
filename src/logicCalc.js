/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { name } from './greeting.js';
import { randomOne, reportsCorrectAnswer, reportsErrorsAnswer } from './const.js';

const solution = () => {
  console.log('What is the result of the expression?'); // знакомство с игрой
  let i = 1;
  let mark = 0; // из полученного числа делаем символ
  let result = 0; // из читаемого символа делаем решение
  while (i <= 3) {
    const rNumber = randomOne(); // рандомное число
    const twoNumber = randomOne(); // рандомное число
    const markNSign = Math.floor(Math.random() * 3); // рандомное число на знак
    switch (markNSign) {
      case 1:
        mark = '*';
        break;
      case 2:
        mark = '-';
        break;
      default:
        mark = '+';
    }
    const exRound = ` ${rNumber} ${mark} ${twoNumber}`; // рандомное выражение
    console.log(`Question:${exRound}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    switch (mark) {
      case '*':
        result = rNumber * twoNumber;
        break;
      case '-':
        result = rNumber - twoNumber;
        break;
      default:
        result = rNumber + twoNumber;
    }
    const verification = Math.round(result) === Number(Math.round(answer)) ? 1 : 0;
    const wrong = `${reportsErrorsAnswer(answer, Math.round(result), name)}`;// сообщение при ошибки в ответе
    if (verification === 1) {
      console.log(reportsCorrectAnswer()); // при правильном ответе продолжаем игру
    } else {
      return wrong; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return `Congratulations, ${name}!`;
};
export { solution };
