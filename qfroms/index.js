// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
       this.stk1 = new Stack()
       this.stk2 = new Stack()
    }
    add(data){
        this.stk1.push(data);
    }
    peek(){
        while(this.stk1.peek()){
            this.stk2.push(this.stk1.pop())
        }
        this.peekdata= this.stk2.peek()

        while(this.stk2.peek()){
            this.stk1.push(this.stk2.pop())
        }
        return this.peekdata;
    }
    remove(){
        while(this.stk1.peek()){
            this.stk2.push(this.stk1.pop())
        }
        this.popdata= this.stk2.pop()

        while(this.stk2.peek()){
            this.stk1.push(this.stk2.pop())
        }
        return this.popdata;
    }
}

module.exports = Queue;