const { binaryTree } = require("./constants");

const { iterativeDFT, recursiveDFT } = require("./dfs");
const { iterativeBFS } = require("./bfs");

// Binary Tree
//                    13
//                 /      \
//               8         37
//             /   \      /   \
//            6    11    24    42
//                   \   / \     \
//                   12 16  29    55
//     

// In Order Traversal Result
// [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]

// Pre Order Traversal Result
// [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]

// Post Order Traversal Result
// [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]

/**
 * Post Order Function
 * Returns all node values from the outside 
 * of the leaves towards the root
 * Moves from the left outer leaves to the 
 * right and toward the roots
 * 
 * Often used to delete a tree
 * 
 * 1. Traverse the left subtree
 * 2. Traverse the right subtree
 * 3. Visit the root of the tree
 * 
 * @param {Node} root
 * @return {number[]}
 */
const postOrder = (root) => {
  let stack = [root],
    result = [];

  // If root is empty
  if (root === null) return;

  while (stack.length !== 0) {
    let pointer = stack.pop();
    result.unshift(pointer.val);

    if (pointer.left) {
        stack.push(pointer.left);
    }

    if (pointer.right) {
        stack.push(pointer.right);
    }
  }
  return result;
};

/**
 * Pre Order Function
 * Returns all node values from the root 
 * outward towards the leaves
 * Moves from left to right through
 * the leaves
 * 
 * Often used to create a copy of the tree.
 * 
 * 1. Visit the root of the tree
 * 2. Traverse the left subtree
 * 3. Traverse the right subtree
 * 
 * @param {Node} root
 * @return {number[]}
 */
const preOrder = (root) => {
  let stack = [root];
  let result = [];

  if (root == null) return;

  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node.val);

    if (node.right) {
        stack.push(node.right);
    }
    
    if (node.left) {
        stack.push(node.left);
    }
  }

  return result;
};

/**
 * In Order Function
 * 
 * 
 *
 * 
 * 
 * 
 *
 *
 * 
 * @param {Node} root
 * @return {number[]}
 */
const inOrder = (root) => {
  let result = [],
    stack = [],
    pointerNode = root;

  if (root === null) return;

  while (stack.length !== 0 || pointerNode !== null) {
    if (pointerNode !== null) {
      stack.push(pointerNode);
      pointerNode = pointerNode.left;
    } else {
      pointerNode = stack.pop();
      result.push(pointerNode.val);
      pointerNode = pointerNode.right;
    }
  }

  return result;
};



  // Initial tree
  //                    13
  //                 /      \
  //               8         37
  //             /   \      /   \
  //            6    11    24    42
  //                   \   / \     \
  //                   12 16  29    55

  // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  // console.log('postOrder: ', postOrder(tree2))
  // console.log('--------------------------------------')

  // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  // console.log('preOrder: ', preOrder(tree2))
  // console.log('--------------------------------------')

  // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('inOrder: ', inOrder(binaryTree))
  console.log('--------------------------------------')

  // [13, 37, 8, 42, 24, 11,  6, 55, 29, 16, 12]
  console.log('Iterative BFS: ', iterativeBFS(binaryTree))
  console.log('--------------------------------------')

  // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Iterative DFT: ', iterativeDFT(binaryTree))
  console.log('--------------------------------------')

  // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Recursive DFT: ', recursiveDFT(binaryTree))
  console.log('--------------------------------------')
