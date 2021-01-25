class Greyninja{
    constructor(){
        this.smackDown = createButton('Smack Down');
        this.iceBeam = createButton('Ice Beam');
        this.nightSlash = createButton('Night Slash');
        this.hydroPump = createButton(' Hydropump ');
        this.quickAttack = createButton('Quick Attack');
    }

    hide(){
        this.smackDown.hide();
        this.iceBeam.hide();
        this.nightSlash.hide();
        this.hydroPump.hide();
        this.quickAttack.hide();
        player1Attack.hide();
        player2Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.smackDown.position(0,240);
        this.smackDown.style('width', '180px');
        this.smackDown.style('height', '40px');
        this.smackDown.style('background', 'lightblue');
        this.smackDown.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used smack down");
                player2Attack.position(600,30);
                player2Attack.style('color','lightblue');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used smack down");
                player1Attack.position(600,50);
                player1Attack.style('color','lightblue');
            }
        });

        this.iceBeam.position(200,240);
        this.iceBeam.style('width', '180px');
        this.iceBeam.style('height', '40px');
        this.iceBeam.style('background', 'lightblue');
        this.iceBeam.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-75;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                player2Attack.position(600,30);
                player2Attack.style('color','lightblue');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-75;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                player1Attack.position(600,50);
                player1Attack.style('color','lightblue');
            }
        });

        this.nightSlash.position(400,240);
        this.nightSlash.style('width', '180px');
        this.nightSlash.style('height', '40px');
        this.nightSlash.style('background', 'lightblue');
        this.nightSlash.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-90;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used night slash");
                player2Attack.position(600,30);
                player2Attack.style('color','lightblue');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-90;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used night slash");
                player1Attack.position(600,50);
                player1Attack.style('color','lightblue');
            }
        });

        this.hydroPump.position(600,240);
        this.hydroPump.style('width', '180px');
        this.hydroPump.style('height', '40px');
        this.hydroPump.style('background', 'lightblue');
        this.hydroPump.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-170;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used hydropump");
                player2Attack.position(600,30);
                player2Attack.style('color','lightblue');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-170;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used hydropump");
                player1Attack.position(600,50);
                player1Attack.style('color','lightblue');
            }
        });

        this.quickAttack.position(800,240);
        this.quickAttack.style('width', '180px');
        this.quickAttack.style('height', '40px');
        this.quickAttack.style('background', 'lightblue');
        this.quickAttack.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-40;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used quick attack");
                player2Attack.position(600,30);
                player2Attack.style('color','lightblue');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-40;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used quick attack");
                player1Attack.position(600,30);
                player1Attack.style('color','lightblue');
            }
        });
        
    }
}