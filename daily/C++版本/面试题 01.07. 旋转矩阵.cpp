class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int N=matrix.size();
        vector<vector<int>> temp(N);    //定义一个二维向量并申请空间
        for(int i=0;i<N;i++)
            temp[i].resize(N);  //这里要初始化，否则会报错
        temp=matrix;    //直接把matrix赋值给temp
        for(int i=0;i<N;i++){
            for(int j=0;j<N;j++){
                matrix[j][N-i-1]=temp[i][j];
            }
        } 
    }
};
