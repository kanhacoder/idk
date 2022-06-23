class Game {
  constructor() 
  {
    this.resetButton = createButton("");
    this.resetTitle = createElement("h2");

    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");

    this.leadeboardTitle.html("Leaderboard");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 100);

    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 130);

    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  // update(state)
  // {
  //   database.ref("/").update({gameState:state})
  // }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car1 = createSprite(width/2-50,height-100);
    car1.addImage("car1", car1Img);
    car2 = createSprite(width/2+0,height-100);
    car2.addImage("car2", car2Img);
    cars = [car1,car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    this.resetButton.position(width/2+200,100);
    this.resetButton.class("resetButton");
    this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    
    this.leadeboardTitle.html("Leaderboard"); 
    this.leadeboardTitle.class("resetText"); 
    this.leadeboardTitle.position(width / 3 - 60, 140);
    this.leader1.class("leadersText"); 
    this.leader1.position(width / 3 - 50, 150); 
    this.leader2.class("leadersText"); 
    this.leader2.position(width / 3 - 50, 150);
  }

  play() 
  {
    this.handleElements();
    this.handleResetButton();
    players.getPlayerInfo();
    if(allPlayers != undefined)
    {
      image(track,0,-height*5,width,height*6);
      this.showLeaderBoard();
      var index = 0;
      for(var plr in allPlayers)
      {
        index = index+1;
        var x = allPlayers[plr].positonX;
        var y = height-allPlayers[plr].positionY;
        if(index == player.index)
        {
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          camera.position.x = cars[index-1].position.x;
          camera.position.y = cars[index-1].position.y;
        }

      }
      
      this.handlePlayerControls();

      drawSprites();
    }
  }

  handlePlayerControls()
  {
    if(keyIsDown(UP_ARROW))
  {
    player.positionY = player.positionY+10;
    player.update();
  }

  if(keyIsDown(RIGHT_ARROW) && player.positionX<widht/2+300)
  {
    player.positionX = player.positionX+5;
    player.update();
  }

  if(keyIsDown(LEFT_ARROW) && player.positionX>width/2-50)
  {
    player.positionX = player.positionX-5;
    player.update();
  }
  }

  handleResetButton()
  {
    this.handleResetButton.mousePressed(()=>{
      database.ref("/").set({
        playerCount:0,
        gameState:0,
        players:{}
      })
      window.location.reload();
    })
  }

  showLeaderBoard()
  {
    var leader1, leader2;
    var players = Object.values(allPlayers);

    if ((players[0].rank === 0 && players[1].rank === 0) || players[0].rank === 1)
    {
      leader1 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + players[0].score;
      leader2 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + players[1].score;
    }

    if(player[1].rank === 1)
    {
      leader1 = players[1].rank + "&emsp;" + players[1].name + "&emsp;" + players[1].score;
      leader2 = players[0].rank + "&emsp;" + players[0].name + "&emsp;" + players[0].score;
    }

    this.leader1.html(leader1);
    this.leader2.html(leader2);
 }
}
