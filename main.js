var last_x, last_y;
var mouse_event = "Empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = "3";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

	color = document.getElementById("color").value;
	width = document.getElementById("width").value;
	mouse_event = "mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
	currentx = e.clientX - canvas.offsetLeft;
	currenty = e.clientY - canvas.offsetTop;

	if (mouse_event == "mouseDown") {
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = width;

		ctx.moveTo(last_x, last_y);
		ctx.lineTo(currentx, currenty);
		ctx.stroke();
		console.log("lastx and lasty are"+last_x+","+last_y);
		console.log("currentx and currenty are"+currentx+","+currenty);
	}
	last_x = currentx;
	last_y = currenty;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
	mouse_eventvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
	mouse_event = "mouseleave";
}

function clear() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
