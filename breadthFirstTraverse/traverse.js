/** 
 * The Breadth First Traverse of a binary tree involves moving to 
 * every node at the same depth before moving on to the nodes at 
 * the next depth. 
 */


/**
 * Breadth First Traverse (BFT) 
 * Traverses all neighbour nodes before moving on to nodes at the next depth. 
 * Implemented with a queue.
 * @param {Node} root
 * @return {number[]}
 */
exports.iterativeBFT = (root) => {
  let queue = [root];
  let result = [];
  
  while (queue.length) {
    let curr = queue.shift()
    result.push(curr.val)

    if (curr.left){
      queue.push(curr.left)
    }

    if (curr.right){
      queue.push(curr.right)
    }
  
  }
  
  return result;
};

/**
 * Breadth First Traverse (BFT) 
 * Traverses all neighbour nodes before moving on to nodes at the next depth. 
 * Implemented with a queue.
 * @param {Node} root
 * @return {number[]}
 */
exports.recursiveBFT = (root) => {
  let queue = [root];
  let result = [];
  
  const BFT = () => {

    if (!queue.length) return;

    let curr = queue.shift()
    result.push(curr.val)

    if (curr.left){
      queue.push(curr.left)
      BFT()
    }

    if (curr.right){
      queue.push(curr.right)
      BFT()
    }
  
  };

  BFT();
  return result;
};