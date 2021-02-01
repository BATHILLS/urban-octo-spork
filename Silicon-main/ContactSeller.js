class ContactSeller{
    constructor()
    {   this.inputKg = createInput("Kg");
        this.inputLive = createInput("place");
        this.inputDate = createInput("Date");
        this.titleKg = createElement('h2');
        this.titlePlace = createElement('h2');
        this.titleDate = createElement('h2');
        this.titleTime = createElement('h3');

//text("Welcome User! We need some information before the picker comes at your doorstep.");
//text("1) What is the approximate weight of your raddi?");
//
//text("2) Where do you live?")
//
//text("3) Till what date do you want the picker to reach you.")
//
//text("4) Which time is good for the seller to arrive at your place?")
//this.titleTime  = createInput("Time")
    }
    hide()
    {
        this.inputKg.hide();
        this.inputLive.hide();
        this.tinputDate.hide();
        this.titleKg.hide();
        this.titlePlace.hide();
        this.titleDate.hide();
        this.titleTime.hide();
   }
   display(){
    this.titleKg.html("What is the approx. weight of your raddi?");
    this.title.position(displayWidth/2 - 50, displayHeight/2 - 150);

    this.title2.html("Weight");
    this.title2.position(displayWidth/2 - 50, displayHeight/2 - 80);

    this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 30);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
   }
}