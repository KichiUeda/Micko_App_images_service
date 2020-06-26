const express = require('express');


const app = express();

app.use(express.static('public'));

//console.log(__dirname + '/public/lib')

var port = 3000;
app.listen(port);
console.log(`Server Live listening on port ${port}`);