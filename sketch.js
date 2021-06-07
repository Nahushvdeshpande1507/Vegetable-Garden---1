var Pumpkin1, Pumpkin2, Pumpkin3, Pumpkin4, Pumpkin5, Pumpkin6;
var Tomato1, Tomato2, Tomato3, Tomato4, Tomato5, Tomato6;
var Mushroom1, Mushroom2, Mushroom3, Mushroom4, Mushroom5, Mushroom6;
var Bringal1, Bringal2, Bringal3, Bringal4, Bringal5, Bringal6;
var Spinach1, Spinach2, Spinach3, Spinach4, Spinach5, Spinach6;
var Carrot1, Carrot2, Carrot3, Carrot4, Carrot5, Carrot6;


function setup() {

  createCanvas(1280,523);

  Pumpkin1 = createSprite(500,100,35,35);
  Pumpkin1.shapeColor = color(255,117,24);
  Pumpkin2 = createSprite(550,100,35,35);
  Pumpkin2.shapeColor = color(255,117,24);
  Pumpkin3 = createSprite(600,100,35,35);
  Pumpkin3.shapeColor = color(255,117,24);
  Pumpkin4 = createSprite(650,100,35,35);
  Pumpkin4.shapeColor = color(255,117,24);
  Pumpkin5 = createSprite(700,100,35,35);
  Pumpkin5.shapeColor = color(255,117,24);
  Pumpkin6 = createSprite(750,100,35,35);
  Pumpkin6.shapeColor = color(255,117,24);

  Tomato1 = createSprite(500,150,35,35);
  Tomato1.shapeColor = color(255,99,71);
  Tomato2 = createSprite(550,150,35,35);
  Tomato2.shapeColor = color(255,99,71);
  Tomato3 = createSprite(600,150,35,35);
  Tomato3.shapeColor = color(255,99,71);
  Tomato4 = createSprite(650,150,35,35);
  Tomato4.shapeColor = color(255,99,71);
  Tomato5 = createSprite(700,150,35,35);
  Tomato5.shapeColor = color(255,99,71);
  Tomato6 = createSprite(750,150,35,35);
  Tomato6.shapeColor = color(255,99,71);

  Mushroom1 = createSprite(500,200,35,35);
  Mushroom1.shapeColor = color(216,204,192);
  Mushroom2 = createSprite(550,200,35,35);
  Mushroom2.shapeColor = color(216,204,192);
  Mushroom3 = createSprite(600,200,35,35);
  Mushroom3.shapeColor = color(216,204,192);
  Mushroom4 = createSprite(650,200,35,35);
  Mushroom4.shapeColor = color(216,204,192);
  Mushroom5 = createSprite(700,200,35,35);
  Mushroom5.shapeColor = color(216,204,192);
  Mushroom6 = createSprite(750,200,35,35);
  Mushroom6.shapeColor = color(216,204,192);

  Brinjal1 = createSprite(500,250,35,35);
  Brinjal1.shapeColor = color(97,64,81);
  Brinjal2 = createSprite(550,250,35,35);
  Brinjal2.shapeColor = color(97,64,81);
  Brinjal3 = createSprite(600,250,35,35);
  Brinjal3.shapeColor = color(97,64,81);
  Brinjal4 = createSprite(650,250,35,35);
  Brinjal4.shapeColor = color(97,64,81);
  Brinjal5 = createSprite(700,250,35,35);
  Brinjal5.shapeColor = color(97,64,81);
  Brinjal6 = createSprite(750,250,35,35);
  Brinjal6.shapeColor = color(97,64,81);

  Spinach1 = createSprite(500,300,35,35);
  Spinach1.shapeColor = color(144,155,76);
  Spinach2 = createSprite(550,300,35,35);
  Spinach2.shapeColor = color(144,155,76);
  Spinach3 = createSprite(600,300,35,35);
  Spinach3.shapeColor = color(144,155,76);
  Spinach4 = createSprite(650,300,35,35);
  Spinach4.shapeColor = color(144,155,76);
  Spinach5 = createSprite(700,300,35,35);
  Spinach5.shapeColor = color(144,155,76);
  Spinach6 = createSprite(750,300,35,35);
  Spinach6.shapeColor = color(144,155,76);

  Carrot1 = createSprite(500,350,35,35);
  Carrot1.shapeColor = color(237,145,33);
  Carrot2 = createSprite(550,350,35,35);
  Carrot2.shapeColor = color(237,145,33);
  Carrot3 = createSprite(600,350,35,35);
  Carrot3.shapeColor = color(237,145,33);
  Carrot4 = createSprite(650,350,35,35);
  Carrot4.shapeColor = color(237,145,33);
  Carrot5 = createSprite(700,350,35,35);
  Carrot5.shapeColor = color(237,145,33);
  Carrot6 = createSprite(750,350,35,35);
  Carrot6.shapeColor = color(237,145,33);


}


function draw() {

  background("brown");

  drawSprites();

}