import readlineSync from 'readline-sync';
import getName from '../greeting.js';

const launchLogic = (description, generateRound) => {
  console.log(`${description}`);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== rightAnswer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${getName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${getName}!`);
};
export default launchLogic;
