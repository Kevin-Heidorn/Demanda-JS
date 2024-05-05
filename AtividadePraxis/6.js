// Exercicio 6
function Afilme(idade, tingresso) {
    if (idade >= 18) {
      return true;
    } else if (idade >= 16 && tingresso.toLowerCase() === "meia") {
      return true;
    } else {
      return false;
    }
  }
  
  const idade = parseInt(prompt("Qual é a sua idade?"));
  const tingresso = prompt("Qual é o tipo de ingresso? (Inteira/Meia)").toLowerCase();
  
  if (Afilme(idade, tingresso)) {
    console.log("Você pode assistir ao filme!");
  } else {
    console.log("Você não pode assistir ao filme.");
  }
  



