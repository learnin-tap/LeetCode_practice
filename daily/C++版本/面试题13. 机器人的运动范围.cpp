class Solution {
public:
    int visited[101][101]={0};  //放外面就少带个参数传递，代码更简洁
    int movingCount(int m, int n, int k) {
        return dfs(0,0,m,n,k);
    }

    
    int dfs(int i,int j,int m,int n,int k){
        if(i<0 || i>=m || j<0 || j>=n )
            return 0;
        if(visited[i][j]==1)
            return 0;
        if(i%10+i/10+j%10+j/10>k)   //如果位数过大封装成函数更合适
            return 0;
        visited[i][j]=1;
        int sum=1;  //(0,0)一定被访问
        sum+=dfs(i+1,j,m,n,k);
        sum+=dfs(i-1,j,m,n,k);
        sum+=dfs(i,j+1,m,n,k);
        sum+=dfs(i,j-1,m,n,k);    
        return sum;
    }
};
