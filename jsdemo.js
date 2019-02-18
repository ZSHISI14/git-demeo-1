var fs = require('fs')

var dirName = process.argv[2] 

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", " <!DOCTYPE><title>Hello</title><h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = \"Hello World\"")


process.exit(0)