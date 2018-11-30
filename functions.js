function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    GameInstance.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    GameInstance.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

function addChangeStateEventListers() { //Global Function (All scripts can access to it)
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); //Second step@
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
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);
};

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
    state.txtLearn = GameInstance.add.text(0,0, "Learn");
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
    state.addbtnNext2.position.setTo(GameInstance.world.centerX*1.71,GameInstance.world.centerY*1.72)

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
    miniRect.beginFill(0x614126,0.3);
    miniRect.drawRect(150,150,240,90);
}
