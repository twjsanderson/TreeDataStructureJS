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

const { 
  iterativeBFT,
  recursiveBFT
} = require("./breadthFirstTraverse/basicTraverse");

const {
  iterativeInOrderDFS
} = require("./depthFirstSeach/dfs");

const { binaryTree } = require("./constants");

// Binary Tree Visualization
//                    13
//                 /      \
//               8         37
//             /   \      /   \
//            6    11    24    42
//                   \   / \     \
//                   12 16  29    55
//     

  console.log('Initial Binary Tree in Object form: ', binaryTree)
  console.log('--------------------------------------')

  // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  console.log('Iterative PostOrder DFT: ', iterativePostOrderDFT(binaryTree))

  // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  console.log('Recursive PostOrder DFT: ', recursivePostOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Iterative InOrder DFT: ', iterativeInOrderDFT(binaryTree))

  // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Recursive InOrder DFT: ', recursiveInOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Iterative PreOrder DFT: ', iterativePreOrderDFT(binaryTree))

  // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Recursive PreOrder DFT: ', recursivePreOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // [13, 37, 8, 42, 24, 11, 6, 55, 29, 16, 12]
  console.log('Iterative BFT: ', iterativeBFT(binaryTree))

  // [13, 37, 8, 42, 24, 11, 6, 55, 29, 16, 12]
  console.log('Recursive BFT: ', recursiveBFT(binaryTree))
  console.log('--------------------------------------')
  console.log('--------------------------------------')

  console.log('Iterative InOrder DFS: ', iterativeInOrderDFS(binaryTree, 6));
