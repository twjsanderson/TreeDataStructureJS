
/**
 * Iterative In-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking
 * to find value.
 * @param { Node } root
 * @param { number } value
 * @return { boolean }
 */
exports.iterativeInOrderDFS = (root, value) => {
    let stack = [];
    let pointerNode = root;

    while (stack.length !== 0 || pointerNode !== null) {
        if (pointerNode !== null) {
            stack.push(pointerNode);
            pointerNode = pointerNode.left;
        } else {
            pointerNode = stack.pop();
            if (pointerNode.val === value) return true;
            pointerNode = pointerNode.right;
        }
    };

    return false;

};

/**
 * Recursive In-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking,
 * returned when the value is found.
 * Implemented with a stack.
 * @param { Node } root
 * @param { number } value
 * @return { boolean }
 */
exports.recursiveInOrderDFS = (root, value) => {
    let stack = [];
    let result = false;
    let pointerNode = root;

    const DFS = () => {
        if (stack.length !== 0 || pointerNode !== null) {
            if (pointerNode !== null) {
                stack.push(pointerNode);
                pointerNode = pointerNode.left;
                DFS()
            } else {
                pointerNode = stack.pop();
                if (pointerNode.val === value) {
                    result = true;
                }
                pointerNode = pointerNode.right;
                DFS()
            }
        }
        return;
    }

   DFS();
   return result;

};


