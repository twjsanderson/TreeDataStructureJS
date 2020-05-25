/**
 * Breadth First Search (BFS) 
 * Searches all neighbour nodes before moving on to nodes at the next depth. 
 * Returns boolen if value is found.
 * Implemented with a queue.
 * @param {Node} root
 * @param { number } value
 * @return { boolean } 
 */
exports.iterativeBFS = (root, value) => {
  let queue = [root];
  
  while (queue.length) {
    let curr = queue.shift()
    if (curr.val === value) return true;

    if (curr.left){
      queue.push(curr.left)
    }

    if (curr.right){
      queue.push(curr.right)
    }
  
  }
  
  return false;
};
  
  /**
   * Breadth First Search (BFS) 
   * Searches all neighbour nodes before moving on to nodes at the next depth. 
   * Returns boolen if value is found.
   * Implemented with a queue.
   * @param {Node} root
   * @param { number } value
   * @return { boolean } 
   */
  exports.recursiveBFS = (root, value) => {
    let queue = [root];
    let result = false;
    
    const BFT = () => {
  
      if (!queue.length) return;
  
      let curr = queue.shift()
      if (curr.val === value) {
          result = true
      }
  
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