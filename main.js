div = document.createElement('div');
div.style.width = 100 + 'px'
div.style.height = 100 + 'px'
div.style.border = '1px solid red'
div.style.position = 'absolute'
var body = document.querySelector('body')
body.appendChild(div)

var darging = false;
var lastX
var lastY
div.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dargging = true;
}
document.onmousemove = function (e) {
    if (dargging == true) {
        detalX = e.clientX - lastX;
        detalY = e.clientY - lastY;
        var top = parseInt(div.style.top) || 0;
        var left = parseInt(div.style.left) || 0;
        div.style.top = top + detalY + 'px';
        div.style.left = left + detalX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }
}
document.onmouseup = function (e) {
    dargging = false;
}
