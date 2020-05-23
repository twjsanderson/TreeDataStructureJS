/**
 * The In-Order Depth First Traverse logs all node values 
 * 
 * In these implementations we simply store the values in an array and
 * return the final collection once the entire tree has been traversed. 
 * 
 */

/**
 * Iterative In-Order Depth First Traverse (DFT) 
 *  
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
 * Traversing as far as possible along each branch before backtracking. 
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


