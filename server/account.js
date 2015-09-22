/**
 * Created by gfrethem on 9/22/15.
 */
var random = require('./rando');
var usd = require('./usdconversion');


var compute = function(){
    return usd(random(100, 1000000));


};

var balance = function(balance){
    var msg = "Account balance: \n"
    return msg;
};

exports.compute = compute;
exports.balance = balance;