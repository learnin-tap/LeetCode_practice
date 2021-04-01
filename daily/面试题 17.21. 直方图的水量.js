/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // ��һ: ˫ָ�룬ʱ��O(n*n),�ռ�O(1)��ÿ�α�����ɨ��һ��
    // let sum = 0, right = height.length-1
    // // ��һ�������һ�����ܴ�ˮ
    // for(let i=1; i<right; i++) {
    //     // ���������
    //     let max_left = 0
    //     for(let j=i-1; j>=0; j--) {
    //         if(max_left<height[j])
    //             max_left = height[j]
    //     }
    //     // ���ұ�����
    //     let max_right = 0
    //     for(let j=i+1; j<height.length; j++) {
    //         if(max_right<height[j])
    //             max_right = height[j]
    //     }
    //     let dis = Math.min(max_left, max_right) - height[i]
    //     // �ۼ�ˮ��
    //     if(dis>0)
    //         sum += dis
    // }
    // return sum

    // ����: ��̬�滮��ʱ��O(n)���ռ�O(n)
    let len = height.length
        maxLeft = new Array(len).fill(0),
        maxRight = new Array(len).fill(0),
        
    // ��¼ÿ����������������߶�
    maxLeft[0] = height[0]
    for(let i=1; i<len; i++)
        maxLeft[i] = Math.max(height[i], maxLeft[i-1])
    // ��¼ÿ�������ұ����ӵ����߶�
    maxRight[len-1] = height[len-1]
    for(let i=len-2; i>=0; i--)
        maxRight[i] = Math.max(height[i], maxRight[i+1])
    // ���
    let sum = 0
    for(let i=0; i<len; i++) {
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i]
        if(count > 0)
            sum += count
    }
    return sum
};