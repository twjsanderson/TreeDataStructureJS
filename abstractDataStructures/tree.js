/**
 * Tree Structure: A way of representing the hierarchical nature 
 * of a structure in a graphical form (an abstract data type or ADT). 
 */

/**
 * Common visual representation of a Tree Structure
 *
 *                    13
 *                /        \
 *               8          37
 *            /  |  \     /    \
 *           6   7   11  24     42
 *                      /  \      \
 *                     29  55      80
 */

/**
 * Binary Tree: A rooted tree data structure where each node 
 * has at most two children (left and right child)
 */

/**
 * Common visual representation of a Binary Tree
 *
 *                    13
 *                 /      \
 *               8         37
 *             /   \      /   \
 *            6    11    24    42
 *                   \   / \     \
 *                   12 16  29    55
 */


/**
 * Unlike a linear data structure like an array or linked list, 
 * you can traverse a tree with either a Depth First or Breadth 
 * First traverse.
 */

/**
 * In JavaScript you can represent a binary tree using objects and arrays.
 * Here are 3 implementations of these structures that are commonly used.
 * 
 * * ---------------------------------------------------------------------------
 * 
 * * Array Form - Populated with values using a Breadth First Traverse
 * 
 * [13, 8, 37, 6, 11, 24, 42, 12, 16, 29, 55]
 * 
 * ---------------------------------------------------------------------------
 * 
 * * Single Node in Object Form - A value and no more than 2 child nodes with the same form
 * 
 * {
 *      val: 100,
 *      left: { ...},
 *      right: { ...}
 * }
 * 
 * * ---------------------------------------------------------------------------
 * 
 * * Object Form
 * 
 *   { 
 *       val: 13,
 *       left: {
 *           val: 8,
 *           left: {
 *               val: 6,
 *               left: null,
 *               right: null
 *           },
 *           right: {
 *               val: 11,
 *               left: null,
 *               right: {
 *                   val: 12,
 *                   left: null, 
 *                   right: null
 *               }
 *           }
 *       },
 *       right: {
 *           val: 37,
 *           left: {
 *               val: 24,
 *               left: {
 *                   val: 16,
 *                   left: null,
 *                   right: null
 *               },
 *               right: {
 *                   val: 29,
 *                   left: null, 
 *                   right: null
 *               }
 *           },
 *           right: {
 *               val: 42,
 *               left: null,
 *               right: {
 *                   val: 55,
 *                   left: null,
 *                   right: null
 *               }
 *           }
 *       }
 *   }
 * 
 * ---------------------------------------------------------------------------
 * 
 * * Single Node in Array Form - A value and an array of children
 * 
 * {
 *      val: 100,
 *      children: [ ...]
 * }
 * 
 * * ---------------------------------------------------------------------------
 * 
 * * Object/Array Form - All child nodes are stored in arrays 
 * 
 *  {
 *      val: 13,
 *      children: [ 
 *          { 
 *              val: 8, 
 *              children: [
 *                  {
 *                      val: 6,
 *                      children: []
 *                  },
 *                  {
 *                      val: 11,
 *                      children: [
 *                          {
 *                              val: null,
 *                              children: []
 *                          },
 *                          {   
 *                              val: 12,
 *                              children: []
 *                          }
 *                      ]
 *                  }
 *              ] 
 *          },
 *          { 
 *              val: 37, 
 *              children: [
 *                  {
 *                      val: 24
 *                      children: [
 *                          {
 *                              val: 16,
 *                              children: []
 *                          },
 *                          {   
 *                              val: 29,
 *                              children: []
 *                          }
 *                      ]
 *                  },
 *                  {
 *                      val: 42,
 *                      children: [
 *                          {
 *                              val: null,
 *                              children: []
 *                          },
 *                          {   
 *                              val: 55,
 *                              children: []
 *                          }
 *                      ]
 *                  }
 *              ] 
 *          }
 *      ]    
 *  }
 * 
 */