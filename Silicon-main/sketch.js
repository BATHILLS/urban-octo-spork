var loginbgimg;
var titleimage;
var aboutme;
var instructions;
var login;
var logout;
var aboutmeImg, instrImg, loginImg, LogoutImg;
var aboutbg;
var value = aboutme;
var MENU = 0;
var input, button, greeting;
var objform;
var nae = "Mrunank";


function preload()
{
loginbgimg = loadImage("images/imageerror.jpg");
titleimage = loadImage("images/Ttileimage1.PNG");
aboutmeImg = loadImage("images/aboutme.Png");
instrImg = loadImage("images/instrImg.Png");
loginImg = loadImage("images/Loginimg.PNG");
LogoutImg = loadImage("images/LogoutImg.PNG");
aboutbg = loadImage("images/greenBg.jpg")
gif_createImg = createImg("images/giphy.gif");
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  objform = new Form()
  
}

function draw() 
{
  background(loginbgimg);  

  image(titleimage, windowWidth/2-350, windowHeight/2-300, 650, 200);

  gif_createImg.position(windowWidth-350, 20);
  gif_createImg.size(300, 300);

 

  //Menubar
  fill("green");
  rect(50, 30, 200, 75);
  rect(50, 120, 200, 75);
  rect(50, 210, 200, 75);
  fill("yellow");
  textSize(20)
  text('About Me', 90, 80);
  text('Login', 90, 170);
  text('Instructions', 90, 255);
 
  
  
  drawSprites();
  textSize(20);
  fill("green");
 // strokeWeight(3);
  stroke("yellow")
  text("The Raddiwala app is doorstep free service. ", windowWidth/2-280, 380)
  text("We provide the service to collect junk/scrap material from your location. ", windowWidth/2-280, 410)
  text("We made selling to much fun, sell your raddi earn money and awards.", windowWidth/2-280, 440);
  text("Sell more earn more and recycle more.", windowWidth/2-280, 470)

  if(MENU==1)
  {
    createCanvas(windowWidth, windowHeight);
      background(aboutbg);
      textSize(30);
      fill("LightBlue");
      text("I am the developer of this app, and my teachers even helped me to create it!", 20, 100) ;
      text("I am a small boy living in Pune, India.", 20,130 );
      text("I love to play basketball and code nice games, and even websites. ",20, 160);
      text("Dont forget to star my repositories on GitHub.", 20, 190);
      text("I hope you like this application.", 20, 220);

      text('Right Click to return to HomePage', 525, 30)
    if (mouseButton == RIGHT)
     {
      MENU = 0
    }

      //createA("https://github.com/BATHILLS/", 'GitHub')
  }

  // Login
  else if (MENU == 2) 
  {
    
    background("lightgreen");

    textSize(30)
    text('Welcome to our Login Page!', 25, 70)

    
    textSize(20)
    text('Right Click to return to HomePage', 725, 30)
    if (mouseButton == RIGHT)
     {
      MENU = 0
     }

     objform.display();


  }
 
  else if(MENU == 3)
  {
    createCanvas(windowWidth, windowHeight);
      background(aboutbg);
      textSize(30);
      fill("LightBlue");
      text("●Click on the login button to login, then enter your contact details,", 20, 100) ;
      text("and an username to create your account.", 20, 130)
      text("●Click on the logout button after you login to exit your current account.", 20,180 );
      text("●Search for sellers, and click on one after you decide",20, 230);
      text(" to send a message to him/her... ", 20, 260)
      text("●[Only for sellers] You can rate an user, or even cancel the Registration.", 20, 310);
      text("●[Only for moderators] You can send warning to a seller or an user account.", 20, 360);
      text(" After 15 such warnings, the account gets blocked.", 20, 390)

      text('Right Click to return to HomePage', 525, 30)
      if (mouseButton == RIGHT)
       {
        MENU = 0
       }
      //createA("https://github.com/BATHILLS/", 'GitHub')
  }
}

function mouseClicked() 
{
  if (MENU == 0)
   {
    if (mouseX < 200 && mouseX > 50)
     {
      if (mouseY < 105 && mouseY > 33)
      {
        MENU = 1
      }
      if (mouseY < 195 && mouseY > 120) 
      {
        MENU = 2
      }
      if (mouseY < 280 && mouseY > 205) 
      {
        MENU = 3
      }
    }
  }
}
//fontSize(32)
//
