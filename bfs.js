/** 
 * The Breadth First Traverse of a binary tree involves moving to 
 * every node at the same depth before moving on to the nodes at 
 * the next depth. 
 */


/**
 * Breadth First Search (BFS) 
 * Traverses all neighbour nodes before moving on to nodes at the next depth. 
 * Implemented with a queue.
 * @param {Node} root
 * @return {number[]}
 */
exports.iterativeBFS = (root) => {
    let queue = [root];
    let res = [];
    
    while (queue.length) {
      let curr = queue.shift()
      res.push(curr.val)

      if (curr.left){
        queue.push(curr.left)
      }

      if (curr.right){
        queue.push(curr.right)
      }
    
    }
    
    return res;
  }