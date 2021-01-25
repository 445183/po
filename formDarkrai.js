class Darkrai{
    constructor(){
        this.faintAttack = createButton('Faint Attack');
        this.darkPulse = createButton('Dark Pulse');
        this.iceBeam = createButton('Ice Beam');
        this.shadowBall = createButton('Shadow Ball');
        this.focusBlast = createButton('Focus Blast');
    }

    hide(){
        this.faintAttack.hide();
        this.darkPulse.hide();
        this.iceBeam.hide();
        this.shadowBall.hide();
        this.focusBlast.hide();
        player1Attack.hide();
        player2Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();

        this.faintAttack.position(0,240);
        this.faintAttack.style('width', '180px');
        this.faintAttack.style('height', '40px');
        this.faintAttack.style('background', 'lightgrey');
        this.faintAttack.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-70;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used faint attack");
                player2Attack.position(600,30);
                player2Attack.style('color','lightgrey');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-70;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used faint attack");
                player1Attack.position(600,50);
                player1Attack.style('color','lightgrey');
            }
        });

        this.darkPulse.position(200,240);
        this.darkPulse.style('width', '180px');
        this.darkPulse.style('height', '40px');
        this.darkPulse.style('background', 'lightgrey');
        this.darkPulse.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                player2Attack.position(600,30);
                player2Attack.style('color','lightgrey');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                player1Attack.position(600,50);
                player1Attack.style('color','lightgrey');
            }
        });

        this.iceBeam.position(400,240);
        this.iceBeam.style('width', '180px');
        this.iceBeam.style('height', '40px');
        this.iceBeam.style('background', 'lightgrey');
        this.iceBeam.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-35;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                player2Attack.position(600,30);
                player2Attack.style('color','lightgrey');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-35;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                player1Attack.position(600,50);
                player1Attack.style('color','lightgrey');
                
            }
        });

        this.shadowBall.position(600,240);
        this.shadowBall.style('width', '180px');
        this.shadowBall.style('height', '40px');
        this.shadowBall.style('background', 'lightgrey');
        this.shadowBall.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-90;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used shadow ball");
                player2Attack.position(600,30);
                player2Attack.style('color','lightgrey');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-90;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                player1Attack.position(600,50);
                player1Attack.style('color','lightgrey');
            }
        });

        this.focusBlast.position(800,240);
        this.focusBlast.style('width', '180px');
        this.focusBlast.style('height', '40px');
        this.focusBlast.style('background', 'lightgrey');
        this.focusBlast.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-150;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used focus blast");
                player2Attack.position(600,30);
                player2Attack.style('color','lightgrey');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-150;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used focus blast");
                player1Attack.position(600,50);
                player1Attack.style('color','lightgrey');
            }
        });
    }
}