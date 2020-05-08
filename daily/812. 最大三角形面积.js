/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
        var len=points.length;
        var m=0;
        for(var i=0;i<len;i++){
            var i_x=points[i][0],i_y=points[i][1];
            for(var j=i+1;j<len;j++){
                var j_x=points[j][0],j_y=points[j][1];
                for(var k=j+1;k<len;k++){
                    var k_x=points[k][0],k_y=points[k][1];
                    var len1 = length(i_x,i_y,j_x,j_y);
                    var len2 = length(i_x,i_y,k_x,k_y);
                    var len3 = length(j_x,j_y,k_x,k_y);
                    var areas=area(len1,len2,len3);
                    if(m<areas){
                        m=areas;
                    }
                }
            }
        }    
        return m;
};

    function length(s1_x,s1_y,s2_x,s2_y){
         return Math.sqrt(Math.pow(s1_x-s2_x,2)+Math.pow(s1_y-s2_y,2));       
    }

    function area(a,b,c){
        var sum=(a+b+c)/2.0;
        return Math.pow(sum*(sum-a)*(sum-b)*(sum-c),0.5);
    }