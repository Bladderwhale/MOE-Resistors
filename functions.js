function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    GameInstance.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    GameInstance.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

function addChangeStateEventListers() { //Global Function (All scripts can access to it)
    /*addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); //Second step@
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    addKeyCallback(Phaser.Keyboard.NUMPAD_0, changeState, 10);
    addKeyCallback(Phaser.Keyboard.NUMPAD_1, changeState, 11);
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);*/
}

//Preload all the game assets.
function loadAssets() {
    GameInstance.load.video('intro', 'assets/intro.mp4');
    GameInstance.load.image('credits', 'assets/credits.png');
    GameInstance.load.image('dots', 'assets/dots.png');
    GameInstance.load.image('button','assets/button.png');
    GameInstance.load.image('board', 'assets/board.png');
    GameInstance.load.image('table', 'assets/table.png');
    GameInstance.load.image('home', 'assets/home.png');
    GameInstance.load.image('r0', 'assets/Resistor_01.png');
    GameInstance.load.image('r1', 'assets/Resistor_02.png');
    GameInstance.load.image('r2', 'assets/Resistor_03.png');
    GameInstance.load.image('r3', 'assets/Resistor_04.png');
    GameInstance.load.image('r4', 'assets/Resistor_05.png');
    GameInstance.load.image('r5', 'assets/Resistor_06.png');
    GameInstance.load.image('arrow0','assets/arrow0.png');
    GameInstance.load.image('arrow1','assets/arrow1.png');
    GameInstance.load.image('arrow2','assets/arrow2.png');
    GameInstance.load.image('t0','assets/table0.png');
    GameInstance.load.image('t1','assets/table1.png');
    GameInstance.load.image('t2','assets/table2.png');
    GameInstance.load.image('box0','assets/box0.png');
    GameInstance.load.image('dial0', 'assets/dialogbox0.png');
    GameInstance.load.image('dial00', 'assets/dialogbox00.png');
    GameInstance.load.image('dial1', 'assets/dialogbox1.png');
    GameInstance.load.image('dial2', 'assets/dialogbox2.png');
    GameInstance.load.image('dial3', 'assets/dialogbox3.png');
    GameInstance.load.image('dial4', 'assets/dialogbox4.png');
    GameInstance.load.image('tick0', 'assets/tick0.png');
    GameInstance.load.image('cross0','assets/cross0.png');
    GameInstance.load.image('circle','assets/circle.png');
    GameInstance.load.image('final','assets/final.png');
    GameInstance.load.image('btnradiochecked', 'assets/btnradiochecked.png');
    GameInstance.load.image('btnradiounchecked', 'assets/btnradiounchecked.png');
    for (var i = 0; i<=14; i++) {
        GameInstance.load.image('image' + i, 'assets/qns/' + i + '.png');
    }
    GameInstance.load.spritesheet('circleanim','assets/circleanim.png',580,580,12);
    GameInstance.load.spritesheet('circleanim1','assets/circleanim1.png',580,580,12);
    GameInstance.load.spritesheet('circleanim2','assets/circleanim2.png',580,580,12);
    GameInstance.load.spritesheet('circleanim3', 'assets/circleanim3.png',580,580,12);
 
};

function coorindates(state) {
    state.dots = GameInstance.add.sprite(0,0,'dots');
    state.dots.inputEnabled = true;
    state.dots.input.enableDrag(true);
    state.dots.scale.setTo(0.1, 0.1);
};

function addBtn(state) {
    state.addPracticeBtn = GameInstance.add.button(0,0,'button');
    state.addLearnBtn = GameInstance.add.button(0,0,'button');
    state.txtLearn = GameInstance.add.text(0,0, "Lesson");
    state.txtPractice = GameInstance.add.text(0,0, "Practice");
    state.txtLearn.anchor.setTo(0.5,0.5);;
    state.txtPractice.anchor.setTo(0.5,0.5);
    state.txtLearn.fontSize = 65;
    state.txtPractice.fontSize = 65;
};

