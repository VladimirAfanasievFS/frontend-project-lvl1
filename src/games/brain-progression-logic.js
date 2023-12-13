import {
  start,
  typeTask,
  askQuestion,
  isAnswerCorrect,
  congrats,
} from "../index.js";

function brainProgression() {
  let characterName = start();
  let counter = 0;
  let answer, delimiter, position, correctAnswer, gameQuestion;
  let progression = [];
  let task = "What is the result of the expression?";
  typeTask(task);
  while (counter < 3) {
    delimiter = Math.ceil(Math.random() * 10);
    position = Math.round(Math.random() * 9);
    progression[0] = Math.round(Math.random() * 10);
    for (let i = 1; i < 10; i += 1) {
      progression[i] = progression[i - 1] + delimiter;
    }
    correctAnswer = progression[position];
    gameQuestion = "Question: ";
    for (let i = 0; i < 10; i += 1) {
      if (i !== position) {
        gameQuestion = gameQuestion + progression[i] + " ";
      } else {
        gameQuestion = gameQuestion + ".. ";
      }
    }
    answer = askQuestion(gameQuestion);
    counter = isAnswerCorrect(answer, correctAnswer, counter, characterName);
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
export { brainProgression as default };
