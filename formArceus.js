class Arceus{
    constructor(){
        this.hiddenPower = createButton('Hidden Power');
        this.dragonClaw = createButton('Dragon Claw');
        this.hyperVoice = createButton('Hyper Voice');
        this.refresh = createButton(' Refresh ');
        this.futureSight = createButton('Future Sight');
    }

    hide(){
        this.hiddenPower.hide();
        this.dragonClaw.hide();
        this.hyperVoice.hide();
        this.refresh.hide();
        this.futureSight.hide();
        player2Attack.hide();
        player1Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
   
        this.hiddenPower.position(0,240);
        this.hiddenPower.style('width', '180px');
        this.hiddenPower.style('height', '40px');
        this.hiddenPower.style('background', 'white');
        this.hiddenPower.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used hidden power");
                player2Attack.position(600,30);
                player2Attack.style('color','white');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used hidden power");
                player1Attack.position(600,50);
                player1Attack.style('color','white');
            }
        });

        this.dragonClaw.position(200,240);
        this.dragonClaw.style('width', '180px');
        this.dragonClaw.style('height', '40px');
        this.dragonClaw.style('background', 'white');
        this.dragonClaw.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-75;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used dragon claw");
                player2Attack.position(600,30);
                player2Attack.style('color','white');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-75;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used dragon claw");
                player1Attack.position(600,50);
                player1Attack.style('color','white');
            }
        });

        this.hyperVoice.position(400,240);
        this.hyperVoice.style('width', '180px');
        this.hyperVoice.style('height', '40px');
        this.hyperVoice.style('background', 'white');
        this.hyperVoice.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-65;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used hyper voice");
                player2Attack.position(600,30);
                player2Attack.style('color','white');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-65;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used hyper voice");
                player1Attack.position(600,50);
                player1Attack.style('color','white');
            }
        });

        this.refresh.position(600,240);
        this.refresh.style('width', '180px');
        this.refresh.style('height', '40px');
        this.refresh.style('background', 'white');
        this.refresh.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player2Health=player2Health+75;
                player.updatePlayer2Health(player2Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used refresh");
                player2Attack.position(600,30);
                player2Attack.style('color','white');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player1Health=player1Health+75;
                player.updatePlayer1Health(player1Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used refresh");
                player1Attack.position(600,50);
                player1Attack.style('color','white');
            }
        });

        this.futureSight.position(800,240);
        this.futureSight.style('width', '180px');
        this.futureSight.style('height', '40px');
        this.futureSight.style('background', 'white');
        this.futureSight.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-200;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used future sight");
                player2Attack.position(600,30);
                player2Attack.style('color','white');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-200;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used future sight");
                player1Attack.position(600,50);
                player1Attack.style('color','white');
            }
        });
        
        
    }
}