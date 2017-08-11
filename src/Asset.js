(function(ns){
    var Bird = Hilo.Class.create({
        // Extends: Animal,
        // Mixes: EventMixin,
        constructor: function(name){
            this.name = name;
        },
        fly: function(){
            console.log('I am flying');
        },
        Statics: {
            isBird: function(bird){
                return bird instanceof Bird;
            }
        }
    });
     
    var swallow = new Bird('swallow');
    swallow.fly();
    Bird.isBird(swallow);
})()