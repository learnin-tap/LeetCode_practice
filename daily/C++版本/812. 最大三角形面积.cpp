class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        int len=points.size();
        int m=0;
        for(int i=0;i<len;i++){
            double i_x=points[i][0],i_y=points[i][1];
            for(int j=i+1;j<len;j++){
                double j_x=points[j][0],j_y=points[j][1];
                for(int k=j+1;k<len;k++){
                    double k_x=points[k][0],k_y=points[k][1];
                    double len1 = length(i_x,i_y,j_x,j_y);
                    double len2 = length(i_x,i_y,k_x,k_y);
                    double len3 = length(j_x,j_y,k_x,k_y);
                    double areas=area(len1,len2,len3);
                    if(m<areas){    //这里力扣平台判断有问题
                        // cout<<areas<<" ";
                        m=areas;
                        // cout<<m<<endl;
                    }
                }
            }
        }    
        return m;
    }

    double length(double s1_x,double s1_y,double s2_x,double s2_y){
         return sqrt(pow(s1_x-s2_x,2)+pow(s1_y-s2_y,2));       
    }

    double area(double a,double b,double c){
        double sum=(a+b+c)/2.0;
        return pow(sum*(sum-a)*(sum-b)*(sum-c),0.5);
    }
};