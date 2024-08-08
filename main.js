
var MinStack = function() {
        stack = [];
        minStack= [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    stack.push(val);
    if (minStack.length == 0 || val <= minStack[minStack.length - 1]) {
        minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(stack.length==0){
        return;
    }
    if(minStack[minStack.length-1]==stack[stack.length-1]){
        minStack.pop();
    }
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return minStack[minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
