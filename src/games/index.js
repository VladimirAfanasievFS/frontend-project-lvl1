import readlineSync from 'readline-sync';
import getName from '../greeting.js';

const launchLogic = (description, getData) => {
  console.log(`${description}`);
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const [question, questionRight] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== questionRight) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'\nLet's try again, ${getName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${getName}!`);
};
export default launchLogic;
