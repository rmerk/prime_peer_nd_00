/**
 * Created by gfrethem on 9/22/15.
 */
var http = require('http');
var randomNumber = require('./rando');
var account = require('./account');


http.createServer(function(request, response) {
    response.writeHead(200);
    //response.write('Hello\n');
    response.write(account.balance());
    response.write("$" + account.compute().toString());
    response.write("\n");
    response.end();
}).listen(3000);

console.log('Listening on port 3000');

