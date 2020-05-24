/**
 * The Post-Order Depth First Traverse logs all node values from the 
 * outside of the tree (the maximum depth leaves) first and then 
 * move towards the root
 * 
 * Often used to delete a tree
 * 
 * 1. Traverse the left subtree
 * 2. Traverse the right subtree
 * 3. Visit the root of the tree
 * 
 * In these implementations we simply store the values in an array and
 * return the final collection once the entire tree has been traversed. 
 * 
 */

/**
 * Iterative Post-Order Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.iterativePostOrderDFT = (root) => {
    let stack = [root];
    let result = [];

    while (stack.length) {
        let curr = stack.pop();
        result.unshift(curr.val);

        if (curr.left) {
            stack.push(curr.left);
        }

        if (curr.right) {
            stack.push(curr.right);
        }
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
exports.recursivePostOrderDFT = (root) => {
    let stack = [root];
    let result = [];
    
    const recursivePostOrderDFT = (stack) =>  { 

        if (stack.length < 1) return result;

        let curr = stack.pop();
        result.unshift(curr.val);
      
        if (curr.left){
            stack.push(curr.left)
        };
        
        if (curr.right){
            stack.push(curr.right)
        };

        recursivePostOrderDFT(stack)
    };

    recursivePostOrderDFT(stack);
    return result;
};


