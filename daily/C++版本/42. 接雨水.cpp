class Solution {
public:
    int trap(vector<int>& height) {
        int size=height.size(),sum=0;
        // ��һ�к����һ�в����ˮ
        for(int i=1;i<size-1;i++){
        	int max_left=0;
            for(int j=0;j<i;j++)   //�������ߵ����� 
                if(max_left<height[j])
                    max_left=height[j];
            int max_right=0;
            for(int j=i+1;j<size;j++)  //�ұ���ߵ�����
                if(max_right<height[j])
                    max_right=height[j];
            if(min(max_left,max_right)>height[i])	//�̰�ЧӦ��Ȼ��ȵ�ǰ�и߲��ܻ�ˮ 
            	sum+=min(max_left,max_right)-height[i];
        } 
        return sum;
    }
};
