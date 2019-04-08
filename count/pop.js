var a = [1, 3, 45, 5, 322, 25, 6]
function x(a) {
    for (let i = 0; i < a.length - 1; i++) {//轮数比数值总数小一
        var end = true
        for (let index = 0; index < a.length - i - 1; index++) {//左右数值比较左边数值的最大index小于a.length  - i -1，如第0轮到25，index<a.length  - i -1
            if (a[index] < a[index + 1]) {
                var temp = a[index]
                a[index] = a[index + 1]
                a[index + 1] = temp
                end = false
            }
        }
        if (end) {
            break;
        }
    }
    return a
}
var s = x(a)
console.log(s)

