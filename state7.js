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
        newQuestions(this, "r1");
 

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
    },
    update: function(){
    }
};

function newQuestions(state, r){
    state.resistors.r2 = GameInstance.add.sprite(0,0,r);
    state.resistors.r2.scale.setTo(0.35,0.35);
    state.resistors.r2.anchor.setTo(0.5,0.5);
    state.resistors.r2.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);
}


