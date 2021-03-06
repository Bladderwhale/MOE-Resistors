demo.state4 = function(){};
demo.state4.prototype = {
    resistors:{}, firstTable:{}, secondTable:{}, thirdTable:{}, forthTable:{}, a:0,
    preload: function(){loadAssets();},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state4');
        addChangeStateEventListers();
        
        //Background
        background(this);
        
        //home
        home(this);
        
        //Arrow
        //GameInstance.add.sprite(360,642,'arrow2');
        this.txt= GameInstance.add.text(150,600,"Each band \nhas a value \nbased on the \nresistor colour \ncodes.");
        this.txt.fontWeight = 'normal';
        
      
        
        //Phaser.Text
        this.txtDesc = GameInstance.add.text(0,0,"Let us look at this resistor. \nThe coloured bands are numbered from left to right.");
        this.txtDesc.align = "left";
        this.txtDesc.position.setTo(GameInstance.world.centerX, GameInstance.world.centerY-320);
        this.txtDesc.anchor.setTo(0.5,0.5);
        this.txtDesc.fontSize = 30;
        this.txtDesc.lineSpacing = 10;
        
        this.txtDesc.fontWeight = 'normal';
        
        //Center
        this.resistors.r2 = GameInstance.add.sprite(0,0,'r3');
        this.resistors.r2.scale.setTo(0.35,0.35);
        this.resistors.r2.anchor.setTo(0.5,0.5);
        this.resistors.r2.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY/1.4);
        
         //Arrow
        this.arrow0 = GameInstance.add.sprite(this.resistors.r2.position.x+20,this.resistors.r2.position.y-30,'arrow0');
        this.arrow0.scale.setTo(1,0.8)
        
        this.txtA0 = GameInstance.add.text(this.resistors.r2.x+240,GameInstance.world.centerY-110,"There is a bigger spacing between \n3rd and 4th band.");
        this.txtA0.scale.setTo(0.88,0.88)
        this.txtA0.fontWeight = "normal";
        

        this.a1 = GameInstance.add.text(this.resistors.r2.x-245-70,GameInstance.world.centerY-10,"1st \nBand");
        this.a1.align = "center";
        this.a1.scale.setTo(0.7,0.7);
        
        //linegraphics for the first text (1st Band)
        graphics1 = GameInstance.add.graphics(0,0);
        graphics1.lineStyle(3,0x000000,1);
        graphics1.moveTo(this.a1.position.x+25,this.a1.position.y);
        graphics1.lineTo(this.a1.position.x+25,this.a1.position.y-40);
        graphics1.moveTo(this.a1.position.x+25,this.a1.position.y-40);
        graphics1.lineTo(this.a1.position.x+245,this.a1.position.y-40);
        graphics1.moveTo(this.a1.position.x+245,this.a1.position.y-40);
        graphics1.lineTo(this.a1.position.x+245,this.a1.position.y-80);
        graphics1.endFill();
        /*this.arrowhead1 = GameInstance.add.sprite(660,403,'arrow1');
        this.arrowhead1.angle = 50;*/
    
        this.a2 = GameInstance.add.text(this.resistors.r2.x-35-110,GameInstance.world.centerY-10,"2nd \nBand");
        this.a2.align = "center";
        this.a2.scale.setTo(0.7,0.7);
        
        //linegraphics for the first text (2st Band)
        graphics2 = GameInstance.add.graphics(0,0);
        graphics2.lineStyle(3,0x000000,1);
        graphics2.moveTo(this.a2.position.x+25,this.a2.position.y);
        graphics2.lineTo(this.a2.position.x+25,this.a2.position.y-30);
        graphics2.moveTo(this.a2.position.x+25,this.a2.position.y-30);
        graphics2.lineTo(this.a2.position.x+110,this.a2.position.y-30);
        graphics2.moveTo(this.a2.position.x+110,this.a2.position.y-30);
        graphics2.lineTo(this.a2.position.x+110,this.a2.position.y-80);
        graphics2.endFill();
        
        /*this.arrowhead2 = GameInstance.add.sprite(709,409,'arrow1');
        this.arrowhead2.angle = -10;*/
        //3rd band
        this.a3 = GameInstance.add.text(this.resistors.r2.x+120-90,GameInstance.world.centerY-10,"3rd \nBand");
        this.a3.align = "center";
        this.a3.scale.setTo(0.7,0.7);
        
        //linegraphics for the first text (3rd Band)
        graphics3 = GameInstance.add.graphics(0,0);
        graphics3.lineStyle(3,0x000000,1);
        graphics3.moveTo(this.a3.position.x+25,this.a3.position.y);
        graphics3.lineTo(this.a3.position.x+25,this.a3.position.y-30);
        graphics3.moveTo(this.a3.position.x+25,this.a3.position.y-30);
        graphics3.lineTo(this.a3.position.x-35,this.a3.position.y-30);
        graphics3.moveTo(this.a3.position.x-35,this.a3.position.y-30);
        graphics3.lineTo(this.a3.position.x-35,this.a3.position.y-80);
        graphics3.endFill();
        
        /*this.arrowhead3 = GameInstance.add.sprite(757,420,'arrow1');
        this.arrowhead3.angle = -50;*/
      
        this.a4 = GameInstance.add.text(this.resistors.r2.x+300-90,GameInstance.world.centerY-10,"4th \nBand");
        this.a4.align = "center";
        this.a4.scale.setTo(0.7,0.7);
        
        //linegraphics for the first text (3st Band)
        graphics4 = GameInstance.add.graphics(0,0);
        graphics4.lineStyle(3,0x000000,1);
        graphics4.moveTo(this.a4.position.x+25,this.a4.position.y);
        graphics4.lineTo(this.a4.position.x+25,this.a4.position.y-30);
        graphics4.moveTo(this.a4.position.x+25,this.a4.position.y-30);
        graphics4.lineTo(this.a4.position.x-145,this.a4.position.y-30);
        graphics4.moveTo(this.a4.position.x-145,this.a4.position.y-30);
        graphics4.lineTo(this.a4.position.x-145,this.a4.position.y-80);
        graphics4.endFill();
        
        /*this.arrowhead4 = GameInstance.add.sprite(812,420,'arrow1');
        this.arrowhead4.angle = -50;*/
        
        //Grouping (Addchild)
        this.t0 = GameInstance.add.sprite(0,0,'t0'); //Add table sprite
        this.t0.position.setTo(GameInstance.world.centerX-200-80, GameInstance.world.centerY+200); //Setting the position according the world
        this.t0.anchor.setTo(0.5,0.5); //Make it center.
        
        //Phaser.text(Table texts)
        this.firstTable.black = GameInstance.add.text(-80,-150,"0 black");
        this.firstTable.black.addColor('#ffffff', 0);
        this.firstTable.black.fontSize = 20;
        this.firstTable.black.fontWeight = 'normal';
        
        this.firstTable.brown = GameInstance.add.text(-80,-120,"1 brown");
        this.firstTable.brown.addColor('#ffffff', 0);
        this.firstTable.brown.fontSize = 20;
        this.firstTable.brown.fontWeight = 'normal';
        
        this.firstTable.red = GameInstance.add.text(-80,-90,"2 red");
        this.firstTable.red.addColor('#ffffff', 0);
        this.firstTable.red.fontSize = 20;
        this.firstTable.red.fontWeight = 'normal';
        
        this.firstTable.orange = GameInstance.add.text(-80,-60,"3 orange");
        this.firstTable.orange.addColor('#ffffff', 0);
        this.firstTable.orange.fontSize = 20;
        this.firstTable.orange.fontWeight = 'normal';
        
        this.firstTable.yellow = GameInstance.add.text(-80,-30,"4 yellow");
        this.firstTable.yellow.addColor('#000000', 0);
        this.firstTable.yellow.fontSize = 20;
        this.firstTable.yellow.fontWeight = 'normal';
        
        this.firstTable.green = GameInstance.add.text(-80,0,"5 green");
        this.firstTable.green.addColor('#ffffff', 0);
        this.firstTable.green.fontSize = 20;
        this.firstTable.green.fontWeight = 'normal';
        
        this.firstTable.blue = GameInstance.add.text(-80,30,"6 blue");
        this.firstTable.blue.addColor('#ffffff', 0);
        this.firstTable.blue.fontSize = 20;
        this.firstTable.blue.fontWeight = 'normal';
        
        this.firstTable.purple = GameInstance.add.text(-80,60,"7 purple");
        this.firstTable.purple.addColor('#ffffff', 0);
        this.firstTable.purple.fontSize = 20;
        this.firstTable.purple.fontWeight = 'normal';
        
        this.firstTable.grey = GameInstance.add.text(-80,90,"8 grey");
        this.firstTable.grey.addColor('#000000', 0);
        this.firstTable.grey.fontSize = 20;
        this.firstTable.grey.fontWeight = 'normal';
        
        this.firstTable.white = GameInstance.add.text(-80,125,"9 white");
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
        this.t1 = GameInstance.add.sprite(0,0,'t0'); //Add table sprite
        this.t1.position.setTo(GameInstance.world.centerX-25-80, GameInstance.world.centerY+200); //Setting the position according the world
        this.t1.anchor.setTo(0.5,0.5); //Make it center.
        
        //Phaser.text(Table texts)
        this.secondTable.black = GameInstance.add.text(-80,-150,"0 black");
        this.secondTable.black.addColor('#ffffff', 0);
        this.secondTable.black.fontSize = 20;
        this.secondTable.black.fontWeight = 'normal';
        
        this.secondTable.brown = GameInstance.add.text(-80,-120,"1 brown");
        this.secondTable.brown.addColor('#ffffff', 0);
        this.secondTable.brown.fontSize = 20;
        this.secondTable.brown.fontWeight = 'normal';
        
        this.secondTable.red = GameInstance.add.text(-80,-90,"2 red");
        this.secondTable.red.addColor('#ffffff', 0);
        this.secondTable.red.fontSize = 20;
        this.secondTable.red.fontWeight = 'normal';
        
        this.secondTable.orange = GameInstance.add.text(-80,-60,"3 orange");
        this.secondTable.orange.addColor('#ffffff', 0);
        this.secondTable.orange.fontSize = 20;
        this.secondTable.orange.fontWeight = 'normal';
        
        this.secondTable.yellow = GameInstance.add.text(-80,-30,"4 yellow");
        this.secondTable.yellow.addColor('#000000', 0);
        this.secondTable.yellow.fontSize = 20;
        this.secondTable.yellow.fontWeight = 'normal';
        
        this.secondTable.green = GameInstance.add.text(-80,0,"5 green");
        this.secondTable.green.addColor('#ffffff', 0);
        this.secondTable.green.fontSize = 20;
        this.secondTable.green.fontWeight = 'normal';
        
        this.secondTable.blue = GameInstance.add.text(-80,30,"6 blue");
        this.secondTable.blue.addColor('#ffffff', 0);
        this.secondTable.blue.fontSize = 20;
        this.secondTable.blue.fontWeight = 'normal';
        
        this.secondTable.purple = GameInstance.add.text(-80,60,"7 purple");
        this.secondTable.purple.addColor('#ffffff', 0);
        this.secondTable.purple.fontSize = 20;
        this.secondTable.purple.fontWeight = 'normal';
        
        this.secondTable.grey = GameInstance.add.text(-80,90,"8 grey");
        this.secondTable.grey.addColor('#000000', 0);
        this.secondTable.grey.fontSize = 20;
        this.secondTable.grey.fontWeight = 'normal';
        
        this.secondTable.white = GameInstance.add.text(-80,125,"9 white");
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
        //end
        
        //Grouping for the 3rd table
        this.t2 = GameInstance.add.sprite(0,0,'t1'); //Add table sprite
        this.t2.position.setTo(GameInstance.world.centerX+150-80, GameInstance.world.centerY+200); //Setting the position according the world
        this.t2.anchor.setTo(0.5,0.5); //Make it center.
        
        //Phaser.text(Table texts)
        this.thirdTable.black = GameInstance.add.text(-80,-150,"1 black");
        this.thirdTable.black.addColor('#ffffff', 0);
        this.thirdTable.black.fontSize = 20;
        this.thirdTable.black.fontWeight = 'normal';
        
        this.thirdTable.brown = GameInstance.add.text(-80,-120,"10 brown");
        this.thirdTable.brown.addColor('#ffffff', 0);
        this.thirdTable.brown.fontSize = 20;
        this.thirdTable.brown.fontWeight = 'normal';
        
        this.thirdTable.red = GameInstance.add.text(-80,-90,"100 red");
        this.thirdTable.red.addColor('#ffffff', 0);
        this.thirdTable.red.fontSize = 20;
        this.thirdTable.red.fontWeight = 'normal';
        
        this.thirdTable.orange = GameInstance.add.text(-80,-60,"1k orange");
        this.thirdTable.orange.addColor('#ffffff', 0);
        this.thirdTable.orange.fontSize = 20;
        this.thirdTable.orange.fontWeight = 'normal';
        
        this.thirdTable.yellow = GameInstance.add.text(-80,-30,"10k yellow");
        this.thirdTable.yellow.addColor('#000000', 0);
        this.thirdTable.yellow.fontSize = 20;
        this.thirdTable.yellow.fontWeight = 'normal';
        
        this.thirdTable.green = GameInstance.add.text(-80,0,"100k green");
        this.thirdTable.green.addColor('#ffffff', 0);
        this.thirdTable.green.fontSize = 20;
        this.thirdTable.green.fontWeight = 'normal';
        
        this.thirdTable.blue = GameInstance.add.text(-80,30,"1M blue");
        this.thirdTable.blue.addColor('#ffffff', 0);
        this.thirdTable.blue.fontSize = 20;
        this.thirdTable.blue.fontWeight = 'normal';
        
        this.thirdTable.purple = GameInstance.add.text(-80,60,"10M purple");
        this.thirdTable.purple.addColor('#ffffff', 0);
        this.thirdTable.purple.fontSize = 20;
        this.thirdTable.purple.fontWeight = 'normal';
        
        this.thirdTable.grey = GameInstance.add.text(-80,90,"0.01 silver");
        this.thirdTable.grey.addColor('#000000', 0);
        this.thirdTable.grey.fontSize = 20;
        this.thirdTable.grey.fontWeight = 'normal';
        
        this.thirdTable.white = GameInstance.add.text(-80,125,"0.1 gold");
        this.thirdTable.white.addColor('#000000', 0);
        this.thirdTable.white.fontSize = 20;
        this.thirdTable.white.fontWeight = 'normal';
        
        this.t2.addChild(this.thirdTable.black);
        this.t2.addChild(this.thirdTable.brown);
        this.t2.addChild(this.thirdTable.red);
        this.t2.addChild(this.thirdTable.orange);
        this.t2.addChild(this.thirdTable.yellow);
        this.t2.addChild(this.thirdTable.green);
        this.t2.addChild(this.thirdTable.blue);
        this.t2.addChild(this.thirdTable.purple);
        this.t2.addChild(this.thirdTable.grey);
        this.t2.addChild(this.thirdTable.white);
        //end
        //Grouping for the 4rd table
        this.t3 = GameInstance.add.sprite(0,0,'t2'); //Add table sprite
        this.t3.position.setTo(GameInstance.world.centerX+360-110, GameInstance.world.centerY+75); //Setting the position according the world
        this.t3.anchor.setTo(0.5,0.5); //Make it center.
        
        this.forthTable.red = GameInstance.add.text(-80,-25,"\xB1 2% red");
        this.forthTable.red.addColor('#ffffff', 0);
        this.forthTable.red.fontSize = 20;
        this.forthTable.red.fontWeight = 'normal';
        
        this.forthTable.gold = GameInstance.add.text(-80,5,"\xB1 5% gold");
        this.forthTable.gold.addColor('#000000', 0);
        this.forthTable.gold.fontSize = 20;
        this.forthTable.gold.fontWeight = 'normal';
        
        this.t3.addChild(this.forthTable.red);
        this.t3.addChild(this.forthTable.gold);
        
        
        

        this.btnBack = GameInstance.add.button(0,0,'button');
        this.txtBack = GameInstance.add.text(0,0, "Back");
        this.btnBack.scale.setTo(0.5,0.5);
        this.btnBack.anchor.setTo(0.5,0.5);
        this.btnBack.position.setTo(GameInstance.world.centerX-550,GameInstance.world.centerY*1.75);
        this.txtBack.position.setTo(GameInstance.world.centerX-580,GameInstance.world.centerY*1.72);

        this.btnBack.events.onInputDown.add(function(){GameInstance.state.start("state3");},this);

        //Coordinates
        coorindates(this);

        //Next button
        addBtnNext(this);
        this.addbtnNext.events.onInputDown.add(function(){
            if (this.a == 0) {
            this.tweenTxt.start();
            this.tweenTxt.onComplete.add(function(){this.tween1.start();},this);
            this.tween1.onComplete.add(function(){this.tween0.start();},this);
            this.tween0.onComplete.add(function(){this.tween2.start();},this);
            this.tween2.onComplete.add(function(){this.tween4.start();},this);
            this.tween4.onComplete.add(function(){this.tween3.start();},this);
            this.tween3.onComplete.add(function(){this.tween5.start();},this);
            this.tween5.onComplete.add(function(){this.tween7.start();},this);
            this.tween7.onComplete.add(function(){this.tween6.start();},this);
            this.tween6.onComplete.add(function(){this.tween8.start();},this);
            this.tween8.onComplete.add(function(){this.tween10.start();},this);
            this.tween10.onComplete.add(function(){this.tween9.start();},this);
            this.tween9.onComplete.add(function(){this.tween11.start();},this);
            this.tween11.onComplete.add(function(){this.a = 2;},this);
            }
            else if (this.a == 2) {
            this.tween12.start();
            this.tween13.start();
            this.tween13.onComplete.add(function(){this.a = 3;},this);
            }
            else if (this.a == 3) {
            GameInstance.state.start('state5');
                }
        },this);
       

        //Alpha
        this.txt.alpha = 0;
        
        this.tweenTxt = GameInstance.add.tween(this.txt).to({alpha:1},1000,Phaser.Easing.Linear.None);

        this.a1.alpha = 0;
        this.t0.alpha = 0;
        graphics1.alpha = 0;

        this.a2.alpha = 0;
        this.t1.alpha = 0;
        graphics2.alpha = 0;

        this.a3.alpha = 0;
        this.t2.alpha = 0;
        graphics3.alpha = 0;

        this.a4.alpha = 0;
        this.t3.alpha = 0;
        graphics4.alpha = 0;

        this.tween0 = GameInstance.add.tween(this.a1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween1 = GameInstance.add.tween(this.t0).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween2 = GameInstance.add.tween(graphics1).to({alpha:1},1000,Phaser.Easing.Linear.None);

        this.tween3 = GameInstance.add.tween(this.a2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween4 = GameInstance.add.tween(this.t1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween5 = GameInstance.add.tween(graphics2).to({alpha:1},1000,Phaser.Easing.Linear.None);

        this.tween6 = GameInstance.add.tween(this.a3).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween7 = GameInstance.add.tween(this.t2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween8 = GameInstance.add.tween(graphics3).to({alpha:1},1000,Phaser.Easing.Linear.None);

        
        this.tween9 = GameInstance.add.tween(this.a4).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween10 = GameInstance.add.tween(this.t3).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween11 = GameInstance.add.tween(graphics4).to({alpha:1},1000,Phaser.Easing.Linear.None);

        this.arrow0.alpha = 0;
        this.txtA0.alpha = 0;

        this.tween12 = GameInstance.add.tween(this.arrow0).to({alpha:1},1000,Phaser.Easing.Linear.None);
        this.tween13 = GameInstance.add.tween(this.txtA0).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
    },
    update: function(){
        console.log("X: " + this.dots.x + " Y: " + this.dots.y);
    }
};