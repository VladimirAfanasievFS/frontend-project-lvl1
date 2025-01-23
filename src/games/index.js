import readlineSync from 'readline-sync';
import greeting from '../greeting.js';

const launchLogic = (description, generateRound) => {
  const [userName] = greeting();
  console.log(`${description}`);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== rightAnswer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default launchLogic;
