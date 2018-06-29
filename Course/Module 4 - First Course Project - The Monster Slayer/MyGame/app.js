new Vue({
    el: '#app',
    data: {        
        //Current game turn. A turn ends when both the player and the enemy have acted.
        turn: 0,
        //If the game is over.
        gameover: false,
        //Player character data
        player:{
            health: 100
        },
        //Enemy character data
        enemy:{
            health: 100
        }
    },
    watch: {
        // Watch for players health
        'player.health': function (newPlayerHealth, oldPlayerHealth) {
            this.gameover = newPlayerHealth === 0;
        },
        // Watch for enemy health
        'enemy.health': function (newEnemyHealth, oldEnemyHealth) {
            this.gameover = newEnemyHealth === 0;
        }
    },
    methods:{
        //Starts a new game
        startNewGame: () => {
            this.turn = 0;
            this.player.health = 100;
            this.enemy.health = 100;
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
            this.playerTurnEnded();
        },
        //Player perform a special attack on enemy
        playerSpecialAttack: function(){            
            let damage = this.generateRandomInt(5, 20);
            this.damageCharacter(this.enemy, damage);
            this.playerTurnEnded();
        },
        //Player perform healing spell
        playerHeal: function(){            
            let healing = this.generateRandomInt(5, 15);
            this.player.health = this.player.health + healing;
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
            this.damageCharacter(this.player, damage);
        },
        //Performs the enemy turn
        enemyTurnInitiated: function(){
            this.enemyAttack();            
        },
        //Show the endgame results
        showEndgameResults: function(){
            if(this.player.health === 0)
                alert("LOOSER!");
            else if(this.enemy.health === 0)
                alert("WIN  !");
        }
    },
    updated: function () {
        vm = this;
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been re-rendered
          vm.showEndgameResults();
        })
      }
});