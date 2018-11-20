var check = 0;
var qns = 0;
demo.state5 = function(){};
demo.state5.prototype = {resistors:{}, firstTable:{}, secondTable:{}, thirdTable:{}, forthTable:{}, bandNum: "1st", bandColor: "brown.",
    preload: function(){loadAssets(this);},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state5');
        addChangeStateEventListers();
        //Background
        background(this);
        //Home
        home(this);
        //Center
        this.resistors.r2 = game.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.35,0.35);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(game.world.centerX,game.world.centerY/1.4);
        this.bandNum = 1;
        this.bandColor = "brown."
        //Input
        input = game.add.inputField(655, 336,{
            width:30,
            height:30,
            font: '23px Arial',
            max:'9',
            type: PhaserInput.InputType.number
        });
        input2 = game.add.inputField(690, 336,{
            width:30,
            height:30,
            font: '23px Arial',
            max:'9',
            type: PhaserInput.InputType.number
        });
        input2.visible = false;
        
            input3 = game.add.inputField(725, 336,{
            width:40,
            height:30,
            font: '23px Arial',
            max:'3'
        });
        input3.visible = false;
        
         this.txtAnswers = ["This is the "+ this.bandNum +" digit of the \nresistance value.","qwe" ,"Colour code for '2' is red. \nThis band is " + this.bandColor, "Colour code for '3' is orange. \nThis band is " + this.bandColor, "Colour code for '4' is yellow. \nThis band is " + this.bandColor, "Colour code for '5' is green. \nThis band is " + this.bandColor, "Colour code for '6' is blue.\n This band is " + this.bandColor, "Colour code for '7' is purple.\n This band is " + this.bandColor, "Colour code for '8' is grey.\n This band is " + this.bandColor, "Colour code for '9' is white.\n This band is " + this.bandColor,"Colour code for '0' is black.\n This band is " + this.bandColor];
            
        
        //btnCheck
        btnCheck = game.add.button(game.world.centerX+100,game.world.centerY,'box0');   
        txtCheck = game.add.text(game.world.centerX+110,game.world.centerY+5,"Check");
        
        btnCheck.events.onInputDown.add(function(){
            console.log(input);
            console.log("btnCheck event triggered.");
            linegraphics.alpha = 0;
            linegraphics1.alpha = 0;
            this.tick0 = game.add.sprite(-25,-60,'tick0');
            this.cross0 = game.add.sprite(-25,-60,'cross0');
            
            this.dial0 = game.add.sprite(0,0,'dial0');
            this.dial0.anchor.setTo(0.5,0.5);
            this.dial0.position.setTo(game.world.centerX-50,game.world.centerY-30);
            this.dial0.alpha = 0;
            
            this.gameAnswers = [];
            for (var i = 0; i<this.txtAnswers.length; i++){
                this.gameAnswers[i] = game.add.text(-115,-10,this.txtAnswers[i]); 
                this.gameAnswers[i].fontSize = 20;
                this.gameAnswers[i].fontWeight = 'normal'
                if (i  ==  0) {
                      this.gameAnswers[i].addFontWeight('normal',0);
                      this.gameAnswers[i].addFontWeight('bold', 12);
                      this.gameAnswers[i].addFontWeight('normal',20);
                }
              //  this.dial0.addChild(this.gameAnswers[i]);
                this.dial0.addChild(this.gameAnswers[i]);
            }
              
            this.dial0.addChild(this.tick0);
            this.dial0.addChild(this.cross0);
            
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
            this.nn = new answers(this.value,this.tick0,this.cross0,this.dial0,this.gameAnswers, this.txtAnswers.length,this.t0,this.addbtnNext,this.addbtnNext2, this); 
            
            //btnCheck
            if (check == 1) 
            {
                btnTryAgain.visible = true;
                txtTryAgain.visible = true;
                this.t0.alpha = 0;
                this.t1.alpha = 0;
            }
            if (check == 2) 
            {
                btnCheck.visible = false;
                txtCheck.visible = false;
                input.cursor.alpha = 0;
                
                //Now if check reached 2, it will show btnAnswer
                btnShowAnswer.visible = true;
                txtShowAnswer.visible = true;
            }
          
            
            
        },this);
        
        //Create the btnShowAnswer
        btnShowAnswer = game.add.button(game.world.centerX+100,game.world.centerY,'box0');
        btnShowAnswer.scale.setTo(1.9,1)
        txtShowAnswer = game.add.text(game.world.centerX+110,game.world.centerY+5,"Show Answer");
        btnShowAnswer.visible = false;
        txtShowAnswer.visible = false;
        
        //Create the question title
        this.questionTitle = game.add.text(game.world.centerX,game.world.centerY-350,"Question 1"); 
    
        btnShowAnswer.events.onInputDown.add(function(){
            console.log("Did anyone wanted to showanswer?");
            btnShowAnswer.visible = false;
            txtShowAnswer.visible = false;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            for (var i = 0; i<this.txtAnswers.length ; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            if (qns == 0){
            answers(1, this.tick0, this.cross0, this.dial0, this.gameAnswers, this.txtAnswers,this.t0,this.addbtnNext, this.addbtnNext2);
            input.setText("1");
            input.endFocus();
            }
            if (qns == 1){
            this.cross0.alpha = 0;
            var bandColor = "green."
            var bandNum = "2nd";
            var answer = getAnswers(bandNum, bandColor).answer;
            this.gameAnswers[0].setText(answer);
            this.gameAnswers[0].alpha = 1; 
             qns = 2;
            }
        },this);
        
   
        //Adding the next question for the color banks.
        addBtnNext(this);
        this.addbtnNext.visible = false;
        this.addbtnNext2.visible = false;
        this.addbtnNext.events.onInputDown.add(function(){
            if (qns == 0) {
            qns = 1;
            this.dial0.alpha = 0;
            this.t0.alpha = 1;
            btnCheck.visible = true;
            txtCheck.visible = true;
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
            }
            if (qns == 1) {
                this.questionTitle.setText("Question 2");
                this.t0.position.setTo(game.world.centerX-70, game.world.centerY+200); 
                linegraphics1.alpha = 1;
                input2.visible = true;
                check = 0;
            }
            if (qns == 2) {
                this.questionTitle.setText("Question 3");
                input3.visible = true;
                this.dial0.alpha = 0;
                this.t0.alpha = 0;
                this.t1.alpha = 1;
                this.addbtnNext.visible = false;
                this.addbtnNext2.visible = false;
                btnCheck.visible = true;
                txtCheck.visible = true;
                check = 0;
                
            }
    
        },this);        
        
        //Create the btnTryAgain and set visible to false
        btnTryAgain = game.add.button(game.world.centerX+100,game.world.centerY,'box0');
        btnTryAgain.scale.setTo(1.4,1)
        txtTryAgain = game.add.text(game.world.centerX+110,game.world.centerY+5,"Try Again");
        btnTryAgain.visible = false;
        txtTryAgain.visible = false;
        //Destroy btnTryAgain
        btnTryAgain.events.onInputDown.add(function(){
            btnTryAgain.visible = false;
            txtTryAgain.visible = false; 
            this.dial0.alpha = 0;
            if (qns<2) {
            this.t0.alpha = 1;}
            if (qns == 2) {
            this.t1.alpha = 1;}
            }
        
            ,this);
        
        //Grouping (Addchild)
        this.t0 = game.add.sprite(0,0,'t0'); //Add table sprite
        this.t0.position.setTo(game.world.centerX-200, game.world.centerY+200); //Setting the position according the world
        this.t0.anchor.setTo(0.5,0.5); //Make it center.
        
        //Phaser.text(Table texts)
        this.firstTable.black = game.add.text(-80,-150,"0 black");
        this.firstTable.black.addColor('#ffffff', 0);
        this.firstTable.black.fontSize = 20;
        this.firstTable.black.fontWeight = 'normal';
        
        this.firstTable.brown = game.add.text(-80,-120,"1 brown");
        this.firstTable.brown.addColor('#ffffff', 0);
        this.firstTable.brown.fontSize = 20;
        this.firstTable.brown.fontWeight = 'normal';
        
        this.firstTable.red = game.add.text(-80,-90,"2 red");
        this.firstTable.red.addColor('#ffffff', 0);
        this.firstTable.red.fontSize = 20;
        this.firstTable.red.fontWeight = 'normal';
        
        this.firstTable.orange = game.add.text(-80,-60,"3 orange");
        this.firstTable.orange.addColor('#ffffff', 0);
        this.firstTable.orange.fontSize = 20;
        this.firstTable.orange.fontWeight = 'normal';
        
        this.firstTable.yellow = game.add.text(-80,-30,"4 yellow");
        this.firstTable.yellow.addColor('#ffffff', 0);
        this.firstTable.yellow.fontSize = 20;
        this.firstTable.yellow.fontWeight = 'normal';
        
        this.firstTable.green = game.add.text(-80,0,"5 green");
        this.firstTable.green.addColor('#ffffff', 0);
        this.firstTable.green.fontSize = 20;
        this.firstTable.green.fontWeight = 'normal';
        
        this.firstTable.blue = game.add.text(-80,30,"6 blue");
        this.firstTable.blue.addColor('#ffffff', 0);
        this.firstTable.blue.fontSize = 20;
        this.firstTable.blue.fontWeight = 'normal';
        
        this.firstTable.purple = game.add.text(-80,60,"7 purple");
        this.firstTable.purple.addColor('#ffffff', 0);
        this.firstTable.purple.fontSize = 20;
        this.firstTable.purple.fontWeight = 'normal';
        
        this.firstTable.grey = game.add.text(-80,90,"8 grey");
        this.firstTable.grey.addColor('#000000', 0);
        this.firstTable.grey.fontSize = 20;
        this.firstTable.grey.fontWeight = 'normal';
        
        this.firstTable.white = game.add.text(-80,125,"9 white");
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
        this.t1 = game.add.sprite(0,0,'t1'); //Add table sprite
        this.t1.position.setTo(game.world.centerX-25, game.world.centerY+200); //Setting the position according the world
        this.t1.anchor.setTo(0.5,0.5); //Make it center.
        
        //Phaser.text(Table texts)
        this.secondTable.black = game.add.text(-80,-150,"1 black");
        this.secondTable.black.addColor('#ffffff', 0);
        this.secondTable.black.fontSize = 20;
        this.secondTable.black.fontWeight = 'normal';
        
        this.secondTable.brown = game.add.text(-80,-120,"10 brown");
        this.secondTable.brown.addColor('#ffffff', 0);
        this.secondTable.brown.fontSize = 20;
        this.secondTable.brown.fontWeight = 'normal';
        
        this.secondTable.red = game.add.text(-80,-90,"100 red");
        this.secondTable.red.addColor('#ffffff', 0);
        this.secondTable.red.fontSize = 20;
        this.secondTable.red.fontWeight = 'normal';
        
        this.secondTable.orange = game.add.text(-80,-60,"1k orange");
        this.secondTable.orange.addColor('#ffffff', 0);
        this.secondTable.orange.fontSize = 20;
        this.secondTable.orange.fontWeight = 'normal';
        
        this.secondTable.yellow = game.add.text(-80,-30,"10k yellow");
        this.secondTable.yellow.addColor('#ffffff', 0);
        this.secondTable.yellow.fontSize = 20;
        this.secondTable.yellow.fontWeight = 'normal';
        
        this.secondTable.green = game.add.text(-80,0,"100k green");
        this.secondTable.green.addColor('#ffffff', 0);
        this.secondTable.green.fontSize = 20;
        this.secondTable.green.fontWeight = 'normal';
        
        this.secondTable.blue = game.add.text(-80,30,"1M blue");
        this.secondTable.blue.addColor('#ffffff', 0);
        this.secondTable.blue.fontSize = 20;
        this.secondTable.blue.fontWeight = 'normal';
        
        this.secondTable.purple = game.add.text(-80,60,"10M purple");
        this.secondTable.purple.addColor('#ffffff', 0);
        this.secondTable.purple.fontSize = 20;
        this.secondTable.purple.fontWeight = 'normal';
        
        this.secondTable.grey = game.add.text(-80,90,"0.01 silver");
        this.secondTable.grey.addColor('#000000', 0);
        this.secondTable.grey.fontSize = 20;
        this.secondTable.grey.fontWeight = 'normal';
        
        this.secondTable.white = game.add.text(-80,125,"0.1 gold");
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
        
        //linegraphics for the first band.
        linegraphics = game.add.graphics(0,0);
        linegraphics.lineStyle(1,0x000000,1);
        linegraphics.moveTo(536,540);
        linegraphics.lineTo(680,410);
        linegraphics.endFill();
        
        //linegraphics for the second band.
        linegraphics1 = game.add.graphics(0,0);
        linegraphics1.lineStyle(1,0x000000,1);
        linegraphics1.moveTo(680,540);
        linegraphics1.lineTo(720,410);
        linegraphics1.endFill();
        linegraphics1.alpha = 0;
        coorindates(this);
        
        //linegraphics for the third band.
        linegraphics2 = game.add.graphics(0,0);
        linegraphics2.lineStyle(1,0x000000,1);
        linegraphics2.moveTo(730,540);
        linegraphics2.lineTo(750,410);
        linegraphics2.endFill();
        linegraphics2.alpha = 0;
        
        
        
    },
    update: function(){
    //console.log("What is value of input: " + input2.value);
    //console.log("What is value of qns: " + qns);
    //console.log("What is the value of check: " + check)
    //console.log("What is the value of getAnswers: " + getAnswers(3,"red").hints2);
    }
};

