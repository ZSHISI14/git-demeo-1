
/*Initialization()
var n = 1
var interval = setInterval(function(){
    makeLeave(getImage(n))
    .one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
},3000)
document.addEventListener('visibilitychange',function(){
    if(document[hidden]){
        window.clearInterval(interval)
    }else{
        setInterval(function(){
            makeLeave(getImage(n))
            .one('transitionend',function(e){
                makeEnter($(e.currentTarget))
            })
            makeCurrent(getImage(n+1))
            n += 1
        },3000)
    }
})

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
}*/
var $buttons = $('#buttonWrapper>button')
var $slide = $('#slide')
var $images = $('#slide>img')
let current = 0
$slide.css({ transform: 'translateX(-400px)' })
$(pre).on('click',function(){
    goToslide(current-1)
})
$(next).on('click',function(){
    goToslide(current+1)
})

function makeFakeslide() {
    let firstCopy = $images.eq(0).clone(true)
    let lastCopy = $images.eq($images.length - 1).clone(true)
    $slide.append(firstCopy)
    $slide.prepend(lastCopy)
}
function eventblind(){
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToslide(index)
    })
}
//重要一旦我们拥有直接到到某个slide我们就很容易制作到达上一张
function goToslide(index) {
    if(index>$buttons.length-1){index =0}//index=current+1,当index大于$buttons.length-1时为假一,current=0,index = $buttons.length - 1
    else if(index<0){index = $buttons.length - 1}//index=current-1,当index小于0时为假三,current=0,index = $buttons.length - 1
    if (current === $buttons.length - 1 && index === 0) {
        $slide.css({ transform: `translateX(${-($buttons.length + 1) * 400}px)` })
            .one('transitionend', function () {
                $slide.hide().offset()
                $slide.css({ transform: `translateX(${-(index + 1) * 400}px)` }).show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        $slide.css({ transform: 'translateX(0)' })
            .one('transitionend', function () {
                $slide.hide().offset()
                $slide.css({ transform: `translateX(${-(index+1) * 400}px)` }).show()
            })
    } else {
        $slide.css({ transform: `translateX(${-(index + 1) * 400}px)` })
    }
    current = index
}

makeFakeslide()
eventblind()
/*function blindEvents(){
    $buttons.eq(0).on('click',function(){
        if(current===2){
            $slide.css({transform:'translateX(-1600px)'})
            .one('transitionend',function(){
                $slide.hide().offset()
                $slide.css({transform:'translateX(-400px)'}).show()
            })
        }
        else{
        $slide.css({transform:'translateX(-400px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        $slide.css({transform:'translateX(-800px)'})
        current = 1
    })
    $buttons.eq(2).on('click',function(){
        if(current===0){
            $slide.css({transform:'translateX(0px)'})
            .one('transitionend',function(){
                $slide.hide().offset()
                $slide.css({transform:'translateX(-1200px)'}).show()
            })
        }else{
        $slide.css({transform:'translateX(-1200px)'})
        }
        current = 2
    })
}
makeFakeslide()
blindEvents()*/