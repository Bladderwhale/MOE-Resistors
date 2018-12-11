demo.state1 = function() {}
demo.state1.prototype = { 
    preload: function(){
        loadAssets();
        
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state1");
        addChangeStateEventListers(); 
        //Background
        background(this);
        //Front page 
        //Using Phaser.text
        this.title = GameInstance.add.text(0,0,"Determine the\nValue of a Resistor\nusing the\nResistor Colour Codes "); 
        this.title.addFontWeight('normal', 0);
        this.title.addFontWeight('bold', 13);
        this.title.addFontWeight('normal', 33);
        this.title.addFontWeight('bold',43);
        this.title.align = "center";
        this.title.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY-150);
        this.title.anchor.setTo(0.5,0.5);
        this.title.fontSize = 70;
        
        //Adding buttons
        //Using Phaser.buttons
        addBtn(this);
        this.addLearnBtn.position.setTo(GameInstance.world.centerX-250, GameInstance.world.centerY+300);
        this.addLearnBtn.anchor.setTo(0.5,0.5);
        
        this.addPracticeBtn.position.setTo(GameInstance.world.centerX+250, GameInstance.world.centerY+300);
        this.addPracticeBtn.anchor.setTo(0.5,0.5);
        coorindates(this);
        this.addPracticeBtn.events.onInputDown.add(function(){GameInstance.state.start("state7");}, this);
        
        //Texts
        this.txtLearn.position.setTo(this.addLearnBtn.x, this.addLearnBtn.y);
        this.txtPractice.position.setTo(this.addPracticeBtn.x,this.addPracticeBtn.y);
        
        //Events
        this.addLearnBtn.events.onInputDown.add(function(){GameInstance.state.start('state2');},this);
        
        //Resistors 
        this.r0 = GameInstance.add.sprite(0,0,'r0');
        this.r0.scale.setTo(0.3,0.3);
        this.r0.anchor.setTo(0.5,0.5);
        this.r0.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY*1.25);
        
    },
    update: function(){
      //  console.log("X: " + this.dots.x + " Y: " + this.dots.y);
    }
}