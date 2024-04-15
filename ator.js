let xAtor = 80;
let yAtor = 460;

let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  yAtor = constrain(yAtor, 5,460);
}

function verificarColisao(){
  for (let i = 0; i < imagemSkibidS.length; i++){
    colisao = collideRectCircle (posicaoXSkibidS[i],posicaoYSkibidS[i],tamanhoXSkibidS[i], tamanhoYSkibidS[i], xAtor, yAtor, 15);
    if(colisao){
      voltaPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
    }
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 460;
}

function incluindoPontos(){
  textAlign(CENTER);
  textSize(28);
  fill(color(255,20,147));
  text(meusPontos, width/6, 32);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    somPonto.play();
    voltaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}