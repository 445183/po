class Charizard{
    constructor(){
        this.flameThrower = createButton('Flame Thrower');
        this.overHeat = createButton('Over Heat');
        this.heatWave = createButton('Heat Wave');
        this.steelWing = createButton('Steel Wing');
        this.fireSpin = createButton('Fire Spin');
    }

    hide(){
        this.flameThrower.hide();
        this.overHeat.hide();
        this.heatWave.hide();
        this.steelWing.hide();
        this.fireSpin.hide();
        player1Attack.hide();
        player2Attack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.flameThrower.position(0,240);
        this.flameThrower.style('width', '180px');
        this.flameThrower.style('height', '40px');
        this.flameThrower.style('background', 'orange');
        this.flameThrower.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-60;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used flame thrower");
                player2Attack.position(600,30);
                player2Attack.style('color','orange');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-60;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used flame thrower");
                player1Attack.position(600,30);
                player1Attack.style('color','orange');
            }
        });

        this.overHeat.position(200,240);
        this.overHeat.style('width', '180px');
        this.overHeat.style('height', '40px');
        this.overHeat.style('background', 'orange');
        this.overHeat.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-75;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used over heat");
                player2Attack.position(600,30);
                player2Attack.style('color','orange');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-75;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used over heat");
                player1Attack.position(600,30);
                player1Attack.style('color','orange');
            }
        });

        this.heatWave.position(400,240);
        this.heatWave.style('width', '180px');
        this.heatWave.style('height', '40px');
        this.heatWave.style('background', 'orange');
        this.heatWave.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-35;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used heat wave");
                player2Attack.position(600,30);
                player2Attack.style('color','orange');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used heat wave");
                player1Attack.position(600,30);
                player1Attack.style('color','orange');
            }
        });

        this.steelWing.position(600,240);
        this.steelWing.style('width', '180px');
        this.steelWing.style('height', '40px');
        this.steelWing.style('background', 'orange');
        this.steelWing.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used steel wing");
                player2Attack.position(600,30);
                player2Attack.style('color','orange');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used steel wing");
                player1Attack.position(600,30);
                player1Attack.style('color','orange');
            }
        });

        this.fireSpin.position(800,240);
        this.fireSpin.style('width', '180px');
        this.fireSpin.style('height', '40px');
        this.fireSpin.style('background', 'orange');
        this.fireSpin.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-135;
                player.updatePlayer1Health(player1Health);
                player2Attack.html(allPlayers.player2.name+"'s pokemon used fire spin");
                player2Attack.position(600,30);
                player2Attack.style('color','orange');
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-135;
                player.updatePlayer2Health(player2Health);
                player1Attack.html(allPlayers.player1.name+"'s pokemon used fire spin");
                player1Attack.position(600,30);
                player1Attack.style('color','orange');
            }
        });
        
    }
}