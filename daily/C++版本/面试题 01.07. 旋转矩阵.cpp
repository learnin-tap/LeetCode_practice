class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int N=matrix.size();
        vector<vector<int>> temp(N);    //����һ����ά����������ռ�
        for(int i=0;i<N;i++)
            temp[i].resize(N);  //����Ҫ��ʼ��������ᱨ��
        temp=matrix;    //ֱ�Ӱ�matrix��ֵ��temp
        for(int i=0;i<N;i++){
            for(int j=0;j<N;j++){
                matrix[j][N-i-1]=temp[i][j];
            }
        } 
    }
};
