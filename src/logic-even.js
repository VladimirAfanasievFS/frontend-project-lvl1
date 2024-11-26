/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { name } from './index.js';
import { randomOne, right, errorUser } from './const.js';

const result = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // знакомим пользователя с правилами игры
  let i = 1;
  while (i <= 3) {
    const a = randomOne();
    console.log(`Question: ${a}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const checkNumber = Number(a) % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
    const verification = answer === checkNumber ? 1 : 0; // проверям ответ с числом
    if (verification === 1) {
      console.log(right()); // при правильном ответе продолжаем игру
    } else {
      return `'yes' ${errorUser()} 'no'\n Ler's try again, ${name}!`; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return `Congratulations, ${name}!`;
};
export { result };
