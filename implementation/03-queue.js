const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);

        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = this.tail.next
            // this.tail.next = null;
        }
        this.length++
        return this.length;


        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.length) return null;
        let res
        if(this.length === 1) {
            res = this.head.value;
            this.head = null;
            this.tail = null;
        }else {
            res = this.head.value;
            this.head = this.head.next;
        }
        this.length--;
        return res;





        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
