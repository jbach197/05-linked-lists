'use-strict'

const Node = require('./node.js')

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        
        if(!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    prepend(value) {
        let node = new Node(value);

        node.next = this.head;
        this.head = node;
        return this;
    }
}

module.exports = LinkedList;