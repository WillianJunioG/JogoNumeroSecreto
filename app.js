let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
    
}
ExibirTextoNaTela('h1', 'Jogo do numero secreto ');
ExibirTextoNaTela('p','Escolha um numero entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == NumeroSecreto){
        ExibirTextoNaTela('h1', 'Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce desboriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > NumeroSecreto){
            ExibirTextoNaTela('p','o numero secreto é menor! ');
        }else{
            ExibirTextoNaTela('p', ' O numero secreto é maior! ');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random () * 10 + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

function ExibirMensagemInicial(){
    ExibirTextoNaTela('h1', 'Jogo do numero secreto ');
    ExibirTextoNaTela('p','Escolha um numero entre 1 e 100');   
}
ExibirMensagemInicial();

//lista de atividades 3

//1

    /*function olamundo(){
        console.log("Olá mundo! ");
    }
    olamundo();*/

    //2

    /*function saudacao(nome){
        console.log(`Olá ${nome}`);
    }
    saudacao("Willian");*/

    //3 

    /*function dobraNumero(numero){
        console.log( numero * 2);
    }
    dobraNumero(8);*/

    //4

    /*function media(num1, num2, num3){
        console.log((num1 + num2 + num3) / 3);
    }
    media(2,4,6);*/

    //5

    /*function maiorNumero(num1, num2){
        if(num1 > num2){
            console.log(num1);
        }else if (num2 > num1){
            console.log(num2);
        }else{
            console.log("NUmeros iguais !");
        }
    }

    maiorNumero(1,12);*/

    // 6

    /*function quadrado(numero){
            console.log(numero * numero);
    }

    quadrado(8);*/


    //mais lista de exercicios

    //1 IMC

    /*function imc(peso, altura){

        let calc =  peso  / (altura * altura) ;
        alert(`seu IMC é ${calc.toFixed(2)} `);
    }
    imc(60,1.74);*/

    // 2 Fatorial de um numero

    /*function calcularFatorial(valor){
            if(valor == 0 || valor == 1){
                return 1;
            }
            let fatorial = 1;
            for(let i = 2; i <=valor; i++){

                fatorial *= i;
            }
            return fatorial;
            }
 alert(calcularFatorial(3));*/

 // 3 converter em dollar

 /*function converterMoeda(valor){
    let cotacao = valor * 4.80;
    return cotacao.toFixed(2);
 }

 alert(converterMoeda(1));*/

 // 4perimetro de uma sala

 /*function calcularPerimetro(altura, largura){
    let perimetro = altura * 2 + largura * 2;
    return perimetro.toFixed(2);
 }
 alert(calcularPerimetro(4,6.8));*/

 //5 area circular pertimetro

 /*function perimetroCircular(diametro){
    let valor = 3.14 * 2 *(diametro / 2);
    return valor.toFixed(2);
 }

 alert(perimetroCircular(6));*/

 //6 tabuada de um numero 

 /*function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        let restultado = i * numero;
        alert(`${numero} x ${i} = ${restultado}`);
    }
 }
 tabuada(9);*/

 /*

 //lista de exercicios sobre listas ou arrays

 //1 criar lista generica vazia
 let listaGenerica = [];

 //2 ciar lista liguagens deprogramaçao

 let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
    
//3 

linguagensDeProgramacao.push('Java','Ruby','GoLang');

//4criar lista com nomes e exibir o primeiro

let listaDeNomes = ['Willian','Wesley','Agatha'];
alert(listaDeNomes[0]);

//5 exibir o segundo
alert(listaDeNomes[1]);

//6 exibir o terceiro
alert(listaDeNomes[2]);
*/


    