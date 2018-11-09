demo.state2 = function(){};
demo.state2.prototype = {
    preload:function(){
        loadAssets();
    },
    create:function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        
        //Background
        background(this);
        //Coordinates
        coorindates(this);
        //Phaser.text
        this.txtDesc = game.add.text(0,0,"They are resistors.\nHow similar and different are they?");
        this.txtDesc.align = "center";
        this.txtDesc.position.setTo(game.world.centerX, game.world.centerY-350);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 50;
        this.txtDesc.fontWeight = 'normal';
        
        //Phaser.sprite 
        this.table = game.add.sprite(50,25, 'table');
        //Phaser.text
        this.txtHeading = game.add.text(455,525,'Similar');
        this.txtHeading1 = game.add.text(910,525,'Difference');
        this.txtDesc1 = game.add.text(268,600,"	\u2022 All resistors have the same\n   shape and size."); 
        this.txtDesc2 = game.add.text(268, 700,"\u2022 All resistors have 4\n  colored bands");
        this.txtDesc3 = game.add.text(750, 600,"\u2022 Each resistor has a\n  different combindation of\n  coloured bands");
        this.txtDesc1.fontWeight = 'normal';
        this.txtDesc2.fontWeight = 'normal';
        this.txtDesc3.fontWeight = 'normal';
        this.txtDesc1.align = 'left';
        this.txtDesc2.align = 'left';
        this.txtDesc3.align = 'left';
        
        home(this);
        
        
        
        
      
        
    },
    update:function(){
        console.log("X: " + this.dots.x + "Y: " + this.dots.y);
    }
    
};
