import readlineSync from 'readline-sync';

const runGame = (gameLogic, gameRule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRule}\n`);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  const iter = (attempt) => {
    if (attempt === 3) {
      console.log(`Congratulations, ${username}!`);
      return true;
    }
    const questionAnswerArray = gameLogic();
    console.log(`Question: ${questionAnswerArray.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAnswerArray.result) {
      console.log('Correct!');
      return iter(attempt + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAnswerArray.result}'.`);
    return false;
  };
  return iter(0);
};

export default runGame;
