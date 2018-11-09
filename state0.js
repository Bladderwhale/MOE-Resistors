var total = 0;
var demo = {}; //Empty object
demo.state0 = function(){}; //Make the property a global function.
demo.state0.prototype = { //Add in 3 property as a function in the demo.state0
    init: function()
    {
        console.log(1500, 1000, game)
       // scalingCanvasWindow(1500, 1000, this);
    },
    preload: function(){
        loadAssets();
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        addChangeStateEventListers(); //Local - First step@
        //windowScaling();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        //Creation of timer
        timer = game.time.create(false);
        timer.loop(2000, updateCounter, this);
        timer.start();
        
        //Add video after loadedAssets();
        video = game.add.video('intro');
        video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 1.5, 1.5);
        video.play(false);
        
        //Add credits after loadedAssets();
        credits = game.add.sprite(game.world.centerX,game.world.centerY, 'credits');
        credits.anchor.x = 0.5;
        credits.anchor.y = 0.5;
        credits.scale.x = 1.5;
        credits.scale.y = 1.5;
        credits.alpha = 0; 
       
        
    },
    update: function(){
        //console.log("total: " + total);
        
        if (total > 1) {
            credits.alpha = 1;
        }
        if (total > 2) {
            game.state.start('state1');
        }
    }
};

                       
function updateCounter() {
    total++;
}