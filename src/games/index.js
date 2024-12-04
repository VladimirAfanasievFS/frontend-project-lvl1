import readlineSync from 'readline-sync';
import getName from '../greeting.js';

const isAnswer = (userResponse, task) => (userResponse === task ? 1 : 0);
const launchLogic = (description, getData) => {
  console.log(`${description}`);
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const [question, questionRight] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (isAnswer(answer, questionRight) === 1) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'\nLet's try again, ${getName}!`;
    }
  }
  return `Congratulations, ${getName}!`;
};
export default launchLogic;
