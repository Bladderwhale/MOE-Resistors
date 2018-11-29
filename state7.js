var mcq;
var maxCheck = 0 ;
var maxQns = 0;
demo.randomMCQ = [0,1,2];
demo.state7 = function(){};
demo.state7.prototype = {resistors:{r2:null}, n: 0,
    preload: function(){loadAssets();},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state7');
        addChangeStateEventListers();
        //Background
        background(this);
        //Home
        home(this);

        //MCQ
        mcq =0;
        this.n = 4;
        //Array of height (Randomized)
        this.randomHeight = [500,580,660,740]; //Shuffling of elements in an array.
        this.shuffleArray(this.randomHeight);

        demo.randomMCQ
        this.shuffleArray(demo.randomMCQ);
        mcq = demo.randomMCQ[0];
        demo.randomMCQ.splice(0,1);
        
        //Center
        if (mcq == 0 && maxQns<3) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]); maxQns++;}
        else if (mcq == 1 && maxQns<3) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]); maxQns++;}
        else if (mcq == 2 && maxQns<3) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]); maxQns++;}
        /*var newQns3 = new newQuestions(this, "r4");
        var newQns4 = new newQuestions(this, "r5");*/
        //500
        //580
        //660
        //740
        

        //QuestionTitle
        this.questionTitle = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-300,"What is the resistance value?");
        this.questionTitle.fontWeight = 'bold';
        this.questionTitle.anchor.setTo(0.5,0.5);
        this.questionTitle.fontSize = 40;
        drawMiniRect();

        coorindates(this);
        this.btnCheck.events.onInputDown.add(function(){
            if (this.n == 0) 
            {
                maxCheck = 4
                this.tick.alpha = 1;
                this.dial4.alpha = 1;
                this.correctAnswer.alpha = 1;

                this.input0.setText(" 4");
                this.input1.setText(" 7");
                this.input2.setText(" 1");
                this.input3.setText(" 5");
            }
            else if (this.n == 1 && maxCheck < 4) {
                maxCheck++;
                this.cross.alpha = 1;
            }
            else if (this.n == 2 && maxCheck < 4) {
                maxCheck++;
                this.cross.alpha = 1;
            }
            else if (this.n == 3 && maxCheck < 4) {
                maxCheck++;
                this.cross.alpha = 1;  
            }
        },this);
        this.btnTryAgain.events.onInputDown.add(function(){
            this.btnCheck.alpha = 0.3;
            this.txtCheck.alpha = 0.3;
            maxCheck++;
            this.n = 4;
            this.cross.alpha = 0;
            this.btnTryAgain.visible = false;
            this.txtTryAgain.visible = false;
            btnradio0.inputEnabled = true;
            btnradio1.inputEnabled = true;
            btnradio2.inputEnabled = true;
            btnradio3.inputEnabled = true;

        },this);
        

        //
        btnradio0.events.onInputDown.add(function()
        { 
            this.btnCheck.alpha = 1;
            this.txtCheck.alpha = 1;
            this.n = 0;
        },this);
        btnradio1.events.onInputDown.add(function()
        {
            this.btnCheck.alpha = 1;
            this.txtCheck.alpha = 1;
            this.cross.position.setTo(btnradio1.x - 80,btnradio1.y+ 5);
            this.n = 1;
        },this);
        btnradio2.events.onInputDown.add(function()
        {
            this.btnCheck.alpha = 1;
            this.txtCheck.alpha = 1;
            this.cross.position.setTo(btnradio2.x - 80,btnradio2.y+ 5);
            this.n = 2;
        },this);
        btnradio3.events.onInputDown.add(function()
        {
            this.btnCheck.alpha = 1;
            this.txtCheck.alpha = 1;
            this.cross.position.setTo(btnradio3.x - 80,btnradio3.y+ 5);
            this.n = 3;
        },this);
    },
    update: function(){
        //console.log("X: " + this.dots.x + " Y: " + this.dots.y);
        //console.log("What is value of n: " + this.n);
        //console.log(this.boolCheck)
        console.log("What is the value of maxCheck: " + maxCheck)
        if (maxCheck == 1) {
            maxCheck++;
            //this.cross.alpha = 0;
            this.btnTryAgain.visible = true;
            this.txtTryAgain.visible = true;
        }
        else if (maxCheck == 2) {
            btnradio0.inputEnabled = false;
            btnradio1.inputEnabled = false;
            btnradio2.inputEnabled = false;
            btnradio3.inputEnabled = false;
        }
        else if (maxCheck == 3) {
            if (btnradio0.input.pointerOver()) {
                btnradio0.input.useHandCursor = true;
            }
            if (btnradio1.input.pointerOver()) {
                btnradio1.input.useHandCursor = true;
            }
            if (btnradio2.input.pointerOver()) {
                btnradio2.input.useHandCursor = true;
            }
            if (btnradio3.input.pointerOver()) {
                btnradio3.input.useHandCursor = true;
            }
            btnradio0.inputEnabled = true;
            btnradio1.inputEnabled = true;
            btnradio2.inputEnabled = true;
            btnradio3.inputEnabled = true;
        }
        else if (maxCheck == 4) {
            if (btnradio0.input.pointerOver()) {
                btnradio0.input.setDefaultCursor()
            }
            if (btnradio1.input.pointerOver()) {
                btnradio1.input.setDefaultCursor()
            }
            if (btnradio2.input.pointerOver()) {
                btnradio2.input.setDefaultCursor()
            }
            if (btnradio3.input.pointerOver()) {
                btnradio3.input.setDefaultCursor()
            }
            btnradio0.inputEnabled = false;
            btnradio1.inputEnabled = false;
            btnradio2.inputEnabled = false;
            btnradio3.inputEnabled = false;

            this.tween.start();
            this.tween2.start();
            this.tween3.start();
        }
       
        if (mcq == 0 && maxCheck == 4) {
            this.input0.setText(" 4");
            this.input1.setText(" 7");
            this.input2.setText(" 1");
            this.input3.setText(" 5");
        }
        switch(this.n) {
            case 0: 
            btnradio0.loadTexture('btnradiochecked',0); 
            btnradio1.loadTexture('btnradiounchecked',0); 
            btnradio2.loadTexture('btnradiounchecked',0); 
            btnradio3.loadTexture('btnradiounchecked',0); 
            break; 
            case 1: 
            btnradio0.loadTexture('btnradiounchecked',0);  
            btnradio1.loadTexture('btnradiochecked',0); 
            btnradio2.loadTexture('btnradiounchecked',0); 
            btnradio3.loadTexture('btnradiounchecked',0); 
            break;
            case 2: 
            btnradio0.loadTexture('btnradiounchecked',0); 
            btnradio1.loadTexture('btnradiounchecked',0); 
            btnradio2.loadTexture('btnradiochecked',0); 
            btnradio3.loadTexture('btnradiounchecked',0); 
            break;
            case 3: 
            btnradio0.loadTexture('btnradiounchecked',0); 
            btnradio1.loadTexture('btnradiounchecked',0); 
            btnradio2.loadTexture('btnradiounchecked',0); 
            btnradio3.loadTexture('btnradiochecked',0); 
            break;
            case 4: 
            btnradio0.loadTexture('btnradiounchecked',0); 
            btnradio1.loadTexture('btnradiounchecked',0); 
            btnradio2.loadTexture('btnradiounchecked',0); 
            btnradio3.loadTexture('btnradiounchecked',0); 
            break;
        }
    },

    shuffleArray: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        //While 
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //Swap value
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
};

