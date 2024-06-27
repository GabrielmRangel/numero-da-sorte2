let listaDeNumeros = [];
// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Escolha um número ente 0 e 10"

let dificuldade = 10;
let tentativa = 1;
let numeroSecreto = gerarNumAleatorio();

exibeTextoNaTela('h1', "Jogo do número secreto");
exibeTextoNaTela('p', `Escolha um número ente 0 e ${dificuldade}`);

function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function gerarNumAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * (dificuldade - 1) + 1);
    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
};

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibeTextoNaTela('h1', "Acertou!");
        exibeTextoNaTela('p', `Parabéns! O número era ${numeroSecreto}. Tentativas: ${tentativa}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute < numeroSecreto){
        exibeTextoNaTela('h1', "Errouu!");
        exibeTextoNaTela('p', "O número secreto é maior");
        tentativa++;
    } else {
        exibeTextoNaTela('h1', "Errouu!");
        exibeTextoNaTela('p', "O número secreto é menor");
        tentativa++;
    }

    limparCampo();
};

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = "";
};

function novoJogo(){
    exibeTextoNaTela('h1', "Jogo do número secreto");
    exibeTextoNaTela('p', `Escolha um número ente 0 e ${dificuldade}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    numeroSecreto = gerarNumAleatorio();
};