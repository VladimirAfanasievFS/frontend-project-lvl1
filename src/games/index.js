import readlineSync from 'readline-sync';
import getName from '../greeting.js';

const launchLogic = (description, getData) => {
  console.log(`${description}`);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answerRight] = getData();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answerRight) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerRight}'\nLet's try again, ${getName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${getName}!`);
};
export default launchLogic;
