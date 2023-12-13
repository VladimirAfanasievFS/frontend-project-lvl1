import {
  start,
  typeTask,
  askQuestion,
  isAnswerCorrect,
  congrats,
} from "../index.js";

function brainEven() {
  let characterName = start();
  let counter = 0;
  let answer, number, correctAnswer, gameQuestion;
  let task = 'Answer "yes" if the number is even, otherwise answer "no".';
  typeTask(task);
  while (counter < 3) {
    number = Math.round(Math.random() * 100);
    gameQuestion = "Question: " + number + " ";
    answer = askQuestion(gameQuestion);
    if (number % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    counter = isAnswerCorrect(answer, correctAnswer, counter, characterName);
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
export { brainEven as default };
