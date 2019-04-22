!function () {
    var view = document.querySelector('#topnavbar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view//this是controller.init.call(controller,view)的this是controller对象
            this.bindEvents()//this.bindEvents.call(this,view)的this是  controller.init.call(this,view)的this是controller对象
        },
        bindEvents: function () {
            var view  = this.view//this是   this.bindEvents.call(this,view)的this
            window.addEventListener('scroll',  (xxx)=> {
                if (scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        }
        ,deactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
}.call()