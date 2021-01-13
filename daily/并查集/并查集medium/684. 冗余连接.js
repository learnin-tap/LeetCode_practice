/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 1.要构建的是一棵树，其中树的特点是有n个顶点，n-1条边
// 2.声明一个数组parent用于构建边上的每一个节点的父节点
// 3.初始化的时候每一个节点的父节点就是本身
// 4.另外，由于含有n的顶点，并且顶点的值是1-n之间的
// 5.因此可声明一个n+1大小的parent
// 6.为每一条边寻找父节点，如果当前两个节点的父节点相同，说明这条边已经连通，可以删掉
var findRedundantConnection = function(edges) {
    const len = edges.length
    // 初始化每个节点的父节点
    const parent = new Array(len+1).fill(0).map((item, index) => index)
    for(let i=0; i<len; i++) {
        let a = edges[i][0], b = edges[i][1]
        // 此时图构成了环，返回结果，即这条需要删掉的边
        if(merge(a, b, parent) == -1) {
            return edges[i]
        }
    }
};

// 往上查找某一个节点的父节点
const find = (x, parent) => {
    while(x != parent[x]) {
        x = parent[x]
    }
    return x
}
// 将两个不同的子集0合并成一个集合
const merge = (x, y, parent) => {
    const rootX = find(x, parent)
    const rootY = find(y, parent)
    // 父节点相同说明已连通，返回-1
    if(rootX == rootY)
        return -1
    parent[rootX] = rootY
    return 1
}