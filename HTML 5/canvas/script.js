const mycanvas = document.getElementById("mycanvas");

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext("2d");
c.fillStyle = "blue";
c.strokeStyle = "#333";
c.lineWidth = 5;
c.fillRect();