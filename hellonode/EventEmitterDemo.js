const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged',(e) => {
    console.log(`id : ${e.id} and text : ${e.text}`);
});

emitter.emit('messageLogged',{id : 1, text : 'Please Do something!!!'});

