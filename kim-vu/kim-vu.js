var canvas = null;
var img = null;
var frame = 0; 

function loadAnimation () {
	canvas = document.getElementById('animationCanvas');
	img = new Image(); 
	img.src = 'images/animation.jpg';
	img.onload = loaded();
	redraw();	
}

function loaded() { 
	imageReady = true; 
	setTimeout( update, 1000 / 2 );
}

function update() { 
	redraw(); 
	frame++; 
	if (frame >= 20) frame = 0; 
	setTimeout( update, 1000 / 2 ); 
}

function redraw() { 
	canvas.width = 302.4; 
	canvas.height = 227; 
	var ctx = canvas.getContext("2d"); 
	ctx.fillStyle = '#000000'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	if( frame >= 10 ) {
		offset = 302.4*(10 - (frame-9));
	}
	else {
		offset = frame*302.4;
	}
	if( imageReady ) {
	    ctx.drawImage(img,offset,0,302.4,227,canvas.width/2 - 151.2, canvas.height/2 - 113.5, 302.4, 227);
	}
}

$(document).ready(function(){
    loadAnimation();
})