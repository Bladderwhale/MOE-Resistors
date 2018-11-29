var mcq;
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

        //MCQ
        mcq =0;

        //Array of height (Randomized)
        this.randomHeight = [500,580,660,740]; //Shuffling of elements in an array.
        this.shuffleArray(this.randomHeight)
        //Center
        var newQns0 = new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]); 
        var newQns1 = new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);
        var newQns2 = new newQuestions(this, this.randomHeight[0], this.randomHeight[1], this.randomHeight[2], this.randomHeight[3]);
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



    },
    update: function(){
        //console.log("X: " + this.dots.x + " Y: " + this.dots.y);
        //console.log(this.boolCheck)
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
    state.btnradio0 = GameInstance.add.button(607,height0,'btnradiounchecked'); //500
    state.btnradio1 = GameInstance.add.button(607,height1,'btnradiounchecked'); //580
    state.btnradio2 = GameInstance.add.button(607,height2,'btnradiounchecked'); //660
    state.btnradio3 = GameInstance.add.button(607,height3,'btnradiounchecked'); //740
    state.btnradio0.scale.setTo(0.35,0.35);
    state.btnradio1.scale.setTo(0.35,0.35);
    state.btnradio2.scale.setTo(0.35,0.35);
    state.btnradio3.scale.setTo(0.35,0.35);
    state.boolCheck = true;
    state.btnradio0.events.onInputDown.add(function(){
        if (state.boolCheck == true)
        {
            state.btnradio0.loadTexture('btnradiochecked',0); state.boolCheck = false;
        }
        else if (state.boolCheck == false) 
        {
            state.btnradio0.loadTexture('btnradiounchecked',0); state.boolCheck = true;
        }
    },this);
    state.btnradio1.events.onInputDown.add(function(){
        if (state.boolCheck == true)
        {
            state.btnradio1.loadTexture('btnradiochecked',0); state.boolCheck = false;
        }
        else if (state.boolCheck == false) 
        {
            state.btnradio1.loadTexture('btnradiounchecked',0); state.boolCheck = true;
        }
    },this);
    state.btnradio2.events.onInputDown.add(function(){
        if (state.boolCheck == true)
        {
            state.btnradio2.loadTexture('btnradiochecked',0); state.boolCheck = false;
        }
        else if (state.boolCheck == false) 
        {
            state.btnradio2.loadTexture('btnradiounchecked',0); state.boolCheck = true;
        }
        },this);
        state.btnradio3.events.onInputDown.add(function(){
        if (state.boolCheck == true)
        {
            state.btnradio3.loadTexture('btnradiochecked',0); state.boolCheck = false;
        }
        else if (state.boolCheck == false) 
        {
            state.btnradio3.loadTexture('btnradiounchecked',0); state.boolCheck = true;
        }
    },this);

    //Add the ticks and cross
    GameInstance.add.sprite(0,0,'tick0');
    GameInstance.add.sprite(0,0,'cross0');
    
    if (mcq == 0) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setA[0]);
    state.btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().setA[1]);
    state.btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().setA[2]);
    state.btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().setA[3]);
    state.btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 1) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setB[0]);
    state.btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';

    state.text1 = GameInstance.add.text(200,-20, setText().setB[1]);
    state.btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';

    state.text2 = GameInstance.add.text(200,-20, setText().setB[2]);
    state.btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';

    state.text3 = GameInstance.add.text(200,-20, setText().setB[3]);
    state.btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }

    else if (mcq == 2) {
    //Add the texts
    state.text0 = GameInstance.add.text(200,-20, setText().setC[0]);
    state.btnradio0.addChild(state.text0);
    state.text0.fontSize = 100;
    state.text0.fontWeight = 'normal';
    
    state.text1 = GameInstance.add.text(200,-20, setText().setC[1]);
    state.btnradio1.addChild(state.text1);
    state.text1.fontSize = 100;
    state.text1.fontWeight = 'normal';
    
    state.text2 = GameInstance.add.text(200,-20, setText().setC[2]);
    state.btnradio2.addChild(state.text2);
    state.text2.fontSize = 100;
    state.text2.fontWeight = 'normal';
    
    state.text3 = GameInstance.add.text(200,-20, setText().setC[3]);
    state.btnradio3.addChild(state.text3);
    state.text3.fontSize = 100;
    state.text3.fontWeight = 'normal'; }
}

function setText(){
    textBundle0 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle1 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
    textBundle2 = [ "35 \u2126 \xB1 5%",  "350 \u2126 \xB1 5%",  "550 \u2126 \xB1 5%",  "55 \u2126 \xB1 5%"];
    textBundle3 = [ "47 \u2126 \xB1 5%",  "470 \u2126 \xB1 5%",  "74 \u2126 \xB1 5%",  "740 \u2126 \xB1 5%"];
    textBundle4 = [ "22 \u2126 \xB1 5%",  "220 \u2126 \xB1 5%",  "240 \u2126 \xB1 5%",  "24 \u2126 \xB1 5%"];
   
    
    return {setA:textBundle0, setB:textBundle1, setC:textBundle2};
}



