/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  reportsCorrectAnswer, reportsErrorsAnswer, getRandomNumber, getTheAnswer,
} from './const.js';
import { getName } from './greeting.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  let l = 0;
  while (l < 3) {
    const getOneNumber = getRandomNumber(1, 20);// первое число с чего начинает
    const getLengthProgression = getRandomNumber(5, 10);// длина прогрессии
    const getArithmeticRandom = getRandomNumber(1, 4);
    let i = 0;
    let missNumber = 0;
    let a = 0; // значение которое спрятано
    const getIncrease = getArithmeticRandom;
    let sum = getOneNumber;
    let result = '';
    const getLength = getRandomNumber(1, getLengthProgression);
    while (i <= getLengthProgression) {
      sum += getIncrease;
      if (i === getLength) {
        a = sum;
        missNumber = a;
        a = '..';
        result = `${result} ${a}`;
      } else {
        result = `${result} ${sum}`;
      }
      i += 1;
    }
    console.log(`Question:${result}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (Number(getAnswer) === Number(missNumber)) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(getAnswer, missNumber, getName)}`;
    }
    l += 1;
  }
  return getTheAnswer(getName);
};
export { progression };
