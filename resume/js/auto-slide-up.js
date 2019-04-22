!function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    window.addEventListener('scroll', function (xxx) {
        findCloseAndRemoveoffset()
    })//页面所在的区域对应导航栏标签添加active
    findCloseAndRemoveoffset()
    function findCloseAndRemoveoffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY))
                minIndex = i
        }//区域顶部（offsetTop）距离视口顶部(当前视口顶部的坐标为scrollY) minIndex就是就是距离视口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')//消掉所有active即高亮
        }
        li.classList.add('highlight')
    }
    let liTags = document.querySelectorAll('nav.menu>ul>li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            let li = x.currentTarget
            x.currentTarget.classList.add('active')

        }
        liTags[i].onmouseleave = function (x) {
            let li = x.currentTarget
            x.currentTarget.classList.remove('active')
        }
    }
}.call()