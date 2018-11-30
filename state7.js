var mcq;
var maxCheck = 0 ;
var maxQns = 0;
demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var boolNext = false;
var boolTween = false;
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
        mcq =0;
        this.n = 4;
        //Array of height (Randomized)
        this.randomHeight = [500,580,660,740]; //Shuffling of elements in an array.
        this.shuffleArray(this.randomHeight);

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
                this.qnsNum = 1;
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
            this.qnsNum = 1;
            demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            GameInstance.state.start("state1");
    },this);
        //Events next qns
        btnNext1.events.onInputDown.add(function(){
            maxCheck = 0;
            GameInstance.state.start('state7');
            maxQns++;
            this.qnsNum++;
            boolTween = false;
            },
            this);
        //Center
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
        this.questionNum = GameInstance.add.text(GameInstance.world.centerX-540,GameInstance.world.centerY-320, "MCQ: " + this.qnsNum + "/5");

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
        console.log("What is the value of maxCheck: " + maxCheck);
        console.log("What is the value of maxQns: " + maxQns);
        
        if (maxQns == 4 && maxCheck == 4) {
            btnNext1.visible = false;
            this.txtNext1.visible = false;
            this.btnCheck.visible = false;
            this.txtCheck.visible = false;
            this.btnRestart.visible = true;
            this.txtRestart.visible = true;
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
            this.input2.setText(" 1");
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
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set0[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().set0[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().set0[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().set0[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 1) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set1[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().set1[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().set1[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().set1[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 2) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set2[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set2[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set2[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set2[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

     else if (mcq == 3) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set3[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set3[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set3[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set3[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 4) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set4[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set4[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set4[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set4[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 5) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set5[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set5[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set5[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set5[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 6) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set6[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set6[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set6[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set6[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 7) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set7[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set7[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set7[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set7[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 8) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set8[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set8[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set8[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set8[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 9) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set9[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set9[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set9[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set9[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 10) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set10[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set10[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set10[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set10[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 11) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set11[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set11[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set11[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set11[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 12) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set12[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set12[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set12[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set12[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 13) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set13[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set13[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set13[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set13[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
     else if (mcq == 14) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().set14[0]);
    btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().set14[1]);
    btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().set14[2]);
    btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().set14[3]);
    btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
}

function setText(){
    textBundle0 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "44 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle1 = [ "10 \u2126 \xB1 5%",  "110 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle2 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "33 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%"];
    textBundle3 = [ "33 \u2126 \xB1 5%",  "330 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle4 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle5 = [ "10 \u2126 \xB1 5%",  "110 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle6 = [ "33 \u2126 \xB1 5%",  "330 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle7 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "550 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%"];
    textBundle8 = [ "68 \u2126 \xB1 5%",  "680 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle9 = [ "15 \u2126 \xB1 5%",  "150 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle10 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle11 = [ "68 \u2126 \xB1 5%",  "680 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle12 = [ "15 \u2126 \xB1 5%",  "150 \u2126 \xB1 5%",  "550 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%"];
    textBundle13 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle14 = [ "68 \u2126 \xB1 5%",  "680 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textAnswer = ["Resistance Value: \n(22 x 1) \u2126 \xB1 5% \n=47 \u2126 \xB15%","Resistance Value: \n(10 x 10) \u2126 \xB15% \n=100 \u2126 \xB1 5%","Resistance Value: \n(22 x 10) \u2126 \xB1 5% \n=220 \u2126 \xB1 5%","Resistance Value: \n(33 x 10) \u2126 \xB15% \n=330 \u2126 \xB1 5%","Resistance Value: \n(47 x 10) \u2126 \xB1 5% \n=470 \u2126 \xB1 5%","Resistance Value: \n(10 x 100) \u2126 \xB15% \n=1000 \u2126 \xB15%","Resistance Value: \n(33 x 100) \u2126 \xB1 5% \n=3300 \u2126 \xB1 5%","Resistance Value: \n(47 x 100) \u2126 \xB1 5% \n=4700 \u2126 \xB1 5%","Resistance Value: \n(68 x 100)\u2126\xB15%\n=6800\u2126\xB15%","Resistance Value: \n(15 x 1k) \u2126 \xB1 5% \n=15k \u2126 \xB1 5%","Resistance Value: \n(47 x 1k) \u2126 \xB1 5% \n=47k \u2126 \xB1 5%","Resistance Value: \n(68 x 1k) \u2126 \xB1 5%\n=68k \u2126 \xB1 5%","Resistance Value: \n(15 x 10k) \u2126 \xB1 5% \n=15k \u2126 \xB1 5%","Resistance Value: \n(22 x 10k) \u2126 \xB1 5% \n=22k \u2126 \xB1 5%","Resistance Value: \n(68 x 1k) \u2126 \xB1 5% \n=68k \u2126 \xB1 5%"]
   
    
    return {set0:textBundle0, set1:textBundle1, set2:textBundle2,set3:textBundle3, set4:textBundle4, 
            set5:textBundle5, set6:textBundle6, set7:textBundle7, set8:textBundle8,set9:textBundle9, 
            set10:textBundle10, set11:textBundle11,set12:textBundle12, set13:textBundle13, set14:textBundle14, 
            textAnswer:textAnswer
        };
}



