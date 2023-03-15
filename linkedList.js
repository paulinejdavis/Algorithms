class Node {
    /**
     * An object for storing a single node in a linked list
     *
     * @param {*} data - Data stored in node
     * @param {Node} nextNode - Reference to next node in linked list
     */
    constructor(data, nextNode = null) {
      this.data = data;
      this.nextNode = nextNode;
    }
  
    /**
     * Returns a string representation of the node
     *
     * @returns {string}
     */
    toString() {
      return `<Node data: ${this.data}>`;
    }
  }
  
  class SinglyLinkedList {
    /**
     * Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. Each node points to the next node in the list.
     */
    constructor() {
      this.head = null;
      // Maintaining a count attribute allows for length to be implemented in constant time
      this._count = 0;
    }
  
    /**
     * Determines if the linked list is empty
     *
     * @returns {boolean}
     */
    isEmpty() {
      return this.head === null;
    }
  
    /**
     * Returns the length of the linked list
     *
     * @returns {number}
     */
    get length() {
      return this._count;
    }
  
    /**
     * Adds new Node containing data to head of the list (prepend)
     *
     * @param {*} data - Data to add
     */
    add(data) {
      const newHead = new Node(data, this.head);
      this.head = newHead;
      this._count++;
    }
  
    /**
     * Search for the first node containing data that matches the key
     *
     * @param {*} key - Data to search for
     * @returns {Node|null}
     */
    search(key) {
      let current = this.head;
      while (current !== null) {
        if (current.data === key) {
          return current;
        }
        current = current.nextNode;
      }
      return null;
    }
  
    /**
     * Inserts a new Node containing data at index position
     *
     * @param {*} data - Data to insert
     * @param {number} index - Index position to insert at
     * @throws {Error} Throws an error if the index is out of range
     */
    insert(data, index) {
      if (index > this._count) {
        throw new Error("Index out of range");
      }
      if (index === 0) {
        this.add(data);
        return;
      }
      const newNode = new Node(data);
      let current = this.head;
      let position = index;
      while (position > 1) {
        current = current.nextNode;
        position--;
      }
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
      this._count++;
    }
  
    /**
     * Returns the Node at specified index
     *
     * @param {number} index - Index position of the node to get
     * @throws {Error} Throws an error if the index is out of range
     * @returns {Node}
     */
    nodeAtIndex(index) {
      if (index >= this._count) {
        throw new Error("Index out of range");
      }
      let current = this.head;
      let position = 0;
      while (position < index) {
        current = current.nextNode;
        position++;
      }
      return current;
    }

}
    /**
     * Removes Node containing data that matches the key
     *
     * @param {*} key - Data to remove//  