function addBtnNext(state) {
    state.addbtnNext = GameInstance.add.button(0,0,'button');
    state.addbtnNext2 = GameInstance.add.text(0,0, "Next");
    state.addbtnNext.scale.setTo(0.5,0.5);
    state.addbtnNext.anchor.setTo(0.5,0.5);
    state.addbtnNext.position.setTo(GameInstance.world.centerX*1.75,GameInstance.world.centerY*1.75);
    state.addbtnNext2.position.setTo(GameInstance.world.centerX*1.71,GameInstance.world.centerY*1.72);

}

function background(state) {
    state.background = GameInstance.add.sprite(0,0,'board');
    state.background.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY);
    state.background.scale.setTo(1.5,1.5);
    state.background.anchor.setTo(0.5,0.5);
}

function home(state){
    state.home = GameInstance.add.button(1300,100,'home');
    state.home.inputEnabled = true;
    state.home.events.onInputDown.add(function(){
        check = 0;
        qns = 0;
        total = 0;
        maxCheck = 0;
        maxQns = 0;
        boolTween = false;
        this.qnsNum = 1;
        demo.randomMCQ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        GameInstance.state.start("state1");
    },this)
   
};

function drawMiniRect() {
    var miniRect = GameInstance.add.graphics(0,0);
    miniRect.lineStyle(1, 0x614126, 1); 
    miniRect.beginFill(0xffffff,0.9);
    miniRect.drawRect(150,150,240,90);
};

