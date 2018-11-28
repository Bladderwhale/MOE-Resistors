demo.state7 = function(){};
demo.state7.prototype = {resistors:{r2:null},
    preload: function(){loadAssets();},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state7');
        addChangeStateEventListers();
        //Background
        background(this);
        //Home
        home(this);
        //Center
        var test = newQuestions(this, "r1");
        

        //Input
        input0 = GameInstance.add.inputField(-300,-60,{
            width:100,
            height:100,
            font: '70px Arial',
            max:0,
        });
        input1 = GameInstance.add.inputField(-180,-60,{
            width:100,
            height:100,
            font: '70px Arial',
            max:0,
        });
        input2 = GameInstance.add.inputField(-60,-60,{
            width:100,
            height:100,
            font: '70px Arial',
            max:0,
        });
        input3 = GameInstance.add.inputField(100,-60,{
            width:100,
            height:100,
            font: '70px Arial',
            max:0,
        });
        input0.events.onInputOver.add(function(){
            GameInstance.canvas.style.cursor ="default"
        }, this);
        input1.events.onInputOver.add(function(){
            GameInstance.canvas.style.cursor ="default"
        }, this);
        input2.events.onInputOver.add(function(){
            GameInstance.canvas.style.cursor ="default"
        }, this);
        input3.events.onInputOver.add(function(){
            GameInstance.canvas.style.cursor ="default"
        }, this);
        
        
        
        this.resistors.r2.addChild(input0);
        this.resistors.r2.addChild(input1);
        this.resistors.r2.addChild(input2);
        this.resistors.r2.addChild(input3);
       

        //QuestionTitle
        this.questionTitle = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-300,"What is the resistance value?");
        this.questionTitle.fontWeight = 'bold';
        this.questionTitle.anchor.setTo(0.5,0.5);
        this.questionTitle.fontSize = 40;
        drawMiniRect();

        coorindates(this);

        //Add the radiobuttons
        this.btnradio0 = GameInstance.add.button(607,500,'btnradiounchecked');    //500
        this.btnradio1 = GameInstance.add.button(607,600-20,'btnradiounchecked'); //580
        this.btnradio2 = GameInstance.add.button(607,700-40,'btnradiounchecked'); //660
        this.btnradio3 = GameInstance.add.button(607,800-60,'btnradiounchecked'); //740
        this.btnradio0.scale.setTo(0.35,0.35);
        this.btnradio1.scale.setTo(0.35,0.35);
        this.btnradio2.scale.setTo(0.35,0.35);
        this.btnradio3.scale.setTo(0.35,0.35);
        this.boolCheck = true;
        this.btnradio0.events.onInputDown.add(function(){
            if (this.boolCheck == true)
            {
                this.btnradio0.loadTexture('btnradiochecked',0); this.boolCheck = false;
            }
            else if (this.boolCheck == false) 
            {
                this.btnradio0.loadTexture('btnradiounchecked',0); this.boolCheck = true;
            }
        },this);
        this.btnradio1.events.onInputDown.add(function(){
            if (this.boolCheck == true)
            {
                this.btnradio1.loadTexture('btnradiochecked',0); this.boolCheck = false;
            }
            else if (this.boolCheck == false) 
            {
                this.btnradio1.loadTexture('btnradiounchecked',0); this.boolCheck = true;
            }
        },this);
        this.btnradio2.events.onInputDown.add(function(){
            if (this.boolCheck == true)
            {
                this.btnradio2.loadTexture('btnradiochecked',0); this.boolCheck = false;
            }
            else if (this.boolCheck == false) 
            {
                this.btnradio2.loadTexture('btnradiounchecked',0); this.boolCheck = true;
            }
            },this);
        this.btnradio3.events.onInputDown.add(function(){
            if (this.boolCheck == true)
            {
                this.btnradio3.loadTexture('btnradiochecked',0); this.boolCheck = false;
            }
            else if (this.boolCheck == false) 
            {
                this.btnradio3.loadTexture('btnradiounchecked',0); this.boolCheck = true;
            }
        },this);


    },
    update: function(){
        console.log("X: " + this.dots.x + " Y: " + this.dots.y);
        console.log(this.boolCheck)
    }
};

function newQuestions(state, r){
    state.resistors.r2 = GameInstance.add.sprite(0,0,r);
    state.resistors.r2.scale.setTo(0.35,0.35);
    state.resistors.r2.anchor.setTo(0.5,0.5);
    state.resistors.r2.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);
}


