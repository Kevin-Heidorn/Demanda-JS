const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

function promptUser() {
  rl.question(`Escolha uma operação:
1: Adicionar um elemento no final do array.
2: Remover o último elemento do array.
3: Remover o primeiro elemento do array.
4: Exibir todos os elementos do array.
0: Sair do programa.
`, (answer) => {
    const operacao = parseInt(answer);
    switch (operacao) {
      case 1:
        rl.question("Digite o elemento a ser adicionado: ", (elemento) => {
          array.push(elemento);
          promptUser();
        });
        break;
      case 2:
        array.pop();
        promptUser();
        break;
      case 3:
        array.shift();
        promptUser();
        break;
      case 4:
        console.log(array);
        promptUser();
        break;
      case 0:
        console.log("Programa encerrado.");
        rl.close();
        break;
      default:
        console.log("Operação inválida. Tente novamente.");
        promptUser();
    }
  });
}

promptUser();


