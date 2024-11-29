/* eslint-disable import/extensions */
import { getRandomNumber } from './const.js';

const getRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumberOne = getRandomNumber(1, 99);
const isNumberParity = Number(getRandomNumberOne) % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
export { getRules, getRandomNumberOne, isNumberParity };
