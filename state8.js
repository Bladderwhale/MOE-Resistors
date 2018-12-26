demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state8');
         addChangeStateEventListers(); 

         var test = demo.state4.prototype;
         test.create();
         console.log(test);

    },
    update: function(){}
};