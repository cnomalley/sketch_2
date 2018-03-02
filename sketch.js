//idea: NRA money -- inflate representatives' heads according to how much they got from the NRA


// skills needed: animate the scaling up of photos when the mouse comes over 


function preload(){
 // people
  img1 = loadImage('images/mccain.gif');
  img2 = loadImage('images/burr.jpg');
  img3 = loadImage('images/blunt.png');
  img4 = loadImage('images/tillis.png');
  img5 = loadImage('images/gardner.png');
 //money bags!
  img6 = loadImage('images/mccainmoney.jpg');
  img7 = loadImage('images/burrmoney.jpg');
  img8 = loadImage('images/bluntmoney.jpg');
  img9 = loadImage('images/tillismoney.jpg');
  img10 = loadImage('images/gardnermoney.jpg');

  //flag

  img11 = loadImage('images/flag.jpeg')
}


function setup(){
  createCanvas(750, 450);
  fill(0, 0, 0);

}

var x = 0.0;
var y = 300;
var speed = 0.5;

function draw(){
  //background(0);
  //fill(100, 100, 100);
 // x += speed; 
 var message = "Blood on your hands.";
 text(message, 30, 40);
 text(message, 30, 80);
 text(message, 30, 120);
 text(message, 30, 160);
 text(message, 30, 200);
 text(message, 30, 240);
 text(message, 30, 280);
 var money1 = "$7,740,521";
 text(money1, 55, 310);

 var message1 = "People kill people.";
 text(message1, 160, 40);
 text(message1, 160, 80);
 text(message1, 160, 120);
 text(message1, 160, 160);
 text(message1, 160, 200);
 text(message1, 160, 240);
 text(message1, 160, 280);
 var money2 = "$6,986,620";
 text(money2, 178, 310);

 var message1 = "Blood on your hands.";
 text(message1, 280, 40);
 text(message1, 280, 80);
 text(message1, 280, 120);
 text(message1, 280, 160);
 text(message1, 280, 200);
 text(message1, 280, 240);
 text(message1, 280, 280);
 var money3 = "$4,551,146";
 text(money3, 307, 310);


 var message1 = "People kill people.";
 text(message1, 410, 40);
 text(message1, 410, 80);
 text(message1, 410, 120);
 text(message1, 410, 160);
 text(message1, 410, 200);
 text(message1, 410, 240);
 text(message1, 410, 280);
 var money3 = "$4,418,012";
 text(money3, 428, 310);

 var message1 = "Blood on your hands.";
 text(message1, 530, 40);
 text(message1, 530, 80);
 text(message1, 530, 120);
 text(message1, 530, 160);
 text(message1, 530, 200);
 text(message1, 530, 240);
 text(message1, 530, 280);
 var money3 = "$3,879,064";
 text(money3, 558, 310);

 fill(0, 0, 0);
 var message2 = "1 Circle = 1000 Lives";
 text(message2, 300, 370);
 var message3 = "2014-Present US Gun Deaths";
 text(message3, 276, 350);

 image(img1, 40, 80, 100, 120);
 image(img2, 160, 80, 100, 120);
 image(img3, 280, 80, 100, 120);
 image(img4, 410, 80, 100, 120);
 image(img5, 540, 80, 100, 120);

 image(img11, 660, 5, 88, 290)


 //background(255, 255, 255)
 //2018
 fill(255, 255, 0);
 ellipse(x, 10, 3, 3);
 ellipse(x, 15, 3, 3);
//2017
 fill(153, 255, 102);
 ellipse(x, 20, 3, 3); //1
 ellipse(x, 25, 3, 3);
 ellipse(x, 30, 3, 3);
 ellipse(x, 35, 3, 3);
 ellipse(x, 40, 3, 3); //5
 ellipse(x, 45, 3, 3);
 ellipse(x, 50, 3, 3);
 ellipse(x, 55, 3, 3);
 ellipse(x, 60, 3, 3); //9
 ellipse(x, 65, 3, 3); //10
 ellipse(x, 70, 3, 3);
 ellipse(x, 75, 3, 3);
 ellipse(x, 80, 3, 3);
 ellipse(x, 85, 3, 3);
 ellipse(x, 90, 3, 3); //15

//2016
fill(255, 0, 0);
ellipse(x, 95, 3, 3); //1
ellipse(x, 100, 3, 3);
ellipse(x, 105, 3, 3);
ellipse(x, 110, 3, 3);
ellipse(x, 115, 3, 3); //5
ellipse(x, 120, 3, 3);
ellipse(x, 125, 3, 3);
ellipse(x, 130, 3, 3);
ellipse(x, 135, 3, 3); //9
ellipse(x, 140, 3, 3); //10
ellipse(x, 145, 3, 3);
ellipse(x, 150, 3, 3);
ellipse(x, 155, 3, 3);
ellipse(x, 160, 3, 3);
ellipse(x, 165, 3, 3); //15


//2015
fill(0, 0, 255);
ellipse(x, 170, 3, 3); //1
ellipse(x, 175, 3, 3);
ellipse(x, 180, 3, 3);
ellipse(x, 185, 3, 3);
ellipse(x, 190, 3, 3); //5
ellipse(x, 195, 3, 3);
ellipse(x, 200, 3, 3);
ellipse(x, 205, 3, 3);
ellipse(x, 210, 3, 3); //9
ellipse(x, 215, 3, 3); //10
ellipse(x, 220, 3, 3);
ellipse(x, 225, 3, 3);
ellipse(x, 230, 3, 3); //13

//2014
fill(255, 255, 255);
ellipse(x, 235, 3, 3); //1
ellipse(x, 240, 3, 3);
ellipse(x, 245, 3, 3);
ellipse(x, 250, 3, 3);
ellipse(x, 255, 3, 3); //5
ellipse(x, 260, 3, 3);
ellipse(x, 265, 3, 3);
ellipse(x, 270, 3, 3);
ellipse(x, 275, 3, 3); //9
ellipse(x, 280, 3, 3); //10
ellipse(x, 285, 3, 3);
ellipse(x, 290, 3, 3); //12


 x = x + 0.1

 fill(255,0,0);
 
}

// if each bullet equals 1000 people dead
// 2018 already has 2
// 2017 has 15
// 2016 has 15
// 2015 has 13
// 2014 has 12


//function draw(){
// if (mouseIsPressed) {
 //   image(img6, 50, 80, 90, 120);
//  } else {
//    image(img1, 50, 70, 90, 120);
//  }

 // print(mouseIsPressed);
  
//}

