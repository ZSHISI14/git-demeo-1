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

var quickSort2 = function (arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    console.log(pivotIndex)
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};
function unique(array) {
    return array.reduce(function (result, item) {
        if (result.indexOf(item) === -1) {
            result.push(item)
        }

        return result
    }, [])
}
var array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
console.log(unique(array))   