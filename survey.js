// Fun Profile Generator

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allQuestions = [
  "What's your name? Nicknames are also acceptable :) ", //0
  "What's an activity you like doing? ", //2
  "What do you listen to while doing that? ", //1
  "Which meal is your favourite (eg: dinner, brunch, etc.) ", //4
  "What's your favourite thing to eat for that meal? ", //3
  "Which sport is your absolute favourite? ", //5
  "What is your superpower? In a few words, tell us what you are amazing at! " //6
];

const answers = [];

rl.question(allQuestions[0], (answer) => {
  console.log(`You answered: ${answer}`);
  answers.push(answer);

  rl.question(allQuestions[1], (answer) => {
    console.log(`You answered: ${answer}`);
    answers.push(answer);

    rl.question(allQuestions[2], (answer) => {
      console.log(`You answered: ${answer}`);
      answers.push(answer);

      rl.question(allQuestions[3], (answer) => {
        console.log(`You answered: ${answer}`);
        answers.push(answer);

        rl.question(allQuestions[4], (answer) => {
          console.log(`You answered: ${answer}`);
          answers.push(answer);

          rl.question(allQuestions[5], (answer) => {
            console.log(`You answered: ${answer}`);
            answers.push(answer);

            rl.question(allQuestions[6], (answer) => {
              console.log(`You answered: ${answer}`);
              answers.push(answer);

              console.log("---------------------------");
              console.log("Your new profile is ready!");
              console.log("---------------------------");
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});