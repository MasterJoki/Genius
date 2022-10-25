console.log("ta funcionando");

var btnVerde = document.querySelector("#btnVerde");
var btnVermelho = document.querySelector("#btnVermelho");
var btnAmarelo = document.querySelector("#btnAmarelo");
var btnAzul = document.querySelector("#btnAzul");
var btnStart = document.querySelector("#btnStart");

var article = document.querySelector(".art");

var validator = false;

var numero = 0;
var sequencia = [];
var resposta = [];

btnVerde.addEventListener("click", colorir('green', btnVerde, 1));
btnVermelho.addEventListener("click", colorir('red', btnVermelho, 2));
btnAmarelo.addEventListener("click", colorir('yellow', btnAmarelo, 3));
btnAzul.addEventListener("click", colorir('blue', btnAzul, 4));
btnStart.addEventListener("click", run)

function colorir(color, btn, num){
    return function(){
        resposta.push(num);
        btn.style.backgroundColor = color;

        setTimeout(function(){
            btn.style.backgroundColor = '#0A151F';
        }, 500);

        if (verificarResposta()){
            if (resposta.length == sequencia.length){
                resposta = [];
                setTimeout(function(){
                    gerarNumero();
                }, 1000)
            }
        }
        else{
            article.innerHTML = "Errou";
            console.log(sequencia);
            console.log(resposta);

            article.style.color = 'red';

            setTimeout(function(){
                article.innerHTML = "";
                article.style.color = '#1ed821';
            }, 1000);
            
        }
    }
}

function colorir2(color, btn){
    return function(){
        console.log("chegou aqui")
        btn.style.backgroundColor = color;
        setTimeout(function(){
            btn.style.backgroundColor = '#0A151F';
        }, 500);
    }
}

function gerarNumero(){
    numero = Math.floor(Math.random() * 4) + 1;
    console.log(numero);
    guardarNumeroCerto();
}

function guardarNumeroCerto(){
    sequencia.push(numero);
    article.innerHTML = sequencia.length;
    console.log(sequencia);
    mostrarSequencia();
}

function mostrarSequencia(){
    let i = 0;

    const timer = setInterval(function() {
        if ((i + 1) >= sequencia.length) {
          // aborta a execução caso a condição seja atingida
          clearInterval(timer)
        }

        let num = sequencia[i];
        let cor, btn = '';

        console.log(num);

        switch (num) {
            case 1:
                cor = 'green';
                btn = btnVerde;        
                break;

            case 2:
                cor = 'red';
                btn = btnVermelho;        
                break;
            
            case 3:
                cor = 'yellow';
                btn = btnAmarelo;        
                break;

            case 4:
                cor = 'blue';
                btn = btnAzul;        
                break;
        }

        btn.style.backgroundColor = cor;

        setTimeout(function(){
            btn.style.backgroundColor = '#0A151F';
        }, 500);
        i++
      }, 750)
}

function verificarResposta(){
    for (let i = 0; i < resposta.length; i++) {
        if(resposta[i] != sequencia[i]){
            console.log(resposta[i]);
            console.log(sequencia[i]);
            return false;
        }
    }
    return true;
}

function run(){
    resposta = [];
    sequencia = [];
    gerarNumero();
}
