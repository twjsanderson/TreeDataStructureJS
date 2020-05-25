/**
 * Iterative Pre-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking,
 * return boolean if value found. 
 * Implemented with a stack.
 * @param { Node } root
 * @param { number } value
 * @return { boolean } 
 */
exports.iterativePreOrderDFS = (root, value) => {
    let stack = [root];
    let result = false;
    
    while (stack.length) {      
        let curr = stack.pop();
        if (curr.val === value) return true;
      
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
 * Recursive Pre-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking,
 * return boolean if value found. 
 * Implemented with a stack.
 * @param { Node } root
 * @param { number } value
 * @return { boolean } 
 */
exports.recursivePreOrderDFS = (root, value) => {
    let stack = [root];
    let result = false;
    
    const DFS = (stack) =>  { 

        if (stack.length < 1) return result;

        let curr = stack.pop();
        if (curr.val === value) {
            result = true 
        };
    
        if (curr.right){
            stack.push(curr.right)
        };
      
        if (curr.left){
            stack.push(curr.left)
        };

        DFS(stack)
    };

    DFS(stack);
    return result;
};
