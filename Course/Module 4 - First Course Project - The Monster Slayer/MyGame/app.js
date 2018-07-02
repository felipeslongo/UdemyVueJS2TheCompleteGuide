new Vue({
    el: '#app',
    data: {        
        //Current game turn. A turn ends when both the player and the enemy have acted.
        turn: 0,
        //If the game is over.
        gameover: false,
        isIntroScreen: true,
        //Player character data
        player:{
            health: 100
        },
        //Enemy character data
        enemy:{
            health: 100
        },
        actions: []
    },
    watch: {
        // Watch for players health
        'player.health': function (newPlayerHealth, oldPlayerHealth) {
            this.gameover = newPlayerHealth === 0;
            if(this.gameover)
                this.showEndgameResults();
        },
        // Watch for enemy health
        'enemy.health': function (newEnemyHealth, oldEnemyHealth) {
            this.gameover = newEnemyHealth === 0;
            if(this.gameover)
                this.showEndgameResults();
        }
    },
    methods:{
        //Starts a new game
        startNewGame: function()  {
            this.turn = 0;
            this.player.health = 100;
            this.enemy.health = 100;
            this.gameover = false;
            this.isIntroScreen = false;
            this.actions = [];
        },
        giveUp: function(){
            this.isIntroScreen = true;
        },
        //Generate random number between interval.        
        generateRandomInt: (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        //Damage a character from the game
        damageCharacter: function(entity, damage){
            damagedHealth = entity.health - damage;
            entity.health = damagedHealth >= 0 ? damagedHealth : 0;
        },
        //Player perform a attack on enemy
        playerAttack: function(){            
            let damage = this.generateRandomInt(1, 10);
            this.damageCharacter(this.enemy, damage);
            this.addPlayerActionEvent('PLAYER HITS MONSTER FOR ' + damage);
            this.playerTurnEnded();
        },
        //Player perform a special attack on enemy
        playerSpecialAttack: function(){            
            let damage = this.generateRandomInt(5, 20);
            this.damageCharacter(this.enemy, damage);
            this.addPlayerActionEvent('PLAYER HITS MONSTER FOR ' + damage);
            this.playerTurnEnded();
        },
        //Player perform healing spell
        playerHeal: function(){            
            let healing = this.generateRandomInt(5, 15);
            this.player.health = this.player.health + healing;
            this.addPlayerActionEvent('PLAYER HEALS HIMSELF FOR ' + healing);
            this.playerTurnEnded();
        },
        //Notify that the player turn has ended
        playerTurnEnded: function(){            
            this.enemyTurnInitiated();
            this.turn++;
        },
        //Enemy perform a attack on player
        enemyAttack: function(){            
            let damage = this.generateRandomInt(5, 25);
            this.addEnemyActionEvent('MONSTER HITS PLAYER FOR ' + damage);
            this.damageCharacter(this.player, damage);
        },
        //Performs the enemy turn
        enemyTurnInitiated: function(){
            this.enemyAttack();            
        },
        //Show the endgame results
        showEndgameResults: function(){
            let message = "";
            if(this.player.health === 0)
                message = "TOO BAD!! YOU LOOSE!";
            else if(this.enemy.health === 0)
                message = "CONGRATULATIONS!!! YOU WON!";
            else
                return;
            
            message = message.concat(" Want to play again ?");
            if(confirm(message))
                this.giveUp();
        },
        // addActionEvent: function(){

        // }
        getActionEventClass: function(actionEvent){            
            let classes = [
                {'player-turn': actionEvent.character === 0},
                {'monster-turn': actionEvent.character === 1}
            ];
            return classes;
        },
        addPlayerActionEvent: function(message){
            this.actions.push({'character':0, 'message':message});
        },
        addEnemyActionEvent: function(message){
            this.actions.push({'character':1, 'message':message});
        }
    },
    // updated: function () {
    //     vm = this;
    //     this.$nextTick(function () {
    //       // Code that will run only after the
    //       // entire view has been re-rendered
    //       vm.showEndgameResults();
    //     })
    //   }
});