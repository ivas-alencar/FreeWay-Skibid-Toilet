let posicaoXSkibidS = [650,650,650,650,650,650];
let posicaoYSkibidS = [30,100,160,240,290,360];
let tamanhoXSkibidS = [80,60,60,60,60,80];
let tamanhoYSkibidS = [80,70,70,70,70,80];
let velocidadeSkibidS = [4.5,2.5,3,5,2.8,2.5];

function mostraSkibid(){
  for (let i = 0; i < imagemSkibidS.length; i++){
    image(imagemSkibidS[i],posicaoXSkibidS[i],posicaoYSkibidS[i],tamanhoXSkibidS[i],tamanhoYSkibidS[i]);
  }
}

function movimentaSkibid(){
  for (let i = 0; i < imagemSkibidS.length; i++){
    posicaoXSkibidS[i] -= velocidadeSkibidS[i];
  }
}

function voltaPosicaoInicialDoSkibid(){
  for (let i = 0; i < imagemSkibidS.length; i++){
      if (passouTodaTela(posicaoXSkibidS[i])){
        posicaoXSkibidS[i] = 700;
  }
  }
}
  
function passouTodaTela(posicaoXSkibidS){
    return posicaoXSkibidS < -40;
}
