demo.state3 = function(){};
demo.state3.prototype = {resistors:{},
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state3');
        addChangeStateEventListers();
        
        //Background
        background(this);
        
        //home
        home(this);
        
        
        //Phaser.text
        this.txtDesc = GameInstance.add.text(0,0,"The colour combindation of the four bands on the resistor\nindicate the resistor's value.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY-320);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        
        this.txtDesc.fontWeight = 'normal';
        
        this.txtDesc = GameInstance.add.text(0,0,"To interpret this colour combination, we will\nuse the resistor colour codes.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY*1.3);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        
        this.txtDesc.fontWeight = 'normal';
        
        
        //Resistors 
        //Top Left
        this.resistors.r0 = GameInstance.add.sprite(0,0,'r1');
        this.resistors.r0.scale.setTo(0.15,0.15);
        this.resistors.r0.anchor.setTo(0.5,0.5);
        this.resistors.r0.position.setTo(GameInstance.world.centerX/1.5,GameInstance.world.centerY/1.75+50);
        this.r0 = this.game.add.text(GameInstance.world.centerX/1.5,GameInstance.world.centerY/1.55+50,"47 \u2126");
        this.r0.anchor.setTo(0.5,0.5);
        this.r0.fontWeight = 'normal';
        this.r0.fontSize = 20
        
        
        //Bottom Left
        this.resistors.r1 = GameInstance.add.sprite(0,0,'r2');
        this.resistors.r1.scale.setTo(0.15,0.15);
        this.resistors.r1.anchor.setTo(0.5,0.5);
        this.resistors.r1.position.setTo(GameInstance.world.centerX/1.75,GameInstance.world.centerY/1.25+50);
        this.r1 = this.game.add.text(GameInstance.world.centerX/1.75,GameInstance.world.centerY/1.15+50,"22 k\u2126");
        this.r1.anchor.setTo(0.5,0.5);
        this.r1.fontWeight = 'normal';
        this.r1.fontSize = 20
        
        //Center
        this.resistors.r2 = GameInstance.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.15,0.15);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4+50);
        this.r2 = this.game.add.text(GameInstance.world.centerX,GameInstance.world.centerY/1.255+50,"1.5 k\u2126");
        this.r2.anchor.setTo(0.5,0.5);
        this.r2.fontWeight = 'normal';
        this.r2.fontSize = 20
        
        //Top Right
        this.resistors.r3 = GameInstance.add.sprite(0,0,'r4');
        this.resistors.r3.scale.setTo(0.15,0.15);
        this.resistors.r3.anchor.setTo(0.5,0.5);
        this.resistors.r3.position.setTo(GameInstance.world.centerX*1.35,GameInstance.world.centerY/1.75+50);
        this.r3 = this.game.add.text(GameInstance.world.centerX*1.35,GameInstance.world.centerY/1.55+50,"330 k\u2126");
        this.r3.anchor.setTo(0.5,0.5);
        this.r3.fontWeight = 'normal';
        this.r3.fontSize = 20
        
        //Bottom Right
        this.resistors.r4 = GameInstance.add.sprite(0,0,'r5');
        this.resistors.r4.scale.setTo(0.15,0.15);
        this.resistors.r4.anchor.setTo(0.5,0.5);
        this.resistors.r4.position.setTo(GameInstance.world.centerX*1.45,GameInstance.world.centerY/1.25+50);
        this.r4 = this.game.add.text(GameInstance.world.centerX*1.45,GameInstance.world.centerY/1.15+50,"1.5 M\u2126");
        this.r4.anchor.setTo(0.5,0.5);
        this.r4.fontWeight = 'normal';
        this.r4.fontSize = 20
        
       
        
        addBtnNext(this);
        this.addbtnNext.events.onInputDown.add(function(){GameInstance.state.start("state4");},this);

        this.btnBack = GameInstance.add.button(0,0,'button');
        this.txtBack = GameInstance.add.text(0,0, "Back");
        this.btnBack.scale.setTo(0.5,0.5);
        this.btnBack.anchor.setTo(0.5,0.5);
        this.btnBack.position.setTo(GameInstance.world.centerX-550,GameInstance.world.centerY*1.75);
        this.txtBack.position.setTo(GameInstance.world.centerX-580,GameInstance.world.centerY*1.72);

        this.btnBack.events.onInputDown.add(function(){GameInstance.state.start("state2");},this);
        
       
    },
    update: function(){
    }
};