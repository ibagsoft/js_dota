var http = require('http'),
		fs = require('fs'),
		mime = require('./libs/mime').types,
		path = require('path'),
		url = require('url');

http.createServer(function(req,res) {
	var filename = url.parse(req.url).pathname.slice(1);
	fs.exists(filename,function(exist) {
		if(exist){
			var ext = path.extname(filename).slice(1);
			var content_type = mime[ext] || "text/plain";
			fs.readFile(filename,'utf-8',function(err,fc) {
				res.writeHead(200,{'content-type':content_type});
				res.write(fc);
				res.end();
			});
		}
		else{
			if(req.method==='GET' || filename === 'todos'){
				var todos = [{id:1,title:'Todo1'}
										,{id:2,title:'Todo2'}
										,{id:3,title:'Todo3'}];
				res.write(JSON.stringify(todos));
				res.end();
			}
		}
	});
}).listen(9432);

console.log("Server running at http://localhost:9432");