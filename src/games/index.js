import readlineSync from 'readline-sync';
import getName from '../greeting';

const launchLogic = (description, getData) => {
  console.log(`${description}`); // правило игры
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const [question, questionRight] = getData();
    console.log(`Question: ${question}`);//  даем задачу пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    if (answer === questionRight || Number(answer) === Number(questionRight)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'\nLet's try again, ${getName}!`;
    }
  }
  return `Congratulations, ${getName}!`;
};
export default launchLogic;
