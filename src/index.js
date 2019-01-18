import readlineSync from 'readline-sync';

export const makeRandomNumber = (min, max) => Math.round(min + Math.random() * max);

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return name;
};

const ifIncorrect = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};
const totalNumberOfGames = 3;
export const game = (logicOfGame, ruleOfGame) => {
  // получаем функцию,описывающую логику игры и текстовое правило игры для вывода юзеру
  const name = askName();
  console.log(ruleOfGame);
  console.log();
  for (let currentNumOfGame = 0; currentNumOfGame < totalNumberOfGames; currentNumOfGame += 1) {
    const means = logicOfGame();
    // первое значение-вопрос(числовое значение(я)),второе-результат
    const question = means[0];
    const correctAnswer = String(means[1]);
    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      ifIncorrect(answer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
