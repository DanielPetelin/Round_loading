var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pi = Math.PI;
var k = 2 * pi / 100;
var x = 0;
var max = 100;
var timeout;

draw();

function draw() {
    var color = getColor(x);
    ctx.clearRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, x * k, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(x + '%', 125, 145);
    ctx.closePath();

    x++;
    if (x <= max) {
        timeout = setTimeout(draw, 80);
    } else {
        clearTimeout(timeout);
    }
};

function getColor(x) {
    x = x * 255 / 100;
    y = 255 - x;
    var color = 'rgb('+x+', '+y+', 0)';
    console.log(color);
    return color;
};