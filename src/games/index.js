import readlineSync from 'readline-sync';
import { getName } from '../greeting';
import { reportsCorrectAnswer, reportsErrorsAnswer, getTheAnswer } from '../const';

const launchLogic = (getRules, getData) => {
  console.log(`${getRules}`); // правило игры
  for (let i = 0; i <= 2; i += 1) {
    const [getTask, questionRight] = getData();
    console.log(`Question: ${getTask}`);//  даем задачу пользователю
    const getAnswer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    if (getAnswer === questionRight || Number(getAnswer) === Number(questionRight)) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(getAnswer, questionRight, getName)}`;
    }
  }
  return getTheAnswer(getName);
};
export default launchLogic;
