Initialization()
var n = 1
setInterval(function(){
    makeLeave(getImage(n))
    .one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
},3000)

function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}
function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3
        }
    }
    return n
}
function Initialization(){
    n = 1 
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
}
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}