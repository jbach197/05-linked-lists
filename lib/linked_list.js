'use-strict';

const Node = require('./node.js');

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

  remove(value) {
    if(!this.head) {
      return undefined;
    }

    if(this.head.value === value){
      this.head = this.head.next;
    } else {
      let previous = this.head;
      let current = previous.next;
      while (current) {
        if(current.value === value){
          break;
        }
        previous = current;
        current = current.next;
      }
      if(current === null) {
        return undefined;
      }
      previous.next = current.next;
    }
  }
    
  reverse() {
    let next = null;
    let previous = null;
    let current = this.head;

    if(current === null)
    {return undefined;}

    while(current && current.next !== null && current.next !== current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    current.next = previous;
  }

}

module.exports = LinkedList;