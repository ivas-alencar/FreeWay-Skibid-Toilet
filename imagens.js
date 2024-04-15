let imagemEstrada;
let imagemAtor;
let imagemSkibid1;
let imagemSkibid2;
let imagemSkibid3;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("image/estrada.png");
  imagemAtor = loadImage("image/ator-1.png");
  imagemSkibid1 = loadImage("image/skibid-1.png");
  imagemSkibid2 = loadImage("image/skibid-2.png");
  imagemSkibid3 = loadImage("image/skibid-3.png");
  imagemSkibidS = [imagemSkibid1,imagemSkibid2,imagemSkibid3, imagemSkibid2, imagemSkibid3, imagemSkibid1];
  
  somTrilha = loadSound("sons/skibid-toilet-sound.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}