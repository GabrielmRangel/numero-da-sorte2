// let altura = prompt("Qual a sua altura?");
// let peso = prompt("Qual é o seu peso?");

// function calculaIMC(altura, peso) {
//     let imc = peso / (altura * altura);
//     console.log(imc.toFixed(2));
// }

// calculaIMC(altura, peso);

// let fatorial = prompt("Digite o fatorial: ");

// function calculoFatorial(fatorial){
//     if(fatorial === 1){
//         return 1;
//     }

//     return fatorial * calculoFatorial(fatorial - 1);
// }

// console.log(calculoFatorial(fatorial));

// let real = parseFloat(prompt("Digite o valor para converter a dolar: "));

// function converterDolar(real){
//     let dolar = 4.80;

//     return real * dolar;
// }

// console.log("Valor digitado em dolar: $" + converterDolar(real).toFixed(2));

let altura = prompt("Digite a altura do retângulo: ");
let largura = prompt("Digite a largura do retângulo: ");

function calculoRetangulo(altura, largura){
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);

    console.log("Área do retângulo: " + area);
    console.log("Perímetro do retângulo: " + perimetro);
}

calculoRetangulo(altura, largura);