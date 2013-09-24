/*for(var i=0;i<5;i++){
	setTimeout(function() {
		console.log(i);
	},0);
}*/

var startTime = new Date();

setTimeout(function() {
	var endTime = new Date();
	console.log(endTime - startTime);
},500);

while(new Date() - startTime < 1000){}