function listOfTable(state) {
      //state.firstTable ={};
      //Grouping (Addchild)
      state.t0 = GameInstance.add.sprite(0,0,'t0'); //Add table sprite
      state.t0.position.setTo(GameInstance.world.centerX-200-80, GameInstance.world.centerY+300); //Setting the position according the world
      state.t0.anchor.setTo(0.5,0.5); //Make it center.
      
      //Phaser.text(Table texts)
      state.firstTable.black = GameInstance.add.text(-80,-150,"0 black");
      state.firstTable.black.addColor('#ffffff', 0);
      state.firstTable.black.fontSize = 20;
      state.firstTable.black.fontWeight = 'normal';
      
      state.firstTable.brown = GameInstance.add.text(-80,-120,"1 brown");
      state.firstTable.brown.addColor('#ffffff', 0);
      state.firstTable.brown.fontSize = 20;
      state.firstTable.brown.fontWeight = 'normal';
      
      state.firstTable.red = GameInstance.add.text(-80,-90,"2 red");
      state.firstTable.red.addColor('#ffffff', 0);
      state.firstTable.red.fontSize = 20;
      state.firstTable.red.fontWeight = 'normal';
      
      state.firstTable.orange = GameInstance.add.text(-80,-60,"3 orange");
      state.firstTable.orange.addColor('#ffffff', 0);
      state.firstTable.orange.fontSize = 20;
      state.firstTable.orange.fontWeight = 'normal';
      
      state.firstTable.yellow = GameInstance.add.text(-80,-30,"4 yellow");
      state.firstTable.yellow.addColor('#000000', 0);
      state.firstTable.yellow.fontSize = 20;
      state.firstTable.yellow.fontWeight = 'normal';
      
      state.firstTable.green = GameInstance.add.text(-80,0,"5 green");
      state.firstTable.green.addColor('#ffffff', 0);
      state.firstTable.green.fontSize = 20;
      state.firstTable.green.fontWeight = 'normal';
      
      state.firstTable.blue = GameInstance.add.text(-80,30,"6 blue");
      state.firstTable.blue.addColor('#ffffff', 0);
      state.firstTable.blue.fontSize = 20;
      state.firstTable.blue.fontWeight = 'normal';
      
      state.firstTable.purple = GameInstance.add.text(-80,60,"7 purple");
      state.firstTable.purple.addColor('#ffffff', 0);
      state.firstTable.purple.fontSize = 20;
      state.firstTable.purple.fontWeight = 'normal';
      
      state.firstTable.grey = GameInstance.add.text(-80,90,"8 grey");
      state.firstTable.grey.addColor('#000000', 0);
      state.firstTable.grey.fontSize = 20;
      state.firstTable.grey.fontWeight = 'normal';
      
      state.firstTable.white = GameInstance.add.text(-80,125,"9 white");
      state.firstTable.white.addColor('#000000', 0);
      state.firstTable.white.fontSize = 20;
      state.firstTable.white.fontWeight = 'normal';
      
      state.t0.addChild(state.firstTable.black);
      state.t0.addChild(state.firstTable.brown);
      state.t0.addChild(state.firstTable.red);
      state.t0.addChild(state.firstTable.orange);
      state.t0.addChild(state.firstTable.yellow);
      state.t0.addChild(state.firstTable.green);
      state.t0.addChild(state.firstTable.blue);
      state.t0.addChild(state.firstTable.purple);
      state.t0.addChild(state.firstTable.grey);
      state.t0.addChild(state.firstTable.white);
      //end
      
      //Grouping for the 2nd table
      state.t1 = GameInstance.add.sprite(0,0,'t0'); //Add table sprite
      state.t1.position.setTo(GameInstance.world.centerX-25-80, GameInstance.world.centerY+300); //Setting the position according the world
      state.t1.anchor.setTo(0.5,0.5); //Make it center.
      
      //Phaser.text(Table texts)
      state.secondTable.black = GameInstance.add.text(-80,-150,"0 black");
      state.secondTable.black.addColor('#ffffff', 0);
      state.secondTable.black.fontSize = 20;
      state.secondTable.black.fontWeight = 'normal';
      
      state.secondTable.brown = GameInstance.add.text(-80,-120,"1 brown");
      state.secondTable.brown.addColor('#ffffff', 0);
      state.secondTable.brown.fontSize = 20;
      state.secondTable.brown.fontWeight = 'normal';
      
      state.secondTable.red = GameInstance.add.text(-80,-90,"2 red");
      state.secondTable.red.addColor('#ffffff', 0);
      state.secondTable.red.fontSize = 20;
      state.secondTable.red.fontWeight = 'normal';
      
      state.secondTable.orange = GameInstance.add.text(-80,-60,"3 orange");
      state.secondTable.orange.addColor('#ffffff', 0);
      state.secondTable.orange.fontSize = 20;
      state.secondTable.orange.fontWeight = 'normal';
      
      state.secondTable.yellow = GameInstance.add.text(-80,-30,"4 yellow");
      state.secondTable.yellow.addColor('#000000', 0);
      state.secondTable.yellow.fontSize = 20;
      state.secondTable.yellow.fontWeight = 'normal';
      
      state.secondTable.green = GameInstance.add.text(-80,0,"5 green");
      state.secondTable.green.addColor('#ffffff', 0);
      state.secondTable.green.fontSize = 20;
      state.secondTable.green.fontWeight = 'normal';
      
      state.secondTable.blue = GameInstance.add.text(-80,30,"6 blue");
      state.secondTable.blue.addColor('#ffffff', 0);
      state.secondTable.blue.fontSize = 20;
      state.secondTable.blue.fontWeight = 'normal';
      
      state.secondTable.purple = GameInstance.add.text(-80,60,"7 purple");
      state.secondTable.purple.addColor('#ffffff', 0);
      state.secondTable.purple.fontSize = 20;
      state.secondTable.purple.fontWeight = 'normal';
      
      state.secondTable.grey = GameInstance.add.text(-80,90,"8 grey");
      state.secondTable.grey.addColor('#000000', 0);
      state.secondTable.grey.fontSize = 20;
      state.secondTable.grey.fontWeight = 'normal';
      
      state.secondTable.white = GameInstance.add.text(-80,125,"9 white");
      state.secondTable.white.addColor('#000000', 0);
      state.secondTable.white.fontSize = 20;
      state.secondTable.white.fontWeight = 'normal';
      
      state.t1.addChild(state.secondTable.black);
      state.t1.addChild(state.secondTable.brown);
      state.t1.addChild(state.secondTable.red);
      state.t1.addChild(state.secondTable.orange);
      state.t1.addChild(state.secondTable.yellow);
      state.t1.addChild(state.secondTable.green);
      state.t1.addChild(state.secondTable.blue);
      state.t1.addChild(state.secondTable.purple);
      state.t1.addChild(state.secondTable.grey);
      state.t1.addChild(state.secondTable.white);
      //end
      
      //Grouping for the 3rd table
      state.t2 = GameInstance.add.sprite(0,0,'t1'); //Add table sprite
      state.t2.position.setTo(GameInstance.world.centerX+150-80, GameInstance.world.centerY+300); //Setting the position according the world
      state.t2.anchor.setTo(0.5,0.5); //Make it center.
      
      //Phaser.text(Table texts)
      state.thirdTable.black = GameInstance.add.text(-80,-150,"1 black");
      state.thirdTable.black.addColor('#ffffff', 0);
      state.thirdTable.black.fontSize = 20;
      state.thirdTable.black.fontWeight = 'normal';
      
      state.thirdTable.brown = GameInstance.add.text(-80,-120,"10 brown");
      state.thirdTable.brown.addColor('#ffffff', 0);
      state.thirdTable.brown.fontSize = 20;
      state.thirdTable.brown.fontWeight = 'normal';
      
      state.thirdTable.red = GameInstance.add.text(-80,-90,"100 red");
      state.thirdTable.red.addColor('#ffffff', 0);
      state.thirdTable.red.fontSize = 20;
      state.thirdTable.red.fontWeight = 'normal';
      
      state.thirdTable.orange = GameInstance.add.text(-80,-60,"1k orange");
      state.thirdTable.orange.addColor('#ffffff', 0);
      state.thirdTable.orange.fontSize = 20;
      state.thirdTable.orange.fontWeight = 'normal';
      
      state.thirdTable.yellow = GameInstance.add.text(-80,-30,"10k yellow");
      state.thirdTable.yellow.addColor('#000000', 0);
      state.thirdTable.yellow.fontSize = 20;
      state.thirdTable.yellow.fontWeight = 'normal';
      
      state.thirdTable.green = GameInstance.add.text(-80,0,"100k green");
      state.thirdTable.green.addColor('#ffffff', 0);
      state.thirdTable.green.fontSize = 20;
      state.thirdTable.green.fontWeight = 'normal';
      
      state.thirdTable.blue = GameInstance.add.text(-80,30,"1M blue");
      state.thirdTable.blue.addColor('#ffffff', 0);
      state.thirdTable.blue.fontSize = 20;
      state.thirdTable.blue.fontWeight = 'normal';
      
      state.thirdTable.purple = GameInstance.add.text(-80,60,"10M purple");
      state.thirdTable.purple.addColor('#ffffff', 0);
      state.thirdTable.purple.fontSize = 20;
      state.thirdTable.purple.fontWeight = 'normal';
      
      state.thirdTable.grey = GameInstance.add.text(-80,90,"0.01 silver");
      state.thirdTable.grey.addColor('#000000', 0);
      state.thirdTable.grey.fontSize = 20;
      state.thirdTable.grey.fontWeight = 'normal';
      
      state.thirdTable.white = GameInstance.add.text(-80,125,"0.1 gold");
      state.thirdTable.white.addColor('#000000', 0);
      state.thirdTable.white.fontSize = 20;
      state.thirdTable.white.fontWeight = 'normal';
      
      state.t2.addChild(state.thirdTable.black);
      state.t2.addChild(state.thirdTable.brown);
      state.t2.addChild(state.thirdTable.red);
      state.t2.addChild(state.thirdTable.orange);
      state.t2.addChild(state.thirdTable.yellow);
      state.t2.addChild(state.thirdTable.green);
      state.t2.addChild(state.thirdTable.blue);
      state.t2.addChild(state.thirdTable.purple);
      state.t2.addChild(state.thirdTable.grey);
      state.t2.addChild(state.thirdTable.white);
      //end
      //Grouping for the 4rd table
      state.t3 = GameInstance.add.sprite(0,0,'t2'); //Add table sprite
      state.t3.position.setTo(GameInstance.world.centerX+360-110, GameInstance.world.centerY+175); //Setting the position according the world
      state.t3.anchor.setTo(0.5,0.5); //Make it center.
      
      state.forthTable.red = GameInstance.add.text(-80,-25,"\xB1 2% red");
      state.forthTable.red.addColor('#ffffff', 0);
      state.forthTable.red.fontSize = 20;
      state.forthTable.red.fontWeight = 'normal';
      
      state.forthTable.gold = GameInstance.add.text(-80,5,"\xB1 5% gold");
      state.forthTable.gold.addColor('#000000', 0);
      state.forthTable.gold.fontSize = 20;
      state.forthTable.gold.fontWeight = 'normal';
      
      state.t3.addChild(state.forthTable.red);
      state.t3.addChild(state.forthTable.gold);
}
