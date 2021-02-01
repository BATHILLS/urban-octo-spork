class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.title2 = createElement('h2');
      this.input2 = createInput("Password");
      this.text1 = createElement('h1');
      //this.reset = createButton('Reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();
      
    }
  
    display(){
      this.title.html("Username: ");
      this.title.position(displayWidth/2 - 50, displayHeight/2 - 150);

      this.title2.html("Password: ");
      this.title2.position(displayWidth/2 - 50, displayHeight/2 - 80);

      this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 30);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();
        nae = this.input.value();
        this.greeting.html("Hello " + nae)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        //fill("LightBlue");
       // ;
        this.text1.html("Below is a list of pickers at your service");
        this.text1.position(displayWidth/2-250, displayHeight/2-250);

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
      });
  
      /* this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      }); */
  
    }
  }
  