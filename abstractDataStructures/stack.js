/**
 * A Stack is a collection of entities that are maintained in a LIFO 
 * (Last In First Out) structure.
 *
 * This implementation of a Stack in JavaScript involves creating a 
 * class Object with various methods that simulate LIFO behaviour.
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    // add an item to the stack (at the end)
    add(item) {
        this.stack.push(item);
    }

    // remove an item from the stack (from the end)
    remove() {
        this.stack.pop();
    }

    // take a look at the last element of the stack
    check() {
        return this.stack[this.stack.length - 1];
    }

    // view the entire stack
    print() {
        return this.stack;
    }
}

// Create new stack 
const s1 = new Stack();

// add 3 new elements to the stack
s1.add(1);
s1.add(2);
s1.add(3);

// see the whole stack 
console.log(s1.print());

// see the first element of the stack
console.log(s1.check());

// remove the last element of the stack
s1.remove();

// see the whole stack
console.log(s1.print())
