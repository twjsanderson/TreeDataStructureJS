/**
 * The Pre-Order Depth First Traverse simply logs each node value 
 * starting from the root to the max depth of each branch.
 * 
 * Often used to create a copy of the tree.
 * 
 * 1. Visit the root of the tree
 * 2. Traverse the left subtree
 * 3. Traverse the right subtree
 * 
 * In these implementations we simply store the values in an array and
 * return the final collection once the entire tree has been traversed. 
 * 
 */

/**
 * Iterative Pre-Order Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.iterativePreOrderDFT = (root) => {
    let stack = [root];
    let result = [];
    
    while (stack.length) {      
        let curr = stack.pop();
        result.push(curr.val);
      
        if (curr.right){
            stack.push(curr.right)
        };
      
        if (curr.left){
            stack.push(curr.left)
        };
    };

    return result;
};

/**
 * Recursive Pre-Order Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.recursivePreOrderDFT = (root) => {
    let stack = [root];
    let res = [];
    
    const recursiveSearch = (stack) =>  { 

        if (stack.length < 1) return res;

        let curr = stack.pop();
        res.push(curr.val);
      
        if (curr.right){
            stack.push(curr.right)
        };
      
        if (curr.left){
            stack.push(curr.left)
        };

        recursiveSearch(stack)
    };

    recursiveSearch(stack);
    return res;
};