function newQuestions(state, height0, height1, height2, height3){
    if (mcq == 0) {
    state.resistors.r = GameInstance.add.sprite(0,0,"r1");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 1) {
    state.resistors.r = GameInstance.add.sprite(0,0,"r2");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 2) {
    state.resistors.r = GameInstance.add.sprite(0,0,"r3");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 3) {
    state.resistors.r = GameInstance.add.sprite(0,0,"r4");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 4) {
    state.resistors.r = GameInstance.add.sprite(0,0,"r5");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}

    //Input
    state.input0 = GameInstance.add.inputField(-300,-60,{
        width:100,
        height:100,
        font: '70px Arial',
        max:0,
    });
    state.input1 = GameInstance.add.inputField(-180,-60,{
        width:100,
        height:100,
        font: '70px Arial',
        max:0,
    });
    state.input2 = GameInstance.add.inputField(-60,-60,{
        width:100,
        height:100,
        font: '70px Arial',
        max:0,
    });
    state.input3 = GameInstance.add.inputField(100,-60,{
        width:100,
        height:100,
        font: '70px Arial',
        max:0,
    });
    state.input0.events.onInputOver.add(function(){
        GameInstance.canvas.style.cursor ="default"
    }, this);
    state.input1.events.onInputOver.add(function(){
        GameInstance.canvas.style.cursor ="default"
    }, this);
    state.input2.events.onInputOver.add(function(){
        GameInstance.canvas.style.cursor ="default"
    }, this);
    state.input3.events.onInputOver.add(function(){
        GameInstance.canvas.style.cursor ="default"
    }, this);
    
    state.resistors.r.addChild(state.input0);
    state.resistors.r.addChild(state.input1);
    state.resistors.r.addChild(state.input2);
    state.resistors.r.addChild(state.input3);
    
    //Add the radiobuttons
    btnradio0 = GameInstance.add.button(607,height0,'btnradiounchecked'); //500
    btnradio1 = GameInstance.add.button(607,height1,'btnradiounchecked'); //580
    btnradio2 = GameInstance.add.button(607,height2,'btnradiounchecked'); //660
    btnradio3 = GameInstance.add.button(607,height3,'btnradiounchecked'); //740
    btnradio0.scale.setTo(0.35,0.35);
    btnradio1.scale.setTo(0.35,0.35);
    btnradio2.scale.setTo(0.35,0.35);
    btnradio3.scale.setTo(0.35,0.35);
    state.boolCheck = true;

    state.dial4 = GameInstance.add.sprite(btnradio0.x+260, btnradio0.y-20,'dial4');
    state.correctAnswer = GameInstance.add.text(state.dial4.x + 50, state.dial4.y + 10, "Correct Answer");
    state.correctAnswer.fontWeight = 'normal';
    ellipseGraphics = GameInstance.add.graphics(0,0);
    ellipseGraphics.lineStyle(1,0x32CD32,1);
    ellipseGraphics.drawEllipse(0,0,100,30);
    ellipseGraphics.position.setTo(btnradio0.x+150,btnradio0.y+15);
    ellipseGraphics.endFill();
    ellipseGraphics.alpha = 0;
    state.dial4.alpha = 0;
    state.correctAnswer.alpha = 0;
    state.tween = GameInstance.add.tween(state.dial4).to({alpha:1},1500,Phaser.Easing.Linear.None);
    state.tween2 = GameInstance.add.tween(state.correctAnswer).to({alpha:1},1500,Phaser.Easing.Linear.None);
    state.tween3 = GameInstance.add.tween(ellipseGraphics).to({alpha:1},1500,Phaser.Easing.Linear.None);
    //Add the ticks and cross
    state.tick = GameInstance.add.sprite(btnradio0.x - 100,btnradio0.y + 5,'tick0');
    state.tick.anchor.setTo(-2.35,0.2);
    state.tick.alpha = 0;
    state.cross = GameInstance.add.sprite(0,0,'cross0');
    state.cross.anchor.setTo(-2.35,0.15);
    state.cross.alpha = 0;

    //Add the btnCheck
    state.btnCheck = GameInstance.add.button(1100+100,820, 'button');
    state.btnCheck.scale.setTo(0.4,0.4);
    state.txtCheck = GameInstance.add.text(1120+100,825,"Check");
    state.btnTryAgain = GameInstance.add.button(1100+100,820, 'button');
    state.btnTryAgain.scale.setTo(0.5,0.4);
    state.txtTryAgain = GameInstance.add.text(1115+100,825,"Try again");
    state.txtTryAgain.visible = false;
    state.btnTryAgain.visible = false;
    state.btnCheck.alpha = 0.3;
    state.txtCheck.alpha = 0.3;
    
    if (mcq == 0) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setA[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().setA[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().setA[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().setA[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 1) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setB[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().setB[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().setB[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().setB[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 2) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setC[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().setC[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().setC[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().setC[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
}

function setText(){
    textBundle0 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle1 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle2 = [ "15 \u2126 \xB1 5%",  "350 \u2126 \xB1 5%",  "550 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%"];
    textBundle3 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle4 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
   
    
    return {setA:textBundle0, setB:textBundle1, setC:textBundle2};
}



