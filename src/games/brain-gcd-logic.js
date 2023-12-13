import {
  start,
  typeTask,
  askQuestion,
  isAnswerCorrect,
  congrats,
} from "../index.js";

function gcd_rec(a, b) {
  if (b) {
    return gcd_rec(b, a % b);
  } else {
    return Math.abs(a);
  }
}

function brainGcd() {
  let characterName = start();
  let counter = 0;
  let answer, number1, number2, correctAnswer, gameQuestion;
  let task = "Find the greatest common divisor of given numbers.";
  typeTask(task);

  while (counter < 3) {
    number1 = Math.round(Math.random() * 100) + 1;
    number2 = Math.round(Math.random() * 100) + 1;
    gameQuestion = "Question: " + number1 + " & " + number2 + " ";
    correctAnswer = gcd_rec(number1, number2);
    answer = askQuestion(gameQuestion);
    counter = isAnswerCorrect(answer, correctAnswer, counter, characterName);
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
export { brainGcd as default };
