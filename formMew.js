class Mew{
    constructor(){
        this.chargeBeam = createButton('Charge Beam');
        this.bullDoze = createButton('Bull Doze');
        this.thunder = createButton('Thunder');
        this.darkpulse = createButton('Dark Pulse');
        this.flashCannon = createButton('Flash Cannon');
    }

    hide(){
        this.chargeBeam.hide();
        this.bullDoze.hide();
        this.thunder.hide();
        this.darkpulse.hide();
        this.flashCannon.hide();
        player1Attack.hide();
        player2Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.chargeBeam.position(0,240);
        this.chargeBeam.style('width', '180px');
        this.chargeBeam.style('height', '40px');
        this.chargeBeam.style('background', 'pink');
        this.chargeBeam.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-40;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used charge beam");
                player2Attack.position(600,30);
                player2Attack.style('color','pink');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-40;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used charge beam");
                player1Attack.position(600,50);
                player1Attack.style('color','pink');
            }
        });

        this.bullDoze.position(200,240);
        this.bullDoze.style('width', '180px');
        this.bullDoze.style('height', '40px');
        this.bullDoze.style('background', 'pink');
        this.bullDoze.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-75;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used bull doze");
                player2Attack.position(600,30);
                player2Attack.style('color','pink');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-75;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used bull doze");
                player1Attack.position(600,50);
                player1Attack.style('color','pink');
            }
        });

        this.thunder.position(400,240);
        this.thunder.style('width', '180px');
        this.thunder.style('height', '40px');
        this.thunder.style('background', 'pink');
        this.thunder.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-60;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used thunder");
                player2Attack.position(600,30);
                player2Attack.style('color','pink');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-60;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used thunder");
                player1Attack.position(600,50);
                player1Attack.style('color','pink');
            }
        });

        this.darkpulse.position(600,240);
        this.darkpulse.style('width', '180px');
        this.darkpulse.style('height', '40px');
        this.darkpulse.style('background', 'pink');
        this.darkpulse.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-120;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                player2Attack.position(600,30);
                player2Attack.style('color','pink');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-120;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                player1Attack.position(600,50);
                player1Attack.style('color','pink');
            }
        });

        this.flashCannon.position(800,240);
        this.flashCannon.style('width', '180px');
        this.flashCannon.style('height', '40px');
        this.flashCannon.style('background', 'pink');
        this.flashCannon.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-90;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used flash cannon");
                player2Attack.position(600,30);
                player2Attack.style('color','pink');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-90;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used flash cannon");
                player1Attack.position(600,50);
                player1Attack.style('color','pink');
            }
        });
    }
}