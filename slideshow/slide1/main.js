/*var $allbutton = $('ul>li')
var $images = $('img')
var $slide = $('#slide')
var current = 0

var firstCopy = $images.eq(0).clone(true)
var lastCopy = $images.eq($images.length - 1).clone(true)
$slide.append(firstCopy)
$slide.prepend(lastCopy)

$slide.css({ transform: `translateX(-920px)` })
lightLi(0)
function eventblind() {
    $('ul').on('click', 'li', function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToslide(index)
    })
}
function lightLi(index){
    $('ul>li').eq(index).addClass('act').siblings().removeClass('act')
}
function goToslide(index) {
    if (current === $allbutton.length - 1 && index === 0) {
        $slide.css({ transform: `translateX(${-($allbutton.length + 1) * 920}px)` })
            .one('transitionend', function () {
                $slide.hide().offset()
                $slide.css({ transform: `translateX(${-(index + 1) * 920}px)` }).show()
            })
    } else if (current === 0 && index === $allbutton.length - 1) {
        $slide.css({ transform: `translateX(0)` })
            .one('transitionend', function () {
                $slide.hide().offset()
                $slide.css({ transform: `translateX(${-(index+1) * 920}px)` }).show()
            })
    } else {
        $slide.css({ transform: `translateX(${-(index + 1) * 920}px)` })
    }
    current = index
    lightLi(index)
}
eventblind()
*/
var $slide = $('#slide')
highLightLi(0)
$('ul>li').on('click',function(e){
    var $li =$(e.currentTarget)
    var $index = $li.index()
    $slide.css({ transform: `translateX(${-($index ) * 920}px)` })
    highLightLi($index)
})
function highLightLi($index){
    $('ul>li').eq($index).addClass('act').siblings().removeClass('act')
}