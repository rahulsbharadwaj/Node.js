var http = require("http");
var fs = require("fs");

	fs.appendFile("file1.txt","this is the content",function(err){
		if (err) throw err;
		console.log("file saved successfully")
	});
	
	http.createServer(function(req,res){
		fs.readFile("file1.txt",function(err,data){
			res.writeHead(200,{'content-type':'text/html'});
			res.write(data);
			res.end();
		});
	}).listen(4300);