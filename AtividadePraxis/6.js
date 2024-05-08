const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Afilme(idade, tingresso) {
  if (idade >= 18) {
    return true;
  } else if (idade >= 16 && tingresso.toLowerCase() === "meia") {
    return true;
  } else {
    return false;
  }
}

rl.question("Qual é a sua idade? ", (idadeInput) => {
  const idade = parseInt(idadeInput);
  rl.question("Qual é o tipo de ingresso? (Inteira/Meia) ", (tingresso) => {
    if (Afilme(idade, tingresso)) {
      console.log("Você pode assistir ao filme!");
    } else {
      console.log("Você não pode assistir ao filme.");
    }
    rl.close();
  });
});
