// Traverse Functions
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
} = require("./breadthFirstTraverse/traverse");

// Search Functions
const {
  iterativeInOrderDFS,
  recursiveInOrderDFS
} = require("./depthFirstSeach/inOrder");

const {
  iterativePostOrderDFS,
  recursivePostOrderDFS
} = require("./depthFirstSeach/postOrder");

const {
  iterativePreOrderDFS,
  recursivePreOrderDFS
} = require("./depthFirstSeach/preOrder");

const {
  iterativeBFS,
  recursiveBFS
} = require("./breadthFirstSearch/search");

// Add To binary tree
const {
  iterativeInOrdeDFAddition
} = require("./addToTree/index");

// Test Data
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
  console.log('TRAVERSES')

  // result = [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  console.log('Iterative PostOrder DFT: ', iterativePostOrderDFT(binaryTree))

  // result = [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
  console.log('Recursive PostOrder DFT: ', recursivePostOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // result = [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Iterative InOrder DFT: ', iterativeInOrderDFT(binaryTree))

  result = [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
  console.log('Recursive InOrder DFT: ', recursiveInOrderDFT(binaryTree))
  console.log('--------------------------------------')

  // result = [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Iterative PreOrder DFT: ', iterativePreOrderDFT(binaryTree))

  // result = [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
  console.log('Recursive PreOrder DFT: ', recursivePreOrderDFT(binaryTree))
  console.log('--------------------------------------')

  result = [13, 37, 8, 42, 24, 11, 6, 55, 29, 16, 12]
  console.log('Iterative BFT: ', iterativeBFT(binaryTree))

  // result = [13, 37, 8, 42, 24, 11, 6, 55, 29, 16, 12]
  console.log('Recursive BFT: ', recursiveBFT(binaryTree))
  console.log('--------------------------------------')
  console.log('SEARCHES')

  // param = 6, result = true
  console.log('Iterative InOrder DFS: ', iterativeInOrderDFS(binaryTree, 6));
  console.log('Recursive InOrder DFS: ', recursiveInOrderDFS(binaryTree, 6));
  console.log('--------------------------------------')

  // param = 6, result = true
  console.log('Iterative Post Order DFS: ', iterativePostOrderDFS(binaryTree, 6));
  console.log('Recursive Post Order DFS: ', recursivePostOrderDFS(binaryTree, 6));
  console.log('--------------------------------------')

  // param = 6, result = true
  console.log('Iterative Pre Order DFS: ', iterativePreOrderDFS(binaryTree, 6));
  console.log('Recursive Pre Order DFS: ', recursivePreOrderDFS(binaryTree, 6));
  console.log('--------------------------------------')

  // param = 6, result = true
  console.log('Iterative BFS: ', iterativeBFS(binaryTree, 6));
  console.log('Recursive BFS: ', recursiveBFS(binaryTree, 6));
  console.log('--------------------------------------')


  // [6,  8, 11, 12, 13, 15, 16, 24, 29, 37, 42, 55 ]
  console.log('Iterative In Order Depth First Element Addition: ', iterativeInOrdeDFAddition(binaryTree, 15))
  console.log('--------------------------------------')