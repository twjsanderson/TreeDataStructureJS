/** 
 * The Depth First Traverse of a binary tree involves moving to
 * every node as far as possible along a single branch,
 * before backtracking and exploring the next branch to its maximum depth.
 */

/**
 * The 2 examples of depth first traverses below will explore an entire tree
 * and grab the value at each node mapping them to an array as they are found.   
 */

/**
 * Iterative Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.iterativeDFT = (root) => {
    let stack = [root];
    let res = [];
    
    while (stack.length) {      
        let curr = stack.pop();
        res.push(curr.val);
      
        if (curr.right){
            stack.push(curr.right)
        };
      
        if (curr.left){
            stack.push(curr.left)
        };
    };

    return res;
};

/**
 * Recursive Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.recursiveDFT = (root) => {
    let stack = [root];
    let res = [];
    
    const recursion = (stack) =>  { 

        if (stack.length < 1) return res;

        let curr = stack.pop();
        res.push(curr.val);
      
        if (curr.right){
            stack.push(curr.right)
        };
      
        if (curr.left){
            stack.push(curr.left)
        };

        recursion(stack)
    };

    recursion(stack);
    return res;
};


/**
 * Here are 3 common search implementations that move through
 * the nodes (or vertices) in different ways.
 * 
 * 1. Pre-Ordered Search.
 * 2. Post-Ordered Search.
 * 3. In-Order Search.
 * 
 */