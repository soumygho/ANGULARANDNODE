const fs = require('fs');

const files = fs.readdirSync('./');

const filesAsync = fs.readdir('./',(err,files) => {
    if(err) console.log(err);
    else console.log('Result ',files);
});
console.log(files);