var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use((req, res) => {
    res.status(404).send('/404');
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);