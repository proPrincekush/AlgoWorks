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

    removeLast(){
        
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null
            return ;
        }

        let prev = this.head;
        let nxt = this.head.next;
        while(nxt.next){
            prev = nxt
            nxt= nxt.next 
        }
        prev.next = null;
    }

    insertLast(data){
        if(!this.head){
            this.head = new Node(data);
        }
        this.getLast().next= new Node(data);
    }

    getAt(pos){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter == pos){
                return node.next;
            }
            counter++;
            node = node.next; 
            
        }

        return null;
    }

}


module.exports = { Node, LinkedList };
