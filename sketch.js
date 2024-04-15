function setup() {
  createCanvas(600, 500);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraSkibid();
  movimentaSkibid();
  movimentaAtor();
  voltaPosicaoInicialDoSkibid();
  verificarColisao();
  incluindoPontos();
  marcaPonto();
}