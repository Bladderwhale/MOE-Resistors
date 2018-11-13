demo.state4 = function(){};
demo.state4.prototype = {
    resistors:{},
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state4');
        addChangeStateEventListers();
        
        //Background
        background(this);
        //Phaser.Text
        this.txtDesc = game.add.text(0,0,"Let's look at this resistor. \nThe coloured bands are numbered from left to right.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(game.world.centerX, game.world.centerY-320);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        this.txtDesc.lineSpacing = 10;
        
        this.txtDesc.fontWeight = 'normal';
        
        //Center
        this.resistors.r2 = game.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.35,0.35);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(game.world.centerX,game.world.centerY/1.4);
        
        this.a0 = game.add.sprite(0,0,'arrow0');
        this.a0.scale.setTo(1,0.75);
        this.a0.position.setTo(this.resistors.r2.x,game.world.centerY/1.5);
        this.txtA0 = game.add.text(this.resistors.r2.x+220,game.world.centerY-110,"There is a bigger spacing between \n3rd and 4th band.");
        this.txtA0.scale.setTo(0.7,0.7)
        this.txtA0.fontWeight = "normal";
        
        this.a1 = game.add.sprite(0,0,'arrow1');
        this.a1.scale.setTo(0.5,0.5);
        this.a1.position.setTo(this.resistors.r2.x-70,game.world.centerY-95);
        this.a1.angle = 50;
        this.a1 = game.add.text(this.resistors.r2.x-170,game.world.centerY-55,"1st Band");
        this.a1.scale.setTo(0.7,0.7);
        
        
        this.a2 = game.add.sprite(0,0,'arrow1');
        this.a2.scale.setTo(0.5,0.7);
        this.a2.position.setTo(this.resistors.r2.x-40,game.world.centerY-95);
        this.a2.angle = 20;
        this.a2 = game.add.text(this.resistors.r2.x-80,game.world.centerY-20,"1st Band");
        this.a2.scale.setTo(0.7,0.7);
        
        
        this.a3 = game.add.sprite(0,0,'arrow1');
        this.a3.scale.setTo(0.5,0.5);
        this.a3.position.setTo(this.resistors.r2.x-10,game.world.centerY-90);
        this.a3.angle = -30;
        
        this.a4 = game.add.sprite(0,0,'arrow1');
        this.a4.scale.setTo(0.5,0.5);
        this.a4.position.setTo(this.resistors.r2.x+60,game.world.centerY-90);
        this.a4.angle = -50;
        
        
    },
    update: function(){}
};