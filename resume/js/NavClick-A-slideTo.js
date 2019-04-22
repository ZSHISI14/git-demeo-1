 !function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,

        initAnimation: function(){
            function animate(time) {
              requestAnimationFrame(animate);
              TWEEN.update(time);
            }
            requestAnimationFrame(animate);
          },
        scrollToElemnt: function (element) {
            let top = element.offsetTop
            let TargetTop = top - 80
            let currentTop = window.scrollY
            // let n =25
            //let duration = 500/25
            //let currentTop = window.scrollY
            //let distance = (TargetTop-currentTop)/n 使用setInterval方法
            let distance = TargetTop - currentTop
            var t = Math.abs(distance / 100) * 300
            if (t > 500) { t = 500 }
            var coords = { y: currentTop }; // 开始位置Y：0 原始设置：Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: TargetTop }, t) // 移动到
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                })
                .start(); // Start the tween immediately.
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav.menu>ul>li>a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (xx)=> {//注意箭头函数，不带箭头函数这里的环境就成了onclick事件的环境
                    xx.preventDefault()
                    let a = xx.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElemnt(element)
                }
            }
        },
        init: function(view){
            this.view = view
            this.initAnimation()
            this.bindEvents()
        }
    }

    controller.init(view)
}.call()
