const { SinglyLinkedNode } = require("./01-singly-linked-list");

// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        // if (this.length >= 1) {
        //     this.tail.next = newNode;
        //     newNode.prev = this.tail;
        //     this.tail = newNode;

        // } else {
        //     this.head = newNode;
        //     this.tail = newNode;
        // }

        if(!this.length){
            this.head = newNode;
            this.tail = newNode;

        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(!this.length) return undefined;

        let currVal = this.head.value;

        if(this.head.next === null){
            this.head = this.head.next;

        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;

        return currVal;
        // Write your hypothesis on the time complexity of this method here
        //0(n)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.length) return undefined;
        let res

        if(this.tail){
            res = this.tail.value;
            this.tail = this.tail.prev;
        }
        this.length--
        return res;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.length) return undefined;
        else return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.length) return undefined;
        else return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // 0(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
