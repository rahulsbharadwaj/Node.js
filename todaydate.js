var http = require('http')
var dt = require('./firstmodel.js')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.todatetime());
  res.end();
}).listen(2080);