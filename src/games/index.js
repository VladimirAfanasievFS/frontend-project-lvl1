/* eslint-disable no-plusplus */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getRules, getRandomNumberOne, isNumberParity } from '../even.js';
import { getName } from './greeting.js';
import { reportsCorrectAnswer, reportsErrorsAnswer, getTheAnswer } from '../const.js';

const launchLogic = () => {
  console.log(`${getRules}`); // правило игры
  for (let i = 0; i <= 2; i++) {
    const getTask = getRandomNumberOne;
    console.log(`Question: ${getTask}`);//  даем задачу пользователю
    const getAnswer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const isVerification = getAnswer === isNumberParity ? 1 : 0; // проверям ответ
    if (isVerification === 1) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(getAnswer, isNumberParity, getName)}`;
    }
  }
  return getTheAnswer(getName);
};
console.log(launchLogic());
