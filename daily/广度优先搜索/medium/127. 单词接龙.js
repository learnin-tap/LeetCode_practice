/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [], wordSet = new Set(wordList)
    queue.push([beginWord, 1])
    while(queue.length) {
        const levelSize = queue.length  //当前单词的level
        for(let i=0; i<levelSize; i++) {
            const [word, level] = queue.shift() //当前单词出列
            if(word == endWord) //找到转换序列则返回
                return level
            for(let i=0; i<word.length; i++) {
                for(let j=97; j<=122; j++) {
                    // 拼接所有可能的单词
                    const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i+1)
                    if(wordSet.has(newWord)) { //如果在序列里找到这个单词
                        queue.push([newWord, level+1])  //作为下一列的单词入列
                        wordSet.delete(newWord) //删掉，避免重复入列
                    }
                }
            }
        }
    }
    return 0    //bfs结束没找到返回0
};