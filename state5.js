var check = 0;
var qns = 0;
var asd = 0xA0522D
var timer;
var total = 0;
demo.state5 = function () { };
/**
 * @type {Phaser.State}
 */

demo.state5.prototype = {
    resistors: {}, firstTable: {}, secondTable: {}, thirdTable: {}, forthTable: {}, bandNum: "1st", bandColor: "brown.", word1: null, word2: null, btnLearnExample: null, btnPractice: null,
    preload: function () { loadAssets(this); },
    create: function () {
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state5');
        addChangeStateEventListers();
        //Background
        background(this);
        //Home
        home(this);
        //Center
        this.resistors.r2 = GameInstance.add.sprite(0, 0, 'r3');
        this.resistors.r2.scale.setTo(0.35, 0.35);
        this.resistors.r2.anchor.setTo(0.5, 0.5);
        this.resistors.r2.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY / 1.4);
        this.bandNum = "1st";
        this.bandColor = "brown."
        //Create the btnLearnExample and btnPractice
        this.btnLearnExample = GameInstance.add.button(GameInstance.world.centerX + 250, GameInstance.world.centerY + 350, 'button');
        this.btnLearnExample.scale.setTo(0.6, 0.6);
        this.txtLearnExample = GameInstance.add.text(25, 15, "Learn \nanother example.");
        this.txtLearnExample.align = 'center';
        this.txtLearnExample.fontSize = 30;
        this.btnLearnExample.addChild(this.txtLearnExample);
        this.btnPractice = GameInstance.add.button(GameInstance.world.centerX + 450, GameInstance.world.centerY + 350, 'button');
        this.btnPractice.scale.setTo(0.6, 0.6);
        this.txtPractice = GameInstance.add.text(80, 30, "Practice");
        this.txtPractice.align = 'center';
        this.txtPractice.fontSize = 30;
        this.btnPractice.addChild(this.txtPractice);
        this.btnLearnExample.visible = false;
        this.txtLearnExample.visible = false;
        this.btnPractice.visible = false;
        this.txtPractice.visible = false;
        this.btnLearnExample.events.onInputDown.add(function () { qns = 0; check = 0; GameInstance.state.start('state' + this.randomNumbers()); }, this);
        
        
        
        /**
         * @type {PhaserInput.InputField}
         */
        //Input
        input = GameInstance.add.inputField(655, 336, {
            width: 30,
            height: 30,
            font: '23px Arial',
            max: '9',
            type: PhaserInput.InputType.number
        });
        
        input2 = GameInstance.add.inputField(690, 336, {
            width: 30,
            height: 30,
            font: '23px Arial',
            max: '9',
            type: PhaserInput.InputType.number
        });
        input2.visible = false;

        input3 = GameInstance.add.inputField(725, 336, {
            width: 40,
            height: 30,
            font: '23px Arial',
            max: '4'
        });
        input3.visible = false;


        input4 = GameInstance.add.inputField(780, 336, {
            width: 50,
            height: 30,
            font: '23px Arial',
            max: '2',


        });
        input4.visible = false;
        input4.setText("\xB1");
        //Answers for the third color code onwards
        this.word1 = GameInstance.add.text(GameInstance.world.centerX + 100, GameInstance.world.centerY - 50, "The resistance of this \nresistor is:");
        this.word1.fontWeight = 'normal';
        this.word2 = GameInstance.add.text(GameInstance.world.centerX + 100, GameInstance.world.centerY + 50, "15 x 100 \n\n= 1500 \u2126 \n= 1.5 k\u2126");
        this.word1.alpha = 0;
        this.word2.alpha = 0;


        this.txtAnswers = ["This is the " + this.bandNum + " digit of the \nresistance value.", "qwe", "Colour code for '2' is red. \nThis band is " + this.bandColor, "Colour code for '3' is orange. \nThis band is " + this.bandColor, "Colour code for '4' is yellow. \nThis band is " + this.bandColor, "Colour code for '5' is green. \nThis band is " + this.bandColor, "Colour code for '6' is blue.\n This band is " + this.bandColor, "Colour code for '7' is purple.\n This band is " + this.bandColor, "Colour code for '8' is grey.\n This band is " + this.bandColor, "Colour code for '9' is white.\n This band is " + this.bandColor, "Colour code for '0' is black.\n This band is " + this.bandColor];


        //btnCheck
        btnCheck = GameInstance.add.button(GameInstance.world.centerX + 100, GameInstance.world.centerY, 'box0');
        txtCheck = GameInstance.add.text(GameInstance.world.centerX + 110, GameInstance.world.centerY + 5, "Check");
        btnCheck.alpha = 0.5;
        txtCheck.alpha = 0.5

        btnCheck.events.onInputDown.add(function () {
            console.log(input);
            console.log("btnCheck event triggered.");
            this.tempbool = false;
            linegraphics.alpha = 0;
            linegraphics1.alpha = 0;
            linegraphics2.alpha = 0;
            this.tick0 = GameInstance.add.sprite(-25, -60, 'tick0');
            this.cross0 = GameInstance.add.sprite(-25, -60, 'cross0');
            this.tick1 = GameInstance.add.sprite(160, -80, 'tick0');
            this.cross1 = GameInstance.add.sprite(160, -80, 'cross0');

            //
            this.dial2 = GameInstance.add.sprite(GameInstance.world.centerX - 80, GameInstance.world.centerY - 100, 'dial2');
            this.gameAnswersUpdated2 = GameInstance.add.text(115, 70, "This is the 1st digit of the \nresistance value.");
            this.gameAnswersUpdated2.addFontWeight ('normal',0);
            this.gameAnswersUpdated2.addFontWeight('bold',11);
            this.gameAnswersUpdated2.addFontWeight('normal',21);
            this.dial2.addChild(this.gameAnswersUpdated2);
            this.dial2.alpha = 0;
            //
            this.dial3 = GameInstance.add.sprite(GameInstance.world.centerX - 400, GameInstance.world.centerY - 90, 'dial3');
            this.tick3 = GameInstance.add.sprite(470, 0, 'tick0');
            this.cross3 = GameInstance.add.sprite(470, 0, 'cross0');
            this.gameAnswersUpdated3 = GameInstance.add.text(55, 70, "This band represents the tolerance of the resistor. When \nresistors are made, the actual resistance value may vary \nfrom its expected value. \nThe tolerance value of 5% indicates that the resistance can \nvary by 5% and is included in the resistance value.");
            this.gameAnswersUpdated3.fontWeight = 'normal';
            this.dial3.addChild(this.gameAnswersUpdated3);
            this.dial3.addChild(this.tick3);
            this.dial3.addChild(this.cross3);
            this.dial3.alpha = 0;
            //First two color bands
            this.dial0 = GameInstance.add.sprite(0, 0, 'dial0');
            this.dial0.anchor.setTo(0.5, 0.5);
            this.dial0.position.setTo(GameInstance.world.centerX - 50, GameInstance.world.centerY - 30);
            this.dial0.alpha = 0;

            this.gameAnswers = [];
            for (var i = 0; i < this.txtAnswers.length; i++) {
                this.gameAnswers[i] = GameInstance.add.text(-115, -10, this.txtAnswers[i]);
                this.gameAnswers[i].fontSize = 20;
                this.gameAnswers[i].fontWeight = 'normal'
                if (i == 0) {
                    this.gameAnswers[i].addFontWeight('normal', 0);
                    this.gameAnswers[i].addFontWeight('bold', 11);
                    this.gameAnswers[i].addFontWeight('normal', 21);
                }
                //  this.dial0.addChild(this.gameAnswers[i]);
                this.dial0.addChild(this.gameAnswers[i]);
            }

            this.dial0.addChild(this.tick0);
            this.dial0.addChild(this.cross0);
            //End
            //After first two color bands
            this.dial1 = GameInstance.add.sprite(0, 0, 'dial1');
            this.dial1.anchor.setTo(0.5, 0.5);
            this.dial1.position.setTo(GameInstance.world.centerX - 160, GameInstance.world.centerY - 10);
            this.dial1.alpha = 0;
            this.gameAnswersUpdated = GameInstance.add.text(-180, -12, "This band represents the multiplier value. \nThat is, the first 2 digits of the resistance \nvalue should be multiplied by 100.");
            this.dial1.addChild(this.gameAnswersUpdated);
            this.gameAnswersUpdated.fontSize = 20;
            this.gameAnswersUpdated.fontWeight = 'normal'
            this.cross1.alpha = 0;
            this.dial1.addChild(this.tick1);
            this.dial1.addChild(this.cross1);
            //End
            //Depending on the questions, the value will differ.
            if (qns == 0) {
                console.log("Dont go here");
                this.value = input.value;
            }
            else if (qns == 1) {
                console.log("This is the green band..");
                this.value = input2.value;
            }
            else if (qns == 2) {
                this.value = input3.value;
            }
            else if (qns == 3) {
                this.value = input4.value;
            }
            this.nn = new demo.state5.answers(this.value, this.tick0, this.cross0, this.dial0, this.gameAnswers, this.txtAnswers.length, this.t0, this.addbtnNext, this.addbtnNext2, this.dial1, this.gameAnswersUpdated, this.t1, this.word1, this.word2, this.dial2, this.t3, this.dial3, this.cross3, this.tick3);

            //btnCheck
            if (check == 1) {
                btnTryAgain.visible = true;
                txtTryAgain.visible = true;
                this.t0.alpha = 0;
                this.t1.alpha = 0;
            }
            if (check == 2) {
                btnCheck.visible = false;
                txtCheck.visible = false;
                input.cursor.alpha = 0;

                //Now if check reached 2, it will show btnAnswer
                btnShowAnswer.visible = true;
                txtShowAnswer.visible = true;
            }



        }, this);

        //Create the btnShowAnswer
        btnShowAnswer = GameInstance.add.button(GameInstance.world.centerX + 100, GameInstance.world.centerY, 'box0');
        btnShowAnswer.scale.setTo(1.9, 1)
        txtShowAnswer = GameInstance.add.text(GameInstance.world.centerX + 110, GameInstance.world.centerY + 5, "Show Answer");
        btnShowAnswer.visible = false;
        txtShowAnswer.visible = false;

        //Creating timer for tweening
        boolTimer = false;        
        timer = GameInstance.time.create(false);
        timer.loop(2000,function(){total++},this);
        //timer.start();
        this.btnPractice.events.onInputDown.add(function(){GameInstance.state.start('state7');},this);

        //Create the question title
        this.questionTitle = GameInstance.add.text(GameInstance.world.centerX - 300, GameInstance.world.centerY - 350, "What is the value of the 1st band?");
        this.questionTitle.fontSize = 40;
        this.questionTitle.fontWeight = 'normal';
        btnShowAnswer.events.onInputDown.add(function () {
            console.log("btnShowAnser", this)
            console.log("Did anyone wanted to showanswer?");
            btnShowAnswer.visible = false;
            txtShowAnswer.visible = false;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            for (var i = 0; i < this.txtAnswers.length; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            if (qns == 0) {
                //demo.state5.answers(1, this.tick0, this.cross0, this.dial0, this.gameAnswers, this.txtAnswers, this.t0, this.addbtnNext, this.addbtnNext2);
                this.t0.alpha = 1;
                this.dial0.alpha = 0;
                this.dial2.alpha = 1;
                linegraphics.alpha = 1;
                input.setText("");
                //Start the timing and tweening
                tween00.start();
                timer.start();
                //
                ellipsegraphics.alpha = 1;
                input.endFocus();


            }
            else if (qns == 1) {
                this.cross0.alpha = 0;
                var bandColor = "green."
                var bandNum = "2nd";
                var answer = getAnswers(bandNum, bandColor).answer;
                this.gameAnswers[0].setText(answer);
                this.gameAnswers[0].alpha = 0;
                this.dial0.alpha = 0;
                this.dial2.position.setTo(GameInstance.world.centerX - 50, GameInstance.world.centerY - 100);
                this.gameAnswersUpdated2.setText("This is the 2nd digit of the \nresistance value");
                this.dial2.alpha = 1;
                ellipsegraphics.lineStyle(5, 0x32CD32);
                ellipsegraphics.drawEllipse(100,100,100,30);
                ellipsegraphics.position.setTo(580,610);
                ellipsegraphics.alpha = 1;
                input2.setText(" ");
                input2.endFocus();
                input2.width = 1;
                tween11.start();
                timer.start();
                timer.resume();
                total = 0;
                
                //qns = 2;
            }
            else if (qns == 2) {
                this.dial0.alpha = 0;
                this.dial1.alpha = 1;
                this.tick1.alpha = 0;
                this.t1.position.setTo(GameInstance.world.centerX + 180, GameInstance.world.centerY + 120);
                this.word1.position.setTo(GameInstance.world.centerX + 300, GameInstance.world.centerY - 40);
                this.word2.position.setTo(GameInstance.world.centerX + 300, GameInstance.world.centerY + 50);
                this.word1.alpha = 1;
                this.word2.alpha = 1;
                ellipsegraphics.lineStyle(5, 0xFF0000);
                ellipsegraphics.drawEllipse(100,100,100,30);
                ellipsegraphics.position.setTo(830,440);
                ellipsegraphics.alpha = 1;
                input3.setText("");
                input3.endFocus();
                tween22.start();
                input3.width = 1;
                timer.start();
                timer.resume();
                total = 0;
            }
            else if (qns == 3) {
                this.t3.alpha = 1;
                this.t3.position.setTo(GameInstance.world.centerX + 400, GameInstance.world.centerY - 100); 
                this.dial0.alpha = 0;
                this.dial3.alpha = 1;
                this.cross3.alpha = 0;
                this.tick3.alpha = 0;
                qns = 4;
                tween33.start();
                input4.setText("\xB1" + "");
                input4.endFocus();
            }
        }, this);


        //Adding the next question for the color banks.
        boolEllipse1 = false;
        boolEllipse2 = false;
        addBtnNext(this);
        this.addbtnNext.visible = false;
        this.addbtnNext2.visible = false;
        this.addbtnNext.events.onInputDown.add(function () {
            console.log(this);
            
            if (qns == 0 && boolTimer == true) {
                ellipsegraphics.alpha = 0;
                qns = 1;
                this.dial0.alpha = 0;
                this.t0.alpha = 1;
                this.dial2.alpha = 0;
                linegraphics.alpha = 0
                btnCheck.visible = true;
                txtCheck.visible = true;
                this.addbtnNext.visible = false;
                this.addbtnNext2.visible = false;
                //input.setText(" ");
                input.endFocus();
                boolTimer = false;
            }
            if (qns == 1) {
                if (boolEllipse1 == true) {
                ellipsegraphics.alpha = 0;}
                
                this.questionTitle.setText("What is the value of the 2nd band?");
                this.t0.position.setTo(GameInstance.world.centerX - 70, GameInstance.world.centerY + 200);
                linegraphics1.alpha = 1;
                input2.visible = true;
                check = 0;
            }
            else if (qns == 2) {
                ellipsegraphics.alpha = 0;
                input2.setText(" 5");
                input2.endFocus()

                this.questionTitle.setText("What is the value of the 3rd band?");
                this.dial2.alpha = 0;
                input3.visible = true;
                this.dial0.alpha = 0;
                this.t0.alpha = 0;
                this.t1.alpha = 1;
                this.addbtnNext.visible = false;
                this.addbtnNext2.visible = false;
                btnCheck.visible = true;
                txtCheck.visible = true;
                check = 0;
                linegraphics2.alpha = 1;
            }
            else if (qns == 3) {
                if (boolEllipse2 == true) {
                ellipsegraphics.alpha = 0;}
                this.questionTitle.setText("What is the value of the 4th band?");
                check = 0;
                this.t1.alpha = 0;
                this.word1.alpha = 0;
                this.word2.alpha = 0;
                this.dial1.alpha = 0;
                linegraphics2.alpha = 0;
                input4.visible = true;
                btnCheck.visible = true;
                txtCheck.visible = true;
                btnCheck.position.setTo(GameInstance.world.centerX + 480, GameInstance.world.centerY + 55);
                txtCheck.position.setTo(GameInstance.world.centerX + 490, GameInstance.world.centerY + 60);
                btnTryAgain.position.setTo(GameInstance.world.centerX + 480, GameInstance.world.centerY + 55);
                txtTryAgain.position.setTo(GameInstance.world.centerX + 490, GameInstance.world.centerY + 60);
                btnShowAnswer.position.setTo(GameInstance.world.centerX + 480, GameInstance.world.centerY + 55);
                txtShowAnswer.position.setTo(GameInstance.world.centerX + 490, GameInstance.world.centerY + 60);
                this.addbtnNext.visible = false;
                this.addbtnNext2.visible = false;
                this.t3.alpha = 1;
                linegraphics3.alpha = 1;
                
            }
            else if (qns == 4) {
                ellipsegraphics.alpha = 0;
                this.questionTitle.setText("What is the resistance of this resistor?");
                this.dial3.alpha = 0;
                this.finalanswer = GameInstance.add.text(GameInstance.world.centerX - 260, GameInstance.world.centerY - 50, "Resistance is 1.5k \xB1 \u2126 5% \n\nThis means that the actual value of the resistor \ncould be between 1.43 k\u2126 and 1.56 k\u2126.")
                this.finalanswer.addFontWeight("normal", 0)
                this.finalanswer.addFontWeight("bold", 14)
                this.finalanswer.addFontWeight("normal", 25)
                this.finalanswer1 = GameInstance.add.text(GameInstance.world.centerX - 500, GameInstance.world.centerY + 200, "1.5 k\u2126");
                this.finalanswer2 = GameInstance.add.text(GameInstance.world.centerX - 350, GameInstance.world.centerY + 150, "-5%");
                this.finalanswer3 = GameInstance.add.text(GameInstance.world.centerX - 350, GameInstance.world.centerY + 250, "+5%");
                this.finalanswer5 = GameInstance.add.text(GameInstance.world.centerX - 100, GameInstance.world.centerY + 140, "0.95 x 1.5 = 1.43 k\u2126 \n\n\n1.05 x 1.5 = 1.56 k\u2126");
                this.final = GameInstance.add.sprite(0, 0, "final");
                this.final.position.setTo(0, 150);

                this.addbtnNext.visible = false;
                this.addbtnNext2.visible = false;

                this.btnLearnExample.visible = true;
                this.txtLearnExample.visible = true;
                this.btnPractice.visible = true;
                this.txtPractice.visible = true;
            }

        }, this);
        //Create the btnTryAgain and set visible to false
        btnTryAgain = GameInstance.add.button(GameInstance.world.centerX + 100, GameInstance.world.centerY, 'box0');
        btnTryAgain.scale.setTo(1.4, 1)
        txtTryAgain = GameInstance.add.text(GameInstance.world.centerX + 110, GameInstance.world.centerY + 5, "Try Again");
        btnTryAgain.visible = false;
        txtTryAgain.visible = false;
        //Destroy btnTryAgain
        btnTryAgain.events.onInputDown.add(function () {
            btnTryAgain.visible = false;
            txtTryAgain.visible = false;
            this.dial0.alpha = 0;
            if (qns == 0) {
                linegraphics.alpha = 1;
                this.t0.alpha = 1;
            }
            else if (qns == 1) {
                linegraphics1.alpha = 1;
                this.t0.alpha = 1;
            }
            else if (qns == 2) {
                this.t1.alpha = 1;
            }
            else if (qns == 3) {
                this.t3.alpha = 1;
                linegraphics3.alpha = 1;
            }
        }

            , this);

        //Grouping (Addchild)
        this.t0 = GameInstance.add.sprite(0, 0, 't0'); //Add table sprite
        this.t0.position.setTo(GameInstance.world.centerX - 200, GameInstance.world.centerY + 200); //Setting the position according the world
        this.t0.anchor.setTo(0.5, 0.5); //Make it center.

        //Phaser.text(Table texts)
        this.firstTable.black = GameInstance.add.text(-80, -150, "0 black");
        this.firstTable.black.addColor('#ffffff', 0);
        this.firstTable.black.fontSize = 20;
        this.firstTable.black.fontWeight = 'normal';

        this.firstTable.brown = GameInstance.add.text(-80, -120, "1 brown");
        this.firstTable.brown.addColor('#ffffff', 0);
        this.firstTable.brown.fontSize = 20;
        this.firstTable.brown.fontWeight = 'normal';

        this.firstTable.red = GameInstance.add.text(-80, -90, "2 red");
        this.firstTable.red.addColor('#ffffff', 0);
        this.firstTable.red.fontSize = 20;
        this.firstTable.red.fontWeight = 'normal';

        this.firstTable.orange = GameInstance.add.text(-80, -60, "3 orange");
        this.firstTable.orange.addColor('#ffffff', 0);
        this.firstTable.orange.fontSize = 20;
        this.firstTable.orange.fontWeight = 'normal';

        this.firstTable.yellow = GameInstance.add.text(-80, -30, "4 yellow");
        this.firstTable.yellow.addColor('#000000', 0);
        this.firstTable.yellow.fontSize = 20;
        this.firstTable.yellow.fontWeight = 'normal';

        this.firstTable.green = GameInstance.add.text(-80, 0, "5 green");
        this.firstTable.green.addColor('#ffffff', 0);
        this.firstTable.green.fontSize = 20;
        this.firstTable.green.fontWeight = 'normal';

        this.firstTable.blue = GameInstance.add.text(-80, 30, "6 blue");
        this.firstTable.blue.addColor('#ffffff', 0);
        this.firstTable.blue.fontSize = 20;
        this.firstTable.blue.fontWeight = 'normal';

        this.firstTable.purple = GameInstance.add.text(-80, 60, "7 purple");
        this.firstTable.purple.addColor('#ffffff', 0);
        this.firstTable.purple.fontSize = 20;
        this.firstTable.purple.fontWeight = 'normal';

        this.firstTable.grey = GameInstance.add.text(-80, 90, "8 grey");
        this.firstTable.grey.addColor('#000000', 0);
        this.firstTable.grey.fontSize = 20;
        this.firstTable.grey.fontWeight = 'normal';

        this.firstTable.white = GameInstance.add.text(-80, 125, "9 white");
        this.firstTable.white.addColor('#000000', 0);
        this.firstTable.white.fontSize = 20;
        this.firstTable.white.fontWeight = 'normal';

        this.t0.addChild(this.firstTable.black);
        this.t0.addChild(this.firstTable.brown);
        this.t0.addChild(this.firstTable.red);
        this.t0.addChild(this.firstTable.orange);
        this.t0.addChild(this.firstTable.yellow);
        this.t0.addChild(this.firstTable.green);
        this.t0.addChild(this.firstTable.blue);
        this.t0.addChild(this.firstTable.purple);
        this.t0.addChild(this.firstTable.grey);
        this.t0.addChild(this.firstTable.white);
        //end
        //Grouping for the 2nd table
        this.t1 = GameInstance.add.sprite(0, 0, 't1'); //Add table sprite
        this.t1.position.setTo(GameInstance.world.centerX - 25, GameInstance.world.centerY + 200); //Setting the position according the world
        this.t1.anchor.setTo(0.5, 0.5); //Make it center.

        //Phaser.text(Table texts)
        this.secondTable.black = GameInstance.add.text(-80, -150, "1 black");
        this.secondTable.black.addColor('#ffffff', 0);
        this.secondTable.black.fontSize = 20;
        this.secondTable.black.fontWeight = 'normal';

        this.secondTable.brown = GameInstance.add.text(-80, -120, "10 brown");
        this.secondTable.brown.addColor('#ffffff', 0);
        this.secondTable.brown.fontSize = 20;
        this.secondTable.brown.fontWeight = 'normal';

        this.secondTable.red = GameInstance.add.text(-80, -90, "100 red");
        this.secondTable.red.addColor('#ffffff', 0);
        this.secondTable.red.fontSize = 20;
        this.secondTable.red.fontWeight = 'normal';

        this.secondTable.orange = GameInstance.add.text(-80, -60, "1k orange");
        this.secondTable.orange.addColor('#ffffff', 0);
        this.secondTable.orange.fontSize = 20;
        this.secondTable.orange.fontWeight = 'normal';

        this.secondTable.yellow = GameInstance.add.text(-80, -30, "10k yellow");
        this.secondTable.yellow.addColor('#ffffff', 0);
        this.secondTable.yellow.fontSize = 20;
        this.secondTable.yellow.fontWeight = 'normal';

        this.secondTable.green = GameInstance.add.text(-80, 0, "100k green");
        this.secondTable.green.addColor('#ffffff', 0);
        this.secondTable.green.fontSize = 20;
        this.secondTable.green.fontWeight = 'normal';

        this.secondTable.blue = GameInstance.add.text(-80, 30, "1M blue");
        this.secondTable.blue.addColor('#ffffff', 0);
        this.secondTable.blue.fontSize = 20;
        this.secondTable.blue.fontWeight = 'normal';

        this.secondTable.purple = GameInstance.add.text(-80, 60, "10M purple");
        this.secondTable.purple.addColor('#ffffff', 0);
        this.secondTable.purple.fontSize = 20;
        this.secondTable.purple.fontWeight = 'normal';

        this.secondTable.grey = GameInstance.add.text(-80, 90, "0.01 silver");
        this.secondTable.grey.addColor('#000000', 0);
        this.secondTable.grey.fontSize = 20;
        this.secondTable.grey.fontWeight = 'normal';

        this.secondTable.white = GameInstance.add.text(-80, 125, "0.1 gold");
        this.secondTable.white.addColor('#000000', 0);
        this.secondTable.white.fontSize = 20;
        this.secondTable.white.fontWeight = 'normal';

        this.t1.addChild(this.secondTable.black);
        this.t1.addChild(this.secondTable.brown);
        this.t1.addChild(this.secondTable.red);
        this.t1.addChild(this.secondTable.orange);
        this.t1.addChild(this.secondTable.yellow);
        this.t1.addChild(this.secondTable.green);
        this.t1.addChild(this.secondTable.blue);
        this.t1.addChild(this.secondTable.purple);
        this.t1.addChild(this.secondTable.grey);
        this.t1.addChild(this.secondTable.white);
        this.t1.alpha = 0;
        //end
        //Grouping for the 4rd table
        this.t3 = GameInstance.add.sprite(0, 0, 't2'); //Add table sprite
        this.t3.position.setTo(GameInstance.world.centerX + 360, GameInstance.world.centerY + 75); //Setting the position according the world
        this.t3.anchor.setTo(0.5, 0.5); //Make it center.

        this.forthTable.red = GameInstance.add.text(-80, -25, "\xB1 2% red");
        this.forthTable.red.addColor('#ffffff', 0);
        this.forthTable.red.fontSize = 20;
        this.forthTable.red.fontWeight = 'normal';

        this.forthTable.gold = GameInstance.add.text(-80, 5, "\xB1 5% gold");
        this.forthTable.gold.addColor('#000000', 0);
        this.forthTable.gold.fontSize = 20;
        this.forthTable.gold.fontWeight = 'normal';

        this.t3.addChild(this.forthTable.red);
        this.t3.addChild(this.forthTable.gold);
        this.t3.alpha = 0;
        //end
        //linegraphics for the first band.
        linegraphics = GameInstance.add.graphics(0, 0);
        linegraphics.lineStyle(1, 0x000000, 1);
        linegraphics.moveTo(536, 540);
        linegraphics.lineTo(680, 410);
        linegraphics.endFill();

        //linegraphics for the second band.
        linegraphics1 = GameInstance.add.graphics(0, 0);
        linegraphics1.lineStyle(1, 0x000000, 1);
        linegraphics1.moveTo(680, 540);
        linegraphics1.lineTo(720, 410);
        linegraphics1.endFill();
        linegraphics1.alpha = 0;
      

        //linegraphics for the third band.
        linegraphics2 = GameInstance.add.graphics(0, 0);
        linegraphics2.lineStyle(1, 0x000000, 1);
        linegraphics2.moveTo(730, 540);
        linegraphics2.lineTo(750, 410);
        linegraphics2.endFill();
        linegraphics2.alpha = 0;

        //linegraphics for the forth band.
        linegraphics3 = GameInstance.add.graphics(0, 0);
        linegraphics3.lineStyle(1, 0x000000, 1);
        linegraphics3.moveTo(1110, 540);
        linegraphics3.lineTo(810, 410);
        linegraphics3.endFill();
        linegraphics3.alpha = 0;
        
        //ellipsegraphics
        ellipsegraphics = GameInstance.add.graphics(0,0);
        ellipsegraphics.lineStyle(5, asd);
        ellipsegraphics.drawEllipse(100,100,100,30);
        ellipsegraphics.endFill();
        ellipsegraphics.position.setTo(450,490);
        ellipsegraphics.alpha = 0;

        coorindates(this);
        //Adding the numbers for tweening
        this.answers00 = GameInstance.add.text(470,579,'1');
        this.answers00.addColor("#000000",0);
        this.answers00.fontSize = 22;
        this.answers00.fontWeight = "normal";
        this.answers00.alpha = 0;
        tween00 = GameInstance.add.tween(this.answers00).to({alpha: 1},1500,Phaser.Easing.Linear.None).to({x:665, y:338},1500,Phaser.Easing.Linear.None);

        this.answers11 = GameInstance.add.text(600,699,'5');
        this.answers11.addColor("#000000",0);
        this.answers11.fontSize = 22;
        this.answers11.fontWeight = "normal";
        this.answers11.alpha = 0;
        tween11 = GameInstance.add.tween(this.answers11).to({alpha: 1},1500,Phaser.Easing.Linear.None).to({x:698, y:338},1500,Phaser.Easing.Linear.None);

        this.answers22 = GameInstance.add.text(851,528,'100');
        this.answers22.addColor("#000000",0);
        this.answers22.fontSize = 22;
        this.answers22.fontWeight = "normal";
        this.answers22.alpha = 0;
        tween22 = GameInstance.add.tween(this.answers22).to({alpha: 1},1500,Phaser.Easing.Linear.None).to({x:725, y:338},1500,Phaser.Easing.Linear.None);

        this.answers33 = GameInstance.add.text(1087,401,'5%');
        this.answers33.addColor("#000000",0);
        this.answers33.fontSize = 22;
        this.answers33.fontWeight = "normal";
        this.answers33.alpha = 0;
        tween33 = GameInstance.add.tween(this.answers33).to({alpha: 1},750,Phaser.Easing.Linear.None).to({x:793, y:338},750,Phaser.Easing.Linear.None);
        
    },
    update: function () {
        //console.log("What is value of input: " + input2.value);
        //console.log("What is value of qns: " + qns);
        //console.log("What is the value of check: " + check)
        //console.log("What is the value of getAnswers: " + getAnswers(3,"red").hints2);
        //console.log("Update counter for timer: "+ total);
        console.log("X: " + this.dots.x + " Y: " + this.dots.y);
        var d = /\d/;
        if (qns == 0 && d.test(input.value)){
            btnCheck.alpha = 1;
            txtCheck.alpha = 1;
        }
        else if  (qns == 1  && d.test(input2.value)){
            btnCheck.alpha = 1;
            txtCheck.alpha = 1;    
            }
        else if  (qns == 2 && d.test(input3.value)){
            btnCheck.alpha = 1;
            txtCheck.alpha = 1;    
            }
        else if  (qns == 3 && d.test('\xB1'+ input4.value)){
            btnCheck.alpha = 1;
            txtCheck.alpha = 1;    
            }
        else {
            btnCheck.alpha = 0.5;
            txtCheck.alpha = 0.5;
        }

        //Creating timer and tweening
        if (total >= 2){
            boolTimer = true;
            if(total >3){
                timer.pause();
            }
         }
         if (qns == 0 && tween00._hasStarted == true && total < 2) {
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
         }
         else if (qns == 0 && tween00._hasStarted == true && total >= 2){
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
         }
         if (qns == 1 &&  tween11._hasStarted == true && total >= 2){
             boolEllipse1 = true;
             qns = 2;
             this.addbtnNext.visible = true;
             this.addbtnNext2.visible = true;
         }   
         else if (qns == 1 &&  tween11._hasStarted == true && total < 2){
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
         }
         if (qns == 2 &&  tween22._hasStarted == true && total < 2){
            
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
        }    
        else if (qns == 2 &&  tween22._hasStarted == true && total >= 2){
            boolEllipse2 = true;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            qns = 3;
        }

       
        
      
        
        
       
        
       
  
       
        

    },
    randomNumbers: function () {
        console.log("Did randomNumbers come here?");
        return Math.floor(Math.random() * 1) + 6;
    },
   
}

