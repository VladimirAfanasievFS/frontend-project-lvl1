import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (lengthProgression, step, startNumber) => {
  const firstNumber = startNumber;
  const arr = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    arr.push(firstNumber + step * i);
  }
  return arr;
};

const generateRound = () => {
  const startNumber = getRandomNumber(0, 50);
  const lengthProgression = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 3);
  const progression = generateProgression(lengthProgression, step, startNumber);
  const hiddenNumber = getRandomNumber(0, progression.length);
  const answer = String(progression[hiddenNumber]);
  console.log(answer);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
const start = () => launchLogic(description, generateRound);

export { description, start };
