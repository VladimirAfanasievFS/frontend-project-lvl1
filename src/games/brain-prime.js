
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question: question.toString(),
    answer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
