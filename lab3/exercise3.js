var EventEmitter = require('events');

class Violin extends EventEmitter{
    constructor(){
        super();
        setInterval(()=>{this.emit('note');}, 1000);
    }
}
//var myViolin = new Violin();
//myViolin.on('note', ()=>{console.log(`Violin is playing music`)});

module.exports = Violin;