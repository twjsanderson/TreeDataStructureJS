/**
 * Iterative Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.iterativeTraverseDFS = (root) => {
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