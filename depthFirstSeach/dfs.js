
/**
 * Iterative In-Order Depth First Search (DFS) 
 * Traversing as far as possible along each branch before backtracking
 * to find value.
 * @param { Node } root
 * @return { number [] }
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
