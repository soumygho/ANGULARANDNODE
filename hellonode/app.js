//path module
const path = require('path');
var pathObj = path.parse(__dirname);
console.log(pathObj);

//os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
//console.log('Total Memory : '+ totalMemory);
//Temaplate string
console.log(`Total Memory :  ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);

//filesystem module
const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log('Error',err)
    else console.log('Result',files);

});

//event module

const EventEmitter = require('events');
const emitter = new EventEmitter();
//register a listner
emitter.on('messageLogged',function(){
    console.log('Listener called')
});
//raise an event
emitter.emit('messageLogged');
