function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    game.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
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
};

//Preload all the game assets.
function loadAssets() {
    game.load.video('intro', 'assets/intro.mp4');
    game.load.image('credits', 'assets/credits.png');
    game.load.image('dots', 'assets/dots.png');
    game.load.image('button','assets/button.png');
    game.load.image('board', 'assets/board.png');
    game.load.image('table', 'assets/table.png');
    game.load.image('home', 'assets/home.png');
};

function coorindates(state) {
    state.dots = game.add.sprite(0,0,'dots');
    state.dots.inputEnabled = true;
    state.dots.input.enableDrag(true);
    state.dots.scale.setTo(0.1, 0.1);
};

function addBtn(state) {
    state.addPracticeBtn = game.add.button(0,0,'button');
    state.addLearnBtn = game.add.button(0,0,'button');
    state.txtLearn = game.add.text(0,0, "Learn");
    state.txtPractice = game.add.text(0,0, "Practice");
    state.txtLearn.anchor.setTo(0.5,0.5);;
    state.txtPractice.anchor.setTo(0.5,0.5);
    state.txtLearn.fontSize = 65;
    state.txtPractice.fontSize = 65;
};

function background(state) {
    state.background = game.add.sprite(0,0,'board');
    state.background.position.setTo(game.world.centerX,game.world.centerY);
    state.background.scale.setTo(1.5,1.5);
    state.background.anchor.setTo(0.5,0.5);
}

function home(state){
    state.home = game.add.sprite(500,100,'home');
}