demo.state5.answers = function (n, tick0, cross0, dial0, gameAnswers, txtAnswers, t0, addbtnNext, addbtnNext2, dial1, gameAnswersUpdated, t1, word1, word2, dial2, t3, dial3, cross3, tick3) {
    this.n = n;
    this.tick0 = tick0;
    this.cross0 = cross0;
    this.dial0 = dial0;
    this.gameAnswers = gameAnswers;
    this.txtAnswers = txtAnswers;
    this.t0 = t0;
    this.addbtnNext = addbtnNext;
    this.addbtnNext2 = addbtnNext2;
    this.dial1 = dial1;
    this.gameAnswersUpdated = gameAnswersUpdated;
    this.t1 = t1;
    this.word1 = word1;
    this.word2 = word2;
    this.dial2 = dial2;
    this.t3 = t3;
    this.dial3 = dial3;
    this.cross3 = cross3;
    this.tick3 = tick3;
    console.log("Did anyone come here?");
    if (qns == 0) {
        if (this.n != 1 && this.n != "") {
            check++;
            this.dial0.alpha = 1;
            this.tick0.alpha = 0;
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            if (this.n != 0) {
                this.gameAnswers[this.n].alpha = 1;
            }
            else {
                this.gameAnswers[10].alpha = 1;
            }
        }
        //Correct answers.
        else if (this.n == 1) {
            this.dial0.alpha = 1;
            this.cross0.alpha = 0;
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            this.gameAnswers[0].alpha = 1;
            this.t0.alpha = 0;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            btnCheck.visible = false;
            txtCheck.visible = false;
            check = 20;
            input.setText(" 1");
            boolTimer = true;
        }
    }
    else if (qns == 1) {
        console.log("This is the green band");
        var bandColor = "green."
        var bandNum = "2nd";
        this.dial0.position.setTo(GameInstance.world.centerX - 15, GameInstance.world.centerY - 30);
        btnCheck.position.setTo(GameInstance.world.centerX + 180, GameInstance.world.centerY);
        txtCheck.position.setTo(GameInstance.world.centerX + 190, GameInstance.world.centerY + 5);
        btnTryAgain.position.setTo(GameInstance.world.centerX + 180, GameInstance.world.centerY);
        txtTryAgain.position.setTo(GameInstance.world.centerX + 190, GameInstance.world.centerY + 5);
        btnShowAnswer.position.setTo(GameInstance.world.centerX + 180, GameInstance.world.centerY);
        txtShowAnswer.position.setTo(GameInstance.world.centerX + 190, GameInstance.world.centerY + 5);
        if (this.n != 5 && this.n != "") {
            check++;
            this.dial0.alpha = 1;
            this.tick0.alpha = 0;
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }

            var hints = getAnswers(bandNum, bandColor).hints1;
            console.log(hints);
            console.log("What is the bandColor: " + bandColor);
            this.gameAnswers[this.n].setText(hints[this.n]);
            this.gameAnswers[this.n].alpha = 1;

            console.log("What is the value of check: " + check);
        }
        //Correct answers.
        else if (this.n == 5) {
            console.log("Did anyone come here?");
            this.dial0.alpha = 1;
            this.cross0.alpha = 0;
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            var answer = getAnswers(bandNum, bandColor).answer;
            this.gameAnswers[0].setText(answer);
            this.gameAnswers[0].alpha = 1;
            this.t0.alpha = 0;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            btnCheck.visible = false;
            txtCheck.visible = false;
            qns = 2;
            check = 20;
        }
    }
    else if (qns == 2) {
        console.log("This is the red band");
        var bandColor = "red."
        var bandNum = "3rd";
        this.dial0.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY - 30);
        btnCheck.position.setTo(GameInstance.world.centerX + 210, GameInstance.world.centerY);
        txtCheck.position.setTo(GameInstance.world.centerX + 220, GameInstance.world.centerY + 5);
        btnTryAgain.position.setTo(GameInstance.world.centerX + 210, GameInstance.world.centerY);
        txtTryAgain.position.setTo(GameInstance.world.centerX + 220, GameInstance.world.centerY + 5);
        btnShowAnswer.position.setTo(GameInstance.world.centerX + 210, GameInstance.world.centerY);
        txtShowAnswer.position.setTo(GameInstance.world.centerX + 220, GameInstance.world.centerY + 5);

        if (this.n != 100 && this.n != "") {
            check++;
            this.dial0.alpha = 1;
            this.tick0.alpha = 0;


            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            this.gameAnswers[1].setText("Invalid value."); //Answers not from the table
            this.gameAnswers[1].alpha = 1;

            if (this.n == 1) {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[0]);
                this.gameAnswers[1].alpha = 1;
            }
            if (this.n == 10) {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[1]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == 100) {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[this.n].setText(hints2[2]);
                this.gameAnswers[this.n].alpha = 1;
            }
            else if (this.n == "1k") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[3]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "10k") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[4]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "100k") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[5]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "1M") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[6]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "10M") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[7]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "0.01") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[8]);
                this.gameAnswers[1].alpha = 1;
            }
            else if (this.n == "0.1") {
                var hints2 = getAnswers(bandNum, bandColor).hints2;
                this.gameAnswers[1].setText(hints2[9]);
                this.gameAnswers[1].alpha = 1;
            }

        }
        //Correct answers.
        else if (this.n == 100) {
            console.log("Did anyone come here?");
            this.dial0.alpha = 0;
            this.cross0.alpha = 0;
            this.dial1.alpha = 1;
            var answer = getAnswers(bandNum, bandColor).answer;
            this.gameAnswersUpdated.setText("This band represents the multiplier value. \nThat is, the first 2 digits of the resistance  \nvalue should be multiplied by 100.");
            this.gameAnswersUpdated.addFontWeight("bold", 24);
            this.gameAnswersUpdated.addFontWeight('normal', 35);
            this.gameAnswersUpdated.alpha = 1;
            this.t0.alpha = 0;
            this.t1.alpha = 0;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            btnCheck.visible = false;
            txtCheck.visible = false;
            qns = 3;
            check = 20;

            this.word1.alpha = 1;
            this.word2.alpha = 1;



        }
    }
    else if (qns == 3) {
        var bandColor = "gold";
        var bandNum = "4";
        this.t3.alpha = 0;
        linegraphics3.alpha = 0;
        this.tick0.alpha = 0;
        if (this.n == "\xB1" + 2) {
            var hint3 = getAnswers(bandNum, bandColor).hints3
            this.dial0.alpha = 1;

            this.dial0.position.setTo(GameInstance.world.centerX + 70, GameInstance.world.centerY - 30);
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            this.gameAnswers[1].setText(hint3[0]);
            this.gameAnswers[1].alpha = 1;
            check++;

        }
        else if (this.n == "\xB1" + 5) {
            this.dial3.alpha = 1;
            this.cross3.alpha = 0;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            btnCheck.visible = false;
            txtCheck.visible = false;
            qns = 4;

        }
        else if (this.n != 2) {
            var hint3 = getAnswers(bandNum, bandColor).hints3
            this.dial0.alpha = 1;

            this.dial0.position.setTo(GameInstance.world.centerX + 70, GameInstance.world.centerY - 30);
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            this.gameAnswers[1].setText("Invalid value.");
            this.gameAnswers[1].alpha = 1;
            check++;

        }



    }
}

function getAnswers(bandNum, bandColor) {
    var colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "grey", "white"];
    var answer = "This is the " + bandNum + " digit of the \nresistance value.";
    var hints = colors.map(function (x, index) { return "Color code for " + index + " is " + x + ". \nThis band is " + bandColor }); //x takes in items, index take in number.

    var colors2 = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "silver", "gold"];
    var colorsNum2 = ["1", "10", "100", "1k", "10k", "100k", "1M", "10M", "0.01", "0.1"];
    var hints2 = colors2.map(function (x, index) { return "Color code for " + colorsNum2[index] + " is " + x + ". \nThis band is " + bandColor + "\n" });

    var colors3 = ["red", "gold"];
    var colorsNum3 = ["2%", "5%"];
    var hints3 = colors3.map(function (x, index) { return "Color code for " + colorsNum3[index] + " is " + x + ". \nThis band is " + bandColor + "\n" });

    return { hints1: hints, answer: answer, hints2: hints2, hints3: hints3 };


}


