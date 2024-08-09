// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);

        if(!this.head){
            this.head = newNode;
            this.length++;
            // console.log(this.head.next, this.head.value);
            return this;
        }
        let curr = this.head;
        this.head = newNode;
        this.head.next = curr;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        //0(n)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.length) return undefined;

        let curr = this.head;
        this.head = this.head.next;
        this.length--;
        return curr;
        // Write your hypothesis on the time complexity of this method here
        //0(n)

    }

    removeFromTail() {
        // Remove node at tail
        if(!this.length) return undefined;

        if(this.length === 1){
            let hold = this.head;
            this.head = null;
            this.length--;
            return hold;
        }

        let curr = this.head;

        while(curr.next.next){

            curr = curr.next
        }
        // console.log(curr.value);


        let hold = curr.next;
        curr.next = null;
        this.length--
        return hold;


        // Write your hypothesis on the time complexity of this method here
        //0(n)
    }

    peekAtHead() {
        // Return value of head node
        if(!this.length) return undefined

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        //0(1)
    }

    print() {
        // Print out the linked list
        if(!this.length) return;

        let curr = this.head;

        while(curr){
            console.log(curr.value);
            curr = curr.next
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
