/**
 * @param {number[][]} stones
 * @return {number}
 */
// 1. 和连通变量有关，典型的并查集题
// 2. 并查集存储x坐标和y坐标位置可能冲突，利用题目给的范围，将其中一个坐标作偏移
// 3. 这里把y坐标映射到y+10000上，保证x坐标和y坐标不冲突
var removeStones = function(stones) {
    const unionFind = new UnionFind()
    for(let [x,y] of stones) {
        unionFind.union(x, y+10000)
    }
    return stones.length-unionFind.getCount()
};

class UnionFind {
    constructor() {
        this.parents = []
        this.ranks = []
        this.count = 0
    }
    init(x) {
        if(this.parents[x] == undefined) {
            this.parents[x] = x
            this.ranks[x] = 0
            this.count++
        }
    }
    // 找出根的父节点
    find(x) {
        if(this.parents[x] != x) {
            this.parents[x] = this.find(this.parents[x])
        }
        return this.parents[x]
    }
    // 合并集合
    union(x, y) {
        this.init(x), this.init(y)
        let rootX = this.find(x), rootY = this.find(y)
        if(rootX == rootY)
            return
        // 通过权重确定父子关系
        if(this.ranks[rootX] > this.ranks[rootY])
            this.parents[rootY] = rootX
        else if(this.ranks[rootX] < this.ranks[rootY])
            this.parents[rootX] = rootY
        else {
            this.parents[rootY] = rootX
            this.ranks[rootX]++
        }
        // 合并成功则少一个不同的集合
        this.count--
    }
    // 不同集合总数
    getCount() {
        return this.count
    }
}