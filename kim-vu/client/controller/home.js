var canvas = null;
var img = null;
var frame = 0; 

Template.home.rendered = function() {
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
	console.log('resizing');
	canvas.width = 620; 
	canvas.height = 465; 
	var ctx = canvas.getContext("2d"); 
	ctx.fillStyle = '#000000'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	if( frame >= 10 ) {
		offset = 620*(10 - (frame-9));
	}
	else {
		offset = frame*620;
	}
	console.log("offset: " + offset + " frame: " + frame);
	if( imageReady ) {
	    ctx.drawImage(img,offset,0,620,465,canvas.width/2 - 310, canvas.height/2 - 232.5, 620, 465);
	}
}
