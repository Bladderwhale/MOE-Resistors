demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state7');
         addChangeStateEventListers(); 
    },
    update: function(){}
};