const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular(operacao, operando1, operando2) {
  switch (operacao) {
    case "soma":
      return operando1 + operando2;
    case "subtração":
      return operando1 - operando2;
    case "multiplicação":
      return operando1 * operando2;
    case "divisão":
      if (operando2 !== 0) {
        return operando1 / operando2;
      } else {
        return "Erro: Divisão por zero.";
      }
    default:
      return "Operação inválida.";
  }
}

function iniciarCalculadora() {
  rl.question('Escolha uma operação matemática (soma, subtração, multiplicação, divisão ou sair): ', (operacao) => {
    if (operacao === "sair") {
      console.log("Programa encerrado.");
      rl.close();
      return;
    }

    rl.question('Digite o primeiro Numero: ', (operando1) => {
      rl.question('Digite o segundo Numero: ', (operando2) => {
        const resultado = calcular(operacao, parseFloat(operando1), parseFloat(operando2));
        console.log(`Resultado: ${resultado}`);
        iniciarCalculadora(); 
      });
    });
  });
}

iniciarCalculadora();
