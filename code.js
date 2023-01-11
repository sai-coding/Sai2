var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["03a2cb25-a8b2-41a2-9a4d-f461a566e997"],"propsByKey":{"03a2cb25-a8b2-41a2-9a4d-f461a566e997":{"name":"pacman_1","sourceUrl":"assets/v3/animations/Oa_kRHLMW7YdtKU8pNa1Bhj3yxYm2VS0-xDecWt6III/03a2cb25-a8b2-41a2-9a4d-f461a566e997.png","frameSize":{"x":200,"y":234},"frameCount":1,"looping":true,"frameDelay":4,"version":"6_XU_UMh3NaKvvf45p6NoyoJKnB80Vp4","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":234},"rootRelativePath":"assets/v3/animations/Oa_kRHLMW7YdtKU8pNa1Bhj3yxYm2VS0-xDecWt6III/03a2cb25-a8b2-41a2-9a4d-f461a566e997.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var logo = createSprite(260,28,10,10);

var lives = 3 ;
var score = 0 ;

var heart1 = createSprite(37,27,10,10);
var heart2 = createSprite(77,27,10,10);
var heart3 = createSprite(117,27,10,10);

var wall1 = createSprite(200,250,110,10);
var wall2 = createSprite(250,200,10,110);
var wall3 = createSprite(150,200,10,110);
var wall4 = createSprite(200,0,400,20);
var wall5 = createSprite(200,400,400,20);
var wall6 = createSprite(0,200,20,400);
var wall7 = createSprite(400,200,20,400);
var wall8 = createSprite(160,150,30,10);
var wall9 = createSprite(240,150,30,10);
var wall10 = createSprite(200,50,400,10);
var wall11 = createSprite(200,300,10,100);
var wall12 = createSprite(150,375,10,50);
var wall13 = createSprite(250,375,10,50);
var wall14 = createSprite(125,300,150,10);
var wall15 = createSprite(275,300,150,10);
var wall16 = createSprite(50,350,100,10);
var wall17 = createSprite(350,350,100,10);
var wall18 = createSprite(350,250,100,10);
var wall19 = createSprite(50,250,100,10);
var wall20 = createSprite(200,100,300,10);
var wall21 = createSprite(100,150,10,100);
var wall22 = createSprite(300,150,10,100);
var wall23 = createSprite(50,200,10,100);
var wall24 = createSprite(350,200,10,100);
var wall24 = createSprite(350,200,10,100);
var wall25 = createSprite(255,275,10,10);
wall25.visible = false ;
var wall26 = createSprite(145,275,10,10);
wall26.visible = false ;

var coin1 = createSprite(225,325,10,10);
var coin2 = createSprite(275,325,10,10);
var coin3 = createSprite(325,325,10,10);
var coin4 = createSprite(375,325,10,10);
var coin5 = createSprite(25,325,10,10);
var coin6 = createSprite(75,325,10,10);
var coin7 = createSprite(125,325,10,10);
var coin8 = createSprite(175,325,10,10);
var coin9 = createSprite(25,375,10,10);
var coin10 = createSprite(75,375,10,10);
var coin11 = createSprite(125,375,10,10);
var coin12 = createSprite(275,375,10,10);
var coin13 = createSprite(325,375,10,10);
var coin14 = createSprite(375,375,10,10);
var coin15 = createSprite(25,275,10,10);
var coin16 = createSprite(75,275,10,10);
var coin17 = createSprite(125,275,10,10);
var coin18 = createSprite(175,275,10,10);
var coin19 = createSprite(225,275,10,10);
var coin20 = createSprite(275,275,10,10);
var coin21 = createSprite(325,275,10,10);
var coin22 = createSprite(375,275,10,10);
var coin23 = createSprite(25,225,10,10);
var coin24 = createSprite(75,225,10,10);
var coin25 = createSprite(125,225,10,10);
var coin26 = createSprite(275,225,10,10);
var coin27 = createSprite(325,225,10,10);
var coin28 = createSprite(375,225,10,10);
var coin29 = createSprite(25,175,10,10);
var coin30 = createSprite(75,175,10,10);
var coin31 = createSprite(125,175,10,10);
var coin32 = createSprite(275,175,10,10);
var coin33 = createSprite(325,175,10,10);
var coin34 = createSprite(375,175,10,10);
var coin35 = createSprite(25,125,10,10);
var coin36 = createSprite(75,125,10,10);
var coin37 = createSprite(125,125,10,10);
var coin38 = createSprite(175,125,10,10);
var coin39 = createSprite(225,125,10,10);
var coin40 = createSprite(275,125,10,10);
var coin41 = createSprite(325,125,10,10);
var coin42 = createSprite(375,125,10,10);
var coin43 = createSprite(25,75,10,10);
var coin44 = createSprite(75,75,10,10);
var coin45 = createSprite(125,75,10,10);
var coin46 = createSprite(175,75,10,10);
var coin47 = createSprite(225,75,10,10);
var coin48 = createSprite(275,75,10,10);
var coin49 = createSprite(325,75,10,10);
var coin50 = createSprite(375,75,10,10);

var pacman = createSprite(200,375,20,20);

var red = createSprite(200,200,30,30);
red.velocityY = -4 ;

var blue = createSprite(200,200,30,30);
blue.velocityY = -4 ;

function draw() {
  background("black");
  heartLives();
  ghostControl();
  pacman.shapeColor = "yellow";
  logo.setAnimation("pacman_1");
  logo.scale = 0.25 ;
  
  textSize(25);
  stroke("white");
  fill("white");
  text("Score : "+score,260,80);
  
  coin1.setAnimation("pacman coins.png_1");
  coin1.scale = 0.04 ;
  coin2.setAnimation("pacman coins.png_1");
  coin2.scale = 0.04 ;
  coin3.setAnimation("pacman coins.png_1");
  coin3.scale = 0.04 ;
  coin4.setAnimation("pacman coins.png_1");
  coin4.scale = 0.04 ;
  coin5.setAnimation("pacman coins.png_1");
  coin5.scale = 0.04 ;
  coin6.setAnimation("pacman coins.png_1");
  coin6.scale = 0.04 ;
  coin7.setAnimation("pacman coins.png_1");
  coin7.scale = 0.04 ;
  coin8.setAnimation("pacman coins.png_1");
  coin8.scale = 0.04 ;
  coin9.setAnimation("pacman coins.png_1");
  coin9.scale = 0.04 ;
  coin10.setAnimation("pacman coins.png_1");
  coin10.scale = 0.04 ;
  coin11.setAnimation("pacman coins.png_1");
  coin11.scale = 0.04 ;
  coin12.setAnimation("pacman coins.png_1");
  coin12.scale = 0.04 ;
  coin13.setAnimation("pacman coins.png_1");
  coin13.scale = 0.04 ;
  coin14.setAnimation("pacman coins.png_1");
  coin14.scale = 0.04 ;
  coin15.setAnimation("pacman coins.png_1");
  coin15.scale = 0.04 ;
  coin16.setAnimation("pacman coins.png_1");
  coin16.scale = 0.04 ;
  coin17.setAnimation("pacman coins.png_1");
  coin17.scale = 0.04 ;
  coin18.setAnimation("pacman coins.png_1");
  coin18.scale = 0.04 ;
  coin19.setAnimation("pacman coins.png_1");
  coin19.scale = 0.04 ;
  coin20.setAnimation("pacman coins.png_1");
  coin20.scale = 0.04 ;
  coin21.setAnimation("pacman coins.png_1");
  coin21.scale = 0.04 ;
  coin22.setAnimation("pacman coins.png_1");
  coin22.scale = 0.04 ;
  coin23.setAnimation("pacman coins.png_1");
  coin23.scale = 0.04 ;
  coin24.setAnimation("pacman coins.png_1");
  coin24.scale = 0.04 ;
  coin25.setAnimation("pacman coins.png_1");
  coin25.scale = 0.04 ;
  coin26.setAnimation("pacman coins.png_1");
  coin26.scale = 0.04 ;
  coin27.setAnimation("pacman coins.png_1");
  coin27.scale = 0.04 ;
  coin28.setAnimation("pacman coins.png_1");
  coin28.scale = 0.04 ;
  coin29.setAnimation("pacman coins.png_1");
  coin29.scale = 0.04 ;
  coin30.setAnimation("pacman coins.png_1");
  coin30.scale = 0.04 ;
  coin31.setAnimation("pacman coins.png_1");
  coin31.scale = 0.04 ;
  coin32.setAnimation("pacman coins.png_1");
  coin32.scale = 0.04 ;
  coin33.setAnimation("pacman coins.png_1");
  coin33.scale = 0.04 ;
  coin34.setAnimation("pacman coins.png_1");
  coin34.scale = 0.04 ;
  coin35.setAnimation("pacman coins.png_1");
  coin35.scale = 0.04 ;
  coin36.setAnimation("pacman coins.png_1");
  coin36.scale = 0.04 ;
  coin37.setAnimation("pacman coins.png_1");
  coin37.scale = 0.04 ;
  coin38.setAnimation("pacman coins.png_1");
  coin38.scale = 0.04 ;
  coin39.setAnimation("pacman coins.png_1");
  coin39.scale = 0.04 ;
  coin40.setAnimation("pacman coins.png_1");
  coin40.scale = 0.04 ;
  coin41.setAnimation("pacman coins.png_1");
  coin41.scale = 0.04 ;
  coin42.setAnimation("pacman coins.png_1");
  coin42.scale = 0.04 ;
  coin43.setAnimation("pacman coins.png_1");
  coin43.scale = 0.04 ;
  coin44.setAnimation("pacman coins.png_1");
  coin44.scale = 0.04 ;
  coin45.setAnimation("pacman coins.png_1");
  coin45.scale = 0.04 ;
  coin46.setAnimation("pacman coins.png_1");
  coin46.scale = 0.04 ;
  coin47.setAnimation("pacman coins.png_1");
  coin47.scale = 0.04 ;
  coin48.setAnimation("pacman coins.png_1");
  coin48.scale = 0.04 ;
  coin49.setAnimation("pacman coins.png_1");
  coin49.scale = 0.04 ;
  coin50.setAnimation("pacman coins.png_1");
  coin50.scale = 0.04 ;
  
  red.setAnimation("red ghost");
  red.scale = 0.036;
  blue.setAnimation("blue ghost");
  blue.scale = 0.027;
  heart1.setAnimation("retro_red_heart_1");
  heart1.scale = 0.18;
  heart2.setAnimation("retro_red_heart_1");
  heart2.scale = 0.18;
  heart3.setAnimation("retro_red_heart_1");
  heart3.scale = 0.18;
  
  
  
  wall1.shapeColor = "blue" ;
  wall2.shapeColor = "blue" ;
  wall3.shapeColor = "blue" ;
  wall4.shapeColor = "blue" ;
  wall5.shapeColor = "blue" ;
  wall6.shapeColor = "blue" ;
  wall7.shapeColor = "blue" ;
  wall8.shapeColor = "blue" ;
  wall9.shapeColor = "blue" ;
  wall10.shapeColor = "blue" ;
  wall11.shapeColor = "blue" ;
  wall12.shapeColor = "blue" ;
  wall13.shapeColor = "blue" ;
  wall14.shapeColor = "blue" ;
  wall15.shapeColor = "blue" ;
  wall16.shapeColor = "blue" ;
  wall17.shapeColor = "blue" ;
  wall18.shapeColor = "blue" ;
  wall19.shapeColor = "blue" ;
  wall20.shapeColor = "blue" ;
  wall21.shapeColor = "blue" ;
  wall22.shapeColor = "blue" ;
  wall23.shapeColor = "blue" ;
  wall24.shapeColor = "blue" ;
  
  red.bounceOff(wall1);
  red.bounceOff(wall2);
  red.bounceOff(wall3);
  red.bounceOff(wall4);
  red.bounceOff(wall5);
  red.bounceOff(wall6);
  red.bounceOff(wall7);
  red.bounceOff(wall8);
  red.bounceOff(wall9);
  red.bounceOff(wall10);
  red.bounceOff(wall11);
  red.bounceOff(wall12);
  red.bounceOff(wall13);
  red.bounceOff(wall14);
  red.bounceOff(wall15);
  red.bounceOff(wall16);
  red.bounceOff(wall17);
  red.bounceOff(wall18);
  red.bounceOff(wall19);
  red.bounceOff(wall20);
  red.bounceOff(wall21);
  red.bounceOff(wall22);
  red.bounceOff(wall23);
  red.bounceOff(wall24);
  
  blue.bounceOff(wall1);
  blue.bounceOff(wall2);
  blue.bounceOff(wall3);
  blue.bounceOff(wall4);
  blue.bounceOff(wall5);
  blue.bounceOff(wall6);
  blue.bounceOff(wall7);
  blue.bounceOff(wall8);
  blue.bounceOff(wall9);
  blue.bounceOff(wall10);
  blue.bounceOff(wall11);
  blue.bounceOff(wall12);
  blue.bounceOff(wall13);
  blue.bounceOff(wall14);
  blue.bounceOff(wall15);
  blue.bounceOff(wall16);
  blue.bounceOff(wall17);
  blue.bounceOff(wall18);
  blue.bounceOff(wall19);
  blue.bounceOff(wall20);
  blue.bounceOff(wall21);
  blue.bounceOff(wall22);
  blue.bounceOff(wall23);
  blue.bounceOff(wall24);
  
  pacman.collide(wall1);
  pacman.collide(wall2);
  pacman.collide(wall3);
  pacman.collide(wall4);
  pacman.collide(wall5);
  pacman.collide(wall6);
  pacman.collide(wall7);
  pacman.collide(wall8);
  pacman.collide(wall9);
  pacman.collide(wall10);
  pacman.collide(wall11);
  pacman.collide(wall12);
  pacman.collide(wall13);
  pacman.collide(wall14);
  pacman.collide(wall15);
  pacman.collide(wall16);
  pacman.collide(wall17);
  pacman.collide(wall18);
  pacman.collide(wall19);
  pacman.collide(wall20);
  pacman.collide(wall21);
  pacman.collide(wall22);
  pacman.collide(wall23);
  pacman.collide(wall24);
  
  if(keyWentDown("up")){
    pacman.setAnimation("pacman top");
    pacman.scale = 0.02;
    pacman.velocityY = -4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("up")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("down")){
    pacman.setAnimation("pacman down");
    pacman.scale = 0.02;
    pacman.velocityY = 4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("down")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("left")){
    pacman.setAnimation("pacman left.");
    pacman.scale = 0.02;
    pacman.velocityX = -4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("left")){
    pacman.velocityX = 0 ;
  }
  
  if(keyWentDown("right")){
    pacman.setAnimation("pacman right");
    pacman.scale = 0.02;
    pacman.velocityX = 4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("right")){
    pacman.velocityX = 0 ;
  }
  
  if(pacman.isTouching(red)){
    lives -= 1 ;
    pacman.visible = false ;
    pacman.x = 200 ;
    pacman.y = 375 ;
    pacman.visible = true ;
    red.x = 200;
    red.y = 200;
    red.velocityY = -4 ;
    red.velocityX = 0 ;
    blue.x = 200;
    blue.y = 200;
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  
  if(pacman.isTouching(blue)){
    lives -= 1 ;
    pacman.visible = false ;
    pacman.x = 200 ;
    pacman.y = 375 ;
    pacman.visible = true ;
    red.x = 200;
    red.y = 200;
    red.velocityY = -4 ;
    red.velocityX = 0 ;
    blue.x = 200;
    blue.y = 200;
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  
  if(pacman.isTouching(coin1)){
    coin1.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin2)){
    coin2.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin3)){
    coin3.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin4)){
    coin4.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin5)){
    coin5.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin6)){
    coin6.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin7)){
    coin7.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin8)){
    coin8.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin9)){
    coin9.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin10)){
    coin10.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin11)){
    coin11.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin12)){
    coin12.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin13)){
    coin13.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin14)){
    coin14.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin15)){
    coin15.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin16)){
    coin16.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin17)){
    coin17.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin18)){
    coin18.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin19)){
    coin19.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin20)){
    coin20.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin21)){
    coin21.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin22)){
    coin22.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin23)){
    coin23.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin24)){
    coin24.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin25)){
    coin25.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin26)){
    coin26.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin27)){
    coin27.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin28)){
    coin28.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin29)){
    coin29.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin30)){
    coin30.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin31)){
    coin31.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin32)){
    coin32.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin33)){
    coin33.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin34)){
    coin34.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin35)){
    coin35.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin36)){
    coin36.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin37)){
    coin37.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin38)){
    coin38.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin39)){
    coin39.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin40)){
    coin40.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin41)){
    coin41.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin42)){
    coin42.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin43)){
    coin43.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin44)){
    coin44.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin45)){
    coin45.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin46)){
    coin46.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin47)){
    coin47.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin48)){
    coin48.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin49)){
    coin49.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin50)){
    coin50.destroy();
    score+=1 ;
  }
  
  if(score == 50){
    textSize(25);
    stroke("white");
    fill("white");
    text("You Won",145,135);
    red.velocityY = 0;
    red.velocityX = 0;
    blue.velocityY = 0;
    blue.velocityX = 0;
    pacman.velocityY = 0;
    pacman.velocityX = 0;
  }
  
  drawSprites();
}

