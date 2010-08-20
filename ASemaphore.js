//Async Semaphore
var log = require('./log');

function asemaphore(semaphore,fireFunc){
	this.semaphore = (semaphore==undefined?0:semaphore);
	this.fire = fireFunc;
	log.debug("Starting Asemaphore with semaphore:" +this.semaphore);
	this.v = function(){
		++this.semaphore;
		log.debug("Asemaphore semaphore after v(): " +this.semaphore);
		return this.semaphore;
	};
	
	this.p = function(){
		if((--this.semaphore)<1){
			log.debug("Asemaphore fire() after p()");
			this.fire.apply(this,arguments);
		}
		//log.debug("Asemaphore counter after p(): " +this.counter);
		return this.counter;
	};
	
	this.warpCallBack = function(cb){
		if(cb == undefined)
			return undefined;
		else{
			var sem = this;
			sem.v();
			return function(){
				cb.apply(sem, Array.prototype.slice.call(arguments, 0));
				sem.p();
			};
		}
	};
};

exports.ctor = function(semaphore,fireFunc){
	return new asemaphore(semaphore,fireFunc);
};