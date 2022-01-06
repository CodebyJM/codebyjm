const path = require('path');
var http = require('http');
var enforce = require('express-sslify');
var express = require('express');
var app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(enforce.HTTPS());
 
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});


