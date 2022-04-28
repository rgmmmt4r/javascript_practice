
var MinStack = function() {
    this.stack = []
    this.minStack = [] 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    this.minStack.push(val)
    this.minStack.sort(function(a,b){
        return a-b
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    for( var i = 0; i < this.minStack.length; i++){ 
    
        if (this.minStack[i] === this.stack[this.stack.length -1]) { 
    
            this.minStack.splice(i, 1); 
        }
    
    }
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStack.length >0)
        return this.minStack[0]
};

var obj = new MinStack()

obj.push(1)
obj.push(4)
obj.push(3)
obj.pop(3)
console.log(obj.top())
console.log(obj)
console.log(obj.getMin())
