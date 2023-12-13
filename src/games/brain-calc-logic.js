import {
  start,
  typeTask,
  askQuestion,
  isAnswerCorrect,
  congrats,
} from "../index.js";

function brainCalc() {
  let characterName = start();
  let counter = 0;
  let answer,
    number1,
    number2,
    operationCode,
    correctAnswer,
    task,
    gameQuestion;
  task = "What is the result of the expression?";
  typeTask(task);
  while (counter < 3) {
    operationCode = Math.round(Math.random() * 3);
    number1 = Math.round(Math.random() * 10);
    number2 = Math.round(Math.random() * 10);
    correctAnswer = makeCorrectAnswer();
    gameQuestion =
      "Question: " +
      number1.toString() +
      " " +
      chooseSignAtCalcQuestion(operationCode) +
      " " +
      number2.toString() +
      " ";
    answer = askQuestion(gameQuestion);
    correctAnswer = makeCorrectAnswer(number1, number2, operationCode);
    counter = isAnswerCorrect(answer, correctAnswer, counter, characterName);
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
function makeCorrectAnswer(num1, num2, opCode) {
  if (opCode === 1) {
    return num1 + num2;
  } else if (opCode === 2) {
    return num1 - num2;
  } else {
    return num1 * num2;
  }
}
function chooseSignAtCalcQuestion(opCode) {
  if (opCode === 1) {
    return "+";
  } else if (opCode === 2) {
    return "-";
  } else {
    return "*";
  }
}
export { brainCalc as default };
