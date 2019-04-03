var allbuttons = $('#menu>ul>li')

for(let i=0;i<allbuttons.length;i++){
    $(allbuttons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = (index-1) * -920
        if(p>0){
            p=0
        }
        $('#images').css({
        'margin-left': '' + p + 'px'
        })
        activeMenuItem($(x.currentTarget))
    })

}

activeMenuItem($('#menu ul li.menuItem:first'));

function activeMenuItem($node){
    $node.siblings('.act').removeClass('act')
    $node.addClass('act').siblings().addClass('inact')
}




