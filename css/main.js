!function () {
    var result = `
        /*让我们先画小熊猫的鬓毛*/
        .whiskers{
        position: absolute;
        top: 45%;
        width: 20%;
        height: 20%;
        }
        .wiskers.left{
        left:0%;
        }
        .whiskers.left  span{
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 0;
        right: 0;
        height: 30%;
        width: 70%;
        }
        .whiskers.left  span::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f68122;
        border-radius: 50%;
        transform: rotate(15deg);
        transform-origin: top left;
        }
        .whiskers.left  span:nth-child(2){
        top:10%;
        right: -5%;
        } 
        .whiskers.left  span:nth-child(3){      
        top: 20%;
        right: -10%; 
        }
        .whiskers.right{
        right: 0%;
        }
        .whiskers.right  span{
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: 0;
        height: 30%;
        width: 70%;
        }
        .whiskers.right  span::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #f68122;
        border-radius: 50%;
        transform: rotate(-15deg);
        transform-origin: top right;
        }
        .whiskers.right  span:nth-child(2){
        top:10%;
        left: -5%;
        } 
        .whiskers.right  span:nth-child(3){      
        top: 20%;
        left: -10%; 
        }
        /*接着是画小熊猫耳朵*/
        .ear.left{
            position: absolute;
            height: 25%;
            width: 25%;
            left: 10%;
            top: 25%;
            overflow: hidden;
            transform: translate(-25%, -25%) rotate(-40deg);
            z-index: -1;
        }
        .ear.left::before{
                content: "";
                position: absolute;
                left: 0;
                top: 60%;
                width: 100%;
                height: 100%;
                border: 7px solid white;
                background-color: #3d2115;
                box-sizing: border-box;
                transform: rotate(45deg) skew(20deg, 20deg);
                border-radius: 20% 50% 50% 50%;
        }
        .ear.right{
            position: absolute;
            height: 25%;
            width: 25%;
            right: 10%;
            top: 25%;
            overflow: hidden;
            transform: translate(25%, -25%) rotate(40deg);
            z-index: -1;
        }
        .ear.right::before{
                content: "";
                position: absolute;
                left: 0;
                top: 60%;
                width: 100%;
                height: 100%;
                border: 7px solid white;
                background-color: #3d2115;
                box-sizing: border-box;
                transform: rotate(45deg) skew(20deg, 20deg);
                border-radius: 20% 50% 50% 50%;
        }
        /*小熊猫的脸*/
        .face
            {
            position: absolute;
            background-color: #f68122;
            width: 70%;
            height: 50%;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            overflow: hidden;
            left: 15%;
            top: 25%;
        }
        /*小熊猫的眼睛*/
        .eye{
            position: absolute;
                height: 14%;
            width: 10%;
            background-color: #3d2115;
            z-index: 2;
            border-radius: 50%;
        }
        .eye::before{
        content:'';
        position: absolute;
        height:50%;
        width: 50%;
        background:white;
        border-radius:50%;
        top:5px;
        left:5px;
        }
        .eye.left{
        left: 30%;
            top: 30%;
        }
        .eye.right{
        right: 30%;
            top: 30%;
        }
        /*小熊猫的眼睫毛*/
        .eyebrow{
            position: absolute;
            
            top: 18%;
            height: 20%;
            width: 16%;
            background: linear-gradient(-90deg, white 50%, #f68122 51%);
            z-index: 1;
            border-radius: 50%;
            transform: rotate(15deg);
            }        
        .eyebrow::before, .eyebrow::after
                {
                content: "";
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                height: 43%;
                width: 40%;
                background-color: white;
                border-radius: 50%;
                }
        .eyebrow::after{
            top: 41%;
            left: 59%;
            background-color: #f68122;
            height: 60%;
            width: 60%;
        }
        .eyebrow.left{
        left: 31%;
        
        }
        .eyebrow.right{
        right: 31%;
        background: linear-gradient(-90deg, #f68122 50%, white 51%);
        }
        /*小熊猫的嘴*/
        .mouth{
        position: absolute;
        bottom: 5%;
        width: 40%;
        height: 40%;
        background-color: white;
        border-radius: inherit;
        left: 30%;
        }
        /*小熊猫的鼻子*/
        .nose{
        position: absolute;
        top: 25%;
        left: 40%;
        width: 20%;
        height: 28%;
        border-radius: 50%;
        background-color: #3d2115;
        z-index: 3;
        }
        /*小熊猫的脸颊*/
        .cheek{
            position: absolute;
            top: 37%;
            height: 70%;
            width: 20%;
            z-index: 0;
            border-radius: 50%;
            background-color: #3d2115;
            
        }
        .cheek.left{
        left: 18%;
        box-shadow: -25px 3px 0 8px white;
        }
        .cheek.right{
        right:18%;
        box-shadow: 25px 3px 0 8px white;
        }
        .cheek::before{
        content: "";
        background-color: #f68122;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        transform-origin: top center;
        border: 0px solid transparent;
        }
        .cheek.left::before{
        top: -2%;
        left: -7%;
        transform: rotate(-15deg);
        }
        .cheek.right::before{
        top: -2%;
        right: -7%;
        transform: rotate(15deg);
        }
        /*小熊猫的嘴唇*/
        .lips-top{
        position:absolute;
        top: 50%;
        left: 30%;
        height:28%;
        width: 40%;
        border-radius: 50% 50%;
        z-index: 2;
        }
        .lips-top::before{
            content: "";
            position: absolute;
            right: 50%;
            top: 0;
            width: 50%;
            height: 100%;
            background-color: white;
            border-radius: 0 0 50% 30%;
            transform: rotate(6deg);
            border-right: 4px solid  #3d2115;
            border-bottom: 4px solid #3d2115;
        }
        .lips-top::after{
            content: "";
            position: absolute;
            left:50%;
            width: 50%;
            height: 100%;
            background-color: white;
            border-radius:0 0 30% 50% ;
            transform: rotate(-6deg);
            border-left: 4px solid  #3d2115;
            border-bottom: 4px solid #3d2115;
        }`
    var duration = 100
    function writeCode(prefix, code, fn) {
        var Code = document.querySelector('#code')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            Code.innerHTML = prefix + code.slice(0, n)
            Code.scrollTop = Code.scrollHeight
            styleTarget.innerHTML = prefix + code.slice(0, n)
            if (n < code.length) {
                id = setTimeout(run, duration)
            }else {
                fn && fn.call
            }
        }, duration)
        
    }

    $('.actions').on('click', 'button', (e) => {
        let $button = $(e.currentTarget)
        speed = $button.attr('data-speed')//这是button元素的speed属性
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        if (speed === 'normal') {
            duration = 100
        } else if (speed === 'slow') {
            duration = 200
        } else if (speed === 'fast') {
            duration = 1
        }
    })
    writeCode('', result)
}.call()