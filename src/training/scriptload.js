function scriptload (name,callback) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src=name;
	document.body.appendChild(script);
	localStorage['s'] = script;
	callback();
}

function ajaxload (name,callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('get',name);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.text = xhr.responseText;
			document.body.appendChild(script);
			callback();
		}
	};
	xhr.send(null);
}

ajaxload('libs/jquery.js',function() {
	console.log('script loaded.');
});