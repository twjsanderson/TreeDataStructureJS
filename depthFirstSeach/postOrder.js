/**
 * Iterative Post-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking,
 * return true if found. 
 * Implemented with a stack.
 * @param { Node } root
 * @param { number } value
 * @return { boolean }
 */
exports.iterativePostOrderDFS = (root, value) => {
    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();
        if (curr.val === value) return true;

        if (curr.left) {
            stack.push(curr.left);
        }

        if (curr.right) {
            stack.push(curr.right);
        }
    };

    return false;
};

/**
 * Recursive Pre-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking,
 * return true if found.
 * Implemented with a stack.
 * @param { Node } root
 * @param { number } value
 * @return { boolean }
 */
exports.recursivePostOrderDFS = (root, value) => {
    let stack = [root];
    let result = false;
    
    const DFS = (stack) =>  { 

        if (stack.length < 1) return result;

        let curr = stack.pop();
        if (curr.val === value) {
            result = true;
        }

        if (curr.left){
            stack.push(curr.left)
        };
        
        if (curr.right){
            stack.push(curr.right)
        };

        DFS(stack)
    };

    DFS(stack);
    return result;
};
