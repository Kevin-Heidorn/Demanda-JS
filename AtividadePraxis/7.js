// Exercicio 7

let array = []; 

while (true) {
  const operacao = parseInt(prompt(`Escolha uma operação:
1: Adicionar um elemento no final do array.
2: Remover o último elemento do array.
3: Remover o primeiro elemento do array.
4: Exibir todos os elementos do array.
0: Sair do programa.`));

  switch (operacao) {
    case 1:
      const elemento = prompt("Digite o elemento a ser adicionado:");
      array.push(elemento);
      break;
    case 2:
      array.pop();
      break;
    case 3:
      array.shift();
      break;
    case 4:
      console.log(array);
      break;
    case 0:
      console.log("Programa encerrado.");
      process.exit(); 
    default:
      console.log("Operação inválida. Tente novamente.");
  }
}

