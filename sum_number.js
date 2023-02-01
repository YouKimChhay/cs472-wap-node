const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let total = 0;

readline.question('Input a number: ', num => {
  if (num == 'stop') {
    console.log(`The total is ${total}`);
    readline.close();
  } else {
    total += parseFloat(num);
    getNumber();
  }
})

function getNumber() {
  readline.question('Input a number: ', num => {
    if (num == 'stop') {
      console.log(`The total is ${total}`);
      readline.close();
    } else {
      total += parseFloat(num);
      getNumber();
    }
  });
}