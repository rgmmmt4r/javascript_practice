class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length === 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

var stack = new Stack();

var isValid = function(s) {
    for(var i = 0 ;i < s.length; i++){
        if(i ===0){
            stack = new Stack();
        }
        if(s[i] === '('){
            stack.add('(');
        }else if(s[i] === '['){
            stack.add('[');
        }else if(s[i] === '{'){
            stack.add('{');
        }else{
            if(stack.isEmpty()){
                return false
            }else{
                if(s[i] === ')'){
                    if(stack.peek() !== '('){
                        return false
                    }
                    stack.remove()
                }else if(s[i] === ']'){
                    if(stack.peek() !== '['){
                        return false
                    }
                    stack.remove()
                }else if(s[i] === '}'){
                    if(stack.peek() !== '{'){
                        return false
                    }
                    stack.remove()
                }
            }
        }
    }
    if(stack.isEmpty()){
        return true
    }else{
        return false
    }
};


console.log(isValid('{[]}'))
