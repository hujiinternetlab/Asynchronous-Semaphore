// Took from http://gist.github.com/540427 (ryedin)
// ================================================

var log = require('./log');
var ASemaphore = require("./ASemaphore"),
    sys = require("sys");

var sem1 = ASemaphore.ctor(0,function(i) {
    sys.puts("ultimate callback... iteration that executed last = " + i);
});

//create a bunch of async ops, and we only want the sys.puts() call to happen after all have finished
for (var i = 0, l = 20; i < l; i++) {
    //before each async op, explicitly tell sem1 to increment internal counter
    sem1.v();
    var timeout = Math.floor(Math.random()*1001); //random amount of time, up to 1 second
    log.debug("Timeout - " + timeout);
    setTimeout(function(_i) { //close over i so we can see which iteration ends up being the last to timeout/execute
    	sem1.p(_i);
    }, timeout,i);
}