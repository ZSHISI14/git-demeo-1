
var yyy = document.getElementById('x');
var context = yyy.getContext('2d');

var lineWidth = 5
thin.onclick = function (){
    lineWidth =5
}
thick.onclick = function (){
    lineWidth = 10
}
clear.onclick = function(){
    context.clearRect(0, 0, yyy.width, yyy.height);
}
save.onclick = function(){
    var a=document.createElement('a')
    var url = yyy.toDataURL("image/png")
    document.body.appendChild(a)
    a.href = url
    a.download = 'img'
    a.click()
}
function autoSetcanvasSize(canvas) {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }
    function setCanvasSize() {
        var pagewidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pagewidth
        canvas.height = pageHeight
    }
    context.fillStyle = "white";
    context.fillRect(0, 0,yyy.width, yyy.height);
}
var using = false
var lastPoint = {
    x: undefined,
    y: undefined
}
function listenToUse(canvas) {
    if (document.body.ontouchstart !== undefined) {
        canvas.ontouchstart = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            using = true
            if (EraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastPoint = { "x": x, "y": y }
            }
         }
        canvas.ontouchmove = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            if (!using) { return }
            if (EraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                var newPoint = { "x": x, "y": y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
         }
        canvas.ontouchend = function (a) { 
            using = false
        }
    } else {
        yyy.onmousedown = function (a) {
            var x = a.clientX
            var y = a.clientY
            using = true
            if (EraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastPoint = { "x": x, "y": y }
            }
        }
        yyy.onmousemove = function (a) {
            var x = a.clientX
            var y = a.clientY
            if (!using) { return }
            if (EraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                var newPoint = { "x": x, "y": y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
        yyy.onmouseup = function (a) {
            using = false
        }
    }


}
function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.lineWidth = lineWidth
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}
black.onclick= function(){
    context.strokeStyle='black'
    black.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
    blue.classList.remove('active')
}
red.onclick= function(){
    context.strokeStyle='red'
    red.classList.add('active')
    yellow.classList.remove('active')
    blue.classList.remove('active')
    black.classList.remove('active')
}
yellow.onclick= function(){
    context.strokeStyle='yellow'
    yellow.classList.add('active')
    blue.classList.remove('active')
    red.classList.remove('active')
    black.classList.remove('active')
}
blue.onclick= function(){
    context.strokeStyle='blue'
    blue.classList.add('active')
    yellow.classList.remove('active')
    red.classList.remove('active')
    black.classList.remove('active') 
}
autoSetcanvasSize(yyy)
listenToUse(yyy)
var EraserEnable = false
eraser.onclick = function () {
    EraserEnable = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
pen.onclick = function () {
    EraserEnable = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}


        


