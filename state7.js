var mcq;
var maxCheck = 0 ;
var maxQns = 0;
demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var boolNext = false;
var boolTween = false;
var qnsNum = 1;
demo.state7 = function(){};
demo.state7.prototype = {resistors:{r2:null}, n: 0, qnsNum:[1],
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
        mcq = 12;
        this.n = 4;
        //Array of height (Randomized)
        this.randomHeight = [500,580,660,740]; //Shuffling of elements in an array.
        //this.shuffleArray(this.randomHeight);

        this.shuffleArray(demo.randomMCQ);
        mcq = demo.randomMCQ[0];
        demo.randomMCQ.splice(0,1);
        //Add restart and end
        this.btnRestart = GameInstance.add.button(950+100,820+50,'button');
        this.btnRestart.scale.setTo(0.5,0.5);
        this.txtRestart = GameInstance.add.text(970+110,830+50, 'Restart');
        this.btnEnd = GameInstance.add.button(1100+100,820+50,'button');
        this.btnEnd.scale.setTo(0.5,0.5);
        this.txtEnd = GameInstance.add.text(1120+125,830+50, 'End');
        btnNext1 = GameInstance.add.button(1100+60,820, 'button');
        btnNext1.scale.setTo(0.7,0.55);
        this.txtNext1 = GameInstance.add.text(1115+60,830,"Next Question");
        this.btnRestart.visible = false;
        this.txtRestart.visible = false;
        this.btnEnd.visible = false;
        this.txtEnd.visible = false;
        btnNext1.visible = false;
        this.txtNext1.visible = false;
        //
        this.btnRestart.events.onInputDown.add(function(){
                check = 0;
                qns = 0;
                total = 0;
                maxCheck = 0;
                maxQns = 0;
                boolTween = false;
                qnsNum = 1;
                demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                GameInstance.state.start("state7");
        },this);
        //
        this.btnEnd.events.onInputDown.add(function(){
            check = 0;
            qns = 0;
            total = 0;
            maxCheck = 0;
            maxQns = 0;
            boolTween = false;
            qnsNum = 1;
            demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            GameInstance.state.start("state1");
    },this);
        //Events next qns
        btnNext1.events.onInputDown.add(function(){
            maxCheck = 0;
            GameInstance.state.start('state7');
            maxQns++;
            qnsNum++;
            boolTween = false;
            },
            this);
        //Center 500,580,660,740
        if (mcq == 0 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);} 
        else if (mcq == 1 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 2 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 3 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 4 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 5 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 6 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 7 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 8 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 9 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 10 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 11 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 12 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 13 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
        else if (mcq == 14 && maxQns<5) {
        new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);}
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
        this.questionNum = GameInstance.add.text(GameInstance.world.centerX-540,GameInstance.world.centerY-335, "Question:\n" + qnsNum + " of 5");
        this.questionNum.align = 'center';

        coorindates(this);
        this.btnCheck.events.onInputDown.add(function(){
            if (this.n == 0) 
            {
                boolNext = true;
                boolTween = true;
                maxCheck = 4
                this.tick.alpha = 1;
                this.dial4.alpha = 1;
                this.correctAnswer.alpha = 1;
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
        //console.log("What is the value of maxCheck: " + maxCheck);
        //console.log("What is the value of maxQns: " + maxQns);
        console.log("What is the MCQ: " + mcq);
       
        this.text0.fontSize = 35;
        this.text0.position.setTo(607+50,580-90);
        this.text1.fontSize = 35;
        this.text1.position.setTo(607+50,575);
        this.text2.fontSize = 35;
        this.text2.position.setTo(607+50,580+75);
        this.text3.fontSize = 35;
        this.text3.position.setTo(607+50,580+90+65);
       
        if (maxQns == 4 && maxCheck == 4) {
            btnNext1.visible = false;
            this.txtNext1.visible = false;
            this.btnCheck.visible = false;
            this.txtCheck.visible = false;
            this.btnRestart.visible = false;//true
            this.txtRestart.visible = false;//true
            this.btnEnd.visible = true;
            this.txtEnd.visible = true;
        }
        
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
            btnradio0.inputEnabled = false;
            btnradio1.inputEnabled = false;
            btnradio2.inputEnabled = false;
            btnradio3.inputEnabled = false;
            this.input0.alpha = 1;
            this.input1.alpha = 1;
            this.input2.alpha = 1;
            this.input3.alpha = 1;
            this.tween.start();
            this.tween2.start();

            if (boolTween == false) {
            this.tween3.start(); }

            this.btnCheck.visible = false;
            this.txtCheck.visible = false;
            if (maxCheck == 4 && maxQns != 4){
            btnNext1.visible = true;
            this.txtNext1.visible = true}
        }
        //\xB1
        //\u2126
        if (mcq == 0 && maxCheck == 4) {
            this.input0.setText(" 2");
            this.input1.setText(" 2");
            this.input2.setText(" 1");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[0]);
        }
        if (mcq == 1 && maxCheck == 4) {
            this.input0.setText(" 1");
            this.input1.setText(" 0");
            this.input2.setText(" 10");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[1]);
        }
        if (mcq == 2 && maxCheck == 4) {
            this.input0.setText(" 2");
            this.input1.setText(" 2");
            this.input2.setText(" 10");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[2]);
        }
        if (mcq == 3 && maxCheck == 4) {
            this.input0.setText(" 3");
            this.input1.setText(" 3");
            this.input2.setText(" 10");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[3]);
        }
        if (mcq == 4 && maxCheck == 4) {
            this.input0.setText(" 4");
            this.input1.setText(" 7");
            this.input2.setText(" 10");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[4]);
        }
        if (mcq == 5 && maxCheck == 4) {
            this.input0.setText(" 1");
            this.input1.setText(" 0");
            this.input2.setText(" 100");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[5]);
        }
        if (mcq == 6 && maxCheck == 4) {
            this.input0.setText(" 3");
            this.input1.setText(" 3");
            this.input2.setText(" 100");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[6]);
        }
        if (mcq == 7 && maxCheck == 4) {
            this.input0.setText(" 4");
            this.input1.setText(" 7");
            this.input2.setText(" 100");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[7]);
        }
        if (mcq == 8 && maxCheck == 4) {
            this.input0.setText(" 6");
            this.input1.setText(" 8");
            this.input2.setText(" 100");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[8]);
        }
        if (mcq == 9 && maxCheck == 4) {
            this.input0.setText(" 1");
            this.input1.setText(" 5");
            this.input2.setText(" 1k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[9]);
        }
        if (mcq == 10 && maxCheck == 4) {
            this.input0.setText(" 4");
            this.input1.setText(" 7");
            this.input2.setText(" 1k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[10]);
        }
        if (mcq == 11 && maxCheck == 4) {
            this.input0.setText(" 6");
            this.input1.setText(" 8");
            this.input2.setText(" 1k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[11]);
        }
        if (mcq == 12 && maxCheck == 4) {
            this.input0.setText(" 1");
            this.input1.setText(" 5");
            this.input2.setText(" 10k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[12]);
        }
        if (mcq == 13 && maxCheck == 4) {
            this.input0.setText(" 2");
            this.input1.setText(" 2");
            this.input2.setText(" 10k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[13]);
        }
        if (mcq == 14 && maxCheck == 4) {
            this.input0.setText(" 6");
            this.input1.setText(" 8");
            this.input2.setText(" 10k");
            this.input3.setText(" \xB1"+"5%");
            this.correctAnswer.setText(setText().textAnswer[14]);
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
    console.log("This is preset 0");
    state.resistors.r = GameInstance.add.sprite(0,0,"image0");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 1) {
    console.log("This is preset 1");
    state.resistors.r = GameInstance.add.sprite(0,0,"image1");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 2) {
    console.log("This is preset 2");
    state.resistors.r = GameInstance.add.sprite(0,0,"image2");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 3) {
    console.log("This is preset 3");
    state.resistors.r = GameInstance.add.sprite(0,0,"image3");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 4) {
    console.log("This is preset 4");
    state.resistors.r = GameInstance.add.sprite(0,0,"image4");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 5) {
    console.log("This is preset 5");
    state.resistors.r = GameInstance.add.sprite(0,0,"image5");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 6) {
    console.log("This is preset 6");
    state.resistors.r = GameInstance.add.sprite(0,0,"image6");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 7) {
    console.log("This is preset 8");
    state.resistors.r = GameInstance.add.sprite(0,0,"image7");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 8) {
    console.log("This is preset 9");
    state.resistors.r = GameInstance.add.sprite(0,0,"image8");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 9) {
    console.log("This is preset 10");
    state.resistors.r = GameInstance.add.sprite(0,0,"image9");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 10) {
    console.log("This is preset 11");
    state.resistors.r = GameInstance.add.sprite(0,0,"image10");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 11) {
    console.log("This is preset 12");
    state.resistors.r = GameInstance.add.sprite(0,0,"image11");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 12) {
    console.log("This is preset 13");
    state.resistors.r = GameInstance.add.sprite(0,0,"image12");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 13) {
    console.log("This is preset 14");
    state.resistors.r = GameInstance.add.sprite(0,0,"image13");
    state.resistors.r.scale.setTo(0.35,0.35);
    state.resistors.r.anchor.setTo(0.5,0.5);
    state.resistors.r.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);}
    else if (mcq == 14) {
    console.log("This is preset 14");
    state.resistors.r = GameInstance.add.sprite(0,0,"image14");
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
        width:140,
        height:100,
        font: '70px Arial',
        max:0,
    });
    
    state.input0.alpha = 0;
    state.input1.alpha = 0;
    state.input2.alpha = 0;
    state.input3.alpha = 0;
    
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
    state.dial4.scale.setTo(1.1,1);
    state.correctAnswer.fontWeight = 'normal';
    ellipseGraphics = GameInstance.add.graphics(0,0);
    ellipseGraphics.lineStyle(4,0x32CD32,1);
    ellipseGraphics.drawEllipse(0,0,35,35);
    ellipseGraphics.endFill();
    ellipseGraphics.alpha = 0;
    state.dial4.alpha = 0;
    state.correctAnswer.alpha = 0;
    state.tween = GameInstance.add.tween(state.dial4).to({alpha:1},1500,Phaser.Easing.Linear.None);
    state.tween2 = GameInstance.add.tween(state.correctAnswer).to({alpha:1},1500,Phaser.Easing.Linear.None);
    state.tween3 = GameInstance.add.tween(ellipseGraphics).to({alpha:1},1500,Phaser.Easing.Linear.None);
    //Add the ticks and cross
    state.tick = GameInstance.add.sprite(btnradio0.x - 100,btnradio0.y + 5,'tick0');
    state.tick.anchor.setTo(-1.65,0.2);
    state.tick.alpha = 0;
    state.tick.scale.setTo(1.3,1.3);
    state.cross = GameInstance.add.sprite(0,0,'cross0');
    state.cross.anchor.setTo(-1.65,0.15);
    state.cross.alpha = 0;
    state.cross.scale.setTo(1.3,1.3);

    //Add the btnCheck
    state.btnCheck = GameInstance.add.button(1100+100,820, 'button');
    state.btnCheck.scale.setTo(0.4,0.4);
    state.txtCheck = GameInstance.add.text(1120+100,825,"Check");
    state.btnTryAgain = GameInstance.add.button(1100+100,820, 'button');
    state.btnTryAgain.scale.setTo(0.5,0.4);
    state.txtTryAgain = GameInstance.add.text(1115+100,825,"Try again");
    state.txtTryAgain.visible = false;
    state.btnTryAgain.visible = false;
    state.btnCheck.alpha = 0;
    state.txtCheck.alpha = 0;
    
    if (mcq == 0) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo( btnradio1.x,btnradio1.y);
    btnradio1.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80);
    state.dial4.position.setTo(this.tempX+100,this.tempY+60);
    state.correctAnswer.position.setTo(this.tempX+150,this.tempY+70);
    ellipseGraphics.position.setTo(this.tempX+70,this.tempY+90);
 
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set0[0]);
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().set0[1]);
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().set0[2]);
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().set0[3]);
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 1) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo( btnradio1.x,btnradio1.y);
    btnradio1.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80);
    state.dial4.position.setTo(this.tempX+110,this.tempY+60);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90);

    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set1[0]);
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().set1[1]);
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().set1[2]);
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().set1[3]);
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 2) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);

    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set2[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set2[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set2[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set2[3]);
    state.text3.fontWeight = 'normal'; }

     else if (mcq == 3) {
    this.tempX = btnradio0.position.x;
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo( btnradio0.x,btnradio0.y);
    btnradio1.position.setTo(btnradio1.x,btnradio1.y);
    state.tick.y= (this.tempY);
    state.dial4.position.setTo(this.tempX+110,this.tempY-20);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY-10);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+10);

    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set3[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set3[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set3[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set3[3]);
    state.text3.fontWeight = 'normal'; }
    
    else if (mcq == 4) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110+10,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160+10,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);


    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set4[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set4[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set4[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set4[3]);
    state.text3.fontWeight = 'normal'; }
    else if (mcq == 5) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo( btnradio1.x,btnradio1.y);
    btnradio1.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80);
    state.dial4.position.setTo(this.tempX+100,this.tempY+60);
    state.correctAnswer.position.setTo(this.tempX+150,this.tempY+70);
    ellipseGraphics.position.setTo(this.tempX+70,this.tempY+90);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set5[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set5[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set5[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set5[3]);
    state.text3.fontWeight = 'normal'; }
    else if (mcq == 6) {
     this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set6[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set6[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set6[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set6[3]);
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 7) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio3.x,btnradio3.y);
    btnradio3.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50+80);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30+80);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85+80);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set7[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set7[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set7[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set7[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 8) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110+10,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160+10,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set8[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set8[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set8[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set8[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 9) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110+10,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160+10,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set9[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set9[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set9[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set9[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 10) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110+10,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160+10,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set10[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set10[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set10[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set10[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 11) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio3.x,btnradio3.y);
    btnradio3.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50+80);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30+80);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85+80);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set11[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set11[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set11[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set11[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 12) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio2.x,btnradio2.y);
    btnradio2.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50);
    state.dial4.position.setTo(this.tempX+110+10,this.tempY+110+30);
    state.correctAnswer.position.setTo(this.tempX+160+10,this.tempY+70+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set12[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set12[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set12[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set12[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 13) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio3.x,btnradio3.y);
    btnradio3.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50+80);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30+80);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85+80);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set13[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set13[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set13[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set13[3]);
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 14) {
    this.tempX = btnradio0.position.x
    this.tempY = btnradio0.position.y
    btnradio0.position.setTo(btnradio3.x,btnradio3.y);
    btnradio3.position.setTo(this.tempX,this.tempY);
    state.tick.y= (this.tempY+80+30+50+80);
    state.dial4.position.setTo(this.tempX+110,this.tempY+110+30+80);
    state.correctAnswer.position.setTo(this.tempX+160,this.tempY+70+80+80);
    ellipseGraphics.position.setTo(this.tempX+80,this.tempY+90+85+80);
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set14[0]);
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set14[1]);
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set14[2]);
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set14[3]);
    state.text3.fontWeight = 'normal'; }
}

function setText(){
    textBundle0 = [ "20",  "22",  "33",  "220"];
    textBundle1 = [ "10",  "100",  "101",  "200"];
    textBundle2 = [ "110",  "111",  "220",  "221"];
    textBundle3 = [ "330",  "3.3k",  "440",  "4.4k"];
    textBundle4 = [ "46","47","470","4.6k"];
    textBundle5 = [ "10","1k","10k","1M"];
    textBundle6 = [ "3.3k","4.4k","33k","44k"];
    textBundle7 = [ "470","4.7k","46k","47k"];
    textBundle8 = [ "68","78","6.8k","7.8k"];
    textBundle9 = [ "5k","1.5k","15k","150k"];
    textBundle10 = [ "37","4.7k","47k","470k"];
    textBundle11 = ["68","78","6.7k","68k"];
    textBundle12 = [ "26","1.5k","150k","250k"];
    textBundle13 = [ "22","3.3k","33k","220k"];
    textBundle14 = [ "670","58k","68k","680k"];
    textAnswer = ["Value of this resistor\n= (22 x 1) \u2126 \xB1 5% \n=22 \u2126 \xB1 5%","Value of this resistor \n= (10 x 10) \u2126 \xB15% \n=100 \u2126 \xB1 5%","Value of this resistor \n= (22 x 10) \u2126 \xB1 5% \n=220 \u2126 \xB1 5%","Value of this resistor \n= (33 x 10) \u2126 \xB1 5% \n=330 \u2126 \xB1 5%","Value of this resistor \n= (47 x 10) \u2126 \xB1 5% \n=470 \u2126 \xB1 5%","Value of this resistor \n= (10 x 100) \u2126 \xB1 5% \n=1 k\u2126 \xB1 5%","Value of this resistor \n= (33 x 100) \u2126 \xB1 5% \n=3.3 k\u2126 \xB1 5%","Value of this resistor \n= (47 x 100) \u2126 \xB1 5% \n=4.7 k\u2126 \xB1 5%","Value of this resistor \n= (68 x 100)\u2126\xB15%\n=6.8 k\u2126\xB1 5%","Value of this resistor \n= (15 x 1k) \u2126 \xB1 5% \n=15k \u2126 \xB1 5%","Value of this resistor \n= (47 x 1k) \u2126 \xB1 5% \n=47 k\u2126 \xB1 5%","Value of this resistor \n = (68 x 1k) \u2126 \xB1 5%\n=68 k\u2126 \xB1 5%","Value of this resistor \n= (15 x 10k) \u2126 \xB1 5% \n=150 k\u2126 \xB1 5%","Value of this resistor \n= (22 x 10k) \u2126 \xB1 5% \n=22k \u2126 \xB1 5%","Value of this resistor \n= (68 x 1k) \u2126 \xB1 5% \n=680 k\u2126 \xB1 5%"]
   
    
    return {set0:textBundle0, set1:textBundle1, set2:textBundle2,set3:textBundle3, set4:textBundle4, 
            set5:textBundle5, set6:textBundle6, set7:textBundle7, set8:textBundle8,set9:textBundle9, 
            set10:textBundle10, set11:textBundle11,set12:textBundle12, set13:textBundle13, set14:textBundle14, 
            textAnswer:textAnswer
        };
}



