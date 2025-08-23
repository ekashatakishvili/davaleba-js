const readline = require('readline');

let age

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  age = Number(await ask("Enter your age: "));
if (age <18 ){
console.log("თქვენ ჯერ არასრულწლოვანი ხართ.");
}
else if (age >= 18 && age <= 65) {
  console.log("თქვენ შრომისუნარიანი ხართ.");
} else {
  console.log("თქვენ პენსიონერი ხართ.");
}

  rl.close();
}

main();