function getAnswers(bandNum, bandColor)
{
    var colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "grey", "white"];
    var answer = "This is the "+ bandNum +" digit of the \nresistance value.";
    var hints = colors.map(function(x, index){ return "Color code for " + index + " is " + x + ". \n This band is " + bandColor}); //x takes in items, index take in number.
    
    var colors2 = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "silver", "gold"];
    var colorsNum = ["1", "10", "100", "1k", "10k", "100k", "1M", "10M", "0.01", "0.1"];
    var hints2 = colors2.map(function(x, index){ return "Color code for " + colorsNum[index] +" is " + x + ". \n This band is " + bandColor + "\n"}); 
    return {hints1: hints, answer: answer, hints2: hints2};
    
    
}


function answers(n, tick0, cross0, dial0, gameAnswers, txtAnswers,t0,addbtnNext, addbtnNext2)
{
    this.n = n;
    this.tick0 = tick0;
    this.cross0 = cross0;
    this.dial0 = dial0;
    this.gameAnswers = gameAnswers;
    this.txtAnswers = txtAnswers;
    this.t0 = t0;
    this.addbtnNext = addbtnNext;
    this.addbtnNext2 = addbtnNext2;
    console.log("Did anyone come here?");
    if (qns == 0) {
        if (this.n !=1 && this.n != "") {
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
        }
    }
    else if (qns == 1) {
        console.log("This is the green band");
        var bandColor = "green."
        var bandNum = "2nd";
        this.dial0.position.setTo(game.world.centerX-15,game.world.centerY-30);
        btnCheck.position.setTo(game.world.centerX+180,game.world.centerY);
        txtCheck.position.setTo(game.world.centerX+190,game.world.centerY+5);
        btnTryAgain.position.setTo(game.world.centerX+180,game.world.centerY);
        txtTryAgain.position.setTo(game.world.centerX+190,game.world.centerY+5);
        btnShowAnswer.position.setTo(game.world.centerX+180,game.world.centerY);
        txtShowAnswer.position.setTo(game.world.centerX+190,game.world.centerY+5);
          if (this.n !=5 && this.n != "") {
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
        this.dial0.position.setTo(game.world.centerX,game.world.centerY-30);
        btnCheck.position.setTo(game.world.centerX+210,game.world.centerY);
        txtCheck.position.setTo(game.world.centerX+220,game.world.centerY+5);
        btnTryAgain.position.setTo(game.world.centerX+210,game.world.centerY);
        txtTryAgain.position.setTo(game.world.centerX+220,game.world.centerY+5);
        btnShowAnswer.position.setTo(game.world.centerX+210,game.world.centerY);
        txtShowAnswer.position.setTo(game.world.centerX+220,game.world.centerY+5);
        
          if (this.n !=100 && this.n != "") {
            check++; 
            this.dial0.alpha = 1;
            this.tick0.alpha = 0;
            for (var i = 0; i < this.txtAnswers; i++) {
                this.gameAnswers[i].alpha = 0;
            }
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
        
};