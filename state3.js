demo.state3 = function(){};
demo.state3.prototype = {resistors:{},
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state3');
        addChangeStateEventListers();
        
        //Background
        background(this);
        
        //home
        home(this);
        
        
        //Phaser.text
        this.txtDesc = game.add.text(0,0,"The colour combindation of the 4 bands on a resistor tell \nus its resistance value.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(game.world.centerX, game.world.centerY-320);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        
        this.txtDesc.fontWeight = 'normal';
        
        this.txtDesc = game.add.text(0,0,"In this lesson, we will learn how to determine the value \nof a resistor using the 4-band colour combination.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(game.world.centerX, game.world.centerY*1.1);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        
        this.txtDesc.fontWeight = 'normal';
        
        
        //Resistors 
        //Top Left
        this.resistors.r0 = game.add.sprite(0,0,'r1');
        this.resistors.r0.scale.setTo(0.15,0.15);
        this.resistors.r0.anchor.setTo(0.5,0.5);
        this.resistors.r0.position.setTo(game.world.centerX/1.5,game.world.centerY/1.75);
        this.r0 = this.game.add.text(game.world.centerX/1.5,game.world.centerY/1.55,"47 \u2126");
        this.r0.anchor.setTo(0.5,0.5);
        this.r0.fontWeight = 'normal';
        this.r0.fontSize = 20
        
        
        //Bottom Left
        this.resistors.r1 = game.add.sprite(0,0,'r2');
        this.resistors.r1.scale.setTo(0.15,0.15);
        this.resistors.r1.anchor.setTo(0.5,0.5);
        this.resistors.r1.position.setTo(game.world.centerX/1.75,game.world.centerY/1.25);
        this.r1 = this.game.add.text(game.world.centerX/1.75,game.world.centerY/1.15,"22 k\u2126");
        this.r1.anchor.setTo(0.5,0.5);
        this.r1.fontWeight = 'normal';
        this.r1.fontSize = 20
        
        //Center
        this.resistors.r2 = game.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.15,0.15);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(game.world.centerX,game.world.centerY/1.4);
        this.r2 = this.game.add.text(game.world.centerX,game.world.centerY/1.255,"1.5 k\u2126");
        this.r2.anchor.setTo(0.5,0.5);
        this.r2.fontWeight = 'normal';
        this.r2.fontSize = 20
        
        //Top Right
        this.resistors.r3 = game.add.sprite(0,0,'r4');
        this.resistors.r3.scale.setTo(0.15,0.15);
        this.resistors.r3.anchor.setTo(0.5,0.5);
        this.resistors.r3.position.setTo(game.world.centerX*1.35,game.world.centerY/1.75);
        this.r3 = this.game.add.text(game.world.centerX*1.35,game.world.centerY/1.55,"330 k\u2126");
        this.r3.anchor.setTo(0.5,0.5);
        this.r3.fontWeight = 'normal';
        this.r3.fontSize = 20
        
        //Bottom Right
        this.resistors.r4 = game.add.sprite(0,0,'r5');
        this.resistors.r4.scale.setTo(0.15,0.15);
        this.resistors.r4.anchor.setTo(0.5,0.5);
        this.resistors.r4.position.setTo(game.world.centerX*1.45,game.world.centerY/1.25);
        this.r4 = this.game.add.text(game.world.centerX*1.45,game.world.centerY/1.15,"1.5 M\u2126");
        this.r4.anchor.setTo(0.5,0.5);
        this.r4.fontWeight = 'normal';
        this.r4.fontSize = 20
        
       
        
        addBtnNext(this);
        this.addbtnNext.events.onInputDown.add(function(){game.state.start("state4");},this);
        
       
    },
    update: function(){
    }
};