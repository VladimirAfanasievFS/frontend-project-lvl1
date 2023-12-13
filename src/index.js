import { main } from "../bin/brain-games.js";
import readlineSync, { question } from "readline-sync";

function start() {
  return main();
}
function typeTask(task) {
  console.log(task);
}
function askQuestion(question) {
  let answer = readlineSync.question(question + "\nYour answer ");
  return answer;
}
function isAnswerCorrect(answer, correctAnswer, counter, characterName) {
  if (answer === correctAnswer.toString()) {
    console.log("Correct!");
    return (counter += 1);
  } else {
    console.log(
      answer +
        " is wrong answer ;(. Correct answer was " +
        correctAnswer +
        ". Let's try again, " +
        characterName +
        "!",
    );
    return 4;
  }
}
function congrats(name) {
  console.log("Congratulations, " + name + "!");
}

export { start, typeTask, askQuestion, isAnswerCorrect, congrats };
