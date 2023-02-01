// 通过状态机实现 正则表达式 
// /abc/.test('adkjabc')
function test(string) {
    let i 
    let startIndex, endIndex
    let result = []
    function waitForA(char) {
        if(char==='a'){
            startIndex = i
            return waitForB
        }
        return waitForA
    }
    function waitForB(char) {
      if(char === 'b') {
        return waitForC
      }       
      return waitForA
    }
    function waitForC(char) {
      if(char === 'c') {
        endIndex = i
        return end
      }   
      return waitForA
    }
    function end() {
        return end
    }
    let currentStatus = waitForA
    for (i = 0;i < string.length; i++) {
        const char = string[i];
        let nextStatus = currentStatus(char)
        currentStatus = nextStatus

        if(currentStatus === end) {
            result.push({
                startIndex,
                endIndex
            })
            currentStatus = waitForA
        }
    }
    console.log(result)
}
console.log(test('kldjaflajabcjkljsdabc'))