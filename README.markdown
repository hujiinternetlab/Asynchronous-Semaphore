ASemaphore is a structure that let you fire a method only after N async
functions have been executed.

(The name has been extracted out of [Semaphore](http://en.wikipedia.org/wiki/Semaphore_(programming)) 

Latest Version 0.1

# Usage

ASemaphore is a module:

1) Require it: 
	var ASemaphore = require("./ASemaphore"),
2) Construct it:
	var sem = ASemaphore.ctor(0,function(args..) {
    	//some code to fire
	});
3) Before any Async call:
	sem.v();
4) Nested to the callback function call:
	sem.p(args..);
  

Requires Node.JS v0.1.99 or greater.



#Examples
[test.js](http://github.com/mrohad/ASemaphore/blob/master/test.js)  
thanks to [http://gist.github.com/540427](http://gist.github.com/540427) (ryedin)
	
# Bugs and Contribution
Please let us know if you find any bug or if you would like to contribute code: 
mrohad.jsf at gmail