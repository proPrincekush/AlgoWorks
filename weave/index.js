// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    let len = 20;
    while(sourceTwo.peek()||sourceOne.peek()){
        let value1 = sourceOne.peek()
        let value2 = sourceTwo.peek()
        if (value1&&value2) {
            q.add(sourceOne.peek())
            sourceOne.remove()
            q.add(sourceTwo.peek())
            sourceTwo.remove()
        }
        else if(value1){
            q.add(sourceOne.peek())
            sourceOne.remove()
        }
        else if(value2){
            q.add(sourceTwo.peek())
            sourceTwo.remove()
        }
       
    }
return q;
}

module.exports = weave;