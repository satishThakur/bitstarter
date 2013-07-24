var rest = require('restler');

rest.get('http://www.google.co.in').on('complete', function(result){
    if(result instanceof Error ){
	console.log("Error loading...");
    }else{
	//the api returns string... proof here.
	console.log(typeof result);
	console.log(result);
    }
});

console.log('end....');