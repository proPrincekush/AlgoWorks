// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
          this.data=data;
          this.next= next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head =  new Node(data,this.head);
    }

    size(){
        let i = this.head;
        let count = 0;
        while(i){
            count++;
            i=i.next
        }
        return count;
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let i = this.head;
        while(i){
            if (!i.next) {
                return i
            } else {
                i=i.next 
            }
        }
        return null;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if (this.head) {
            this.head = this.head.next
        } else {
            return;
        } 
    }


}


module.exports = { Node, LinkedList };
