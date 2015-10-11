var connect = require('connect');
connect.createServer(connect.static("../tempFactory")).listen(7777);
console.log('listening on port 7777 and enter Ctrl + C to Exit');