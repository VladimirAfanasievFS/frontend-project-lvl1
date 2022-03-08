import readlineSync from 'readline-sync';

const numberOfRepitions = 3;

const startEngine = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nameUser}!`);
  console.log(gameDescription);

  for (let index = 0; index < numberOfRepitions; index += 1) {
    const { question, answer } = generateGameData();
    console.log(`Question:  ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export default startEngine;
