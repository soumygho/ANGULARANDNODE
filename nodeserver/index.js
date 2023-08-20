const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World!!!');
});
console.log(require);
app.listen(3001,()=>{console.log('Litening on port 3001...')});
