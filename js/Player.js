class Player 
{
  constructor() 
  {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.score = 0;
  }

  addPlayer()
  {
    var playerIndex = "players/player"+this.index;
    //var playerIndex = "player" + this.index;
    console.log(playerIndex);
    database.ref(playerIndex).set(
      {
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        rank:this.rank,
        score:this.score
      });
  }

  updateCount(count)
  {
    database.ref("/").update({playerCount:count});
  }


  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  getPlayerInfo()
  {
    var playerInfoRef = database.ref("player");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
      console.log(allPlayers);
    })
  }

  update()
  {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update(
     {
       positionX:this.positionX,
       positionY:this.positionY,
       rank:this.rank,
       score:this.score
     }
   )
  }

  getDistance()
  {
    var playerDistanceRef = database.ref("players/player"+this.index);

    playerDistanceRef.on("value",data=>{
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    })
  }
}
