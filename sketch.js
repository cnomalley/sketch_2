
//var mynumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

//var x = Math.floor(Math.random() * 4 + 1);
//var rand = mynumber[x];

//function setup(){
//    createCanvas(440,400);
//} 
//function draw(){
    //if (rand > 5)
      //  fill(0,0,0)
       // ellipse(20, 120, 25, 25)
    //else
       // fill(random(i, n, t, j))
       // rect(40, 50, 30, 30)

// cool idea for project: randomness in headlines - headline roulette - playing off the craziness of what headlines are like nowadays
// different random parts of a headline + a photo randomly chosen, with the hope of creating a cohesive article that looks maybe realistic
//////////////////
//var img;


//function setup(){
    //createCanvas(800,500);

   // img = loadImage('images/cnn.jpg');
//}



// if I could just get it to repost whatever product is made in postmessage
//cool to add randomized photos too

//  new code attempt!!!!


//var backgroundColor;
//var isOverRectangle;
//var message;

var button;

var firstnames = ["Donald Trump", "Logan Paul", "Ellen Degeneres", "Oprah", "Putin", "Florida Man"]; //noun first
var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
var secondpart = [" has declared Uggs unpatriotic", " burns a village", " judges new episode of RuPaul's Drag Race", " hosts a Shrek-themed stripper party", " is spotted on a date with Margaret Atwood", " invites Ted Cruz on a Disney Cruise", " puked into Betty White's purse", " enslaves the human race", " is spotted on a date with Charlie Puth", " sheds a tear over a headless Barbie doll",]; // verb second
var secondpart = secondpart[Math.floor(Math.random() * secondpart.length)];

var message = "Breaking News: " + firstname + secondpart;
var myFont;
var song

function preload(){
  img = loadImage('images/cnn.jpg');
  //myFont = loadFont('Source Sans Pro');

}
 
function setup() {
  // set canvas size
  createCanvas(790, 440);
  
  button = createButton('News of 2018');
  button.position(40, 20);
  button.mousePressed(postmessage);
  image(img, 0, 0, 800, 500);
  //rect(300, 300, 30, 30);
  
  // default background color
  //backgroundColor = color(255, 255, 255);
}

function draw(){
  //background(0);
  //var statement;
  //text(message, 50, 390);
}

function postmessage() {
  var firstnames = ["Donald Trump", "Local Gym Teacher", "Larry Moneta", "Obama", "Taylor Swift", "Vincent Price", "Single Woman", "Small Dog", "Suburban Mom", "Local Teenager", "Drunk Man", "Logan Paul", "Daniel Radcliffe", "Ellen Degeneres", "Oprah", "Putin", "Florida Man"]; //noun first
  var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
  var secondpart = [" Has Declared Uggs Unpatriotic", " Reportedly Using Tinder", " Bites A Traffic Cop", " Goes On Strict Tide Pod Diet", " Advocates For Benefits Of Healing Crystals", " Has Strong Opinions On Name Of Kylie's Baby", " Says Trump Only Tweets When On Toilet", " Twerks Atop Statue In Downtown Chicago", " Catfishes James Franco", " Terrorizes Mothers At The Playground", " Sells Body To Elon Musk For 'Science'", " Burns A Village", " Smokes Mad Blunt", " Runs Into Oncoming Traffic", " Creates Massive Sinkhole", " Shaves Random Passerby's Back Hair", " Judges New Episode Of RuPaul's Drag Race", " Hosts A Shrek-Themed Stripper Party", " Is Spotted On A Date With Kim Jon-un", " Invites Ted Cruz On A Disney Cruise", " Pukes In Betty White's Purse", " Enslaves The Human Race", " Photographed Making Out With Mirror", " Sheds A Tear Over A Headless Barbie Doll",]; // verb second
  var secondpart = secondpart[Math.floor(Math.random() * secondpart.length)];
  //document.getElementById("recruit").textContent = "Breaking News: " + firstname + secondpart;
  
  console.log("helloooo");
  image(img, 0, 0, 800, 500);
  fill(153, 0, 0);
  //textAlign(CENTER);
  textFont('Source Sans Pro');
  textSize(25);
  text(firstname + secondpart, 48, 410);
  console.log(firstname + secondpart);
  
};
 
//function draw() 
//{
  //background(img);
  //text(message, 50, 300)
 
  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  //if (mouseX >= 150 && mouseX <= 150+100 && mouseY >= 150 && mouseY <= 150+100) 
  //{
   // isOverRectangle = true;
  //} else {
  //  isOverRectangle = false;
  //}
  
  // draw a rectangle
  //rectMode(CORNER);
  //stroke(0);
  //strokeWeight(5);
  //f(isOverRectangle == true)
  //{
  //  fill(100);
  //  cursor(HAND);
  //} else {
	//fill(200); 
	//cursor(ARROW); 
  //}
  //rect(30, 295, 190, 90);
  
//}
 
//function mousePressed()
//{
    //var firstnames = ["Donald Trump", "Logan Paul", "Ellen Degeneres", "Oprah", "Putin", "Florida Man"]; //noun first
    //var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
    //var secondpart = [" has declared Uggs unpatriotic", " burns a village", " judges new episode of RuPaul's Drag Race", " hosts a Shrek-themed stripper party", " is spotted on a date with Margaret Atwood", " invites Ted Cruz on a Disney Cruise", " puked into Betty White's purse", " deports Santa's elves", " is spotted on a date with Charlie Puth", " sheds a tear over a headless Barbie doll",]; // verb second
    //var secondpart = secondpart[Math.floor(Math.random() * secondpart.length)];
  
  
    //if(isOverRectangle == true)
  //{
    //text("Breaking News")
    //backgroundColor = color(random(255), random(255), random(255));
    //message = "Breaking News" //random(firstnames) random(secondpart);
  //}
//}
