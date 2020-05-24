/**
 * A Queue is a collection of entities that are maintained in a FIFO 
 * (First In First Out) structure.
 *
 * This implementation of a queue in JavaScript involves creating a 
 * class Object with various methods that simulate FIFO behaviour.
 */

class Queue {
    constructor() {
        this.queue = [];
    }

    // add an item to the queue (at the end)
    enqueue(item) {
        this.queue.push(item);
    }

    // remove an item from the queue (from the start)
    dequeue() {
        this.queue.shift();
    }

    // take a look at the first element of the queue
    peek() {
        return this.queue[0];
    }

    // view the entire queue
    print() {
        return this.queue;
    }
}

// Create new queue 
const q1 = new Queue();

// add 3 new elements to the queue
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);

// see the whole queue 
console.log(q1.print());

// see the first element of the queue
console.log(q1.peek());

// remove the first element of the queue
q1.dequeue();

// see the whole queue
console.log(q1.print())
