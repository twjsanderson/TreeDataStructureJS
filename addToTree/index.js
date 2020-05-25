/**
 * Iterative In Order Depth First Addition (DFA) 
 * Using an iterative In Order DFS algorithm, we
 * add/insert a new number to a binary tree. 
 * Implemented with a stack.
 * @param {Node} root
 * @param { number } value
 * @return { number [] } 
 */
exports.iterativeInOrdeDFAddition = (root, value) => {
    let stack = [];
    let result = [];
    let pointerNode = root;

    while (stack.length !== 0 || pointerNode !== null) {
        if (pointerNode !== null) {
            stack.push(pointerNode);
            pointerNode = pointerNode.left;
        } else {
            pointerNode = stack.pop();
            
            if (!result.includes(value)) {
                if (pointerNode.val > value) {
                    if (pointerNode.left === null) {
                        result.push(value);
                    } else if (value > pointerNode.left.val) {
                        result.push(value);
                    }
                }
            }
            result.push(pointerNode.val);
            pointerNode = pointerNode.right;
        }
    };

    if (!result.includes(value) && value > result[result.length - 1]) {
        result.push(value);
    }
    return result;
  };