/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    // ̰�ģ������ܲ��3�ı��� ʱ��O(1),�ռ�O(1)
    // if(n==2)  return 1
    // if(n==3)  return 2
    // const a = Math.floor(n/3)
    // const b = n % 3
    // if(b==0)  return Math.pow(3, a)
    // if(b==1)  return Math.pow(3, a-1) * 4    // ��ʣ���1��3�ϳ�4������
    // if(b==2)  return Math.pow(3, a) * 2

    // ��̬�滮 ʱ��O(n^2),�ռ�O(n)
    // ÿ�μ���һ�ζ�������ѡ��һ�����ټ�һ�Σ���һ���ǲ���������ȡ����
    let dp = new Array(n+1).fill(0)
    dp[2] = 1
    for(let i=3; i<n+1; i++) {
        for(let j=2; j<i; j++) {
            // j*(i-j)Ϊ��һ��, j*dp(i-j)Ϊÿ��һ�������µ�һ�ֱȴ�С
            let cur = Math.max(j*(i-j), j*dp[i-j])
            dp[i] = Math.max(dp[i], cur)
        }
    }
    return dp[n]
};