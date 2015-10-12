var connect = require('connect');
connect.createServer(connect.static("../tempFactory")).listen(7707);
console.log('listening on port 7707 and enter Ctrl + C to Exit');