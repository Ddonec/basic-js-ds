const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.rootNode = null;
   }

   root() {
      return this.rootNode;
   }

   add(data) {
      this.rootNode = this._addNode(this.rootNode, data);
   }

   _addNode(node, data) {
      if (node === null) {
         return new Node(data);
      }

      if (data < node.data) {
         node.left = this._addNode(node.left, data);
      } else if (data > node.data) {
         node.right = this._addNode(node.right, data);
      }

      return node;
   }

   has(data) {
      return this._hasNode(this.rootNode, data);
   }

   _hasNode(node, data) {
      if (node === null) {
         return false;
      }

      if (data === node.data) {
         return true;
      } else if (data < node.data) {
         return this._hasNode(node.left, data);
      } else {
         return this._hasNode(node.right, data);
      }
   }

   find(data) {
      return this._findNode(this.rootNode, data);
   }

   _findNode(node, data) {
      if (node === null) {
         return null;
      }

      if (data === node.data) {
         return node;
      } else if (data < node.data) {
         return this._findNode(node.left, data);
      } else {
         return this._findNode(node.right, data);
      }
   }

   remove(data) {
      this.rootNode = this._removeNode(this.rootNode, data);
   }

   _removeNode(node, data) {
      if (node === null) {
         return null;
      }

      if (data === node.data) {
         if (node.left === null && node.right === null) {
            return null;
         }

         if (node.left === null) {
            return node.right;
         }

         if (node.right === null) {
            return node.left;
         }

         const successor = this._findMin(node.right);
         node.data = successor.data;
         node.right = this._removeNode(node.right, successor.data);
         return node;
      } else if (data < node.data) {
         node.left = this._removeNode(node.left, data);
      } else {
         node.right = this._removeNode(node.right, data);
      }

      return node;
   }

   _findMin(node) {
      while (node.left !== null) {
         node = node.left;
      }
      return node;
   }

   min() {
      const minNode = this._findMin(this.rootNode);
      return minNode ? minNode.data : null;
   }

   _findMax(node) {
      while (node.right !== null) {
         node = node.right;
      }
      return node;
   }

   max() {
      const maxNode = this._findMax(this.rootNode);
      return maxNode ? maxNode.data : null;
   }
}

module.exports = {
   BinarySearchTree,
};
