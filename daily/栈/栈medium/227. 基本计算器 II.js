/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim()    // ȥ��ǰ�����ÿո�
    const n = s.length, stack = []
    let num = 0, preSign = '+'
    for(let i=0; i<n; i++) {
        let item = s[i]
        // �������������
        if(!isNaN(Number(item)) && item !== ' ' ) {
            num = num * 10 + Number(item)
        }
        // ��������������
        if(isNaN(item) || i==n-1) {
            switch(preSign) {
                case '+':
                    stack.push(num)
                    break
                case '-':
                    stack.push(-num)
                    break
                case '*':
                    stack.push(stack.pop() * num)
                    break
                default:
                    stack.push(parseInt(stack.pop() / num))
            }
            // �����������������
            preSign = item
            num = 0
        }
    }
    let res = 0
    while(stack.length) {
        res += stack.pop()
    }
    return res
};