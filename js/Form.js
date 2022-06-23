class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }


  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  handleMousePressed()
  {
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      this.input.hide();
      var message = "Welcome!";
      this.greeting.html(message);
      player.name = this.input.value();
      playerCount +=1;
      player.index = playerCount;
      console.log(playerCount)
      player.addPlayer(); // addPlayer is a function created in player.js file used to add details of the player in the database.
      player.updateCount(playerCount); // used to update the playerCount in the database.
    })
  }
  display()
  {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }

  

}