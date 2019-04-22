!function () {
  var view = View('#message')
  var model = Model({resourceName:'first'})
  var controller = Controller({
    messageList: null,
    from:null,
    init: function (view, model) {
      this.messageList = view.querySelector('#messageSection')
      this.form = view.querySelector('form')
      this.bindEvents()
      this.loadMessages()//留言板下载数据
    },
    loadMessages: function () {
      this.model.fetch().then((messageList) => {
        let array = messageList.map((item) => item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerHTML = `${item.name}:${item.content}`
          this.messageList.append(li)
        })
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.submitWrite()
      })
    },
    submitWrite: function () {
      let content = this.form.querySelector('input[name=content]').value//读取两个
      let name = this.form.querySelector('input[name=name]').value
      this.model.save({'name':name,'content':content}).then((object) => {
        let li = document.createElement('li')
        li.innerHTML = `${object.attributes.name}:${object.attributes.content}`
        this.messageList.append(li);
        this.form.querySelector('input[name=content]').value = ''
      })
    }
  })
  controller.init(view, model)
}.call()

