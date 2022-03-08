import promptly from 'promptly';

const numberOfRepitions = [0, 1, 2];

const startEngine = async (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = await promptly.prompt('May I have your name? ');
  console.log(`Hi ${nameUser}!`);
  console.log(gameDescription);

  numberOfRepitions.forEach(async () => {
    const { question, answer } = generateGameData();
    console.log(`Question:  ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  });
  console.log(`Congratulations, ${nameUser}!`);
};
export default startEngine;
