// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let length = 0

        let curr = this.head;
        if(this.head){
            length++;
            while(curr.next){
                curr = curr.next
                length++;
            }
        }
        return length;

        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        if(this.head){
            let curr = this.head
            sum += curr.value
            while(curr.next){
                curr = curr.next;
                sum += curr.value;
            }
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let length = this.listLength();
        let sum = this.sumOfNodes();

        return sum / length;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let length = 0;

        let curr = this.head;

        while(curr.next){
            curr = curr.next
            length++
            if(length === n){
                return curr;
            }
        }
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        let midIndex = Math.floor(this.listLength()/2)
        if(this.listLength() % 2 === 0)midIndex--
        // console.log(midIndex);

        // else mid-=1
        let node = this.findNthNode(midIndex);

        return node;
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const revList = new SinglyLinkedList();
        let hold = [];

        let curr = this.head;
        while(curr.next){
            hold.push(curr.value);
            curr = curr.next;
        }
        hold.push(curr.value);


        for(let i = hold.length -1; i > -1; i--){
            // console.log(i, hold[i], hold);
            revList.addToTail(hold[i]);
        }

        return revList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if(!this.head) return this;
        let curr = this.head;
        let next = curr;
        let prev = null;

        while(next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // // Returns the middle node
        let firstPointer = this.head;
        let secondPointer = this.tail;
        let atFirst = true;

        while (firstPointer !== secondPointer) {
            if (atFirst) {
                secondPointer = secondPointer.prev;

            } else {
                firstPointer = firstPointer.next;
            }
            atFirst = !atFirst;
        }

        return firstPointer;
    }
        //***************************** */
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // Write your hypothesis on the time complexity of this method here


    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while(curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;

        let prev;
        while(curr.next)  {
            prev = curr;
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }
        this.head = curr;
        this.head.next = prev;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
