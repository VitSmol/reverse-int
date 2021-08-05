module.exports = function reverse (n) {
    let arr = String(Math.abs(n)).split("");
    let newStr = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i];
    }
    newStr = Number(newStr)
    return newStr;
}
