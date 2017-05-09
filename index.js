var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('Goodby infrastructure');
});

app.listen(process.env.PORT || 5000);
