this.onmessage = function (e) {
    if (e.data.addNum) {
        this.postMessage({ result: e.data.addNum.num1 + e.data.addNum.num2 })
    }
}