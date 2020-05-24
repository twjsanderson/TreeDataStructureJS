/**
 * The In-Order Depth First Traverse logs all node values from the bottom 
 * to the top, left to right.
 * 
 * 1. Traverse the left most branch to its maximum depth 
 * 2. Traverse back to its root node 
 * 3. Traverse down to the right node
 * 4. Continue this process back to the top of that branch 
 * 5. Restart the entire traverse for the next branch to the right until 
 *    the entire tree has been scanned
 * 
 * In these implementations we simply store the values in an array and
 * return the final collection once the entire tree has been traversed. 
 * 
 */

/**
 * Iterative In-Order Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking,
 * then adding values to the stack from the bottom up. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.iterativeInOrderDFT = (root) => {
    let stack = [];
    let result = [];
    let pointerNode = root;

    while (stack.length !== 0 || pointerNode !== null) {
        if (pointerNode !== null) {
            stack.push(pointerNode);
            pointerNode = pointerNode.left;
        } else {
            pointerNode = stack.pop();
            result.push(pointerNode.val);
            pointerNode = pointerNode.right;
        }
    };

    return result;

};

/**
 * Recursive In-Order Depth First Traverse (DFT) 
 * Traversing as far as possible along each branch before backtracking,
 * then adding values to the stack from the bottom up. 
 * Implemented with a stack.
 * @param { Node } root
 * @return { number [] }
 */
exports.recursiveInOrderDFT = (root) => {
    let stack = [];
    let result = [];
    let pointerNode = root;

    const DFT = () => {
        if (stack.length !== 0 || pointerNode !== null) {
            if (pointerNode !== null) {
                stack.push(pointerNode);
                pointerNode = pointerNode.left;
                DFT()
            } else {
                pointerNode = stack.pop();
                result.push(pointerNode.val);
                pointerNode = pointerNode.right;
                DFT()
            }
        }
        return;
    }

    DFT();
    return result;

};


