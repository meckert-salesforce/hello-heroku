var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('Hallo CeBit 2016');
});

app.listen(process.env.PORT || 5000);
