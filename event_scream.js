var event = require('events');
var eventemitter = new event.EventEmitter();

var myeventhandler=function(){
	console.log("Lo bhai fire ho gya aapka event");
}
eventemitter.on("yuhoo",myeventhandler);
eventemitter.emit("yuhoo");