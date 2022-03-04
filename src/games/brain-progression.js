
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 13;

const generateGameData = () => {
  const progression = [];
  const firstElement = generateRandomNumber(0, 100);
  const step = generateRandomNumber(1, 10);
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstElement + index * step);
  }

  const hiddenElementIndex = generateRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    answer: answer.toString(),
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
