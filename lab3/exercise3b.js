var BindingClass = require('./exercise3');

var bindingObject = new BindingClass();

bindingObject.on('note', ()=>{console.log(`Violin is playing music for the binding`)});