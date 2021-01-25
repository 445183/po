class Infernape{
    constructor(){
        this.ember = createButton(' Ember ');
        this.flareBlitz = createButton('Flare Blitz');
        this.brickBreak = createButton('Brick Break');
        this.flameWheel = createButton('Flame Wheel');
        this.fireCharge = createButton('Fire Charge');
    }

    hide(){
        this.ember.hide();
        this.flareBlitz.hide();
        this.brickBreak.hide();
        this.flameWheel.hide();
        this.fireCharge.hide();
        player1Attack.hide();
        player2Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.ember.position(0,240);
        this.ember.style('width', '180px');
        this.ember.style('height', '40px');
        this.ember.style('background', 'red');
        this.ember.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used ember");
                player2Attack.position(600,30);
                player2Attack.style('color','red');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used ember");
                player1Attack.position(600,30);
                player1Attack.style('color','red');
            }
        });

        this.flareBlitz.position(200,240);
        this.flareBlitz.style('width', '180px');
        this.flareBlitz.style('height', '40px');
        this.flareBlitz.style('background', 'red');
        this.flareBlitz.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-70;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used flare Blitz");
                player2Attack.position(600,30);
                player2Attack.style('color','red');
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-70;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used flare Blitz");
                player1Attack.position(600,30);
                player1Attack.style('color','red');
            }
        });

        this.brickBreak.position(400,240);
        this.brickBreak.style('width', '180px');
        this.brickBreak.style('height', '40px');
        this.brickBreak.style('background', 'red');
        this.brickBreak.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-30;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used brick break");
                player2Attack.position(600,30);
                player2Attack.style('color','red');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-30;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used brick break");
                player1Attack.position(600,30);
                player1Attack.style('color','red');
            }
        });

        this.flameWheel.position(600,240);
        this.flameWheel.style('width', '180px');
        this.flameWheel.style('height', '40px');
        this.flameWheel.style('background', 'red');
        this.flameWheel.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-120;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used flame wheel");
                player2Attack.position(600,30);
                player2Attack.style('color','red');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-120;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used flame wheel");
                player1Attack.position(600,30);
                player1Attack.style('color','red');
            }
        });

        this.fireCharge.position(800,240);
        this.fireCharge.style('width', '180px');
        this.fireCharge.style('height', '40px');
        this.fireCharge.style('background', 'red');
        this.fireCharge.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player2Health=player2Health+50;
                player.updatePlayer2Health(player2Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used fire charge");
                player2Attack.position(600,30);
                player2Attack.style('color','red');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player1Health=player1Health+50;
                player.updatePlayer1Health(player1Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used fire charge");
                player1Attack.position(600,30);
                player1Attack.style('color','red');
            }
        });
        
    }
}