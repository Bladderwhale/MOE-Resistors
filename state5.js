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
            width:30,
            height:30,
            font: '23px Arial',
            max:'9',
            type: PhaserInput.InputType.number
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
            btnShowAnswer.visible = false;
            txtShowAnswer.visible = false;
            this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;
            for (var i = 0; i<this.txtAnswers.length ; i++) {
                this.gameAnswers[i].alpha = 0;
            }
            answers(1, this.tick0, this.cross0, this.dial0, this.gameAnswers, this.txtAnswers,this.t0,this.addbtnNext, this.addbtnNext2);
        },this);
        
   
        //Adding the next question for the color banks.
        addBtnNext(this);
        this.addbtnNext.visible = false;
        this.addbtnNext2.visible = false;
        this.addbtnNext.events.onInputDown.add(function(){
            qns = 1;
            this.dial0.alpha = 0;
            this.t0.alpha = 1;
            btnCheck.visible = true;
            txtCheck.visible = true;
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
            if (qns == 1) {
                this.t0.position.setTo(game.world.centerX-70, game.world.centerY+200); 
                linegraphics1.alpha = 1;
                input2.visible = true;
            }
            if (qns == 2) {
                
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
            this.t0.alpha = 1;
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
        //this.t0.addChild(this.circle);
        
        //linegraphics for the first table.
        linegraphics = game.add.graphics(0,0);
        linegraphics.lineStyle(1,0x000000,1);
        linegraphics.moveTo(536,540);
        linegraphics.lineTo(680,410);
        linegraphics.endFill();
        
        //linegraphics for the second table.
        linegraphics1 = game.add.graphics(0,0);
        linegraphics1.lineStyle(1,0x000000,1);
        linegraphics1.moveTo(680,540);
        linegraphics1.lineTo(720,410);
        linegraphics1.endFill();
        linegraphics1.alpha = 0;
        coorindates(this);
        
        
        
    },
    update: function(){
    //console.log("What is value of input: " + input2.value);
    console.log("What is value of qns: " + qns);
    //console.log("What is the value of check: " + check)
    }
};

function getAnswers(bandNum, bandColor)
{
    var colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "g", "white"];
    var answer = "This is the "+ bandNum +" digit of the \nresistance value.";
    var hints = colors.map(function(x, index){ return "Color code for " + index + " is " + x + ". \n This band is " + bandColor}); 
    return {hints1: hints, answer: answer};
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
            
        }
        //Correct answers.
        else if (this.n == 5) {
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
            check = 20;
        }
    }
        
};