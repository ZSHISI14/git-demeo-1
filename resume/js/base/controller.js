window.Controller = function (options) {
    let init =options.init
    var object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model)
        },
    }
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }//实际应用中模板缺少的属性写入options的，拷贝入object
    return object
}
//
