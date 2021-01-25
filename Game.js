class Game {
  constructor(){
     this.finish = createElement('h1');
     this.finish1 = createElement('h1');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
      player1=createSprite(100,450);
      player2=createSprite(1100,450);
      cars = [player1,player2];
    }
    
  }

  play(){
    form.hide();
        
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    player.displayHealth(player1Health,1);
    player.displayHealth(player2Health,2);

    if(allPlayers !== undefined){
      background(backgroundImage);     
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      if(allPlayers.player2.pokemon!==player.pokemon){
          switch(allPlayers.player2.pokemon){
            case 1:player2.addImage(arceusImg);
            break;
            case 2:player2.addImage(mewImg);
                  player2.scale=0.75;
            break;
            case 3:player2.addImage(darkraiImg);
            break;
            case 4:player2.addImage(greyninjaImg);
                  player2.scale=0.45;
            break;
            case 5:player2.addImage(charizardImg);
                  player2.scale=0.2;
            break;
            case 6:player2.addImage(infernapeImg);
            break;
          }
      }
      if(allPlayers.player1.pokemon!==player.pokemon){
            switch(allPlayers.player2.pokemon){
              case 1:player1.addImage(arceusImg2);
                     poke1.display();
              break;
              case 2:player1.addImage(mewImg);
                     player1.scale=0.75;
                     poke2.display();
              break;
              case 3:player1.addImage(darkraiImg2);
                     poke3.display();
              break;
              case 4:player1.addImage(greyninjaImg2);
                    player1.scale=0.45;
                    poke4.display();
              break;
              case 5:player1.addImage(charizardImg2);
                    player1.scale=0.2;
                    poke5.display();
              break;
              case 6:player1.addImage(infernapeImg2);
                    poke6.display();
              break;
            }
      }
      if(allPlayers.player2.pokemon!==player.pokemon){
        switch(allPlayers.player1.pokemon){
          case 1:player1.addImage(arceusImg2);
                 poke1.display();
          break;
          case 2:player1.addImage(mewImg);
                player1.scale=0.75;
                poke2.display();
          break;
          case 3:player1.addImage(darkraiImg2);
                 poke3.display();
          break;
          case 4:player1.addImage(greyninjaImg2);
                player1.scale=0.45;
                poke4.display();
          break;
          case 5:player1.addImage(charizardImg2);
                player1.scale=0.2;
                poke5.display();
          break;
          case 6:player1.addImage(infernapeImg2);
                 poke6.display();
          break;
        }
    }
    if(allPlayers.player1.pokemon!==player.pokemon){
          switch(allPlayers.player1.pokemon){
            case 1:player2.addImage(arceusImg);
            break;
            case 2:player2.addImage(mewImg);
                  player2.scale=0.75;
            break;
            case 3:player2.addImage(darkraiImg);
            break;
            case 4:player2.addImage(greyninjaImg);
                  player2.scale=0.45;
            break;
            case 5:player2.addImage(charizardImg);
                  player2.scale=0.2;
            break;
            case 6:player2.addImage(infernapeImg);
            break;
          }
    }
      

      

        textSize(20);
        strokeWeight(5);
        stroke("white");
        fill("red");
        text(allPlayers.player1.name + "'s pokemon's Health: "+player1Health,50,50);
        text(allPlayers.player2.name + "'s pokemon's Health: " +player2Health, 50, 100);

        if(player1Health<=0 || player2Health<=0){
           gameState=2;
           game.update(gameState);
        }
    }  
    drawSprites();
    //fill(255);
    //text(mouseX+","+mouseY,mouseX,mouseY);
  }

  end(){
     background(255);
     if(player1Health<=0){
           poke1.hide();
           poke2.hide();
           poke3.hide();
           poke4.hide();
           poke5.hide();
           poke6.hide();
           this.finish.html(allPlayers.player1.name+"'s pokemon fainted .");
           this.finish.position(450,300);
           this.finish.style('color', 'red');
           this.finish.style('font-size', '40px');
           this.finish1.html(allPlayers.player2.name+"'s pokemon won the match.");
           this.finish1.position(450,350);
           this.finish1.style('color', 'red');
           this.finish1.style('font-size', '40px');
        
     }
     if(player2Health<=0){
            poke1.hide();
            poke2.hide();
            poke3.hide();
            poke4.hide();
            poke5.hide();
            poke6.hide();
            this.finish.html(allPlayers.player2.name+"'s pokemon fainted .");
            this.finish.position(450,300);
            this.finish.style('color', 'red');
            this.finish.style('font-size', '40px');
            this.finish1.html(allPlayers.player1.name+"'s pokemon won the match.");
            this.finish1.position(450,350);
            this.finish1.style('color', 'red');
            this.finish1.style('font-size', '40px');
   
      }
  }
}
