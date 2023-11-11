let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function verificaConsole(){
    console.log("O botão foi clicado");
};

function verificaAlert(){
    alert("Eu amo JS");
};

function verificaPrompt(){
    let estado = prompt("Digite um estado do Brasil: ");
    alert(`Eu estive em ${estado} e lembrei de você`);
};

function verificaSoma(){
    let numero1 = parseInt(prompt("Digite o primeiro valor: "));
    let numero2 = parseInt(prompt("Digite o segundo valor: "));
    let soma = numero1 + numero2;
    alert(`O resultado da soma entre ${numero1} e ${numero2} é igual a ${soma}`);
};