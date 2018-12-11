demo.state2 = function(){};
demo.state2.prototype = {
    resistors: {},
    
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        
        //Background
        background(this);
        //Coordinates
        coorindates(this);
        //Phaser.text
        this.txtDesc = GameInstance.add.text(0,0,"Look at these resistors.");
        this.txtDesc.align = "center";
        this.txtDesc.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY-350);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 50;
        this.txtDesc.fontWeight = 'normal';
        
        //Phaser.sprite 
        //this.table = GameInstance.add.sprite(50,25, 'table');
        //Phaser.text
        /*this.txtHeading = GameInstance.add.text(455,525,'Similar');
        this.txtHeading1 = GameInstance.add.text(910,525,'Difference');
        this.txtDesc1 = GameInstance.add.text(268,600,"	\u2022 All resistors have the same\n   shape and size."); 
        this.txtDesc2 = GameInstance.add.text(268, 700,"\u2022 All resistors have 4\n  colored bands");
        this.txtDesc3 = GameInstance.add.text(750, 600,"\u2022 Each resistor has a\n  different combindation of\n  coloured bands");
        this.txtDesc1.fontWeight = 'normal';
        this.txtDesc2.fontWeight = 'normal';
        this.txtDesc3.fontWeight = 'normal';
        this.txtDesc1.align = 'left';
        this.txtDesc2.align = 'left';
        this.txtDesc3.align = 'left';
        this.txtDesc1.fontSize = 30;
        this.txtDesc2.fontSize = 30;
        this.txtDesc3.fontSize = 30;*/

        this.newDesc = GameInstance.add.text(480, 510, "They look similar but the value of each\nresistor is different.");
        this.newDesc.fontWeight = 'normal';
        this.newDesc.fontSize = 30;
        //Home
        home(this);
        
        //Resistors 
        //Top Left
        this.resistors.r0 = GameInstance.add.sprite(0,0,'r1');
        this.resistors.r0.scale.setTo(0.15,0.15);
        this.resistors.r0.anchor.setTo(0.5,0.5);
        this.resistors.r0.position.setTo(GameInstance.world.centerX/1.5,GameInstance.world.centerY/1.75);
        
        //Bottom Left
        this.resistors.r1 = GameInstance.add.sprite(0,0,'r2');
        this.resistors.r1.scale.setTo(0.15,0.15);
        this.resistors.r1.anchor.setTo(0.5,0.5);
        this.resistors.r1.position.setTo(GameInstance.world.centerX/1.75,GameInstance.world.centerY/1.25);
        
        //Center
        this.resistors.r2 = GameInstance.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.15,0.15);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);
        
        //Top Right
        this.resistors.r3 = GameInstance.add.sprite(0,0,'r4');
        this.resistors.r3.scale.setTo(0.15,0.15);
        this.resistors.r3.anchor.setTo(0.5,0.5);
        this.resistors.r3.position.setTo(GameInstance.world.centerX*1.35,GameInstance.world.centerY/1.75);
        
        //Bottom Right
        this.resistors.r4 = GameInstance.add.sprite(0,0,'r5');
        this.resistors.r4.scale.setTo(0.15,0.15);
        this.resistors.r4.anchor.setTo(0.5,0.5);
        this.resistors.r4.position.setTo(GameInstance.world.centerX*1.45,GameInstance.world.centerY/1.25);
        
        //Adding buttons
        //Using Phaser.buttons
        addBtnNext(this);
        this.addbtnNext.events.onInputDown.add(function(){GameInstance.state.start("state3");},this);

        this.btnBack = GameInstance.add.button(0,0,'button');
        this.txtBack = GameInstance.add.text(0,0, "Back");
        this.btnBack.scale.setTo(0.5,0.5);
        this.btnBack.anchor.setTo(0.5,0.5);
        this.btnBack.position.setTo(GameInstance.world.centerX-550,GameInstance.world.centerY*1.75);
        this.txtBack.position.setTo(GameInstance.world.centerX-580,GameInstance.world.centerY*1.72);

        this.btnBack.events.onInputDown.add(function(){GameInstance.state.start("state1");},this);
        
        
      
        
    },
    update:function(){
        console.log("X: " + this.dots.x + "Y: " + this.dots.y);
    }
    
};
