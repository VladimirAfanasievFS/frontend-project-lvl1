
import promptly from 'promptly';

const startGame = async () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export default startGame;
