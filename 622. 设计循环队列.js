
var MyCircularQueue = function(k) {
    this.capacity = k
    this.head = -1
    this.tail = -1
    this.arr = []
};


MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull())
        return false
    if(this.isEmpty())
        this.head = 0
    this.tail = (this.tail + 1) % this.capacity
    this.arr[this.tail] = value
    return true
};


MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty())
        return false
    if(this.head == this.tail)
        this.head = this.tail = -1
    else
        this.head = (this.head + 1) % this.capacity
    return true
};


MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty())
        return -1
    return this.arr[this.head]
};


MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty())
        return -1
    return this.arr[this.tail]
};


MyCircularQueue.prototype.isEmpty = function() {
    return this.head == -1
};


MyCircularQueue.prototype.isFull = function() {
    return this.head == (this.tail+1) % this.capacity
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */