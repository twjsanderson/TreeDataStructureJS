/**
 * A Queue is a collection of entities that are maintained in a FIFO 
 * (First In First Out) data structure.
 */

/**
 * Implement a queue with a JavaScript array 
 * Add to the queue: the .push() method
 * Remove from the queue: use the .shift() method
 */



class Queue {
    constructor() {
        this.queue = [];
    }

    add(item) {
        this.queue.push(item);
    }

    remove() {
        this.queue.shift();
    }
}

let thing = new Queue();
thing.add(1)
console.log(thing)
thing.add(2)
console.log(thing)
thing.remove()
console.log(thing)

// arr.push(4)
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)