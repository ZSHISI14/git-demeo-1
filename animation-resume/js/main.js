
var result1 = `
/* 面试官你好，我是曾华城
 * 我将以动画形式做自我介绍
 * 首先是一些样式
 */
   *{transtion: all 1s;}
   html{
      background:rgb(222,222,222);
      font-size: 16px;
      height:100%
   }
   #code{
      border: 1px solid black;
      padding: 16px;
   }
   /*代码需要高亮*/
   .token.selector{
      color: #690
  }
  .token.property{
      color: #905
  }
  .token.function{
      color: #DD4A68
  }
  /*我们要加一张白纸*/
`
var result2 = `
   #code{
      position: fixed;
      left: 0;
      width: 50%;
      height: 90vh;
      overflow: auto;
      
   }
   html{perspective: 1000px;}
   .styleEditor{transform: rotateY(10deg) translateZ(-100px) ;}
   #paper{
      position: fixed;
      width: 50%;
      height: 100%;
      right:0;
      background: #ddd; 
      display:flex;
      justify-content: center;
      align-items: center;
      padding:10px;
   }
   .content{
      display:block;
      width: 100%;
      height:100%;
      background:white;
      padding-left: 20px;
   }
`
var result3 = `
#自我介绍

我叫曾华城
1996年7月出生
嘉兴学院南湖学院毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉html css javascript

#项目介绍

1.个人简历
2.canvas画板
3.仿苹果轮播

#联系方式
QQ:953699285
EMAIL:zshisi14@gmail.com
`

/*var n = 0
var id = setInterval(() => {
   n += 1
   code.innerHTML = result.slice(0, n)
   code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript');
   styleTarget.innerHTML = result.slice(0, n)
   if (n >= result.length) {
      window.clearInterval(id)
      fn2()
      fn3(result)
   }
}, 10)
*/


wirteCode('', result1, () => { //先写一个空字符串，再把result1写入页面，当页面代码写完，创建paper，创建完paper再写入result2
   createPaper(() => {
      wirteCode(result1, result2, () => {
         wirteMarkdown(result3)
      })//因为设置了setInterval,所以10毫秒才写一个代码，写完代码需要很多时间，而执行下一行代码只需要几毫秒
   })
})
function createPaper(fn) {
   var paper = document.createElement('div')
   paper.id = 'paper'
   document.body.append(paper)
   var content = document.createElement('pre')
   content.className = 'content'
   paper.append(content)
   fn.call()
}

function wirteCode(prefix, code, fn) {
   var DomCode = document.querySelector('#code')
   let n = 0
   let id = setInterval(() => {
      n += 1
      DomCode.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css, 'javascript');//把前N个html字符,以css字符的形式高亮，DomCode
      styleTarget.innerHTML = prefix + code.slice(0, n)
      DomCode.scrollTop = DomCode.scrollHeight
      if (n >= code.length) {
         window.clearInterval(id)
         fn && fn.call()//当fn存在才执行fn.call()
      }
   }, 10)
}
function wirteMarkdown(Markdown, fn) {
   var content = document.querySelector('#paper>.content')
   let n = 0
   let id = setInterval(() => {
      n += 1
      content.innerHTML = Markdown.slice(0, n)
      content.scrollTop = content.scrollHeight
      if (n >= Markdown.length) {
         window.clearInterval(id)
         fn &&fn.call()
      }
   }, 10)
}
var instance = new Mark("div.context")
instance.mark("span", result3);
