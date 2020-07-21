class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& A) {
        vector<vector<int>>B;
        B.resize(A[0].size());
        for(int i=0;i<B.size();i++)
            B[i].resize(A.size());
        
        for(int i=0;i<A.size();i++)
            for(int j=0;j<A[0].size();j++)
                B[j][i]=A[i][j];
        return B;
    }
};