function heartLives() {
  if(lives == 2){
    heart3.destroy();
  }
  if(lives == 1){
    heart2.destroy();
  }
  if(lives == 0){
    heart1.destroy();
    textSize(30);
    stroke("white");
    fill("white");
    text("Game Over",120,135);
    red.velocityY = 0;
    red.velocityX = 0;
    blue.velocityY = 0;
    blue.velocityX = 0;
    pacman.velocityY = 0;
    pacman.velocityX = 0;
  }
  
}

function ghostControl(){
  if(red.isTouching(wall20)){
    red.velocityY = 0 ;
    red.velocityX = 4 ;
  }
  if(red.isTouching(wall22)){
    red.velocityY = 4 ;
    red.velocityX = 0 ;
  }
  if(red.isTouching(wall15)){
    red.velocityY = 0 ;
    red.velocityX = 4 ;
  }
  if(red.isTouching(wall7)){
    red.velocityY = 4 ;
    red.velocityX = 0 ;
  }
  if(red.isTouching(wall17)){
    red.velocityY = 0 ;
    red.velocityX = -4 ;
  }
  if(red.isTouching(wall11)){
    red.velocityY = 4 ;
    red.velocityX = 0 ;
  }
  if(red.isTouching(wall5)){
    red.velocityY = 0 ;
    red.velocityX = -4 ;
  }
  if(red.isTouching(wall12)){
    red.velocityY = -4 ;
    red.velocityX = 0 ;
  }
  if(red.isTouching(wall14)){
    red.velocityY = 0 ;
    red.velocityX = -4 ;
  }
  if(red.isTouching(wall6)){
    red.velocityY = -4 ;
    red.velocityX = 0 ;
  }
  if(red.isTouching(wall19)){
    red.velocityY = 0 ;
    red.velocityX = 4 ;
  }
  if(red.isTouching(wall26)){
    red.velocityY = -4 ;
    red.velocityX = 0 ;
  }
  
  
  if(blue.isTouching(wall20)){
    blue.velocityY = 0 ;
    blue.velocityX = -4 ;
  }
  if(blue.isTouching(wall21)){
    blue.velocityY = 4 ;
    blue.velocityX = 0 ;
  }
  if(blue.isTouching(wall14)){
    blue.velocityY = 0 ;
    blue.velocityX = -4 ;
  }
  if(blue.isTouching(wall6)){
    blue.velocityY = 4 ;
    blue.velocityX = 0 ;
  }
  if(blue.isTouching(wall16)){
    blue.velocityY = 0 ;
    blue.velocityX = 4 ;
  }
  if(blue.isTouching(wall11)){
    blue.velocityY = 4 ;
    blue.velocityX = 0 ;
  }
  if(blue.isTouching(wall5)){
    blue.velocityY = 0 ;
    blue.velocityX = 4 ;
  }
  if(blue.isTouching(wall13)){
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  if(blue.isTouching(wall15)){
    blue.velocityY = 0 ;
    blue.velocityX = 4 ;
  }
  if(blue.isTouching(wall7)){
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  if(blue.isTouching(wall18)){
    blue.velocityY = 0 ;
    blue.velocityX = -4 ;
  }
  if(blue.isTouching(wall25)){
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
