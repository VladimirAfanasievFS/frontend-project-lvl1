
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isEven = (number) => number % 2 === 0;


const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNumber(0, 100);
  const answer = (isEven(question) ? 'yes' : 'no');
  return {
    question: question.toString(),
    answer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
