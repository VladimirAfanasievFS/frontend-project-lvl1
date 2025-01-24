import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'What number is missing in the progression?';

const numberGeneration = (lengthProgression, arithmeticRandom) => {
  let i = 0;
  let l = 0;
  const line = '';
  const arr = [];
  while (i < lengthProgression) {
    l += arithmeticRandom;
    arr.push(`${line}${l} `);
    i += 1;
    l += 1;
  }
  return arr;
};

const generateMissingProgressin = (number) => {
  const numberRandom = getRandomNumber(1, (number.length - 1));
  let a = 0;
  const colon = '..';
  let resul = '';
  let reply = 0;
  while (a < number.length) {
    resul = `${resul}${number[a]}`;
    if (a === numberRandom - 1) {
      resul = `${resul}${colon} `;
      reply = number[numberRandom].slice(0, -1);
      a += 1;
    }
    a += 1;
  }
  return [resul, reply];
};

const generateRound = () => {
  const lengthProgression = getRandomNumber(5, 10);
  const arithmeticRandom = getRandomNumber(1, 3);
  const [resul, reply] = generateMissingProgressin(
    numberGeneration(lengthProgression, arithmeticRandom),
  );
  const question = String(resul);
  const answer = String(reply);
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
