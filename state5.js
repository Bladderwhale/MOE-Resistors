var check = 0;
var qns = 0;
demo.state5 = function(){};
demo.state5.prototype = {resistors:{}, firstTable:{}, secondTable:{}, thirdTable:{}, forthTable:{},
    preload: function(){loadAssets(this); },
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
        
        //btnCheck
        btnCheck = game.add.button(game.world.centerX+100,game.world.centerY,'box0');   
        txtCheck = game.add.text(game.world.centerX+110,game.world.centerY+5,"Check");
        
        //btnCheck2
        /*btnCheck2 = game.add.button(game.world.centerX+100,game.world.centerY,'box0');   
        txtCheck2 = game.add.text(game.world.centerX+110,game.world.centerY+5,"Check");
        btnCheck2.visible = false;
        txtCheck2.visible = false;*/
        
        btnCheck.events.onInputDown.add(function(){
            console.log(input);
            console.log("Step 1 upon clicking btnCheck");
            if (qns == 0) {
            console.log("if question == 0");
            linegraphics.alpha = 0;
            this.tick0 = game.add.sprite(-25,-60,'tick0');
            this.cross0 = game.add.sprite(-25,-60,'cross0');
            
            this.dial0 = game.add.sprite(0,0,'dial0');
            this.dial0.anchor.setTo(0.5,0.5);
            this.dial0.position.setTo(game.world.centerX-50,game.world.centerY-30);
            this.dial0.alpha = 0;
            
            
            this.txtAnswers = ["This is the 1st digit of the \nresistance value.", "Colour code for '2' is red. \nThis band is brown", "Colour code for '3' is orange. \nThis band is brown.", "Colour code for '4' is yellow. \nThis band is brown", "Colour code for '5' is green. \nThis band is brown", "Colour code for '6' is blue.\n This band is brown.", "Colour code for '7' is purple.\n This band is brown.", "Colour code for '8' is grey.\n This band is brown.", "Colour code for '9' is white.\n This band is brown.","Colour code for '0' is black.\n This band is brown."];
            
            this.gameAnswers = [];
            for (var i = 0; i<this.txtAnswers.length; i++){
                this.gameAnswers[i] = game.add.text(-115,-10,this.txtAnswers[i]); 
                this.gameAnswers[i].fontSize = 20;
                this.gameAnswers[i].fontWeight = 'normal'
                if (i  ==  0) {
                      this.gameAnswers[i].addFontWeight('normal',0);
                      this.gameAnswers[i].addFontWeight('bold', 12);
                      this.gameAnswers[i].addFontWeight('normal',21);
                }
              //  this.dial0.addChild(this.gameAnswers[i]);
                this.dial0.addChild(this.gameAnswers[i]);
            }
              
            this.dial0.addChild(this.tick0);
            this.dial0.addChild(this.cross0);
            
            this.n = new answers(input.value,this.tick0,this.cross0,this.dial0, this.gameAnswers, this.txtAnswers.length,this.t0,this.addbtnNext,this.addbtnNext2,this.questionTitle); }
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
        
        //Create the showCircle
        this.circle = game.add.sprite(-140,-130,'circle');
        this.circle.scale.setTo(1,0.5);
        this.circle.alpha = 0;
        
        //Create the btnShowAnswer
        btnShowAnswer = game.add.button(game.world.centerX+100,game.world.centerY,'box0');
        btnShowAnswer.scale.setTo(1.9,1)
        txtShowAnswer = game.add.text(game.world.centerX+110,game.world.centerY+5,"Show Answer");
        btnShowAnswer.visible = false;
        txtShowAnswer.visible = false;
        
        //Create the question title
        this.questionTitle = game.add.text(game.world.centerX,game.world.centerY-350,"lalalaland"); 
    
        btnShowAnswer.events.onInputDown.add(function(){
            if (qns == 0) {
            this.n = new answers(1,this.tick0,this.cross0,this.dial0, this.gameAnswers, this.txtAnswers.length,this.t0,this.addbtnNext,this.addbtnNext2,this.questionTitle);
            
            this.gameAnswers[0].alpha = 1; //Answer is 1 brown.
            this.circle.alpha = 1
            this.cross0.alpha = 0;
            
            btnShowAnswer.visible = false;
            txtShowAnswer.visible = false;
            /*this.addbtnNext.visible = true;
            this.addbtnNext2.visible = true;*/
             }
            
        },
            this);
        
        //Adding the next question for the color banks.
        addBtnNext(this);
        this.addbtnNext.visible = false;
        this.addbtnNext2.visible = false;
        this.addbtnNext.events.onInputDown.add(function(){
            input2.visible=true
            this.dial0.alpha = 0; //Inclusive of the tick because this is the parent.
            this.t0.alpha = 1;
            this.t0.position.setTo(game.world.centerX-70, game.world.centerY+200); 
            linegraphics1.alpha = 1;
            this.addbtnNext.visible = false;
            this.addbtnNext2.visible = false;
            this.circle.alpha = 0;
            
            btnCheck.visible = true;
            txtCheck.visible = true;
            
               
        if (qns == 1)
        {
            this.questionTitle.text="Question2";
        }  
            
            //Create another btnCheck 
            /*btnCheck2.visible = true;
            txtCheck2.visible = true;*/
           
        },this);        
        
        //Create the btnTryAgain and set visible to false
        btnTryAgain = game.add.button(game.world.centerX+100,game.world.centerY,'box0');
        btnTryAgain.scale.setTo(1.4,1)
        txtTryAgain = game.add.text(game.world.centerX+110,game.world.centerY+5,"Try Again");
        btnTryAgain.visible = false;
        txtTryAgain.visible = false;
        //Destroy btnTryAgain
        btnTryAgain.events.onInputDown.add(function(){btnTryAgain.visible = false;txtTryAgain.visible = false; this.dial0.alpha = 0; this.t0.alpha = 1; linegraphics.alpha = 1;},this);
        
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
        this.t0.addChild(this.circle);
        
        //linegraphics for the first table
        linegraphics = game.add.graphics(0,0);
        linegraphics.lineStyle(1,0x000000,1);
        linegraphics.moveTo(536,540);
        linegraphics.lineTo(680,410);
        linegraphics.endFill();
        
        linegraphics1 = game.add.graphics(0,0);
        linegraphics1.lineStyle(1,0x000000,1);
        linegraphics1.moveTo(680,540);
        linegraphics1.lineTo(720,410);
        linegraphics1.endFill();
        linegraphics1.alpha = 0;
        coorindates(this);
        
        
    },
    update: function(){
    //console.log("What is value of input: " + input.value);
    console.log("What is value of qns: " + qns);
    }
};

function answers(n, tick0, cross0, dial0, gameAnswers, txtAnswers,t0,addbtnNext,addbtnNext2,questionTitle)
{
    this.n = n; 
    this.tick0 = tick0;
    this.cross0 = cross0;
    this.gameAnswers = gameAnswers;
    this.txtAnswers = txtAnswers;
    this.dial0 = dial0;
    this.t0 = t0;
    this.addbtnNext = addbtnNext;
    this.addbtnNext2 = addbtnNext2;
    this.questionTitle = questionTitle;
    //Start your tween here
    //Phaser.tween
    //tween = game.add.tween(this.dial0).to({alpha:0},2000,Phaser.Easing.Linear.None);
    
    if (qns == 0 && this.n == 1)
    {
        console.log("n: " + this.n);
        this.dial0.alpha = 1;
        this.cross0.alpha = 0;
        for (var i = 1; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        
        this.t0.alpha = 0;
        //Remove the btnCheck and txtCheck, Add in the btnNext.
        btnCheck.visible = false;
        txtCheck.visible = false;
        this.addbtnNext.visible = true;
        this.addbtnNext2.visible = true;
        
        
        check+=20;
        qns = 1;
        
        input.setText("1");
        input.endFocus();
       
      
    }
    else if (qns == 0 && input.value == 2)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        for (var i = 2; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 3)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        for (var i = 3; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 4)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        for (var i = 4; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 5)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        for (var i = 5; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 6)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        this.gameAnswers[4].alpha = 0;
        for (var i = 6; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 7)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        this.gameAnswers[4].alpha = 0;
        this.gameAnswers[5].alpha = 0;
        for (var i = 7; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 8)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        this.gameAnswers[4].alpha = 0;
        this.gameAnswers[5].alpha = 0;
        this.gameAnswers[6].alpha = 0;
        for (var i = 8; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 9)
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        this.gameAnswers[4].alpha = 0;
        this.gameAnswers[5].alpha = 0;
        this.gameAnswers[6].alpha = 0;
        this.gameAnswers[7].alpha = 0;
        for (var i = 9; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == 0 && input.value != "")
    {
        this.dial0.alpha = 1;
        this.tick0.alpha = 0;
        this.gameAnswers[0].alpha = 0;
        this.gameAnswers[1].alpha = 0;
        this.gameAnswers[2].alpha = 0;
        this.gameAnswers[3].alpha = 0;
        this.gameAnswers[4].alpha = 0;
        this.gameAnswers[5].alpha = 0;
        this.gameAnswers[6].alpha = 0;
        this.gameAnswers[7].alpha = 0;
        this.gameAnswers[8].alpha = 0;
        for (var i = 10; i<this.txtAnswers; i++)
        {
            this.gameAnswers[i].alpha = 0;
        }
        check++;
    }
    else if (qns == 0 && input.value == "") {
            btnTryAgain.visible = false;
            txtTryAgain.visible = false;
            linegraphics.alpha = 1;
            this.t0.alpha = 1;
        }
        
};