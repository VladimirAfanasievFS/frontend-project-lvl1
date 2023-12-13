import {
  start,
  typeTask,
  askQuestion,
  isAnswerCorrect,
  congrats,
} from "../index.js";

function isPrime(num) {
  let c = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      c += 1;
    }
  }
  if (c === 0) {
    return "yes";
  } else {
    return "no";
  }
}

function brainPrime() {
  let characterName = start();
  let counter = 0;
  let answer, number, correctAnswer, gameQuestion;
  let task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  typeTask(task);
  while (counter < 3) {
    number = Math.ceil(Math.random() * 100);
    correctAnswer = isPrime(number);
    gameQuestion = "Question: " + number + " ";
    answer = askQuestion(gameQuestion);
    counter = isAnswerCorrect(answer, correctAnswer, counter, characterName);
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
export { brainPrime as default };
