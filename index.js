const chalk = require('chalk');
var readlinesync = require('readline-sync');

// Heading
console.log(chalk.bgRed.bold('  GAME OF THRONES QUIZ  '));
console.log('--------------------------------------')

// Input name and welcome
var userName = readlinesync.question('To start, enter your name: ');
console.log(chalk.blue.bold('Welcome ' +userName+ '!'));
console.log(chalk.blue.bold("GET READY! WINTER IS COMING!!"));
console.log('--------------------------------------');
console.log('\n');

// Score and highScore
var score = 0;

var highScore = [
  hs1 = {
    name: 'Jon Snow',
    scr: 9,
  },

  hs2 = {
    name: 'Arya Stark',
    scr: 7,
  },

  hs3 = {
    name: 'Whitewalker',
    scr: 3,
  }
];

// Questions
var quiz = [
  q1 = {
    que: '1. Who is the youngest of Ned Stark’s children?',
    options: ['Arya', 'Rickon', 'Sansa', 'Bran'],
    ans: 1,
  },

  q2 = {
    que: '2. Who is Jon Snow’s mother?',
    options: ['Lyanna Stark', 'Lysa Arryn', 'Cercei Lannister', 'Catelyn Stark'],
    ans: 0,
  },

  q3 = {
    que: "3. What is Davos Seaworth's nickname?",
    options: ['Hot Pie', 'The Sand Snake', 'The Onion Knight', 'The Hound'],
    ans: 2, 
  },

  q4 = {
    que: '4. Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies?',
    options: ['Barristan Selmy', 'Beric Dondarrion', 'Alliser Thorne', 'Jaqen H’ghar'],
    ans: 1,
  },

  q5 = {
    que: '5. How does the Mountain kill Oberyn Martell in trial by combat?',
    options: ['cuts his head off', 'poisons him', 'strangles him', 'crushes his skull'],
    ans: 3,
  },

  q6 = {
    que: '6. Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?',
    options: ['Mance Rayder', 'Tormund Giantsbane', 'Janos Slynt', 'Caster'],
    ans: 0,
  },

  q7 = {
    que: '7. What’s the name of the band of assassins that Arya Stark joins in Braavos?',
    options: ['Second Sons', 'Sons of the Harpy', 'Faceless Men', 'Brotherhood Without Banners'],
    ans: 2,
  },

  q8 = {
    que: '8. Which of the following is not a name of one of Daenerys Targaryen’s dragons?',
    options: ['Viserion', 'Balerion', 'Rhaegal', 'Drogn'],
    ans: 1,
  },

  q9 = {
    que: '9. Jamie Lannister has a golden ___.',
    options: ['tongue', 'chariot', 'hand', 'sword'],
    ans: 2,
  },

  q10 = {
    que: '10. What are the “house words” of House Greyjoy?',
    options: ['Ours is the Fury', 'Winter is coming', 'Unbroken', 'We Do Not Sow'],
    ans: 3,
  }
];

// Actual quiz display ans score count
var levelOne = false;

for (var i = 0; i < quiz.length; i++) {
  console.log(quiz[i].que);
  var answer = readlinesync.keyInSelect(quiz[i].options, 'Your answer: ');

  if (answer === quiz[i].ans) {
    console.log(chalk.green('Correct answer :D'));

    score++;
    console.log(chalk.green('Current score: ' +score));
    console.log('----------------------');
  } else {
    console.log(chalk.red('Wrong answer :('));
    console.log(chalk.red('Current score: ' +score));
    console.log('----------------------');
  }

  if (score == 5 && levelOne == false) {
    console.log(chalk.bgBlue('  Wohoo!! You got 5 answers correct.  '));
    console.log(chalk.bgBlue('  You are a HUGE GOT FAN!!            '));
    console.log('----------------------');
    console.log('\n');

    levelOne = true;
  }

  if (score == 10) {
    console.log(chalk.bgBlue('  Wohoo!! You got 10 answers correct.  '));
    console.log(chalk.bgBlue('  You are an ULTIMATE GOT FAN!!        '));
  }
}

// Show final score
console.log('----------------------');
console.log(chalk.bgYellow.bold.underline('YOUR FINAL SCORE: ' +score));
console.log('\n');

// Previous Highscores
console.log(chalk.underline('Previous High Scores:'));
for (var i = 0; i < highScore.length; i++) {
  console.log((i+1)+ '. ' +highScore[i].name+ ': ' +highScore[i].scr);
}

// // New HighscoreS
for (var i = 0; i <= 2; i++) {
  if (score >= highScore[i].scr) {
    if (i != 2) {
      for (var j = 2; j >= i+1; j--) {
        highScore[j].name = highScore[j-1].name;
        highScore[j].scr = highScore[j-1].scr;
      }
    }

    highScore[i].name = userName;
    highScore[i].scr = score;
    break;
  }
}

if (highScore[0].name === userName || highScore[1].name === userName || highScore[2].name === userName) {
  console.log(chalk.bgBlue('YAYY!! YOU HAVE MADE IT TO THE HIGHSCORES!!'));
  console.log('\n')

  console.log(chalk.underline('New High Scores: '));

  for (var i = 0; i < highScore.length; i++) {
    if (highScore[i].name === userName) {
      console.log(chalk.bgBlue((i+1)+ '. ' +highScore[i].name+ ': ' +highScore[i].scr));
    } else {
      console.log((i+1)+ '. ' +highScore[i].name+ ': ' +highScore[i].scr);
    }
  }
} else {
  console.log("You haven't made it to the high scores. Try again.");
}

