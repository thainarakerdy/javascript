alert("Boas vindas ao jogo secreto");
let numeroSecreto = 35;
let chute = prompt("Escolha um número entre 1 a 100")

if (chute == numeroSecreto) {
    console.log("Parabéns! Você descobriu o número secreto");
} else {
    alert("Você errou, tente novamente")
}