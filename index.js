const { binaryTree } = require("./constants");

const { 
  iterativePreOrderDFT, 
  recursivePreOrderDFT
} = require("./depthFirstTraverse/preOrder");
const { 
  iterativePostOrderDFT, 
  recursivePostOrderDFT
} = require("./depthFirstTraverse/postOrder");
const { 
  iterativeInOrderDFT, 
  recursiveInOrderDFT
} = require("./depthFirstTraverse/inOrder");

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


  // // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  // console.log('Iterative PostOrder DFT: ', iterativePostOrderDFT(binaryTree))
  // console.log('--------------------------------------')

  // // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  // console.log('Recursive PostOrder DFT: ', recursivePostOrderDFT(binaryTree))
  // console.log('--------------------------------------')

  // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Iterative InOrder DFT: ', iterativeInOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Recursive InOrder DFT: ', recursiveInOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  // console.log('Iterative PreOrder DFT: ', iterativePreOrderDFT(binaryTree))
  // console.log('--------------------------------------')

  // // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  // console.log('Recursive PreOrder DFT: ', recursivePreOrderDFT(binaryTree))
  // console.log('--------------------------------------')

  // [13, 37, 8, 42, 24, 11,  6, 55, 29, 16, 12]
  // console.log('Iterative BFS: ', iterativeBFS(binaryTree))
  // console.log('--------------------------------------')